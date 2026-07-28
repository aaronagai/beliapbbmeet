const STORAGE_KEY = "belia-pbb-meeting-space-v1";
const LANG_KEY = "belia-pbb-lang";
const NAME_KEY = "belia-pbb-member-name";
const THEME_KEY = "belia-pbb-theme";
const MEETINGS_KEY = "belia-pbb-meetings-v1";

const I18N = {
    en: {
        title: "Belia PBB Meeting Space",
        pageTitle: "Belia PBB Meeting Space",
        updated: "Updated Jul 28, 2026",
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
        adminNoMeetings: "No meetings yet.",
        adminTitleLabel: "Title",
        adminStartDateLabel: "Start date",
        adminEndDateLabel: "Finish date",
        adminStatusActive: "Active",
        adminStatusClosed: "Closed",
        adminSummaryLabel: "Short description",
        adminChairLabel: "Chaired by",
        adminMinutesByLabel: "Minutes taken by",
        adminMinutesLabel: "Summary (for closed meetings)",
        adminAgendaLabel: "Agenda questions",
        adminAddQuestion: "+ Add question",
        adminQuestionPlaceholder: "Should we…",
        adminRemoveQuestion: "Remove",
        adminQuestionLabel: (n) => `Question ${n}`,
        adminSave: "Save meeting",
        adminEdit: "Edit",
        adminCancelEdit: "Cancel",
        adminUpdate: "Update meeting",
        adminUpdated: "Meeting updated.",
        adminDelete: "Delete",
        adminSaved: "Meeting saved.",
        adminHome: "← Meeting space",
        adminView: "Open",
    },
    bm: {
        title: "Ruang Mesyuarat Belia PBB",
        pageTitle: "Ruang Mesyuarat Belia PBB",
        updated: "Dikemas kini 28 Jul 2026",
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
        adminNoMeetings: "Belum ada mesyuarat.",
        adminTitleLabel: "Tajuk",
        adminStartDateLabel: "Tarikh mula",
        adminEndDateLabel: "Tarikh tamat",
        adminStatusActive: "Aktif",
        adminStatusClosed: "Ditutup",
        adminSummaryLabel: "Penerangan ringkas",
        adminChairLabel: "Dipengerusikan oleh",
        adminMinutesByLabel: "Minit diambil oleh",
        adminMinutesLabel: "Ringkasan (untuk mesyuarat ditutup)",
        adminAgendaLabel: "Soalan agenda",
        adminAddQuestion: "+ Tambah soalan",
        adminQuestionPlaceholder: "Patutkah kita…",
        adminRemoveQuestion: "Buang",
        adminQuestionLabel: (n) => `Soalan ${n}`,
        adminSave: "Simpan mesyuarat",
        adminEdit: "Edit",
        adminCancelEdit: "Batal",
        adminUpdate: "Kemas kini mesyuarat",
        adminUpdated: "Mesyuarat dikemas kini.",
        adminDelete: "Padam",
        adminSaved: "Mesyuarat disimpan.",
        adminHome: "← Ruang mesyuarat",
        adminView: "Buka",
    },
};

