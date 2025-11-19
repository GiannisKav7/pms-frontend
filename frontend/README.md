# PMS Frontend

Property Management System frontend built with **React 19**, **TypeScript**, and **Vite**. This app renders property, lease, owner, and unit data using mock datasets, with a path to integrate a backend API via environment configuration.

---

## Tech Stack

- React 19 + TypeScript
- Vite 6 (dev server, build)
- CSS Modules for styling
- React Router v7 for routing
- (Optional) Firebase Hosting for deployment

---

## Getting Started

Install dependencies:

```powershell
npm install
```

Run the dev server (HMR enabled):

```powershell
npm run dev
```

Build production bundle:

```powershell
npm run build
```

Preview production build locally:

```powershell
npm run preview
```

---

## Environment Variables

Create the following files in `frontend/` (root of this app). Only `VITE_` prefixed variables are exposed to the client.

Development (`.env.development`):

```env
VITE_API_BASE_URL=http://localhost:5001/<YOUR_FIREBASE_PROJECT>/us-central1/api
```

Production (`.env.production`):

```env
VITE_API_BASE_URL=https://pms-api.up.railway.app
```

Access in code via:

```ts
const baseUrl = import.meta.env.VITE_API_BASE_URL;
```

---

## Scripts

| Script                   | Purpose                                |
| ------------------------ | -------------------------------------- |
| `npm run dev`            | Start Vite dev server                  |
| `npm run build`          | Type-check and build production assets |
| `npm run preview`        | Preview built assets locally           |
| `npm run lint`           | Run ESLint checks                      |
| `npm run deploy:hosting` | Build then deploy to Firebase Hosting  |
| `npm run deploy`         | Deploy hosting + (optional) functions  |

---

## Project Structure (excerpt)

```
frontend/
  src/
    main.tsx          # Entry point
    App.tsx           # App shell
    routes/AppRouter.tsx  # Top-level routing
    pages/            # Page components
    components/
      Layouts/        # Navbar, Sidebar, layout primitives
      Property/       # Property domain components
      Lease/          # Lease domain components
      Owner/          # Owner domain components
      Unit/           # Unit domain components
      Tables/         # Reusable table wrappers
      ui/             # Generic UI primitives
    data/             # Mock datasets (used instead of API for now)
    customHooks/      # Shared hooks & context helpers
  functions/          # Firebase Functions (experimental / unused by frontend)
  public/             # Static assets served by Vite
```

---

## Routing

Defined in `src/routes/AppRouter.tsx` using React Router v7. Resource pages follow patterns like:

- `/lease/:id/*`
- `/property/:id/*`
- `/owner/:id/*`
- `/unit/:id/*`

Each detailed view (e.g. `PropertyDetails.tsx`) may render nested routes plus a `Sidebar`.

---

## Data Flow

Most components currently use mock data under `src/data/**`. When integrating a real API:

1. Ensure `VITE_API_BASE_URL` is set.
2. Fetch via `fetch(`${import.meta.env.VITE_API_BASE_URL}/resource/...`)`.
3. Follow the pattern in `PropertyDetails.tsx` for loading/error state and lightweight inline typing.

---

## Styling

All styles use CSS Modules: `import styles from './File.module.css'` then reference with `styles.someClass`.

---

## Tables Pattern

Reusable table component: `components/ui/Table.tsx`.
Define columns per table (see `components/Tables/ClausesTable.tsx`). Column shape:

```ts
{ header: string; accessor: string; component?: React.ComponentType; render?: (rowIndex: number, value: any) => React.ReactNode; prefix?: string; postfix?: string }
```

---

## Linting

Run:

```powershell
npm run lint
```

ESLint config lives in `eslint.config.js`. Extend as needed for stricter TypeScript or React rules.

---

## Deployment

Firebase Hosting rewrite rules serve SPA from `dist`. Typical flow:

```powershell
npm run build
npm run deploy:hosting
```

Ensure Firebase CLI is installed and configured (`firebase login`).

---

## Firebase Functions (Optional)

The `functions/` folder contains an experimental Express setup (`server.ts`). It is not currently integrated with `src/index.ts` or used by the frontend. Treat as a placeholder unless wired into your deployment.

---

## Contributing

1. Create a feature branch.
2. Add/update components under the appropriate domain folder.
3. Keep changes minimal; prefer existing patterns.
4. Ensure build and lint pass before opening a PR.

---

## Future Enhancements (Ideas)

- Replace mock data with real API integration.
- Add auth and protected routes.
- Introduce state management (context or lightweight store) as data complexity grows.
- Testing setup (Vitest + React Testing Library).

---

## License

Internal project – add license section if needed.

---

### Quick Start Recap

```powershell
npm install
npm run dev
```

Happy building!
