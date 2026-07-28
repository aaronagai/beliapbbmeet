# Belia PBB Meeting Space

A basic asynchronous meeting space for Belia PBB — raise topics, leave notes, and vote.

Styled after [aaronagai.github.io](https://aaronagai.github.io): minimal, single-column, no chrome.

## Features (v1)

- Active and closed meetings
- Agenda items with Yes / No / Abstain votes
- Short notes per meeting
- Votes and notes stored in the browser (`localStorage`)

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Notes

This is intentionally basic. Votes are local to each browser until a shared backend is added.