const DEFAULT_MEETINGS = [
    {
        id: "kickoff-2026",
        status: "active",
        startDate: { en: "Jul 28, 2026", bm: "28 Jul 2026" },
        endDate: { en: "Aug 4, 2026", bm: "4 Ogos 2026" },
        title: {
            en: "Belia PBB kickoff",
            bm: "Kickoff Belia PBB",
        },
        summary: {
            en: "First async meeting for Belia PBB. Align on how we use this space and what we want to focus on next.",
            bm: "Mesyuarat tidak segerak pertama untuk Belia PBB. Selaraskan cara kita guna ruang ini dan fokus seterusnya.",
        },
        chair: "Aina Rahman",
        minutesBy: "Daniel Ng",
        items: [
            {
                id: "use-async",
                question: {
                    en: "Should we keep this async meeting space as our default way to decide small matters?",
                    bm: "Patutkah kita kekalkan ruang mesyuarat tidak segerak ini sebagai cara lalai untuk keputusan kecil?",
                },
            },
            {
                id: "monthly-checkin",
                question: {
                    en: "Should we run one async check-in every month?",
                    bm: "Patutkah kita adakan satu check-in tidak segerak setiap bulan?",
                },
            },
        ],
    },
    {
        id: "programme-ideas",
        status: "active",
        startDate: { en: "Jul 28, 2026", bm: "28 Jul 2026" },
        endDate: { en: "Aug 4, 2026", bm: "4 Ogos 2026" },
        title: {
            en: "Programme ideas for Q3",
            bm: "Idea program untuk Suku 3",
        },
        summary: {
            en: "Share and vote on early programme ideas for Belia PBB members. Add notes with context before voting.",
            bm: "Kongsi dan undi idea awal program untuk ahli Belia PBB. Tambah nota dengan konteks sebelum mengundi.",
        },
        chair: "",
        minutesBy: "",
        items: [
            {
                id: "community-outreach",
                question: {
                    en: "Prioritise a community outreach day this quarter?",
                    bm: "Utamakan hari jangkauan komuniti pada suku ini?",
                },
            },
            {
                id: "skills-session",
                question: {
                    en: "Host a short skills / leadership session for members?",
                    bm: "Anjur sesi kemahiran / kepimpinan ringkas untuk ahli?",
                },
            },
            {
                id: "town-dialogue",
                question: {
                    en: "Organise a youth dialogue with local leaders?",
                    bm: "Anjur dialog belia dengan pemimpin tempatan?",
                },
            },
        ],
    },
    {
        id: "naming-space",
        status: "closed",
        startDate: { en: "Jul 14, 2026", bm: "14 Jul 2026" },
        endDate: { en: "Jul 20, 2026", bm: "20 Jul 2026" },
        title: {
            en: "Naming this meeting space",
            bm: "Penamaan ruang mesyuarat ini",
        },
        summary: {
            en: "Closed example meeting. Votes are locked.",
            bm: "Contoh mesyuarat ditutup. Undian dikunci.",
        },
        chair: "Sofia Tan",
        minutesBy: "Aina Rahman",
        minutes: {
            en: "The meeting agreed to keep the name “Belia PBB Meeting Space” for now. Two members voted Yes and one abstained. Aina noted that the name can be revisited later if needed.",
            bm: "Mesyuarat bersetuju mengekalkan nama “Ruang Mesyuarat Belia PBB” buat masa ini. Dua ahli mengundi Ya dan seorang abstain. Aina mencatat bahawa nama boleh dinilai semula kemudian jika perlu.",
        },
        items: [
            {
                id: "keep-name",
                question: {
                    en: "Keep the name “Belia PBB Meeting Space” for now?",
                    bm: "Kekalkan nama “Ruang Mesyuarat Belia PBB” buat masa ini?",
                },
            },
        ],
    },
];

function cloneMeetings(meetings) {
    return JSON.parse(JSON.stringify(meetings));
}

function getMeetings() {
    try {
        const raw = localStorage.getItem(MEETINGS_KEY);
        if (!raw) {
            localStorage.setItem(MEETINGS_KEY, JSON.stringify(DEFAULT_MEETINGS));
            return cloneMeetings(DEFAULT_MEETINGS);
        }
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : cloneMeetings(DEFAULT_MEETINGS);
    } catch {
        return cloneMeetings(DEFAULT_MEETINGS);
    }
}

function saveMeetings(meetings) {
    localStorage.setItem(MEETINGS_KEY, JSON.stringify(meetings));
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

function createMeetingFromForm({
    title,
    startDate,
    endDate,
    summary,
    chair,
    minutesBy,
    minutes,
    questions,
}) {
    const meetings = getMeetings();
    const id = uniqueMeetingId(title, meetings);
    const agenda = (questions || [])
        .map((question) => String(question || "").trim())
        .filter(Boolean);

    const start = bilingual(startDate);
    const end = bilingual(endDate || startDate);

    const meeting = {
        id,
        status: "active",
        startDate: start,
        endDate: end,
        title: bilingual(title),
        summary: bilingual(summary),
        chair: String(chair || "").trim(),
        minutesBy: String(minutesBy || "").trim(),
        items: agenda.map((question, index) => ({
            id: `q${index + 1}`,
            question: bilingual(question),
        })),
    };

    const minutesText = String(minutes || "").trim();
    if (minutesText) meeting.minutes = bilingual(minutesText);

    meetings.unshift(meeting);
    saveMeetings(meetings);
    return meeting;
}

function updateMeetingFromForm(id, payload) {
    const meetings = getMeetings();
    const index = meetings.findIndex((meeting) => meeting.id === id);
    if (index < 0) return null;

    const agenda = (payload.questions || [])
        .map((question) => String(question || "").trim())
        .filter(Boolean);

    const current = meetings[index];
    const start = bilingual(payload.startDate);
    const end = bilingual(payload.endDate || payload.startDate);
    const updated = {
        ...current,
        startDate: start,
        endDate: end,
        title: bilingual(payload.title),
        summary: bilingual(payload.summary),
        chair: String(payload.chair || "").trim(),
        minutesBy: String(payload.minutesBy || "").trim(),
        items: agenda.map((question, questionIndex) => ({
            id: `q${questionIndex + 1}`,
            question: bilingual(question),
        })),
    };
    delete updated.date;

    const minutesText = String(payload.minutes || "").trim();
    if (minutesText) updated.minutes = bilingual(minutesText);
    else delete updated.minutes;

    meetings[index] = updated;
    saveMeetings(meetings);
    return updated;
}

function deleteMeeting(id) {
    const next = getMeetings().filter((meeting) => meeting.id !== id);
    saveMeetings(next);
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

function defaultState() {
    return {
        votes: {
            "naming-space::keep-name::member-demo1": { choice: "yes", name: "Aina" },
            "naming-space::keep-name::member-demo2": { choice: "yes", name: "Daniel" },
            "naming-space::keep-name::member-demo3": { choice: "abstain", name: "Sofia" },
        },
        notes: {
            "naming-space": [
                {
                    text: "Works for now. We can rename later if needed.",
                    name: "Aina",
                    when: "Jul 20, 2026",
                },
            ],
        },
        comments: {
            "naming-space::keep-name": [
                {
                    text: "Works for now. We can rename later if needed.",
                    name: "Aina",
                    when: "Jul 20, 2026",
                },
            ],
        },
        roles: {},
        attendees: {
            "naming-space": ["Aina", "Daniel", "Sofia"],
        },
    };
}

function loadState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return defaultState();
        const parsed = JSON.parse(raw);
        return {
            votes: parsed.votes || {},
            notes: parsed.notes || {},
            comments: parsed.comments || {},
            roles: parsed.roles || {},
            attendees: parsed.attendees || {},
        };
    } catch {
        return defaultState();
    }
}

