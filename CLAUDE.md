# CLAUDE.md

## Project Context

This is Luca Santarelli's personal portfolio site. It was originally scaffolded by [Base44](https://base44.com), but has since been decoupled to run and deploy independently — there is no Base44 backend involved at runtime, and it is no longer published through the Base44 dashboard. Treat it as user-owned application code, keep changes focused on the user's request, and preserve existing project conventions.

Start with `README.md` for local setup, environment variables, and the Render deploy workflow.

## Key Files

- `src/`: frontend application source. `src/pages/Home.jsx` is the only routed page (see `src/App.jsx`); the site is a single-page portfolio.
- `src/api/base44Client.js`: Base44 SDK client. Still present but unused at runtime — only imported by the unrouted auth pages below.
- `src/components/portfolio/`: the actual portfolio sections rendered on the site (Hero, About, Experience, Projects, Skills, Contact, etc.).
- `render.yaml`: Render Static Site Blueprint (build command, publish dir, SPA rewrite).
- `.env.local`: local-only environment values; never commit secrets. Currently only `VITE_WEB3FORMS_ACCESS_KEY` is needed, for the contact form.

## Unrouted / dead code — kept intentionally

`src/App.jsx` only defines routes for `/` (Home) and a catch-all 404. The following exist in the repo but are not reachable from any route, left over from the Base44 auth scaffold: `src/pages/Login.jsx`, `Register.jsx`, `ForgotPassword.jsx`, `ResetPassword.jsx`, and their supporting `src/components/AuthLayout.jsx`, `GoogleIcon.jsx`, `ProtectedRoute.jsx`. The user wants these kept for possible future use — don't remove them, and don't feel obligated to fix bugs or typecheck errors within them unless asked.

## Working Notes

- Use `npm run dev` for local development (plain Vite dev server) — there is no local Base44 backend to run.
- Deploys go through Render as a Static Site via `render.yaml`, not the Base44 dashboard.
- The contact form (`src/components/portfolio/ContactSection.jsx`) submits client-side to Web3Forms — no server code of ours is involved, and none should be needed for a static portfolio.
- Run the relevant checks from `package.json` (`lint`, `build`) before finishing code changes. `typecheck` has pre-existing `jsconfig.json` include/exclude gaps that cause false positives on plain JSX prop usage — not a reliable signal, don't chase it unless specifically asked to fix that config.
