// Meetings, votes and comments live in the shared database. What stays on the
// device is only what is genuinely per-device: language, theme, the name you
// last typed, and the anonymous device id used for one-vote-per-phone.
const LANG_KEY = "belia-pbb-lang";
const NAME_KEY = "belia-pbb-member-name";
const THEME_KEY = "belia-pbb-theme";
const DEVICE_KEY = "belia-pbb-voter-id";
const ADMIN_PASS_KEY = "belia-pbb-admin-pass";
const ADMIN_NOTICE_KEY = "belia-pbb-admin-notice";

const I18N = {
    en: {
        title: "Belia PBB Meeting Space",
        pageTitle: "Belia PBB Meeting Space",
        updated: (date) => `Today's date • ${date}`,
        intro1: "One place for every discussion.",
        intro2:
            "A shared space for Belia PBB to discuss matters asynchronously. Raise agenda items, share updates, gather feedback, and reach decisions without scheduling a meeting.",
        activeMeetings: "Active meetings",
        closedMeetings: "Closed",
        noActive: "No active meetings.",
        noClosed: "No closed meetings yet.",
        notes: "Notes",
        noNotes: "No notes yet.",
        notePlaceholder: "Leave a short note for the group…",
        addNote: "Add note",
        comments: "Comments",
        noComments: "No comments yet.",
        commentPlaceholder: "Leave a comment on this question…",
        addComment: "Add comment",
        yes: "Yes",
        no: "No",
        abstain: "Abstain",
        votes: (c) => `Yes ${c.yes} · No ${c.no} · Abstain ${c.abstain}`,
        back: "← All meetings",
        agenda: "Agenda",
        closedLabel: "Closed",
        notFound: "Meeting not found.",
        meetingPageTitle: (name) => `${name} · Belia PBB`,
        joinTitle: "Join this meeting",
        joinHint: "Enter your name so we can record who said what.",
        nameLabel: "Your name",
        continue: "Continue",
        changeName: "Change",
        joiningAs: (name) => `Joining as ${name}`,
        voteBy: (choice, names) =>
            names.length ? `${choice}: ${names.join(", ")}` : "",
        chairedBy: "This meeting is chaired by:",
        minutesBy: "Minutes taken by:",
        roleUnset: "—",
        attendees: "Attendees",
        attendeesTitle: "Attendees",
        attendeesHint: "People who joined this meeting.",
        noAttendees: "No attendees yet.",
        close: "Close",
        roleChair: "Chair",
        roleMinutes: "Minutes",
        themeLight: "Light",
        themeDark: "Dark",
        themeSystem: "System",
        themeSwitchLabel: (mode) => `Theme: ${mode}. Click to change.`,
        minutesHeading: "Summary",
        openDiscussion: "Open discussion",
        discussionHeading: "Discussion",
        backToMeeting: "← Back to meeting",
        discussionPageTitle: (name) => `${name} · Discussion · Belia PBB`,
        noMinutes: "No summary recorded yet.",
        adminTitle: "Admin",
        adminPageTitle: "Admin · Belia PBB",
        adminIntro: "Add and manage meetings for Belia PBB.",
        adminMeetings: "Meetings",
        adminAddMeeting: "Add meeting",
        adminFormIntro: "Fill in the meeting details, then save.",
        adminNoMeetings: "No meetings yet.",
        adminTitleLabel: "Title",
        adminStartDateLabel: "Start date",
        adminEndDateLabel: "Finish date",
        adminStatusLabel: "Status",
        adminStatusActive: "Active",
        adminStatusClosed: "Closed",
        adminSummaryLabel: "Short description",
        adminChairLabel: "Chaired by",
        adminMinutesByLabel: "Minutes taken by",
        adminMinutesLabel: "Summary",
        adminAgendaLabel: "Agenda questions",
        adminAddQuestion: "+ Add question",
        adminQuestionPlaceholder: "Should we…",
        adminRemoveQuestion: "Remove",
        adminQuestionLabel: (n) => `Question ${n}`,
        adminSave: "Save meeting",
        adminEdit: "Edit",
        adminCancelEdit: "Cancel",
        adminUpdate: "Edit meeting",
        adminUpdated: "Meeting updated.",
        adminDelete: "Delete",
        adminSaved: "Meeting saved.",
        adminHome: "← Meeting space",
        adminBackToList: "← Meetings",
        adminView: "Open",
        adminConfirmDelete: (name) =>
            `Delete "${name}"? This removes its agenda, votes and comments for everyone.`,
        adminLockTitle: "Admin passphrase",
        adminLockHint:
            "Enter the admin passphrase to add or change meetings. Members do not need this.",
        adminLockLabel: "Passphrase",
        adminUnlock: "Unlock",
        adminLock: "Lock",
        adminLocked: "Locked. Enter the passphrase to make changes.",
        adminWrongPass: "Wrong admin passphrase.",
        loadFailed: "Could not reach the meeting space. Check your connection and refresh.",
        questionProgress: (n, total) => `Question ${n} of ${total}`,
        previousQuestion: "Previous",
        nextQuestion: "Next",
        submitAnswers: "Submit",
        noQuestions: "No questions on this agenda yet.",
        voteBreakdown: "Who voted what",
        showVoters: "See who voted",
        noVotesYet: "No votes on this question yet.",
    },
    bm: {
        title: "Ruang Mesyuarat Belia PBB",
        pageTitle: "Ruang Mesyuarat Belia PBB",
        updated: (date) => `Tarikh hari ini • ${date}`,
        intro1: "Satu tempat untuk setiap perbincangan.",
        intro2:
            "Ruang bersama untuk Belia PBB membincangkan perkara secara tidak segerak. Kemukakan agenda, kongsi kemas kini, kumpulkan maklum balas, dan buat keputusan tanpa perlu menjadualkan mesyuarat.",
        activeMeetings: "Mesyuarat aktif",
        closedMeetings: "Ditutup",
        noActive: "Tiada mesyuarat aktif.",
        noClosed: "Belum ada mesyuarat ditutup.",
        notes: "Nota",
        noNotes: "Belum ada nota.",
        notePlaceholder: "Tinggalkan nota ringkas untuk kumpulan…",
        addNote: "Tambah nota",
        comments: "Komen",
        noComments: "Belum ada komen.",
        commentPlaceholder: "Tinggalkan komen untuk soalan ini…",
        addComment: "Tambah komen",
        yes: "Ya",
        no: "Tidak",
        abstain: "Abstain",
        votes: (c) => `Ya ${c.yes} · Tidak ${c.no} · Abstain ${c.abstain}`,
        back: "← Semua mesyuarat",
        agenda: "Agenda",
        closedLabel: "Ditutup",
        notFound: "Mesyuarat tidak dijumpai.",
        meetingPageTitle: (name) => `${name} · Belia PBB`,
        joinTitle: "Sertai mesyuarat ini",
        joinHint: "Masukkan nama anda supaya kami dapat merekod siapa berkata apa.",
        nameLabel: "Nama anda",
        continue: "Teruskan",
        changeName: "Tukar",
        joiningAs: (name) => `Menyertai sebagai ${name}`,
        voteBy: (choice, names) =>
            names.length ? `${choice}: ${names.join(", ")}` : "",
        chairedBy: "Mesyuarat ini dipengerusikan oleh:",
        minutesBy: "Minit diambil oleh:",
        roleUnset: "—",
        attendees: "Hadirin",
        attendeesTitle: "Hadirin",
        attendeesHint: "Orang yang menyertai mesyuarat ini.",
        noAttendees: "Belum ada hadirin.",
        close: "Tutup",
        roleChair: "Pengerusi",
        roleMinutes: "Minit",
        themeLight: "Cerah",
        themeDark: "Gelap",
        themeSystem: "Sistem",
        themeSwitchLabel: (mode) => `Tema: ${mode}. Klik untuk tukar.`,
        minutesHeading: "Ringkasan",
        openDiscussion: "Buka perbincangan",
        discussionHeading: "Perbincangan",
        backToMeeting: "← Kembali ke mesyuarat",
        discussionPageTitle: (name) => `${name} · Perbincangan · Belia PBB`,
        noMinutes: "Belum ada ringkasan direkod.",
        adminTitle: "Admin",
        adminPageTitle: "Admin · Belia PBB",
        adminIntro: "Tambah dan urus mesyuarat untuk Belia PBB.",
        adminMeetings: "Mesyuarat",
        adminAddMeeting: "Tambah mesyuarat",
        adminFormIntro: "Isikan butiran mesyuarat, kemudian simpan.",
        adminNoMeetings: "Belum ada mesyuarat.",
        adminTitleLabel: "Tajuk",
        adminStartDateLabel: "Tarikh mula",
        adminEndDateLabel: "Tarikh tamat",
        adminStatusLabel: "Status",
        adminStatusActive: "Aktif",
        adminStatusClosed: "Ditutup",
        adminSummaryLabel: "Penerangan ringkas",
        adminChairLabel: "Dipengerusikan oleh",
        adminMinutesByLabel: "Minit diambil oleh",
        adminMinutesLabel: "Ringkasan",
        adminAgendaLabel: "Soalan agenda",
        adminAddQuestion: "+ Tambah soalan",
        adminQuestionPlaceholder: "Patutkah kita…",
        adminRemoveQuestion: "Buang",
        adminQuestionLabel: (n) => `Soalan ${n}`,
        adminSave: "Simpan mesyuarat",
        adminEdit: "Edit",
        adminCancelEdit: "Batal",
        adminUpdate: "Edit mesyuarat",
        adminUpdated: "Mesyuarat dikemas kini.",
        adminDelete: "Padam",
        adminSaved: "Mesyuarat disimpan.",
        adminHome: "← Ruang mesyuarat",
        adminBackToList: "← Mesyuarat",
        adminView: "Buka",
        adminConfirmDelete: (name) =>
            `Padam "${name}"? Ini akan membuang agenda, undian dan komennya untuk semua orang.`,
        adminLockTitle: "Kata laluan admin",
        adminLockHint:
            "Masukkan kata laluan admin untuk menambah atau mengubah mesyuarat. Ahli tidak memerlukannya.",
        adminLockLabel: "Kata laluan",
        adminUnlock: "Buka kunci",
        adminLock: "Kunci",
        adminLocked: "Berkunci. Masukkan kata laluan untuk membuat perubahan.",
        adminWrongPass: "Kata laluan admin salah.",
        loadFailed: "Tidak dapat menghubungi ruang mesyuarat. Semak sambungan anda dan muat semula.",
        questionProgress: (n, total) => `Soalan ${n} daripada ${total}`,
        previousQuestion: "Sebelumnya",
        nextQuestion: "Seterusnya",
        submitAnswers: "Hantar",
        noQuestions: "Belum ada soalan dalam agenda ini.",
        voteBreakdown: "Siapa mengundi apa",
        showVoters: "Lihat siapa mengundi",
        noVotesYet: "Belum ada undian untuk soalan ini.",
    },
};

