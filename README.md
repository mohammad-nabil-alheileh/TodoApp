# Todo List (React)

A small bilingual (English / Arabic) todo app built with React and Vite. It loads its data from a fake server that is slow and sometimes fails, so the loading, error and retry states are all part of the app.

## Features

- Add a todo by title. Empty or spaces-only titles are rejected with a message.
- Mark a todo as done or not done, and delete it.
- Filter the list by **All**, **Active** and **Done**.
- Footer always shows the correct "X items left" count.
- The input stays focused after adding, so you can keep typing without clicking.
- Todos load from a fake server that takes 1 second and fails about 1 time in 3.
- Loading message plus skeleton placeholders while waiting. On failure, an error message and a **Retry** button.
- Switch between English and Arabic. All text changes immediately, including loading and error messages, and the layout switches to right-to-left.
- Responsive list: 1 column on narrow windows, 2 columns on wide windows (720px and up).

## Getting started

Requires [Node.js](https://nodejs.org/) 18 or newer.

```bash
npm install
npm run dev
```

Then open the address Vite prints, usually `http://localhost:5173`.

Other scripts:

```bash
npm run build     # production build in /dist
npm run preview   # serve the production build locally
```

## Project structure

```
src/
├── api/
│   └── fakeServer.js        # 1s delay, ~1 in 3 requests fail
├── components/
│   ├── Button.jsx           # reusable button (chip / primary variants)
│   ├── FilterBar.jsx        # All / Active / Done
│   ├── Header.jsx           # title + language switcher
│   ├── LanguageSwitcher.jsx # EN / AR toggle
│   ├── StatusMessage.jsx    # loading and error + Retry
│   ├── TodoFooter.jsx       # "X items left"
│   ├── TodoForm.jsx         # input + Add, validation, refocus
│   ├── TodoItem.jsx         # one todo: checkbox, title, delete
│   ├── TodoList.jsx         # renders the todos
│   ├── TodoSkeleton.jsx     # placeholder rows shown while loading
│   └── TrashIcon.jsx
├── hooks/
│   └── useTodos.js          # todos state, loading status, add/toggle/delete/retry
├── i18n/
│   └── translations.js      # English and Arabic text
├── utils/
│   ├── createId.js          # unique id generator
│   └── filters.js           # filter predicates
├── App.jsx                  # language + filter state, wires everything together
├── index.css
└── main.jsx
```

## Semantic HTML and accessibility

- Page landmarks: `<header>` (title and language `<nav>`), `<main>`, a `<section>` named by the page heading, and a `<footer>` for the item count.
- A real `<label>` is tied to the input with `htmlFor`/`id` (visually hidden, so the design stays the same).
- The list is a `<ul>` with `<li>` items, and each checkbox sits inside its `<label>`.
- Filters and the language switcher are labelled groups, and the active one uses `aria-pressed`.
- Loading uses `role="status"` and `aria-busy`, errors use `role="alert"`, and the item count is a polite live region.
- Skeleton rows are `aria-hidden`, so screen readers hear the loading message instead of empty boxes.
- The skeleton shimmer is disabled for users who prefer reduced motion.

## Design decisions

- **Todos are tracked by id, never by index.** Toggle and delete look the todo up by its id, and React's `key` is the id too, so filtering or deleting never affects the wrong item.
- **The footer count is derived, not stored.** It is calculated from the todos on every render, so it cannot go out of sync.
- **Input is validated.** Titles must be strings, are trimmed, must not be empty, and are limited to 120 characters.
- **The form never refreshes the page.** The submit handler calls `preventDefault()`.
- **Stale responses are ignored.** A request counter in `useTodos` discards late replies, so pressing Retry cannot be overwritten by an older request.
- **Props over globals.** Components get what they need through props, and `PropTypes` documents and checks them.
- **Right-to-left support.** The app sets `lang` and `dir` on the document and uses logical CSS properties, so the layout mirrors in Arabic.

## Tech stack

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [prop-types](https://www.npmjs.com/package/prop-types)