function saveState(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
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

function getVoterId() {
    let id = localStorage.getItem("belia-pbb-voter-id");
    if (!id) {
        id = `member-${Math.random().toString(36).slice(2, 10)}`;
        localStorage.setItem("belia-pbb-voter-id", id);
    }
    return id;
}

function meetingUrl(id) {
    return `meeting.html?id=${encodeURIComponent(id)}`;
}

function discussionUrl(id) {
    return `discussion.html?id=${encodeURIComponent(id)}`;
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

function isAdminPage() {
    return Boolean(document.getElementById("admin-form"));
}

function applyStaticCopy(pageTitle) {
    const lang = getLang();
    document.documentElement.lang = lang === "bm" ? "ms" : "en";
    document.title = pageTitle || t("pageTitle");

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        const value = t(key);
        if (typeof value === "string") el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
        const key = el.getAttribute("data-i18n-aria");
        const value = t(key);
        if (typeof value === "string") el.setAttribute("aria-label", value);
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

    meetings.forEach((meeting) => {
        const li = document.createElement("li");
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

function getMeetingRoles(meeting, state) {
    const saved = (state.roles && state.roles[meeting.id]) || {};
    return {
        chair: (saved.chair || meeting.chair || "").trim(),
        minutesBy: (saved.minutesBy || meeting.minutesBy || "").trim(),
    };
}

function ensureJoined(meetingId, memberName) {
    const name = (memberName || "").trim();
    if (!meetingId || !name) return loadState();

    const state = loadState();
    const existing = state.attendees[meetingId] || [];
    const alreadyIn = existing.some((entry) => entry.toLowerCase() === name.toLowerCase());
    if (alreadyIn) return state;

    state.attendees[meetingId] = [...existing, name];
    saveState(state);
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

function renderMeetingRoles(meeting, state, locked) {
    const roles = getMeetingRoles(meeting, state);
    const chairEl = document.getElementById("meeting-chair");
    const minutesEl = document.getElementById("meeting-minutes");
    if (!chairEl || !minutesEl) return;

    chairEl.replaceChildren(renderRoleValue("chair", roles.chair, meeting, locked));
    minutesEl.replaceChildren(renderRoleValue("minutesBy", roles.minutesBy, meeting, locked));
}

function renderRoleValue(field, value, meeting, locked) {
    if (locked) {
        const span = document.createElement("span");
        span.textContent = value || t("roleUnset");
        return span;
    }

    const input = document.createElement("input");
    input.type = "text";
    input.className = "role-input";
    input.value = value;
    input.placeholder = t("roleUnset");
    input.setAttribute("aria-label", field === "chair" ? t("chairedBy") : t("minutesBy"));
    input.addEventListener("change", () => {
        const next = loadState();
        if (!next.roles[meeting.id]) next.roles[meeting.id] = {};
        next.roles[meeting.id][field] = input.value.trim();
        saveState(next);
        renderAll();
    });
    return input;
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
    renderMeetingRoles(meeting, state, locked);
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

    const voterId = getVoterId();
    if (agendaRoot) {
        agendaRoot.innerHTML = "";
        const agenda = document.createElement("ul");
        agenda.className = "agenda";
        meeting.items.forEach((item) => {
            agenda.appendChild(renderAgendaItem(meeting, item, state, voterId, locked, memberName));
        });
        agendaRoot.appendChild(agenda);
    }
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

    const voterId = getVoterId();
    agendaRoot.innerHTML = "";
    const agenda = document.createElement("ul");
    agenda.className = "agenda";
    meeting.items.forEach((item) => {
        agenda.appendChild(renderAgendaItem(meeting, item, state, voterId, locked, memberName));
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
        const textarea = document.createElement("textarea");
        textarea.id = `comment-${meeting.id}-${item.id}`;
        textarea.setAttribute("aria-label", t("comments"));
        textarea.placeholder = t("commentPlaceholder");

        const button = document.createElement("button");
        button.type = "button";
        button.textContent = t("addComment");
        button.addEventListener("click", () => {
            const text = textarea.value.trim();
            if (!text) return;
            const next = loadState();
            if (!next.comments[key]) next.comments[key] = [];
            next.comments[key].push({
                text,
                name: memberName,
                when: new Date().toLocaleString(),
            });
            saveState(next);
            renderAll();
        });

        wrap.appendChild(textarea);
        wrap.appendChild(button);
    }

    return wrap;
}

function renderAgendaItem(meeting, item, state, voterId, locked, memberName) {
    const li = document.createElement("li");
    li.className = "agenda-item";

    const question = document.createElement("p");
    question.className = "agenda-question";
    question.textContent = localized(item.question);
    li.appendChild(question);

    const myKey = `${voteKey(meeting.id, item.id)}::${voterId}`;
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
                const next = loadState();
                if (myVote && myVote.choice === choice) {
                    delete next.votes[myKey];
                } else {
                    next.votes[myKey] = { choice, name: memberName };
                }
                saveState(next);
                renderAll();
            });
        }
        row.appendChild(btn);
    });

    const countsEl = document.createElement("p");
    countsEl.className = "vote-counts";
    countsEl.textContent = t("votes")(counts);

    const roster = document.createElement("p");
    roster.className = "vote-roster";
    const parts = [
        t("voteBy")(t("yes"), names.yes),
        t("voteBy")(t("no"), names.no),
        t("voteBy")(t("abstain"), names.abstain),
    ].filter(Boolean);
    roster.textContent = parts.join(" · ");

    li.appendChild(row);
    li.appendChild(countsEl);
    if (parts.length) li.appendChild(roster);
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

function renderAdminPage() {
    applyStaticCopy(t("adminPageTitle"));

    const form = document.getElementById("admin-form");
    const editingId = form?.dataset.editingId || "";
    const saveBtn = form?.querySelector('button[type="submit"]');
    if (saveBtn) {
        saveBtn.textContent = editingId ? t("adminUpdate") : t("adminSave");
    }
    const heading = document.getElementById("admin-form-heading");
    if (heading) {
        heading.textContent = editingId ? t("adminUpdate") : t("adminAddMeeting");
    }

    const addQuestionBtn = document.getElementById("admin-add-question");
    if (addQuestionBtn) addQuestionBtn.textContent = t("adminAddQuestion");

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
    meetings.forEach((meeting) => {
        const li = document.createElement("li");
        const statusLabel =
            meeting.status === "closed" ? t("adminStatusClosed") : t("adminStatusActive");
        li.innerHTML = `
            <span class="list-title">
                <a href="${meetingUrl(meeting.id)}">${escapeHtml(localized(meeting.title))}</a>
                <span class="meeting-meta"> · ${escapeHtml(statusLabel)}</span>
            </span>
            <span class="admin-meeting-actions">
                <button type="button" class="text-btn" data-edit-meeting="${escapeHtml(meeting.id)}">${escapeHtml(t("adminEdit"))}</button>
                <button type="button" class="text-btn" data-delete-meeting="${escapeHtml(meeting.id)}">${escapeHtml(t("adminDelete"))}</button>
            </span>
        `;
        ul.appendChild(li);
    });
    list.appendChild(ul);
}

function setupAdminForm() {
    const form = document.getElementById("admin-form");
    if (!form || form.dataset.bound === "true") return;
    form.dataset.bound = "true";

    const composer = document.getElementById("admin-composer");
    const showAddBtn = document.getElementById("admin-show-add");
    const startDateInput = document.getElementById("admin-start-date");
    const endDateInput = document.getElementById("admin-end-date");
    const questionsRoot = document.getElementById("admin-questions");
    const cancelBtn = document.getElementById("admin-cancel-edit");

    function setComposerOpen(open) {
        if (!composer) return;
        composer.hidden = !open;
        if (showAddBtn) showAddBtn.setAttribute("aria-expanded", open ? "true" : "false");
    }

    function openComposer(meeting = null) {
        fillForm(meeting);
        setComposerOpen(true);
        const notice = document.getElementById("admin-notice");
        if (notice) notice.hidden = true;
        composer?.scrollIntoView({ behavior: "smooth", block: "start" });
        document.getElementById("admin-title")?.focus();
    }

    function closeComposer() {
        fillForm(null);
        setComposerOpen(false);
        const notice = document.getElementById("admin-notice");
        if (notice) notice.hidden = true;
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

    function fillForm(meeting) {
        form.dataset.editingId = meeting?.id || "";
        const today = defaultDateLabel();
        document.getElementById("admin-title").value = meeting ? localized(meeting.title) : "";
        document.getElementById("admin-start-date").value = meeting
            ? localized(meetingStartDate(meeting)) || today
            : today;
        document.getElementById("admin-end-date").value = meeting
            ? localized(meetingEndDate(meeting)) || today
            : today;
        document.getElementById("admin-summary").value = meeting ? localized(meeting.summary) : "";
        document.getElementById("admin-chair").value = meeting?.chair || "";
        document.getElementById("admin-minutes-by").value = meeting?.minutesBy || "";
        document.getElementById("admin-minutes").value = meeting?.minutes
            ? localized(meeting.minutes)
            : "";
        resetQuestions(
            meeting?.items?.length
                ? meeting.items.map((item) => localized(item.question))
                : [""]
        );
        const saveBtn = form.querySelector('button[type="submit"]');
        if (saveBtn) saveBtn.textContent = meeting ? t("adminUpdate") : t("adminSave");
        const heading = document.getElementById("admin-form-heading");
        if (heading) heading.textContent = meeting ? t("adminUpdate") : t("adminAddMeeting");
    }

    if (startDateInput && !startDateInput.value) {
        startDateInput.value = defaultDateLabel();
    }
    if (endDateInput && !endDateInput.value) {
        endDateInput.value = defaultDateLabel();
    }

    if (questionsRoot && !questionsRoot.children.length) {
        resetQuestions([""]);
    }

    setComposerOpen(false);
    if (showAddBtn) {
        showAddBtn.setAttribute("aria-expanded", "false");
        showAddBtn.setAttribute("aria-controls", "admin-composer");
        showAddBtn.addEventListener("click", () => openComposer(null));
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

    if (cancelBtn) {
        cancelBtn.addEventListener("click", () => {
            closeComposer();
        });
    }

    document.getElementById("admin-meetings")?.addEventListener("click", (event) => {
        const editBtn = event.target.closest("[data-edit-meeting]");
        if (editBtn) {
            const id = editBtn.getAttribute("data-edit-meeting");
            const meeting = findMeeting(id);
            if (!meeting) return;
            openComposer(meeting);
            return;
        }

        const deleteBtn = event.target.closest("[data-delete-meeting]");
        if (deleteBtn) {
            const id = deleteBtn.getAttribute("data-delete-meeting");
            if (!id) return;
            deleteMeeting(id);
            if (form.dataset.editingId === id) closeComposer();
            renderAdminPage();
        }
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const title = document.getElementById("admin-title")?.value || "";
        const startDate = document.getElementById("admin-start-date")?.value || "";
        const endDate = document.getElementById("admin-end-date")?.value || "";
        const summary = document.getElementById("admin-summary")?.value || "";
        const chair = document.getElementById("admin-chair")?.value || "";
        const minutesBy = document.getElementById("admin-minutes-by")?.value || "";
        const minutes = document.getElementById("admin-minutes")?.value || "";
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
            minutes,
            questions,
        };

        const editingId = form.dataset.editingId || "";
        if (editingId) updateMeetingFromForm(editingId, payload);
        else createMeetingFromForm(payload);

        fillForm(null);
        setComposerOpen(false);

        const notice = document.getElementById("admin-notice");
        if (notice) {
            notice.hidden = false;
            notice.textContent = editingId ? t("adminUpdated") : t("adminSaved");
        }
        renderAdminPage();
    });
}

function renderAll() {
    if (isAdminPage()) {
        renderAdminPage();
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

setupLangToggle();
setupThemeToggle();
setupNameGate();
setupAttendeesDialog();
setupAdminForm();
applyTheme();
renderAll();