/* ---------------------------------------------------------------------------
 * Data layer
 *
 * Everything lives in one shared Postgres database, so all members see the
 * same meetings, votes and comments. See supabase/schema.sql for the tables
 * and the rules the database enforces on its own.
 *
 * This key is a publishable key: it is meant to ship in the page, and it grants
 * nothing on its own. What a caller may read or write is decided by the row
 * level security policies in the schema, not by holding this string.
 * ------------------------------------------------------------------------- */

const SUPABASE_URL = "https://nyehctfktzudmnvjiaaf.supabase.co";
const SUPABASE_KEY = "sb_publishable_Gs_uM0D8Mh9rx6s6qLv4Eg_MAlqiwhJ";

async function rest(path, { method = "GET", body, prefer } = {}) {
    const headers = {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
    };
    if (body !== undefined) headers["Content-Type"] = "application/json";
    if (prefer) headers.Prefer = prefer;

    const response = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
        method,
        headers,
        body: body === undefined ? undefined : JSON.stringify(body),
    });

    if (!response.ok) {
        let message = "";
        try {
            message = (await response.json()).message || "";
        } catch {
            /* non-JSON error body */
        }
        throw new Error(message || `Request failed (${response.status})`);
    }

    if (response.status === 204) return null;
    const text = await response.text();
    return text ? JSON.parse(text) : null;
}

function eq(value) {
    return `eq.${encodeURIComponent(value)}`;
}

const backend = {
    // Meetings and their agenda arrive as two tables and are stitched back into
    // the nested shape the render code already expects.
    async fetchMeetings() {
        const [rows, items] = await Promise.all([
            rest("meetings?select=*&order=created_at.desc"),
            rest("agenda_items?select=*&order=meeting_id.asc,position.asc"),
        ]);

        const agenda = new Map();
        items.forEach((item) => {
            if (!agenda.has(item.meeting_id)) agenda.set(item.meeting_id, []);
            agenda.get(item.meeting_id).push({ id: item.id, question: item.question });
        });

        return rows.map((row) => {
            const meeting = {
                id: row.id,
                status: row.status,
                title: row.title,
                summary: row.summary,
                startDate: row.start_date,
                endDate: row.end_date,
                chair: row.chair,
                minutesBy: row.minutes_by,
                items: agenda.get(row.id) || [],
            };
            if (row.minutes) meeting.minutes = row.minutes;
            return meeting;
        });
    },

    async fetchState() {
        const [votes, comments, attendees] = await Promise.all([
            rest("votes?select=*"),
            rest("comments?select=*&order=created_at.asc"),
            rest("attendees?select=*&order=joined_at.asc"),
        ]);

        const state = { votes: {}, notes: {}, comments: {}, roles: {}, attendees: {} };

        votes.forEach((vote) => {
            const key = `${vote.meeting_id}::${vote.item_id}::${vote.voter_key}`;
            state.votes[key] = { choice: vote.choice, name: vote.display_name };
        });

        comments.forEach((comment) => {
            const key = `${comment.meeting_id}::${comment.item_id}`;
            if (!state.comments[key]) state.comments[key] = [];
            state.comments[key].push({
                text: comment.body,
                name: comment.display_name,
                when: new Date(comment.created_at).toLocaleString(),
            });
        });

        attendees.forEach((attendee) => {
            if (!state.attendees[attendee.meeting_id]) state.attendees[attendee.meeting_id] = [];
            state.attendees[attendee.meeting_id].push(attendee.display_name);
        });

        return state;
    },

    // Writes are one row at a time rather than saving a whole blob, so two
    // members acting at once cannot overwrite each other's work.
    async castVote(meetingId, itemId, choice, name) {
        await rest("votes", {
            method: "POST",
            prefer: "resolution=merge-duplicates",
            body: {
                meeting_id: meetingId,
                item_id: itemId,
                voter_key: voterKey(name),
                device_id: getDeviceId(),
                choice,
                display_name: name,
            },
        });
    },

    async clearVote(meetingId, itemId, name) {
        await rest(
            `votes?meeting_id=${eq(meetingId)}&item_id=${eq(itemId)}&voter_key=${eq(voterKey(name))}`,
            { method: "DELETE" }
        );
    },

    async addComment(meetingId, itemId, text, name) {
        await rest("comments", {
            method: "POST",
            body: {
                meeting_id: meetingId,
                item_id: itemId,
                device_id: getDeviceId(),
                display_name: name,
                body: text,
            },
        });
    },

    async joinMeeting(meetingId, name) {
        await rest("attendees", {
            method: "POST",
            prefer: "resolution=merge-duplicates",
            body: {
                meeting_id: meetingId,
                voter_key: voterKey(name),
                device_id: getDeviceId(),
                display_name: name,
            },
        });
    },

    // Meeting writes go through database functions that check the passphrase.
    // There is no policy allowing the browser to touch these tables directly.
    async saveMeeting(passphrase, meeting) {
        return rest("rpc/admin_save_meeting", {
            method: "POST",
            body: { p_passphrase: passphrase, p_meeting: meeting },
        });
    },

    async removeMeeting(passphrase, id) {
        return rest("rpc/admin_delete_meeting", {
            method: "POST",
            body: { p_passphrase: passphrase, p_id: id },
        });
    },
};

