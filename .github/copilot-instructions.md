# Copilot instructions for this repository

Purpose: give AI coding agents just enough context to be productive quickly in this codebase.

## Big picture

- Monorepo-ish layout; the frontend lives under `pms/` and is a React + TypeScript + Vite app. Hosting is via Firebase; Functions are scaffolded but mostly unused by the frontend.
- App shell: `pms/src/main.tsx` mounts `pms/src/App.tsx`, which renders the router in `pms/src/routes/AppRouter.tsx`.
- Routing (React Router v7): see `AppRouter.tsx` for top-level routes like `home`, `leaseadmin`, and resource pages with URL params: `lease/:id/*`, `unit/:id/*`, `property/:id/*`, `owner/:id/*`.
- UI composition: pages (`pms/src/pages/**`) stitch together layout components (`components/Layouts`), domain sections (`components/{Lease,Property,Owner,Unit}`), and reusable UI primitives (`components/ui/**`). Styles are CSS Modules (`*.module.css`).
- Data flow: most screens render from static mocks under `pms/src/data/**` (e.g., `leaseDetails.ts`). Some components fetch from a backend using `import.meta.env.VITE_API_BASE_URL` (see `components/Property/PropertyDetails.tsx`).

## Run, build, deploy

- All app commands run from `pms/`.
  - Dev: `npm run dev` (Vite dev server with HMR)
  - Lint: `npm run lint`
  - Build: `npm run build` (TypeScript build + Vite build)
  - Preview: `npm run preview`
  - Deploy hosting: `npm run deploy:hosting` (builds then `firebase deploy --only hosting`)
  - Full deploy: `npm run deploy` (hosting + functions)
- Hosting config (`pms/firebase.json`) serves SPA assets from `dist` and rewrites all routes to `/index.html`.
- Env vars: create `.env.development` and `.env.production` in `pms/` with `VITE_API_BASE_URL=...` (see `pms/README.md`). Only `VITE_`-prefixed vars are exposed to the client.

## Conventions and patterns

- CSS Modules everywhere (`*.module.css`). Import as `import styles from './File.module.css'` and reference class names via `styles.className`.
- Sidebar navigation pattern: `components/Layouts/Sidebar.tsx` accepts `items: Array<{label, path, icon}>` and controls collapsed state internally. Icons come from `react-icons` types (`IconType`).
- Table rendering pattern: `components/ui/Table.tsx` is a simple, typed table. Columns are declared per table component and passed with mock data from `src/data/**`.
  - Column shape: `{ header: string; accessor: string; component?: React.ComponentType; render?: (rowIndex, value) => ReactNode; prefix?: string; postfix?: string }`.
  - Example (`components/Tables/ClausesTable.tsx`) defines `columns` and uses `clauseTableData`.
- Page layout: each page (`src/pages/*Page.tsx`) places a top `Navbar` and then embeds the relevant domain component(s). Nested routing is handled inside the domain detail component (e.g., `LeaseDetails.tsx`, `PropertyDetails.tsx`) using a `Sidebar` + `<Routes>`.
- Routing params: routes use resource codes in the path (e.g., `/lease/${initialLeaseDetails.leaseCode}`). Use `useNavigate` for programmatic navigation.
- Data mocks live in `src/data/**`. When introducing API-backed data, follow the `PropertyDetails.tsx` pattern: read `import.meta.env.VITE_API_BASE_URL`, build a resource URL, and fetch. Prefer typed responses (simple type annotations are used inline).

## External integrations

- React 19 + Vite 6 + TypeScript ~5.8. ESLint is configured in `pms/eslint.config.js` with React Hooks and React Refresh plugins; `dist` is ignored.
- Firebase Hosting is active. Firebase Functions:
  - The canonical entry is `pms/functions/src/index.ts` (compiled to `lib/index.js`). Current file is largely a template and exports nothing.
  - There is an Express function in `pms/functions/server.ts` exporting `exports.api = functions.https.onRequest(app)`, but it is not wired into the TypeScript build or `src/index.ts`. Treat it as experimental unless you integrate it into `src/index.ts` and add required deps (`express`, `pg`) to `functions/package.json`.
- Backend API: `pms/README.md` points production to `https://pms-api.up.railway.app`. Local dev example uses Firebase Functions URL form; the frontend reads the base URL from env.

## How to extend safely

- New routed page: add a route in `AppRouter.tsx`, create a `src/pages/*Page.tsx`, compose domain components under `src/components/*`, and wire optional nested routes + `Sidebar` inside the domain detail component.
- New table: create `components/Tables/MyTable.tsx`, import mock data from `src/data/**` (or fetch), define `columns` per `ui/Table` contract, and add a wrapper CSS module if needed.
- API calls: prefer `fetch` with `import.meta.env.VITE_API_BASE_URL`. Handle loading/error like `PropertyDetails.tsx`. Keep domain types close to usage (lightweight inline typing suffices in this codebase).

## Gotchas and tips

- Vite env files must live in the `pms/` folder and use the `VITE_` prefix.
- React Router v7 is in use; route elements are declared with `<Routes>`/`<Route>` as shown in `AppRouter.tsx`.
- Don’t rely on Firebase Functions in this repo for local APIs unless you wire `functions/src/index.ts` to export the Express app and add missing deps; the frontend currently expects an external API base URL.
- On Windows, prefer `.env.*` files over shell exports for env management during `npm run dev`.
