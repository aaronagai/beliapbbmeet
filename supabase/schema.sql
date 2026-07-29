-- Belia PBB Meeting Space — shared database schema
--
-- Run this once against a fresh Supabase project (SQL Editor → paste → Run).
-- Safe to re-run: it drops and recreates everything.
--
-- Identity model: members type their name when they join a meeting. There is no
-- login. Each browser gets a random device_id which nobody sees or types; it
-- exists only so one phone counts as one vote per question. Names are therefore
-- self-declared and NOT verified — this is an honour-system roster, by design.
--
-- The one thing that IS enforced server-side: only someone holding the admin
-- passphrase can create, edit, or delete meetings, and votes/comments cannot be
-- written to a closed meeting.

-- ---------------------------------------------------------------------------
-- Reset
-- ---------------------------------------------------------------------------

drop function if exists public.admin_save_meeting(text, jsonb);
drop function if exists public.admin_delete_meeting(text, text);
drop function if exists public.admin_check(text);
drop function if exists public.set_voter_key() cascade;
drop function if exists public.set_admin_passphrase(text);

drop table if exists public.comments;
drop table if exists public.votes;
drop table if exists public.attendees;
drop table if exists public.agenda_items;
drop table if exists public.meetings;
drop table if exists public.app_config;

create extension if not exists pgcrypto with schema extensions;

-- ---------------------------------------------------------------------------
-- Tables
-- ---------------------------------------------------------------------------

-- Bilingual text is stored as {"en": "...", "bm": "..."} to match the app.
create table public.meetings (
    id          text primary key,
    status      text not null default 'active' check (status in ('active', 'closed')),
    title       jsonb not null default '{}'::jsonb,
    summary     jsonb not null default '{}'::jsonb,
    start_date  jsonb,
    end_date    jsonb,
    chair       text not null default '',
    minutes_by  text not null default '',
    minutes     jsonb,
    created_at  timestamptz not null default now(),
    updated_at  timestamptz not null default now()
);

-- Newest first, matching how the app used to unshift new meetings to the top.
create index meetings_created_at_idx on public.meetings (created_at desc);

create table public.agenda_items (
    meeting_id text not null references public.meetings (id) on delete cascade,
    id         text not null,
    question   jsonb not null default '{}'::jsonb,
    position   int  not null default 0,
    primary key (meeting_id, id)
);

create index agenda_items_meeting_idx on public.agenda_items (meeting_id, position);

-- One row per person per question, keyed on their name rather than their device.
-- Keying on the device meant two members sharing a phone overwrote each other,
-- and one member on a phone and a laptop counted twice.
create table public.votes (
    meeting_id   text not null,
    item_id      text not null,
    voter_key    text not null,
    device_id    text,
    choice       text not null check (choice in ('yes', 'no', 'abstain')),
    display_name text not null default '',
    updated_at   timestamptz not null default now(),
    primary key (meeting_id, item_id, voter_key),
    foreign key (meeting_id, item_id)
        references public.agenda_items (meeting_id, id) on delete cascade
);

create table public.comments (
    id           uuid primary key default gen_random_uuid(),
    meeting_id   text not null,
    item_id      text not null,
    device_id    text not null default '',
    display_name text not null default '',
    body         text not null check (length(trim(body)) > 0),
    created_at   timestamptz not null default now(),
    foreign key (meeting_id, item_id)
        references public.agenda_items (meeting_id, id) on delete cascade
);

create index comments_item_idx on public.comments (meeting_id, item_id, created_at);

create table public.attendees (
    meeting_id   text not null references public.meetings (id) on delete cascade,
    voter_key    text not null,
    device_id    text,
    display_name text not null,
    joined_at    timestamptz not null default now(),
    primary key (meeting_id, voter_key)
);