/* ---------------------------------------------------------------------------
 * Cache
 *
 * Reads are served synchronously from `cache` so the render code stays simple.
 * After every write we refetch and repaint, which also picks up whatever other
 * members changed in the meantime.
 * ------------------------------------------------------------------------- */

const cache = {
    meetings: null,
    state: null,
};

function clone(value) {
    return JSON.parse(JSON.stringify(value));
}

async function loadAll() {
    const [meetings, state] = await Promise.all([
        backend.fetchMeetings(),
        backend.fetchState(),
    ]);
    cache.meetings = meetings;
    cache.state = state;
}

function getMeetings() {
    return cache.meetings ? clone(cache.meetings) : [];
}

// Every member-facing write funnels through here so that a failure always ends
// with the screen showing what the database actually holds, never a local guess.
async function applyChange(work) {
    try {
        await work();
        showError("");
    } catch (error) {
        console.error("[belia] could not save", error);
        showError(error.message);
    }

    try {
        await loadAll();
    } catch (error) {
        console.error("[belia] could not reload", error);
    }
    renderAll();
}

// Re-applying a class does not replay a CSS animation unless the element is
// reflowed in between, so force it. Used when content changes in place.
function restartAnimation(el, dataKey) {
    delete el.dataset[dataKey];
    void el.offsetWidth;
    el.dataset[dataKey] = "";
}

function showError(message) {
    document.querySelectorAll("[data-error]").forEach((el) => {
        el.textContent = message || "";
        el.hidden = !message;
    });
}

function slugify(value) {
    return String(value || "")
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")
        .slice(0, 48) || `meeting-${Date.now().toString(36)}`;
}

function uniqueMeetingId(title, meetings) {
    const base = slugify(title) || `meeting-${Date.now().toString(36)}`;
    let id = base;
    let n = 2;
    const existing = new Set(meetings.map((m) => m.id));
    while (existing.has(id)) {
        id = `${base}-${n}`;
        n += 1;
    }
    return id;
}

function bilingual(value) {
    const text = String(value || "").trim();
    return { en: text, bm: text };
}

function defaultDateLabel() {
    return new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });
}

function meetingStartDate(meeting) {
    return meeting?.startDate || meeting?.date || null;
}

function meetingEndDate(meeting) {
    return meeting?.endDate || meeting?.startDate || meeting?.date || null;
}

function formatMeetingDates(meeting) {
    const start = localized(meetingStartDate(meeting));
    const end = localized(meetingEndDate(meeting));
    if (!start) return end || "";
    if (!end || end === start) return start;
    return `${start} – ${end}`;
}

// Saving a meeting rewrites its agenda, and a question that disappears takes its
// votes with it. So keep the id of any question whose wording is unchanged —
// those votes survive an edit. Reworded questions get a fresh id and start over,
// which is right: people voted on the old wording, not the new one.
function buildAgendaItems(questions, existing) {
    const previous = new Map();
    (existing?.items || []).forEach((item) => {
        const text = String(item.question?.en ?? item.question ?? "").trim();
        if (text && !previous.has(text)) previous.set(text, item.id);
    });

    const used = new Set();
    return questions.map((question, index) => {
        let id = previous.get(question);
        if (!id || used.has(id)) {
            id = `q${index + 1}`;
            let n = index + 1;
            while (used.has(id)) {
                n += 1;
                id = `q${n}`;
            }
        }
        used.add(id);
        return { id, question: bilingual(question) };
    });
}

function buildMeetingPayload(id, payload) {
    const meetings = getMeetings();
    const existing = id ? meetings.find((meeting) => meeting.id === id) : null;

    const questions = (payload.questions || [])
        .map((question) => String(question || "").trim())
        .filter(Boolean);

    const status = payload.status === "closed" ? "closed" : "active";
    const minutesText = String(payload.minutes || "").trim();

    return {
        id: id || uniqueMeetingId(payload.title, meetings),
        status,
        title: bilingual(payload.title),
        summary: bilingual(payload.summary),
        start_date: bilingual(payload.startDate),
        end_date: bilingual(payload.endDate || payload.startDate),
        chair: String(payload.chair || "").trim(),
        minutes_by: String(payload.minutesBy || "").trim(),
        minutes: status === "closed" && minutesText ? bilingual(minutesText) : null,
        items: buildAgendaItems(questions, existing),
    };
}

async function saveMeetingFromForm(id, payload) {
    return backend.saveMeeting(getAdminPassphrase(), buildMeetingPayload(id, payload));
}

async function deleteMeeting(id) {
    return backend.removeMeeting(getAdminPassphrase(), id);
}

function getLang() {
    const saved = localStorage.getItem(LANG_KEY);
    return saved === "bm" ? "bm" : "en";
}

function setLang(lang) {
    localStorage.setItem(LANG_KEY, lang === "bm" ? "bm" : "en");
}

function getThemePref() {
    const saved = localStorage.getItem(THEME_KEY);
    return saved === "light" || saved === "dark" || saved === "system" ? saved : "system";
}

function setThemePref(pref) {
    localStorage.setItem(THEME_KEY, pref);
}

