# Contributing

Thanks for your interest in improving the PMS frontend!

## Quick Start

1. Fork or create a branch from `vite-ts-migration` (e.g. `feature/<short-description>`).
2. Install deps: `npm install`.
3. Create/modify components following existing folder/domain patterns in `src/components` and `src/pages`.
4. Use mock data in `src/data` unless you are explicitly adding an API call.
5. Run locally: `npm run dev` and ensure pages render without errors.

## Coding Standards

- **Language:** TypeScript (no implicit `any`; prefer lightweight inline types).
- **Styling:** CSS Modules (`File.module.css` + `import styles from './File.module.css'`).
- **Routing:** Add new routes in `src/routes/AppRouter.tsx`; follow existing naming patterns.
- **Tables:** Use `components/ui/Table.tsx` with a local `columns` array; keep column definitions simple.
- **Environment:** Only expose client vars prefixed with `VITE_`. Add new vars to `.env.development` / `.env.production` when needed.

## Commits & PRs

- **Commit messages:** Use imperative: `Add property summary component`, `Fix sidebar collapse state`.
- **Scope:** Keep PRs focused; avoid mixing refactors and features.
- **Description:** Include context, screenshots (if UI changes), and any new env vars.
- **Checklist before opening PR:**
  - `npm run build` succeeds.
  - `npm run lint` passes.
  - No unintended changes in `dist/` or generated files.

## Adding API Integrations

1. Confirm `VITE_API_BASE_URL` is set locally.
2. Follow fetch pattern in `PropertyDetails.tsx` (loading + error state).
3. Keep types inline unless reused across multiple modules.
4. Gracefully handle network errors (basic fallback UI or message).

## Firebase Functions (Optional)

If touching `functions/`, clearly state purpose. It is currently experimental and not required for frontend changes.

## Testing (Future)

Testing setup is not yet established. If adding tests, propose tooling first (e.g. Vitest + React Testing Library) in a separate PR.

## Performance & Accessibility

- Avoid unnecessary rerenders: memoize large lists if added.
- Use semantic HTML where feasible; ensure interactive elements are keyboard accessible.

## Release & Deployment

Deployment uses Firebase Hosting:

```
npm run build
npm run deploy:hosting
```

Only maintainers should run deployment commands.

## Need Help?

Open a draft PR early or create a discussion/issue describing the proposed change.

Thank you for contributing! 🚀
