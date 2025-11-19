# PMS Frontend Roadmap

_Last updated: 2025-11-19_

## Vision

Provide a clean, modular property management interface that evolves from mock-driven UI to a robust, real-time, multi-tenant application with auditability, analytics, and extensibility.

## Guiding Principles

- Incremental delivery: replace mock data slice-by-slice.
- Strong typing close to usage; avoid premature abstraction.
- API integration with graceful degradation (loading/error states first, optimizations later).
- Simplicity over framework proliferation.
- Security & privacy incorporated early (avoid hardcoded secrets, enforce access boundaries).

## Phase 0 (Current / Foundation)

Focus: Developer experience, stable UI patterns, onboarding.

- ✅ README / CONTRIBUTING / ENV examples.
- ✅ Onboarding script (`npm run onboard`).
- ✅ Domain component structure & routing in place.
- ⏳ Trim unused dependencies / functions scaffolding.
- ⏳ Establish style consistency (CSS modules conventions doc).

## Phase 1 (Near-Term: API Integration & Data Layer)

Goal: Replace selected mock datasets with live API responses.
Targets (order):

1. Properties list + detail fetch.
2. Leases detail (overview + amendments).
3. Owners basic profile.
4. Units occupancy status.
   Deliverables:

- Fetch hooks (`useResource<T>(path)` minimal wrapper).
- Error boundary component for network failures.
- Loading skeleton variants (table & info blocks).
- Basic logging for failed requests.

## Phase 2 (Mid-Term: Auth & Role-Based Access)

Goal: Secure the app with user identity & roles.

- Integrate auth provider (Firebase Auth or custom JWT endpoint).
- Protected routes & redirect flow.
- Role matrix: Admin / Manager / ReadOnly.
- Conditional UI: hide restricted actions.
- Token refresh handling & logout safeguards.

## Phase 3 (Mid-Term+: State Management & Performance)

Goal: Optimize data flows & responsiveness.

- Introduce lightweight client cache (React Query or custom). Decision pending.
- Memoization for large tables.
- Virtualized tables if row counts exceed threshold.
- Centralized date & number formatting utilities.
- Perf budget: Largest Contentful Paint (LCP) under 2.5s on mid-tier devices.

## Phase 4 (Long-Term: Advanced Features)

Goal: Enhance productivity & analytics.

- Amendments diff viewer.
- Bulk edit (multi-lease operations).
- Export APIs (CSV/Excel for tables).
- Notifications panel (expiring leases, missing docs).
- Audit log viewer (actions & changes traced).
- Basic dashboard metrics (occupancy %, average rent, churn rate).

## Phase 5 (Extended: Extensibility & Integrations)

Goal: Open integration points & modularization.

- Webhook registration UI (for external systems).
- Pluggable column renderers (configurable via admin UI).
- Theme customization (brand colors / dark mode).
- i18n groundwork (resource extraction + locale switcher).

## Technical Priorities & Debt

| Item                        | Status  | Action                                              |
| --------------------------- | ------- | --------------------------------------------------- |
| Functions folder unused     | Pending | Either integrate or archive in separate branch      |
| Missing test harness        | Pending | Decide Vitest + RTL in Phase 2                      |
| Error handling inconsistent | Pending | Introduce unified `<ErrorBoundary>` + toast pattern |
| Mixed date formatting       | Pending | Centralize via `utils/format.ts`                    |
| No accessibility audit      | Pending | Run axe checks & fix landmarks                      |

## Tooling Enhancements

- Add `npm run analyze` (bundle size report).
- Pre-commit lint + type check (simple `lefthook` or `husky` integration).
- Optional CI pipeline (GitHub Actions: build + lint + type-check).

## Metrics (Initial Targets)

- API response handled (display or error fallback) < 1.5s for primary resources.
- Bundle (initial JS) < 250KB gzipped before advanced features.
- Lighthouse Accessibility score ≥ 90.

## Non-Goals (For Now)

- Offline-first sync.
- Real-time websockets for all state (maybe targeted later for notifications).
- Heavy design system adoption (keep lightweight until scale demands it).

## Review Cadence

- Roadmap review monthly.
- Phase gate checklist at completion of each phase (README update + CHANGELOG entry).

## Success Indicators

- New dev onboard + run app < 5 min.
- Replace >50% of mock data with API within Phase 1 timeline.
- Zero high-severity security issues reported in dependency scans.

## Immediate Next Candidates

1. Implement `useResource` hook (Phase 1 start).
2. Add error boundary + skeleton components.
3. Choose caching approach (React Query vs custom minimal fetch wrapper).

---

_Propose edits by opening a PR titled "Roadmap: <Change Summary>"._