function resolveTheme(pref) {
    if (pref === "light" || pref === "dark") return pref;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function nextThemePref(pref) {
    if (pref === "light") return "dark";
    if (pref === "dark") return "system";
    return "light";
}

function themeIcon(pref) {
    if (pref === "dark") {
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 14.3A8.5 8.5 0 0 1 9.7 3 7 7 0 1 0 21 14.3z"/></svg>`;
    }
    if (pref === "system") {
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8"/><path d="M12 16v4"/></svg>`;
    }
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M4.9 4.9l1.4 1.4"/><path d="M17.7 17.7l1.4 1.4"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M4.9 19.1l1.4-1.4"/><path d="M17.7 6.3l1.4-1.4"/></svg>`;
}

function themeLabel(pref) {
    if (pref === "dark") return t("themeDark");
    if (pref === "system") return t("themeSystem");
    return t("themeLight");
}

function applyTheme(pref = getThemePref()) {
    const resolved = resolveTheme(pref);
    document.documentElement.dataset.theme = resolved;
    document.documentElement.dataset.themePref = pref;

    document.querySelectorAll("[data-theme-switch]").forEach((btn) => {
        const icon = btn.querySelector(".theme-switch-icon");
        if (icon) icon.innerHTML = themeIcon(pref);
        btn.setAttribute("aria-label", t("themeSwitchLabel")(themeLabel(pref)));
        btn.title = themeLabel(pref);
    });
}

function t(key) {
    return I18N[getLang()][key];
}

function localized(value) {
    if (value && typeof value === "object") {
        return value[getLang()] || value.en || "";
    }
    return value;
}

// Used only before the first load finishes, or if the database is unreachable.
// It is deliberately empty: showing invented votes would be worse than showing
// none, because there is no way to tell them apart from real ones.
function defaultState() {
    return { votes: {}, notes: {}, comments: {}, roles: {}, attendees: {} };
}

function loadState() {
    return cache.state ? clone(cache.state) : defaultState();
}

function voteKey(meetingId, itemId) {
    return `${meetingId}::${itemId}`;
}

function meetingKeyPrefix(meetingId, itemId) {
    return `${voteKey(meetingId, itemId)}::`;
}

function countVotes(votes, meetingId, itemId) {
    const counts = { yes: 0, no: 0, abstain: 0 };
    const names = { yes: [], no: [], abstain: [] };
    const prefix = meetingKeyPrefix(meetingId, itemId);
    Object.keys(votes).forEach((key) => {
        if (!key.startsWith(prefix)) return;
        const entry = normalizeVote(votes[key]);
        if (!entry || counts[entry.choice] === undefined) return;
        counts[entry.choice] += 1;
        if (entry.name) names[entry.choice].push(entry.name);
    });
    return { counts, names };
}

function normalizeVote(value) {
    if (!value) return null;
    if (typeof value === "string") return { choice: value, name: "" };
    if (typeof value === "object" && value.choice) {
        return { choice: value.choice, name: value.name || "" };
    }
    return null;
}

function getMemberName() {
    return (localStorage.getItem(NAME_KEY) || "").trim();
}

function setMemberName(name) {
    localStorage.setItem(NAME_KEY, name.trim());
}

function clearMemberName() {
    localStorage.removeItem(NAME_KEY);
}

// Votes and attendance are keyed on the name someone gives, normalised so that
// "Marc", "marc" and " Marc " are one person. That is what lets two members
// share a phone without overwriting each other, and stops one member voting
// twice by using their phone and then their laptop.
function voterKey(name) {
    return String(name || "").trim().toLowerCase();
}

// A random per-browser id. Nobody sees or types it, and it no longer decides who
// a vote belongs to — it is kept only as a record of where a vote came from.
function getDeviceId() {
    let id = localStorage.getItem(DEVICE_KEY);
    if (!id) {
        id = `member-${Math.random().toString(36).slice(2, 10)}`;
        localStorage.setItem(DEVICE_KEY, id);
    }
    return id;
}

// Kept only for this browser tab, so a shared or forgotten computer does not
// leave the admin gate open.
function getAdminPassphrase() {
    return sessionStorage.getItem(ADMIN_PASS_KEY) || "";
}

function setAdminPassphrase(value) {
    sessionStorage.setItem(ADMIN_PASS_KEY, value);
}

function clearAdminPassphrase() {
    sessionStorage.removeItem(ADMIN_PASS_KEY);
}

// Questions are numbered from 1 in the URL so the address bar reads the way the
// page does. Question 1 is the bare URL, which keeps shared links tidy.
function meetingUrl(id, question) {
    const base = `meeting.html?id=${encodeURIComponent(id)}`;
    return question > 1 ? `${base}&q=${question}` : base;
}

// Clamped rather than trusted: the agenda can shrink under a link someone
// bookmarked, and a stale `q` should land on the last question, not a blank page.
function currentQuestionIndex(total) {
    if (total < 1) return 0;
    const raw = new URLSearchParams(window.location.search).get("q");
    const parsed = Number.parseInt(raw ?? "1", 10);
    if (!Number.isFinite(parsed)) return 0;
    return Math.min(Math.max(parsed - 1, 0), total - 1);
}

// Which way the last move went, so the incoming question can animate in from
// that side. Reset after each render: a fresh page load should not animate as
// though it arrived from somewhere.
let questionDirection = null;

// Moving between questions swaps the URL without a reload, so the member is not
// waiting on the network between questions. Back and forward still work.
function goToQuestion(meetingId, index) {
    const from = currentQuestionIndex(Number.MAX_SAFE_INTEGER);
    questionDirection = index >= from ? "forward" : "back";
    window.history.pushState({}, "", meetingUrl(meetingId, index + 1));
    renderAll();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function discussionUrl(id) {
    return `discussion.html?id=${encodeURIComponent(id)}`;
}

function adminMeetingUrl(id) {
    if (!id) return "admin-meeting.html";
    return `admin-meeting.html?id=${encodeURIComponent(id)}`;
}

function getMeetingIdFromQuery() {
    return new URLSearchParams(window.location.search).get("id");
}

function findMeeting(id) {
    return getMeetings().find((meeting) => meeting.id === id) || null;
}

function isMeetingPage() {
    return Boolean(document.getElementById("meeting-title"));
}

function isDiscussionPage() {
    return Boolean(document.getElementById("discussion-title"));
}

function isAdminListPage() {
    return Boolean(document.getElementById("admin-meetings"));
}

function isAdminMeetingPage() {
    return Boolean(document.getElementById("admin-form"));
}

function formatTodayDate() {
    const lang = getLang();
    return new Date().toLocaleDateString(lang === "bm" ? "ms-MY" : "en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });
}

function applyStaticCopy(pageTitle) {
    const lang = getLang();
    document.documentElement.lang = lang === "bm" ? "ms" : "en";
    document.title = pageTitle || t("pageTitle");

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        const value = t(key);
        if (typeof value === "string") {
            el.textContent = value;
        } else if (key === "updated" && typeof value === "function") {
            el.textContent = value(formatTodayDate());
        }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
        const key = el.getAttribute("data-i18n-aria");
        const value = t(key);
        if (typeof value === "string") el.setAttribute("aria-label", value);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        const key = el.getAttribute("data-i18n-placeholder");
        const value = t(key);
        if (typeof value === "string") el.setAttribute("placeholder", value);
    });

    document.querySelectorAll(".lang-btn").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
        btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true" : "false");
    });

    applyTheme();
}

function renderHomeMeetings() {
    const activeRoot = document.getElementById("meetings");
    const closedRoot = document.getElementById("closed-meetings");
    if (!activeRoot || !closedRoot) return;

    activeRoot.innerHTML = "";
    closedRoot.innerHTML = "";

    const active = getMeetings().filter((m) => m.status === "active");
    const closed = getMeetings().filter((m) => m.status === "closed");

    if (!active.length) {
        activeRoot.innerHTML = `<p class="empty">${escapeHtml(t("noActive"))}</p>`;
    } else {
        activeRoot.appendChild(renderMeetingList(active));
    }

    if (!closed.length) {
        closedRoot.innerHTML = `<p class="empty">${escapeHtml(t("noClosed"))}</p>`;
    } else {
        closedRoot.appendChild(renderMeetingList(closed));
    }
}

function renderMeetingList(meetings) {
    const list = document.createElement("ul");
    list.className = "list";
    // Each row carries its position so the stylesheet can stagger the entrance.
    let rowIndex = 0;

    meetings.forEach((meeting) => {
        const li = document.createElement("li");
        li.style.setProperty("--row-index", String(rowIndex));
        rowIndex += 1;
        li.innerHTML = `
            <span class="list-title">
                <a href="${meetingUrl(meeting.id)}">${escapeHtml(localized(meeting.title))}</a>
            </span>
            <span class="meeting-meta">${escapeHtml(formatMeetingDates(meeting))}</span>
        `;
        list.appendChild(li);
    });

    return list;
}

function getMeetingRoles(meeting) {
    return {
        chair: (meeting.chair || "").trim(),
        minutesBy: (meeting.minutesBy || "").trim(),
    };
}

function ensureJoined(meetingId, memberName) {
    const name = (memberName || "").trim();
    const state = loadState();
    if (!meetingId || !name) return state;

    const alreadyIn = (state.attendees[meetingId] || []).some(
        (entry) => entry.toLowerCase() === name.toLowerCase()
    );
    if (alreadyIn) return state;

    // Recording attendance shouldn't hold up the page, and a failure here is not
    // worth interrupting someone who came to vote.
    backend.joinMeeting(meetingId, name).catch((error) => {
        console.error("[belia] could not record attendance", error);
    });

    state.attendees[meetingId] = [...(state.attendees[meetingId] || []), name];
    return state;
}

function collectAttendees(meeting, state) {
    const people = new Map();
    (state.attendees[meeting.id] || []).forEach((name) => {
        const cleaned = (name || "").trim();
        if (!cleaned) return;
        people.set(cleaned.toLowerCase(), cleaned);
    });
    return [...people.values()].sort((a, b) =>
        a.localeCompare(b, undefined, { sensitivity: "base" })
    );
}

function paintStaticIcons() {
    const attendeesIcon = document.querySelector(".attendees-icon");
    if (attendeesIcon && !attendeesIcon.childElementCount) {
        attendeesIcon.innerHTML = icon("users", 14);
    }
    const addBtn = document.getElementById("admin-show-add");
    if (addBtn && !addBtn.childElementCount) {
        addBtn.innerHTML = icon("plus", 18);
    }
    const lockHeading = document.querySelector("#admin-lock .lock-icon");
    if (lockHeading && !lockHeading.childElementCount) {
        lockHeading.innerHTML = icon("lock", 15);
    }
}

function renderAttendeesList(meeting, state) {
    const list = document.getElementById("attendees-list");
    if (!list) return;
    list.innerHTML = "";

    const attendees = collectAttendees(meeting, state);
    if (!attendees.length) {
        list.innerHTML = `<li class="empty-item">${escapeHtml(t("noAttendees"))}</li>`;
        return;
    }

    attendees.forEach((name) => {
        const li = document.createElement("li");
        li.innerHTML = `<span class="list-title">${escapeHtml(name)}</span>`;
        list.appendChild(li);
    });
}

function openVotesDialog(meeting, item, names) {
    const dialog = document.getElementById("votes-dialog");
    const body = document.getElementById("votes-breakdown");
    const questionEl = document.getElementById("votes-dialog-question");
    if (!dialog || !body) return;

    if (questionEl) questionEl.textContent = localized(item.question);

    body.innerHTML = "";
    const groups = [
        ["yes", t("yes"), names.yes],
        ["no", t("no"), names.no],
        ["abstain", t("abstain"), names.abstain],
    ].filter(([, , who]) => who.length);

    if (!groups.length) {
        body.innerHTML = `<p class="empty">${escapeHtml(t("noVotesYet"))}</p>`;
    } else {
        groups.forEach(([choice, label, who]) => {
            const group = document.createElement("div");
            group.className = `vote-group vote-group-${choice}`;
            group.innerHTML =
                `<p class="vote-group-label">${escapeHtml(label)} <span>${who.length}</span></p>` +
                `<ul class="vote-group-names">${who
                    .map((name) => `<li>${escapeHtml(name)}</li>`)
                    .join("")}</ul>`;
            body.appendChild(group);
        });
    }

    showDialog(dialog);
}

function showDialog(dialog) {
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "open");
}

function hideDialog(dialog) {
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
}

function setupVotesDialog() {
    const dialog = document.getElementById("votes-dialog");
    if (!dialog || dialog.dataset.bound === "true") return;
    dialog.dataset.bound = "true";

    const closeBtn = document.getElementById("votes-close");
    if (closeBtn) closeBtn.addEventListener("click", () => hideDialog(dialog));

    // Clicking the backdrop, which is the dialog element itself, closes it.
    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) hideDialog(dialog);
    });
}

function openAttendeesDialog() {
    const dialog = document.getElementById("attendees-dialog");
    if (!dialog) return;
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "open");
}

function closeAttendeesDialog() {
    const dialog = document.getElementById("attendees-dialog");
    if (!dialog) return;
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
}

// Chair and minute-taker are part of the meeting record, which only the admin
// can write. They used to be free-text boxes any member could overwrite; on a
// shared database that meant one person could silently rewrite them for
// everyone. They are set in the admin form now, and shown as plain text here.
function renderMeetingRoles(meeting) {
    const roles = getMeetingRoles(meeting);
    const chairEl = document.getElementById("meeting-chair");
    const minutesEl = document.getElementById("meeting-minutes");
    if (!chairEl || !minutesEl) return;

    chairEl.textContent = roles.chair || t("roleUnset");
    minutesEl.textContent = roles.minutesBy || t("roleUnset");
}

function renderMeetingPage() {
    const meeting = findMeeting(getMeetingIdFromQuery());
    const gate = document.getElementById("name-gate");
    const content = document.getElementById("meeting-content");
    const titleEl = document.getElementById("meeting-title");
    const dateEl = document.getElementById("meeting-date");
    const summaryEl = document.getElementById("meeting-summary");
    const agendaRoot = document.getElementById("agenda");
    const memberStatus = document.getElementById("member-status");
    const rolesEl = document.getElementById("meeting-roles");
    const activeBody = document.getElementById("active-body");
    const closedBody = document.getElementById("closed-body");
    const minutesBody = document.getElementById("minutes-body");
    const openDiscussion = document.getElementById("open-discussion");
    const memberName = getMemberName();

    if (!meeting) {
        applyStaticCopy(t("pageTitle"));
        gate.hidden = true;
        content.hidden = false;
        titleEl.textContent = t("notFound");
        dateEl.textContent = "";
        if (summaryEl) summaryEl.textContent = "";
        if (agendaRoot) agendaRoot.innerHTML = "";
        if (minutesBody) minutesBody.innerHTML = "";
        memberStatus.textContent = "";
        if (rolesEl) rolesEl.hidden = true;
        if (activeBody) activeBody.hidden = true;
        if (closedBody) closedBody.hidden = true;
        return;
    }

    const title = localized(meeting.title);
    applyStaticCopy(t("meetingPageTitle")(title));

    if (!memberName) {
        gate.hidden = false;
        content.hidden = true;
        return;
    }

    gate.hidden = true;
    content.hidden = false;
    memberStatus.textContent = t("joiningAs")(memberName);

    const locked = meeting.status === "closed";
    const state = ensureJoined(meeting.id, memberName);
    titleEl.textContent = title;
    dateEl.textContent = locked
        ? `${formatMeetingDates(meeting)} · ${t("closedLabel")}`
        : formatMeetingDates(meeting);
    if (rolesEl) rolesEl.hidden = false;
    renderMeetingRoles(meeting);
    renderAttendeesList(meeting, state);

    if (locked) {
        if (activeBody) activeBody.hidden = true;
        if (closedBody) closedBody.hidden = false;
        if (minutesBody) {
            const minutesText = localized(meeting.minutes) || t("noMinutes");
            minutesBody.innerHTML = minutesText
                .split(/\n+/)
                .filter(Boolean)
                .map((para) => `<p>${escapeHtml(para)}</p>`)
                .join("");
        }
        if (openDiscussion) {
            openDiscussion.href = discussionUrl(meeting.id);
            openDiscussion.textContent = t("openDiscussion");
        }
        return;
    }

    if (activeBody) activeBody.hidden = false;
    if (closedBody) closedBody.hidden = true;
    if (summaryEl) summaryEl.textContent = localized(meeting.summary);

    renderQuestionPage(meeting, state, memberName);
}

// One question per screen. Members answer on a phone, and a single question with
// its own comments is a lot easier to work through than a long scrolling list.
function renderQuestionPage(meeting, state, memberName) {
    const agendaRoot = document.getElementById("agenda");
    const progressEl = document.getElementById("question-progress");
    const navRoot = document.getElementById("question-nav");
    const items = meeting.items || [];

    if (!items.length) {
        if (agendaRoot) agendaRoot.innerHTML = `<p class="empty">${escapeHtml(t("noQuestions"))}</p>`;
        if (progressEl) progressEl.textContent = "";
        if (navRoot) navRoot.innerHTML = "";
        return;
    }

    const index = currentQuestionIndex(items.length);

    if (progressEl) {
        progressEl.textContent = t("questionProgress")(index + 1, items.length);
        if (questionDirection) restartAnimation(progressEl, "progressEnter");
    }

    if (agendaRoot) {
        agendaRoot.innerHTML = "";
        const agenda = document.createElement("ul");
        agenda.className = "agenda";
        agenda.appendChild(
            renderAgendaItem(meeting, items[index], state, false, memberName)
        );
        agendaRoot.appendChild(agenda);

        if (questionDirection) agendaRoot.dataset.enter = questionDirection;
        else delete agendaRoot.dataset.enter;
    }

    renderQuestionNav(meeting, index, items.length);

    // A vote re-renders the page too, and that should not replay the slide.
    questionDirection = null;
}

function renderQuestionNav(meeting, index, total) {
    const navRoot = document.getElementById("question-nav");
    if (!navRoot) return;
    navRoot.innerHTML = "";

    if (index > 0) {
        const previous = document.createElement("button");
        previous.type = "button";
        previous.className = "nav-btn nav-btn-prev";
        previous.innerHTML = `${icon("chevronLeft", 15)}<span>${escapeHtml(t("previousQuestion"))}</span>`;
        previous.addEventListener("click", () => goToQuestion(meeting.id, index - 1));
        navRoot.appendChild(previous);
    }

    const isLast = index === total - 1;
    const forward = document.createElement("button");
    forward.type = "button";
    forward.className = isLast ? "submit-btn" : "nav-btn nav-btn-next";
    forward.innerHTML = isLast
        ? `<span>${escapeHtml(t("submitAnswers"))}</span>${icon("check", 15)}`
        : `<span>${escapeHtml(t("nextQuestion"))}</span>${icon("chevronRight", 15)}`;
    forward.addEventListener("click", () => {
        // Votes are already saved as they are cast, so Submit is just the way
        // out of the last question, not the thing that records anything.
        if (isLast) window.location.href = "index.html";
        else goToQuestion(meeting.id, index + 1);
    });
    navRoot.appendChild(forward);
}

function renderDiscussionPage() {
    const meeting = findMeeting(getMeetingIdFromQuery());
    const gate = document.getElementById("name-gate");
    const content = document.getElementById("discussion-content");
    const titleEl = document.getElementById("discussion-title");
    const dateEl = document.getElementById("discussion-date");
    const summaryEl = document.getElementById("discussion-summary");
    const agendaRoot = document.getElementById("discussion-agenda");
    const memberStatus = document.getElementById("member-status");
    const backLink = document.getElementById("discussion-back");
    const memberName = getMemberName();

    if (backLink && meeting) {
        backLink.href = meetingUrl(meeting.id);
    }

    if (!meeting) {
        applyStaticCopy(t("pageTitle"));
        if (gate) gate.hidden = true;
        if (content) content.hidden = false;
        titleEl.textContent = t("notFound");
        dateEl.textContent = "";
        summaryEl.textContent = "";
        agendaRoot.innerHTML = "";
        memberStatus.textContent = "";
        return;
    }

    const title = localized(meeting.title);
    applyStaticCopy(t("discussionPageTitle")(title));

    if (!memberName) {
        gate.hidden = false;
        content.hidden = true;
        return;
    }

    gate.hidden = true;
    content.hidden = false;
    memberStatus.textContent = t("joiningAs")(memberName);

    const locked = true;
    const state = ensureJoined(meeting.id, memberName);
    titleEl.textContent = title;
    dateEl.textContent = `${formatMeetingDates(meeting)} · ${t("closedLabel")}`;
    summaryEl.textContent = localized(meeting.summary);

    agendaRoot.innerHTML = "";
    const agenda = document.createElement("ul");
    agenda.className = "agenda";
    meeting.items.forEach((item) => {
        agenda.appendChild(renderAgendaItem(meeting, item, state, locked, memberName));
    });
    agendaRoot.appendChild(agenda);
}

function renderItemComments(meeting, item, state, locked, memberName) {
    const wrap = document.createElement("div");
    wrap.className = "item-comments";

    const heading = document.createElement("p");
    heading.className = "comments-label";
    heading.textContent = t("comments");
    wrap.appendChild(heading);

    const list = document.createElement("ul");
    list.className = "note-list";
    const key = voteKey(meeting.id, item.id);
    const comments = state.comments[key] || [];

    if (!comments.length) {
        const empty = document.createElement("li");
        empty.className = "note-empty";
        empty.textContent = t("noComments");
        list.appendChild(empty);
    } else {
        comments.forEach((comment) => {
            const li = document.createElement("li");
            const who = comment.name || t("comments");
            li.innerHTML = `${escapeHtml(comment.text)}<span class="note-meta">${escapeHtml(who)} · ${escapeHtml(comment.when)}</span>`;
            list.appendChild(li);
        });
    }

    wrap.appendChild(list);

    if (!locked) {
        const composer = document.createElement("div");
        composer.className = "comment-composer";

        const textarea = document.createElement("textarea");
        textarea.id = `comment-${meeting.id}-${item.id}`;
        textarea.setAttribute("aria-label", t("comments"));
        textarea.placeholder = t("commentPlaceholder");
        textarea.rows = 2;

        // The send button sits where the resize grip would be, so the box grows
        // with what you type instead.
        const autoGrow = () => {
            textarea.style.height = "auto";
            textarea.style.height = `${textarea.scrollHeight}px`;
        };

        const button = document.createElement("button");
        button.type = "button";
        button.className = "comment-send";
        button.disabled = true;
        button.setAttribute("aria-label", t("addComment"));
        button.title = t("addComment");
        button.innerHTML = icon("arrowUp", 18);

        textarea.addEventListener("input", () => {
            button.disabled = !textarea.value.trim();
            autoGrow();
        });

        button.addEventListener("click", () => {
            const text = textarea.value.trim();
            if (!text) return;
            button.disabled = true;
            applyChange(() => backend.addComment(meeting.id, item.id, text, memberName));
        });

        composer.appendChild(textarea);
        composer.appendChild(button);
        wrap.appendChild(composer);
    }

    return wrap;
}

function renderAgendaItem(meeting, item, state, locked, memberName) {
    const li = document.createElement("li");
    li.className = "agenda-item";

    const question = document.createElement("p");
    question.className = "agenda-question";
    question.textContent = localized(item.question);
    li.appendChild(question);

    const myKey = `${voteKey(meeting.id, item.id)}::${voterKey(memberName)}`;
    const myVote = normalizeVote(state.votes[myKey]);
    const { counts, names } = countVotes(state.votes, meeting.id, item.id);

    const row = document.createElement("div");
    row.className = "vote-row";

    [
        ["yes", t("yes")],
        ["no", t("no")],
        ["abstain", t("abstain")],
    ].forEach(([choice, label]) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "vote-btn" + (myVote && myVote.choice === choice ? " selected" : "");
        btn.textContent = label;
        btn.disabled = locked;
        if (!locked) {
            btn.addEventListener("click", () => {
                // Tapping your current choice again withdraws it.
                const withdraw = Boolean(myVote && myVote.choice === choice);
                applyChange(() =>
                    withdraw
                        ? backend.clearVote(meeting.id, item.id, memberName)
                        : backend.castVote(meeting.id, item.id, choice, memberName)
                );
            });
        }
        row.appendChild(btn);
    });

    const countsEl = document.createElement("p");
    countsEl.className = "vote-counts";
    countsEl.textContent = t("votes")(counts);

    // The tally stays on the page; who voted which way is one tap away. Names on
    // every question made the page long and pushed the next question out of
    // reach, and the breakdown is something you look up, not something you read
    // every time.
    const countsRow = document.createElement("div");
    countsRow.className = "vote-counts-row";
    countsRow.appendChild(countsEl);

    const total = counts.yes + counts.no + counts.abstain;
    if (total) {
        const help = document.createElement("button");
        help.type = "button";
        help.className = "vote-help";
        help.innerHTML = icon("helpSquare", 15);
        help.setAttribute("aria-label", t("showVoters"));
        help.title = t("showVoters");
        help.addEventListener("click", () => openVotesDialog(meeting, item, names));
        countsRow.appendChild(help);
    }

    li.appendChild(row);
    li.appendChild(countsRow);
    li.appendChild(renderItemComments(meeting, item, state, locked, memberName));
    return li;
}

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;");
}

function renderAdminListPage() {
    applyStaticCopy(t("adminPageTitle"));

    const notice = document.getElementById("admin-notice");
    if (notice) {
        const pending = sessionStorage.getItem(ADMIN_NOTICE_KEY);
        if (pending === "saved" || pending === "updated") {
            notice.hidden = false;
            notice.textContent = pending === "updated" ? t("adminUpdated") : t("adminSaved");
            sessionStorage.removeItem(ADMIN_NOTICE_KEY);
        }
    }

    const list = document.getElementById("admin-meetings");
    if (!list) return;
    list.innerHTML = "";

    const meetings = getMeetings();
    if (!meetings.length) {
        list.innerHTML = `<p class="empty">${escapeHtml(t("adminNoMeetings"))}</p>`;
        return;
    }

    const ul = document.createElement("ul");
    ul.className = "list";
    meetings.forEach((meeting, index) => {
        const li = document.createElement("li");
        li.style.setProperty("--row-index", String(index));
        const statusLabel =
            meeting.status === "closed" ? t("adminStatusClosed") : t("adminStatusActive");
        li.innerHTML = `
            <span class="list-title">
                <a href="${meetingUrl(meeting.id)}">${escapeHtml(localized(meeting.title))}</a>
                <span class="meeting-meta"> · ${escapeHtml(statusLabel)}</span>
            </span>
            <span class="admin-meeting-actions">
                <a class="icon-btn" href="${adminMeetingUrl(meeting.id)}" title="${escapeHtml(t("adminEdit"))}" aria-label="${escapeHtml(t("adminEdit"))}">${icon("edit", 15)}</a>
                <button type="button" class="icon-btn icon-btn-danger" data-delete-meeting="${escapeHtml(meeting.id)}" title="${escapeHtml(t("adminDelete"))}" aria-label="${escapeHtml(t("adminDelete"))}">${icon("trash", 15)}</button>
            </span>
        `;
        ul.appendChild(li);
    });
    list.appendChild(ul);
}

function renderAdminMeetingPage() {
    const editingId = getMeetingIdFromQuery();
    const meeting = editingId ? findMeeting(editingId) : null;
    const isEdit = Boolean(meeting);

    applyStaticCopy(t("adminPageTitle"));

    const heading = document.getElementById("admin-form-heading");
    if (heading) heading.textContent = isEdit ? t("adminUpdate") : t("adminAddMeeting");

    const saveBtn = document.querySelector('#admin-form button[type="submit"]');
    if (saveBtn) saveBtn.textContent = isEdit ? t("adminUpdate") : t("adminSave");

    const addQuestionBtn = document.getElementById("admin-add-question");
    if (addQuestionBtn) addQuestionBtn.textContent = t("adminAddQuestion");

    const statusActive = document.querySelector('#admin-status option[value="active"]');
    const statusClosed = document.querySelector('#admin-status option[value="closed"]');
    if (statusActive) statusActive.textContent = t("adminStatusActive");
    if (statusClosed) statusClosed.textContent = t("adminStatusClosed");

    document.title = `${isEdit ? t("adminUpdate") : t("adminAddMeeting")} · Belia PBB`;
}

// The passphrase is never checked in the browser — it is sent with each write
// and the database decides. Unlocking here just verifies it early so the admin
// finds out now rather than after filling in a whole form.
function setupAdminLock() {
    const form = document.getElementById("admin-lock-form");
    if (!form || form.dataset.bound === "true") return;
    form.dataset.bound = "true";

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const input = document.getElementById("admin-pass");
        const passphrase = (input?.value || "").trim();
        if (!passphrase) return;

        const button = form.querySelector("button[type=submit]");
        if (button) button.disabled = true;
        showError("");

        try {
            const ok = await rest("rpc/admin_check", {
                method: "POST",
                body: { p_passphrase: passphrase },
            });
            if (!ok) {
                showError(t("adminWrongPass"));
                if (input) input.select();
                return;
            }
            setAdminPassphrase(passphrase);
            renderAll();
        } catch (error) {
            showError(error.message);
        } finally {
            if (button) button.disabled = false;
        }
    });
}

function renderAdminLock() {
    const lock = document.getElementById("admin-lock");
    if (!lock) return;
    const unlocked = Boolean(getAdminPassphrase());
    lock.hidden = unlocked;

    // Hide the things that cannot work while locked, rather than letting an
    // admin fill in a form that is guaranteed to be rejected.
    const form = document.getElementById("admin-form");
    if (form) form.hidden = !unlocked;
    const addBtn = document.getElementById("admin-show-add");
    if (addBtn) addBtn.hidden = !unlocked;
    document.querySelectorAll("[data-delete-meeting]").forEach((btn) => {
        btn.hidden = !unlocked;
    });
    document.querySelectorAll(".admin-meeting-actions a").forEach((link) => {
        link.hidden = !unlocked;
    });
}

function setupAdminListPage() {
    const list = document.getElementById("admin-meetings");
    if (!list || list.dataset.bound === "true") return;
    list.dataset.bound = "true";

    list.addEventListener("click", async (event) => {
        const deleteBtn = event.target.closest("[data-delete-meeting]");
        if (!deleteBtn) return;
        const id = deleteBtn.getAttribute("data-delete-meeting");
        if (!id) return;

        // Deleting takes the agenda, votes and comments with it, for everyone.
        const meeting = findMeeting(id);
        const label = meeting ? localized(meeting.title) : id;
        if (!window.confirm(t("adminConfirmDelete")(label))) return;

        deleteBtn.disabled = true;
        await applyChange(() => deleteMeeting(id));
    });
}

function setupAdminMeetingForm() {
    const form = document.getElementById("admin-form");
    if (!form || form.dataset.bound === "true") return;
    form.dataset.bound = "true";

    const startDateInput = document.getElementById("admin-start-date");
    const endDateInput = document.getElementById("admin-end-date");
    const statusField = document.getElementById("admin-status-field");
    const statusInput = document.getElementById("admin-status");
    const minutesField = document.getElementById("admin-minutes-field");
    const minutesInput = document.getElementById("admin-minutes");
    const questionsRoot = document.getElementById("admin-questions");
    const editingId = getMeetingIdFromQuery();
    const meeting = editingId ? findMeeting(editingId) : null;

    function syncClosedFields() {
        const isEdit = Boolean(form.dataset.editingId);
        const isClosed = (statusInput?.value || "active") === "closed";
        if (statusField) statusField.hidden = !isEdit;
        if (minutesField) minutesField.hidden = !(isEdit && isClosed);
    }

    function renumberQuestions() {
        if (!questionsRoot) return;
        [...questionsRoot.querySelectorAll(".admin-question-row")].forEach((row, index) => {
            const label = row.querySelector(".admin-question-label");
            if (label) label.textContent = t("adminQuestionLabel")(index + 1);
        });
    }

    function addQuestionField(value = "", { focus = true } = {}) {
        if (!questionsRoot) return null;
        const row = document.createElement("div");
        row.className = "admin-question-row";

        const label = document.createElement("label");
        label.className = "admin-question-label";
        label.textContent = t("adminQuestionLabel")(questionsRoot.children.length + 1);

        const input = document.createElement("input");
        input.type = "text";
        input.className = "admin-question-input";
        input.name = "question";
        input.maxLength = 240;
        input.placeholder = t("adminQuestionPlaceholder");
        input.value = value;
        input.setAttribute("aria-label", label.textContent);

        const remove = document.createElement("button");
        remove.type = "button";
        remove.className = "text-btn admin-remove-question";
        remove.textContent = t("adminRemoveQuestion");

        row.appendChild(label);
        row.appendChild(input);
        row.appendChild(remove);
        questionsRoot.appendChild(row);
        renumberQuestions();
        if (focus) input.focus();
        return input;
    }

    function resetQuestions(values = [""]) {
        if (!questionsRoot) return;
        questionsRoot.innerHTML = "";
        const list = values.length ? values : [""];
        list.forEach((value) => {
            addQuestionField(value, { focus: false });
        });
    }

    function fillForm(current) {
        form.dataset.editingId = current?.id || "";
        const today = defaultDateLabel();
        document.getElementById("admin-title").value = current ? localized(current.title) : "";
        document.getElementById("admin-start-date").value = current
            ? localized(meetingStartDate(current)) || today
            : today;
        document.getElementById("admin-end-date").value = current
            ? localized(meetingEndDate(current)) || today
            : today;
        document.getElementById("admin-summary").value = current ? localized(current.summary) : "";
        document.getElementById("admin-chair").value = current?.chair || "";
        document.getElementById("admin-minutes-by").value = current?.minutesBy || "";
        if (statusInput) statusInput.value = current?.status === "closed" ? "closed" : "active";
        if (minutesInput) {
            minutesInput.value = current?.minutes ? localized(current.minutes) : "";
        }
        resetQuestions(
            current?.items?.length
                ? current.items.map((item) => localized(item.question))
                : [""]
        );
        syncClosedFields();
    }

    if (editingId && !meeting) {
        fillForm(null);
        const heading = document.getElementById("admin-form-heading");
        if (heading) heading.textContent = t("notFound");
        const intro = document.getElementById("admin-form-intro");
        if (intro) intro.textContent = t("notFound");
        form.hidden = true;
        return;
    }

    fillForm(meeting);

    if (startDateInput && !startDateInput.value) {
        startDateInput.value = defaultDateLabel();
    }
    if (endDateInput && !endDateInput.value) {
        endDateInput.value = defaultDateLabel();
    }

    if (questionsRoot && !questionsRoot.children.length) {
        resetQuestions([""]);
    }

    if (statusInput) {
        statusInput.addEventListener("change", () => {
            syncClosedFields();
        });
    }

    form.addEventListener("click", (event) => {
        const addBtn = event.target.closest("#admin-add-question");
        if (addBtn) {
            event.preventDefault();
            addQuestionField("");
            return;
        }

        const removeBtn = event.target.closest(".admin-remove-question");
        if (removeBtn) {
            event.preventDefault();
            const row = removeBtn.closest(".admin-question-row");
            if (row) row.remove();
            if (!questionsRoot.children.length) addQuestionField("", { focus: false });
            renumberQuestions();
        }
    });

    form.addEventListener("keydown", (event) => {
        if (event.key !== "Enter") return;
        if (!event.target.classList.contains("admin-question-input")) return;
        event.preventDefault();
        const input = addQuestionField("");
        if (input) input.focus();
    });

    let saving = false;

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        if (saving) return;
        const title = document.getElementById("admin-title")?.value || "";
        const startDate = document.getElementById("admin-start-date")?.value || "";
        const endDate = document.getElementById("admin-end-date")?.value || "";
        const summary = document.getElementById("admin-summary")?.value || "";
        const chair = document.getElementById("admin-chair")?.value || "";
        const minutesBy = document.getElementById("admin-minutes-by")?.value || "";
        const status = statusInput?.value || "active";
        const minutes = minutesInput?.value || "";
        const questions = [...document.querySelectorAll(".admin-question-input")].map(
            (input) => input.value
        );

        if (!title.trim() || !startDate.trim() || !endDate.trim()) return;

        const payload = {
            title,
            startDate,
            endDate,
            summary,
            chair,
            minutesBy,
            status,
            minutes,
            questions,
        };

        const id = form.dataset.editingId || "";

        // The save has to land before we navigate away, or the change is lost.
        saving = true;
        showError("");
        try {
            await saveMeetingFromForm(id, payload);
        } catch (error) {
            console.error("[belia] could not save meeting", error);
            showError(error.message);
            saving = false;
            return;
        }

        sessionStorage.setItem(ADMIN_NOTICE_KEY, id ? "updated" : "saved");
        window.location.href = "admin.html";
    });
}

function renderAll() {
    paintStaticIcons();
    if (isAdminMeetingPage()) {
        renderAdminMeetingPage();
        renderAdminLock();
    } else if (isAdminListPage()) {
        renderAdminListPage();
        renderAdminLock();
    } else if (isDiscussionPage()) {
        renderDiscussionPage();
    } else if (isMeetingPage()) {
        renderMeetingPage();
    } else {
        applyStaticCopy();
        renderHomeMeetings();
    }
}

function setupLangToggle() {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            const lang = btn.dataset.lang;
            if (lang === getLang()) return;
            setLang(lang);
            renderAll();
        });
    });
}

function setupThemeToggle() {
    document.querySelectorAll("[data-theme-switch]").forEach((btn) => {
        btn.addEventListener("click", () => {
            const next = nextThemePref(getThemePref());
            setThemePref(next);
            applyTheme(next);
        });
    });

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
        if (getThemePref() === "system") applyTheme("system");
    };
    if (typeof media.addEventListener === "function") {
        media.addEventListener("change", onChange);
    } else if (typeof media.addListener === "function") {
        media.addListener(onChange);
    }
}

function setupNameGate() {
    const form = document.getElementById("name-form");
    const changeBtn = document.getElementById("change-name");
    if (!form) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const input = document.getElementById("member-name");
        const name = (input?.value || "").trim();
        if (!name) return;
        setMemberName(name);
        renderAll();
    });

    if (changeBtn) {
        changeBtn.addEventListener("click", () => {
            const previous = getMemberName();
            clearMemberName();
            renderAll();
            const input = document.getElementById("member-name");
            if (input) {
                input.value = previous;
                input.focus();
                input.select();
            }
        });
    }
}

function setupAttendeesDialog() {
    const openBtn = document.getElementById("attendees-open");
    const closeBtn = document.getElementById("attendees-close");
    const dialog = document.getElementById("attendees-dialog");
    if (!openBtn || !dialog) return;

    openBtn.addEventListener("click", () => {
        openAttendeesDialog();
    });

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            closeAttendeesDialog();
        });
    }

    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) closeAttendeesDialog();
    });
}

async function init() {
    applyTheme();
    setupLangToggle();
    setupThemeToggle();
    setupNameGate();
    setupAttendeesDialog();
    setupVotesDialog();
    setupAdminLock();

    // Everything below this line reads meeting data, so warm the cache first.
    // A failure here is worth showing: without data the page is just empty, and
    // silence would look like "there are no meetings".
    try {
        await loadAll();
    } catch (error) {
        console.error("[belia] could not load", error);
        showError(t("loadFailed"));
    }

    setupAdminListPage();
    setupAdminMeetingForm();

    // Question navigation swaps the URL in place, so back and forward have to
    // repaint rather than the browser serving a cached page.
    window.addEventListener("popstate", () => renderAll());

    renderAll();
}

init().catch((error) => {
    console.error("[belia] could not start", error);
});
