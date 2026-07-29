-- Key votes and attendance by name instead of by device.
--
-- Votes were one row per (meeting, question, device). That meant two members
-- sharing one phone overwrote each other — the second person's vote silently
-- replaced the first — while one member using a phone and a laptop was counted
-- twice. Neither is acceptable for counting a vote.
--
-- Both now key on the member's name, normalised to lowercase and trimmed, which
-- matches how the app has always described itself: it records votes by name.
-- Vote from anywhere, you get your one slot.
--
-- Safe to run once against an existing database. Existing rows are migrated,
-- and duplicates left over from the old scheme are collapsed keeping the most
-- recent vote.

begin;

-- ---------------------------------------------------------------------------
-- votes
-- ---------------------------------------------------------------------------

alter table public.votes add column if not exists voter_key text;

update public.votes set voter_key = lower(trim(display_name));

-- Anything with no usable name cannot be attributed to anyone; drop it rather
-- than collapse every nameless vote into one shared slot.
delete from public.votes where coalesce(voter_key, '') = '';

-- Collapse the old per-device duplicates: same person, same question, more than
-- one row. Keep the newest, since that is the vote they last chose.
delete from public.votes a
using public.votes b
where a.meeting_id = b.meeting_id
  and a.item_id    = b.item_id
  and a.voter_key  = b.voter_key
  and (a.updated_at < b.updated_at
       or (a.updated_at = b.updated_at and a.device_id > b.device_id));

alter table public.votes alter column voter_key set not null;
alter table public.votes drop constraint votes_pkey;
alter table public.votes add primary key (meeting_id, item_id, voter_key);

-- device_id stays as a record of where a vote came from, but no longer decides
-- who it belongs to.
alter table public.votes alter column device_id drop not null;

-- ---------------------------------------------------------------------------
-- attendees
-- ---------------------------------------------------------------------------

alter table public.attendees add column if not exists voter_key text;

update public.attendees set voter_key = lower(trim(display_name));

delete from public.attendees where coalesce(voter_key, '') = '';

delete from public.attendees a
using public.attendees b
where a.meeting_id = b.meeting_id
  and a.voter_key  = b.voter_key
  and (a.joined_at > b.joined_at
       or (a.joined_at = b.joined_at and a.device_id > b.device_id));

alter table public.attendees alter column voter_key set not null;
alter table public.attendees drop constraint attendees_pkey;
alter table public.attendees add primary key (meeting_id, voter_key);
alter table public.attendees alter column device_id drop not null;

-- ---------------------------------------------------------------------------
-- Keep voter_key honest
--
-- Derived in the database rather than trusted from the browser, so the key can
-- never drift from the name shown beside the vote — including for any client
-- still running the previous version of the app.
-- ---------------------------------------------------------------------------

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

drop trigger if exists votes_set_voter_key on public.votes;
create trigger votes_set_voter_key
    before insert or update on public.votes
    for each row execute function public.set_voter_key();

drop trigger if exists attendees_set_voter_key on public.attendees;
create trigger attendees_set_voter_key
    before insert or update on public.attendees
    for each row execute function public.set_voter_key();

commit;
