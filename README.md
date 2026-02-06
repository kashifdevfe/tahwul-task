# tahwul-task

A responsive dashboard UI for the Tahwul digital transformation platform built with React 19, TypeScript, Vite, Tailwind CSS v4, React Router, Recharts, and Hugeicons.

## Live demo

https://tahwul-task.vercel.app/

## Getting started

```bash
npm install
npm run dev
```

## Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

## How the code is built

**Feature-based architecture**: Code is organized by feature (dashboard, project-details) rather than type. Each feature contains its own components, data, and types for better scalability.

**Component hierarchy**:
- `features/*` - Feature-specific components and logic
- `layouts/*` - Layout wrappers (DashboardLayout, Header, Sidebar)
- `components/ui/*` - Reusable design system primitives (Card, Badge, MetricCard, DataTable)
- `components/common/*` - Business components (SearchInput, NotificationButton, UserMenu)

**Responsive design**: Desktop-first approach with mobile adaptations. Sidebar collapses to icon-only rail on desktop and becomes a full-screen drawer on mobile. Preference persisted in localStorage using custom `useLocalStorage` hook.

**Styling**: Tailwind CSS v4 with CSS variables for theming. Centralized typography utilities (`heading-bold`, `text-normal`, `text-normal-sm`) for consistency.

**Type safety**: TypeScript strict mode with types colocated by feature. Consistent use of `type` aliases throughout.

**Error handling**: Three-layer error boundary system for graceful failure recovery:
- App-level boundary catches critical errors with full-page fallback
- Feature-level boundaries isolate errors to individual sections (charts, lists, grids)
- Component-level error handling with `useErrorHandler` hook for async operations
- User-friendly error UI with retry options and detailed logging

**Custom hooks**: Six production-ready hooks for common patterns:
- `useLocalStorage` - Persist state in localStorage with type safety
- `useDebounce` - Delay value updates for search optimization
- `useClickOutside` - Handle clicks outside elements
- `useMediaQuery` - Responsive breakpoint detection
- `useWindowSize` - Window dimensions for responsive components
- `useErrorHandler` - Programmatic error handling with try-catch wrapper

## Assumptions

**Data & Backend**: All data is static mock data. No API integration, authentication, or backend processing. Actions like "Post Comment" and "Submit Evidence" are UI-only.

**Navigation**: Only the "Digital Transformation" card in Progress Status grid navigates to detail page. Other cards are interactive but non-functional.

**Features**: Search input is visual only with no filtering logic. Table sorting icons are present but non-functional. Progress indicators are hardcoded, not calculated.

**Technical**: Client-side only application with no server-side rendering. Targets modern browsers (ES2022+) without legacy support.

## What I would improve with more time

**API Integration**: Connect to real backend for data fetching and mutations. Add loading states, API error handling, and caching with React Query or SWR. Integrate error monitoring services (Sentry, LogRocket) with existing error boundaries.

**Search & Filtering**: Implement actual search with the `useDebounce` hook. Add filters for Progress Status grid and table sorting functionality.

**Authentication**: Add login/logout flow with JWT. Implement role-based access control and protected routes.

**Accessibility**: Full WCAG 2.1 AA compliance with proper ARIA labels, keyboard navigation, focus indicators, and screen reader testing.

**Performance**: Implement route-based code splitting to reduce bundle size from 683KB to under 300KB. Add image optimization and lazy loading.

**Testing**: Achieve 80%+ coverage with unit tests (Jest + React Testing Library), integration tests, and E2E tests (Playwright).

**Advanced Features**: Dark mode support, internationalization (i18n), real-time updates with WebSockets, and export to PDF/Excel functionality.

## Project structure

```
src/
  features/                    # Feature-based modules
    dashboard/
      components/             # Dashboard-specific components
      data/mockData.ts        # Mock data
      types.ts               # Dashboard types
      Dashboard.tsx          # Main dashboard page
    project-details/
      DigitalTransformationDetail.tsx
  
  layouts/                   # Layout system
    components/              # Header, Sidebar
    DashboardLayout.tsx      # Main layout wrapper
  
  components/
    common/                  # SearchInput, NotificationButton, UserMenu
    ui/                     # Card, Badge, Avatar, Input, MetricCard, DataTable
    ErrorBoundary.tsx        # Main error boundary component
    FeatureErrorFallback.tsx # Feature-level error UI
  
  assets/
    images/                 # Logo, icons
    theme/colors.css        # CSS variables for theming
  
  constants/                # Centralized static text
  hooks/                    # Custom hooks (localStorage, debounce, error handling)
  types/type.ts            # Shared type definitions
  utils/                   # Utility functions (cn helper)
```
