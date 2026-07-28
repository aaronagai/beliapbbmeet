const STORAGE_KEY = "belia-pbb-meeting-space-v1";
const LANG_KEY = "belia-pbb-lang";
const NAME_KEY = "belia-pbb-member-name";
const THEME_KEY = "belia-pbb-theme";

const I18N = {
    en: {
        title: "Belia PBB Meeting Space",
        pageTitle: "Belia PBB Meeting Space",
        updated: "Updated Jul 28, 2026",
        intro1:
            "A quiet place for Belia PBB to meet asynchronously — raise topics, leave notes, and vote when a decision is needed.",
        intro2:
            "No live call required. Read the agenda, add your view, cast your vote, and come back when you can.",
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
        attendeesHint: "People who contributed to this meeting.",
        noAttendees: "No attendees yet.",
        close: "Close",
        roleChair: "Chair",
        roleMinutes: "Minutes",
        roleVoted: "Voted",
        roleCommented: "Commented",
        roleJoined: "Joined",
        themeLight: "Light",
        themeDark: "Dark",
        themeSystem: "System",
        themeSwitchLabel: (mode) => `Theme: ${mode}. Click to change.`,
        minutesHeading: "Minutes",
        openDiscussion: "Open discussion",
        discussionHeading: "Discussion",
        backToMeeting: "← Back to meeting",
        discussionPageTitle: (name) => `${name} · Discussion · Belia PBB`,
        noMinutes: "No minutes recorded yet.",
    },
    bm: {
        title: "Ruang Mesyuarat Belia PBB",
        pageTitle: "Ruang Mesyuarat Belia PBB",
        updated: "Dikemas kini 28 Jul 2026",
        intro1:
            "Ruang tenang untuk Belia PBB bermesyuarat secara tidak segerak — kemukakan topik, tinggalkan nota, dan undi bila keputusan diperlukan.",
        intro2:
            "Tiada panggilan langsung diperlukan. Baca agenda, kongsikan pandangan, undi, dan kembali bila anda boleh.",
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
        attendeesHint: "Orang yang menyumbang dalam mesyuarat ini.",
        noAttendees: "Belum ada hadirin.",
        close: "Tutup",
        roleChair: "Pengerusi",
        roleMinutes: "Minit",
        roleVoted: "Mengundi",
        roleCommented: "Berkomen",
        roleJoined: "Menyertai",
        themeLight: "Cerah",
        themeDark: "Gelap",
        themeSystem: "Sistem",
        themeSwitchLabel: (mode) => `Tema: ${mode}. Klik untuk tukar.`,
        minutesHeading: "Minit",
        openDiscussion: "Buka perbincangan",
        discussionHeading: "Perbincangan",
        backToMeeting: "← Kembali ke mesyuarat",
        discussionPageTitle: (name) => `${name} · Perbincangan · Belia PBB`,
        noMinutes: "Belum ada minit direkod.",
    },
};

const MEETINGS = [
    {
        id: "kickoff-2026",
        status: "active",
        date: { en: "Jul 28, 2026", bm: "28 Jul 2026" },
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
        date: { en: "Jul 28, 2026", bm: "28 Jul 2026" },
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
        date: { en: "Jul 20, 2026", bm: "20 Jul 2026" },
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
    return MEETINGS.find((meeting) => meeting.id === id) || null;
}

function isMeetingPage() {
    return Boolean(document.getElementById("meeting-title"));
}

function isDiscussionPage() {
    return Boolean(document.getElementById("discussion-title"));
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

    const active = MEETINGS.filter((m) => m.status === "active");
    const closed = MEETINGS.filter((m) => m.status === "closed");

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
            <span class="meeting-meta">${escapeHtml(localized(meeting.date))}</span>
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

function collectAttendees(meeting, state, currentMember) {
    const people = new Map();

    function add(name, role) {
        const cleaned = (name || "").trim();
        if (!cleaned) return;
        const key = cleaned.toLowerCase();
        if (!people.has(key)) {
            people.set(key, { name: cleaned, roles: [] });
        }
        const entry = people.get(key);
        if (role && !entry.roles.includes(role)) entry.roles.push(role);
    }

    const roles = getMeetingRoles(meeting, state);
    add(roles.chair, t("roleChair"));
    add(roles.minutesBy, t("roleMinutes"));
    add(currentMember, t("roleJoined"));

    const votePrefix = `${meeting.id}::`;
    Object.keys(state.votes || {}).forEach((key) => {
        if (!key.startsWith(votePrefix)) return;
        const entry = normalizeVote(state.votes[key]);
        if (entry) add(entry.name, t("roleVoted"));
    });

    Object.keys(state.comments || {}).forEach((key) => {
        if (!key.startsWith(votePrefix)) return;
        (state.comments[key] || []).forEach((comment) => {
            add(comment.name, t("roleCommented"));
        });
    });

    return [...people.values()].sort((a, b) =>
        a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
    );
}

function renderAttendeesList(meeting, state, currentMember) {
    const list = document.getElementById("attendees-list");
    if (!list) return;
    list.innerHTML = "";

    const attendees = collectAttendees(meeting, state, currentMember);
    if (!attendees.length) {
        list.innerHTML = `<li class="empty-item">${escapeHtml(t("noAttendees"))}</li>`;
        return;
    }

    attendees.forEach((person) => {
        const li = document.createElement("li");
        const roles = person.roles.length ? person.roles.join(" · ") : "";
        li.innerHTML = `
            <span class="list-title">${escapeHtml(person.name)}</span>
            ${roles ? `<span class="meeting-meta">${escapeHtml(roles)}</span>` : ""}
        `;
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
    const state = loadState();
    titleEl.textContent = title;
    dateEl.textContent = locked
        ? `${localized(meeting.date)} · ${t("closedLabel")}`
        : localized(meeting.date);
    if (rolesEl) rolesEl.hidden = false;
    renderMeetingRoles(meeting, state, locked);
    renderAttendeesList(meeting, state, memberName);

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
    const state = loadState();
    titleEl.textContent = title;
    dateEl.textContent = `${localized(meeting.date)} · ${t("closedLabel")}`;
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

function renderAll() {
    if (isDiscussionPage()) {
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
applyTheme();
renderAll();