-- voter_key is derived here rather than trusted from the browser, so it can
-- never drift from the name shown beside the vote.
create or replace function public.set_voter_key()
returns trigger
language plpgsql
as $$
begin
    new.voter_key := lower(trim(coalesce(new.display_name, '')));
    if new.voter_key = '' then
        raise exception 'A name is required';
    end if;
    return new;
end;
$$;

create trigger votes_set_voter_key
    before insert or update on public.votes
    for each row execute function public.set_voter_key();

create trigger attendees_set_voter_key
    before insert or update on public.attendees
    for each row execute function public.set_voter_key();

-- Holds the admin passphrase hash. Never readable by the app.
create table public.app_config (
    key   text primary key,
    value text not null
);

-- ---------------------------------------------------------------------------
-- Row Level Security
--
-- Everything is denied unless a policy below allows it. There is no login, so
-- every visitor arrives as the `anon` role.
-- ---------------------------------------------------------------------------

alter table public.meetings     enable row level security;
alter table public.agenda_items enable row level security;
alter table public.votes        enable row level security;
alter table public.comments     enable row level security;
alter table public.attendees    enable row level security;
alter table public.app_config   enable row level security;

-- app_config gets NO policies at all — the passphrase hash is unreachable from
-- the browser. Only the security-definer functions below can see it.

-- Meetings and agenda are readable by anyone, writable by nobody directly.
-- All writes go through admin_save_meeting / admin_delete_meeting.
create policy "meetings readable" on public.meetings
    for select to anon, authenticated using (true);

create policy "agenda readable" on public.agenda_items
    for select to anon, authenticated using (true);

-- Helper: is this meeting still open for participation?
create or replace function public.meeting_is_active(p_meeting_id text)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
    select exists (
        select 1 from public.meetings
        where id = p_meeting_id and status = 'active'
    );
$$;

-- Votes: anyone may read; write only while the meeting is active.
create policy "votes readable" on public.votes
    for select to anon, authenticated using (true);

create policy "votes insertable while active" on public.votes
    for insert to anon, authenticated
    with check (public.meeting_is_active(meeting_id));

create policy "votes updatable while active" on public.votes
    for update to anon, authenticated
    using (public.meeting_is_active(meeting_id))
    with check (public.meeting_is_active(meeting_id));

-- Tapping your current choice again withdraws the vote.
create policy "votes deletable while active" on public.votes
    for delete to anon, authenticated
    using (public.meeting_is_active(meeting_id));

-- Comments: readable always, addable while active, never editable or deletable.
create policy "comments readable" on public.comments
    for select to anon, authenticated using (true);

create policy "comments insertable while active" on public.comments
    for insert to anon, authenticated
    with check (public.meeting_is_active(meeting_id));

-- Attendees: joining a meeting, and correcting the name you joined under.
create policy "attendees readable" on public.attendees
    for select to anon, authenticated using (true);

create policy "attendees insertable" on public.attendees
    for insert to anon, authenticated with check (true);

create policy "attendees updatable" on public.attendees
    for update to anon, authenticated using (true) with check (true);

-- ---------------------------------------------------------------------------
-- Admin
--
-- The passphrase is stored only as a bcrypt hash. These functions are
-- security definer, so they can read app_config even though the browser cannot.
-- ---------------------------------------------------------------------------

-- Set or change the admin passphrase. Run this yourself from the SQL Editor:
--     select public.set_admin_passphrase('your-passphrase-here');
create or replace function public.set_admin_passphrase(p_passphrase text)
returns void
language plpgsql
security definer
set search_path = public, extensions
as $$
begin
    if length(coalesce(p_passphrase, '')) < 8 then
        raise exception 'Passphrase must be at least 8 characters';
    end if;

    insert into public.app_config (key, value)
    values ('admin_passphrase', extensions.crypt(p_passphrase, extensions.gen_salt('bf')))
    on conflict (key) do update set value = excluded.value;
end;
$$;

-- Deliberately not granted to anon: only you, from the SQL Editor.
revoke all on function public.set_admin_passphrase(text) from public, anon, authenticated;

