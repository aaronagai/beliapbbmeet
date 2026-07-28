const STORAGE_KEY = "belia-pbb-meeting-space-v1";
const LANG_KEY = "belia-pbb-lang";
const NAME_KEY = "belia-pbb-member-name";

const I18N = {
    en: {
        title: "Belia PBB Meeting Space",
        pageTitle: "Belia PBB Meeting Space",
        updated: "Updated Jul 28, 2026",
        intro1:
            "A quiet place for Belia PBB to meet asynchronously — raise topics, leave notes, and vote when a decision is needed.",
        intro2:
            "No live call required. Read the agenda, add your view, cast your vote, and come back when you can.",
        howItWorks: "How it works",
        step1: "Open a meeting and read the agenda",
        step2: "Leave a short note if you have something to add",
        step3: "Vote Yes, No, or Abstain on items that need a decision",
        activeMeetings: "Active meetings",
        closedMeetings: "Closed",
        noActive: "No active meetings.",
        noClosed: "No closed meetings yet.",
        notes: "Notes",
        noNotes: "No notes yet.",
        notePlaceholder: "Leave a short note for the group…",
        addNote: "Add note",
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
    },
    bm: {
        title: "Ruang Mesyuarat Belia PBB",
        pageTitle: "Ruang Mesyuarat Belia PBB",
        updated: "Dikemas kini 28 Jul 2026",
        intro1:
            "Ruang tenang untuk Belia PBB bermesyuarat secara tidak segerak — kemukakan topik, tinggalkan nota, dan undi bila keputusan diperlukan.",
        intro2:
            "Tiada panggilan langsung diperlukan. Baca agenda, kongsikan pandangan, undi, dan kembali bila anda boleh.",
        howItWorks: "Cara ia berfungsi",
        step1: "Buka mesyuarat dan baca agenda",
        step2: "Tinggalkan nota ringkas jika ada sesuatu untuk dikongsi",
        step3: "Undi Ya, Tidak, atau Abstain bagi perkara yang perlu keputusan",
        activeMeetings: "Mesyuarat aktif",
        closedMeetings: "Ditutup",
        noActive: "Tiada mesyuarat aktif.",
        noClosed: "Belum ada mesyuarat ditutup.",
        notes: "Nota",
        noNotes: "Belum ada nota.",
        notePlaceholder: "Tinggalkan nota ringkas untuk kumpulan…",
        addNote: "Tambah nota",
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

function getMeetingIdFromQuery() {
    return new URLSearchParams(window.location.search).get("id");
}

function findMeeting(id) {
    return MEETINGS.find((meeting) => meeting.id === id) || null;
}

function isMeetingPage() {
    return Boolean(document.getElementById("meeting-title"));
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

function renderMeetingPage() {
    const meeting = findMeeting(getMeetingIdFromQuery());
    const gate = document.getElementById("name-gate");
    const content = document.getElementById("meeting-content");
    const titleEl = document.getElementById("meeting-title");
    const dateEl = document.getElementById("meeting-date");
    const summaryEl = document.getElementById("meeting-summary");
    const agendaRoot = document.getElementById("agenda");
    const notesRoot = document.getElementById("notes");
    const memberStatus = document.getElementById("member-status");
    const nameInput = document.getElementById("member-name");
    const memberName = getMemberName();

    if (!meeting) {
        applyStaticCopy(t("pageTitle"));
        gate.hidden = true;
        content.hidden = false;
        titleEl.textContent = t("notFound");
        dateEl.textContent = "";
        summaryEl.textContent = "";
        agendaRoot.innerHTML = "";
        notesRoot.innerHTML = "";
        memberStatus.textContent = "";
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
    titleEl.textContent = title;
    dateEl.textContent = locked
        ? `${localized(meeting.date)} · ${t("closedLabel")}`
        : localized(meeting.date);
    summaryEl.textContent = localized(meeting.summary);

    const state = loadState();
    const voterId = getVoterId();

    agendaRoot.innerHTML = "";
    const agenda = document.createElement("ul");
    agenda.className = "agenda";
    meeting.items.forEach((item) => {
        agenda.appendChild(renderAgendaItem(meeting, item, state, voterId, locked, memberName));
    });
    agendaRoot.appendChild(agenda);

    notesRoot.innerHTML = "";
    notesRoot.appendChild(renderNotes(meeting, state, locked, memberName));
}

function renderNotes(meeting, state, locked, memberName) {
    const notesWrap = document.createElement("div");
    notesWrap.className = "notes";

    const noteList = document.createElement("ul");
    noteList.className = "note-list";
    const notes = state.notes[meeting.id] || [];

    if (!notes.length) {
        const empty = document.createElement("li");
        empty.className = "note-empty";
        empty.textContent = t("noNotes");
        noteList.appendChild(empty);
    } else {
        notes.forEach((note) => {
            const li = document.createElement("li");
            const who = note.name || t("notes");
            li.innerHTML = `${escapeHtml(note.text)}<span class="note-meta">${escapeHtml(who)} · ${escapeHtml(note.when)}</span>`;
            noteList.appendChild(li);
        });
    }

    if (!locked) {
        const textarea = document.createElement("textarea");
        textarea.id = `note-${meeting.id}`;
        textarea.setAttribute("aria-label", t("notes"));
        textarea.placeholder = t("notePlaceholder");

        const button = document.createElement("button");
        button.type = "button";
        button.textContent = t("addNote");
        button.addEventListener("click", () => {
            const text = textarea.value.trim();
            if (!text) return;
            const next = loadState();
            if (!next.notes[meeting.id]) next.notes[meeting.id] = [];
            next.notes[meeting.id].push({
                text,
                name: memberName,
                when: new Date().toLocaleString(),
            });
            saveState(next);
            renderAll();
        });

        notesWrap.appendChild(textarea);
        notesWrap.appendChild(button);
    }

    notesWrap.appendChild(noteList);
    return notesWrap;
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
                next.votes[myKey] = { choice, name: memberName };
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
    if (isMeetingPage()) {
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

setupLangToggle();
setupNameGate();
renderAll();
