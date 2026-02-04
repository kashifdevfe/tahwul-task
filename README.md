# tahwul-task

Tahwul dashboard UI built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS v4**, **React Router**, and **Recharts**.

## Getting started

```bash
npm install
npm run dev
```

## Scripts

```bash
npm run lint
npm run build
npm run preview
```

## Implementation notes

- **Responsive, desktop-first layout**
  - App shell is viewport-locked; only the main content scrolls.
  - Sidebar is a **mobile drawer** (overlay + close on `Esc`) and static on desktop.
  - Components are built to avoid overflow on small screens (responsive spacing/typography, table horizontal scroll where needed).

- **Maintainable structure**
  - Pages are in `src/pages/*`, reusable components in `src/components/*`, layout in `src/layouts/*`.
  - **Theme colors** are centralized in `src/assets/theme/colors.css` (CSS variables) and used across the app.
  - Static copy is centralized in `src/constants/index.ts`.

- **Types**
  - Uses **`type` aliases** (no `interface`).
  - Dashboard types are colocated: `src/pages/Dashboard/types.ts`.
  - Shared unions live in `src/types/type.ts`.

- **Reusable hooks (only what the app actually needs)**
  - `useDisclosure`, `useEscapeKey`, `useLockBodyScroll`, `useMediaQuery` for mobile drawer behavior and clean UI state management.

## Assumptions

- This is a **UI prototype** (mock data, no backend/API integration yet).
- Some actions are UI-only (e.g. “Post Comment”, “Submit Evidence”).
- Evidence table sorting is visual only (no real sorting logic).
- In the **Progress Status** grid, only **Digital Transformation** is clickable (demo navigation to details page).

## Improvements with more time

- **Component system**: extract repeated patterns (table, pills, section rows) into reusable components.
- **Accessibility**: focus states, keyboard navigation, ARIA review.
- **Testing**: unit tests for utilities + UI interaction tests for key pages.
- **Performance**: route-level code splitting and bundle size improvements.

## Project structure

```text
src/
  assets/theme/colors.css     # Theme tokens (colors)
  components/                 # Reusable UI + common components
  constants/                  # Centralized static text
  hooks/                      # Custom hooks (drawer state, Esc, media query, scroll lock)
  layouts/                    # Layout wrappers
  pages/
    Dashboard/
      mockData.ts             # Dashboard-owned mock data
      types.ts                # Dashboard domain types
    Details/
  types/type.ts               # Shared unions
  utils/                      # Helpers (cn, etc.)
```