create or replace function public.admin_check(p_passphrase text)
returns boolean
language sql
stable
security definer
set search_path = public, extensions
as $$
    select exists (
        select 1 from public.app_config
        where key = 'admin_passphrase'
          and value = extensions.crypt(coalesce(p_passphrase, ''), value)
    );
$$;

-- Create or replace a meeting, agenda and all. Rejects a wrong passphrase.
create or replace function public.admin_save_meeting(p_passphrase text, p_meeting jsonb)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
    v_id     text;
    v_item   jsonb;
    v_index  int := 0;
    v_result jsonb;
begin
    if not public.admin_check(p_passphrase) then
        raise exception 'Wrong admin passphrase';
    end if;

    v_id := p_meeting ->> 'id';
    if v_id is null or length(trim(v_id)) = 0 then
        raise exception 'Meeting id is required';
    end if;

    insert into public.meetings (
        id, status, title, summary, start_date, end_date, chair, minutes_by, minutes
    )
    values (
        v_id,
        coalesce(p_meeting ->> 'status', 'active'),
        coalesce(p_meeting -> 'title', '{}'::jsonb),
        coalesce(p_meeting -> 'summary', '{}'::jsonb),
        p_meeting -> 'start_date',
        p_meeting -> 'end_date',
        coalesce(p_meeting ->> 'chair', ''),
        coalesce(p_meeting ->> 'minutes_by', ''),
        p_meeting -> 'minutes'
    )
    on conflict (id) do update set
        status     = excluded.status,
        title      = excluded.title,
        summary    = excluded.summary,
        start_date = excluded.start_date,
        end_date   = excluded.end_date,
        chair      = excluded.chair,
        minutes_by = excluded.minutes_by,
        minutes    = excluded.minutes,
        updated_at = now();

    -- Rewrite the agenda. Questions the admin removed cascade their votes and
    -- comments away with them, which is the intended behaviour: a deleted
    -- question has no results.
    delete from public.agenda_items where meeting_id = v_id;

    for v_item in select * from jsonb_array_elements(coalesce(p_meeting -> 'items', '[]'::jsonb))
    loop
        insert into public.agenda_items (meeting_id, id, question, position)
        values (
            v_id,
            coalesce(v_item ->> 'id', 'q' || (v_index + 1)::text),
            coalesce(v_item -> 'question', '{}'::jsonb),
            v_index
        );
        v_index := v_index + 1;
    end loop;

    select to_jsonb(m) into v_result from public.meetings m where m.id = v_id;
    return v_result;
end;
$$;

create or replace function public.admin_delete_meeting(p_passphrase text, p_id text)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
    if not public.admin_check(p_passphrase) then
        raise exception 'Wrong admin passphrase';
    end if;

    delete from public.meetings where id = p_id;
end;
$$;

grant execute on function public.admin_check(text)                to anon, authenticated;
grant execute on function public.admin_save_meeting(text, jsonb)  to anon, authenticated;
grant execute on function public.admin_delete_meeting(text, text) to anon, authenticated;

-- ---------------------------------------------------------------------------
-- Seed: the three example meetings the app shipped with.
-- Delete them from the admin page once you have real ones.
-- ---------------------------------------------------------------------------

