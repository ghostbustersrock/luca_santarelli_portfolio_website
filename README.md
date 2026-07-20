# Luca Santarelli — Portfolio

Personal portfolio site. Originally scaffolded by [Base44](https://base44.com), but now decoupled to run and deploy independently — no Base44 backend is required at runtime.

## Prerequisites

- Node.js 18+
- npm

## Local Development

```bash
npm install
npm run dev
```

Open the local URL Vite prints (defaults to `http://localhost:5173`).

## Environment Variables

Create a `.env.local` file in the project root (already gitignored):

```bash
VITE_WEB3FORMS_ACCESS_KEY=your-web3forms-access-key
```

This powers the contact form — see [Contact Form](#contact-form) below. Without it, the form shows an error toast instead of submitting.

## Available Scripts

- `npm run dev` — start the Vite dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build locally
- `npm run lint` / `npm run lint:fix` — ESLint
- `npm run typecheck` — `tsc` against `jsconfig.json`. Pre-existing gaps in that config mean it currently reports some false-positive errors on plain JSX prop usage (unrelated to real bugs) — `lint` and `build` are the checks that actually gate shipping.

## Contact Form

The "Get in Touch" form (`src/components/portfolio/ContactSection.jsx`) submits directly to [Web3Forms](https://web3forms.com), which forwards messages to `luca.santarelli@hotmail.it`. There's no backend of our own involved. Get a free access key at web3forms.com and set it as `VITE_WEB3FORMS_ACCESS_KEY` (see above).

## Deployment (Render)

This repo includes a `render.yaml` Blueprint for deploying as a Render **Static Site**:

- Build command: `npm install && npm run build`
- Publish directory: `./dist`
- SPA rewrite: all paths fall back to `/index.html`

To deploy:

1. Push this repo to GitHub (or GitLab).
2. In the [Render Dashboard](https://dashboard.render.com), click **New +** → **Blueprint** and connect the repo.
3. Render detects `render.yaml` and provisions the static site automatically.
4. Add `VITE_WEB3FORMS_ACCESS_KEY` under the service's **Settings → Environment**, then trigger a deploy so it's baked into the build.

Every push to `main` DOES NOT auto-deploy. You will have to do this manually via your Render dashboard.

## Notes

- `src/api/base44Client.js` and the `@base44/sdk` dependency are still present but unused at runtime — kept only because a handful of unrouted pages below still import from it.
- The following exist in the codebase but aren't wired into any route (`src/App.jsx` only routes `/`): `src/pages/Login.jsx`, `Register.jsx`, `ForgotPassword.jsx`, `ResetPassword.jsx`, and their supporting `src/components/AuthLayout.jsx`, `GoogleIcon.jsx`, `ProtectedRoute.jsx`. Kept intentionally in case they're needed later — safe to ignore otherwise.