insert into public.meetings (id, status, title, summary, start_date, end_date, chair, minutes_by, minutes, created_at)
values
    ('kickoff-2026', 'active',
     '{"en":"Belia PBB kickoff","bm":"Kickoff Belia PBB"}',
     '{"en":"First async meeting for Belia PBB. Align on how we use this space and what we want to focus on next.","bm":"Mesyuarat tidak segerak pertama untuk Belia PBB. Selaraskan cara kita guna ruang ini dan fokus seterusnya."}',
     '{"en":"Jul 28, 2026","bm":"28 Jul 2026"}',
     '{"en":"Aug 4, 2026","bm":"4 Ogos 2026"}',
     'Aina Rahman', 'Daniel Ng', null, now() - interval '1 minute'),

    ('programme-ideas', 'active',
     '{"en":"Programme ideas for Q3","bm":"Idea program untuk Suku 3"}',
     '{"en":"Share and vote on early programme ideas for Belia PBB members. Add notes with context before voting.","bm":"Kongsi dan undi idea awal program untuk ahli Belia PBB. Tambah nota dengan konteks sebelum mengundi."}',
     '{"en":"Jul 28, 2026","bm":"28 Jul 2026"}',
     '{"en":"Aug 4, 2026","bm":"4 Ogos 2026"}',
     '', '', null, now() - interval '2 minutes'),

    ('naming-space', 'closed',
     '{"en":"Naming this meeting space","bm":"Penamaan ruang mesyuarat ini"}',
     '{"en":"Closed example meeting. Votes are locked.","bm":"Contoh mesyuarat ditutup. Undian dikunci."}',
     '{"en":"Jul 14, 2026","bm":"14 Jul 2026"}',
     '{"en":"Jul 20, 2026","bm":"20 Jul 2026"}',
     'Sofia Tan', 'Aina Rahman',
     '{"en":"The meeting agreed to keep the name “Belia PBB Meeting Space” for now. Two members voted Yes and one abstained. Aina noted that the name can be revisited later if needed.","bm":"Mesyuarat bersetuju mengekalkan nama “Ruang Mesyuarat Belia PBB” buat masa ini. Dua ahli mengundi Ya dan seorang abstain. Aina mencatat bahawa nama boleh dinilai semula kemudian jika perlu."}',
     now() - interval '3 minutes');

insert into public.agenda_items (meeting_id, id, question, position)
values
    ('kickoff-2026', 'use-async',
     '{"en":"Should we keep this async meeting space as our default way to decide small matters?","bm":"Patutkah kita kekalkan ruang mesyuarat tidak segerak ini sebagai cara lalai untuk keputusan kecil?"}', 0),
    ('kickoff-2026', 'monthly-checkin',
     '{"en":"Should we run one async check-in every month?","bm":"Patutkah kita adakan satu check-in tidak segerak setiap bulan?"}', 1),

    ('programme-ideas', 'community-outreach',
     '{"en":"Prioritise a community outreach day this quarter?","bm":"Utamakan hari jangkauan komuniti pada suku ini?"}', 0),
    ('programme-ideas', 'skills-session',
     '{"en":"Host a short skills / leadership session for members?","bm":"Anjur sesi kemahiran / kepimpinan ringkas untuk ahli?"}', 1),
    ('programme-ideas', 'town-dialogue',
     '{"en":"Organise a youth dialogue with local leaders?","bm":"Anjur dialog belia dengan pemimpin tempatan?"}', 2),

    ('naming-space', 'keep-name',
     '{"en":"Keep the name “Belia PBB Meeting Space” for now?","bm":"Kekalkan nama “Ruang Mesyuarat Belia PBB” buat masa ini?"}', 0);

insert into public.votes (meeting_id, item_id, voter_key, device_id, choice, display_name)
values
    ('naming-space', 'keep-name', 'aina',   'seed-demo-1', 'yes',     'Aina'),
    ('naming-space', 'keep-name', 'daniel', 'seed-demo-2', 'yes',     'Daniel'),
    ('naming-space', 'keep-name', 'sofia',  'seed-demo-3', 'abstain', 'Sofia');

insert into public.comments (meeting_id, item_id, device_id, display_name, body)
values
    ('naming-space', 'keep-name', 'seed-demo-1', 'Aina',
     'Works for now. We can rename later if needed.');

insert into public.attendees (meeting_id, voter_key, device_id, display_name)
values
    ('naming-space', 'aina',   'seed-demo-1', 'Aina'),
    ('naming-space', 'daniel', 'seed-demo-2', 'Daniel'),
    ('naming-space', 'sofia',  'seed-demo-3', 'Sofia');
