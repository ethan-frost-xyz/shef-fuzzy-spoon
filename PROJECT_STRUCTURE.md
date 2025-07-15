# Project Structure

This document outlines the organization of the Shef Fuzzy Spoon project, following the cursor rules for optimal code hygiene and maintainability.

## Root Directory

```
shef-fuzzy-spoon/
├── src/                    # Source code directory
├── .gitignore             # Git ignore rules
├── components.json        # Shadcn UI configuration
├── cursorrules.mdc        # Project coding standards
├── next.config.js         # Next.js configuration
├── next-env.d.ts          # Next.js TypeScript definitions
├── package.json           # Dependencies and scripts
├── package-lock.json      # Locked dependency versions
├── postcss.config.js      # PostCSS configuration
├── README.md              # Project documentation
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── PROJECT_STRUCTURE.md   # This file
```

## Source Directory (`src/`)

### App Directory (`src/app/`)
Contains Next.js App Router pages and layouts:
- `layout.tsx` - Root layout component
- `page.tsx` - Home page component
- `globals.css` - Global styles

### Components Directory (`src/components/`)
Organized by type and feature:

#### UI Components (`src/components/ui/`)
Reusable Shadcn UI components:
- Button components
- Card components
- Modal components
- Form components
- Layout components

#### Form Components (`src/components/forms/`)
Form-specific components and validation:
- Input components
- Select components
- Checkbox/Radio components
- Validation utilities

#### Layout Components (`src/components/layout/`)
Structural and layout components:
- Header components
- Footer components
- Sidebar components
- Container components
- Grid components

#### Feature Components (`src/components/features/`)
Domain-specific components:
- `auth/` - Authentication components
- `dashboard/` - Dashboard components
- `profile/` - User profile components
- `admin/` - Administrative components

### Library Directory (`src/lib/`)
Utility functions and shared code:
- `utils.ts` - Common utility functions (cn, etc.)

## Naming Conventions

### Files and Directories
- Use lowercase with dashes: `user-profile.tsx`
- Component directories: `auth-wizard/`
- Feature directories: `user-management/`

### Components
- Use PascalCase for component names: `UserProfile`
- Use descriptive names with auxiliary verbs: `isLoading`, `hasError`
- Favor named exports over default exports

### TypeScript
- Use interfaces over types
- Avoid enums; use const objects instead
- Use functional components with TypeScript interfaces

## Code Organization

### Component Structure
1. Exported component
2. Subcomponents
3. Helper functions
4. Static content
5. TypeScript interfaces

### File Organization
- Keep components small and focused
- Use React Server Components when possible
- Minimize `use client` directives
- Implement responsive design with Tailwind CSS

## Best Practices

### Performance
- Use React Server Components (RSC) for data fetching
- Implement dynamic loading for non-critical components
- Optimize images with WebP format and lazy loading
- Minimize client-side JavaScript

### Styling
- Use Tailwind CSS for styling
- Implement mobile-first responsive design
- Use Shadcn UI components for consistency
- Follow accessibility best practices

### State Management
- Use `nuqs` for URL search parameter state
- Prefer server-side state over client-side
- Use React Server Components for data fetching
- Minimize `useEffect` and `setState` usage

## Development Workflow

1. **Adding Components**: Place in appropriate directory under `src/components/`
2. **Adding Pages**: Create in `src/app/` following Next.js App Router conventions
3. **Adding Utilities**: Place in `src/lib/` with descriptive names
4. **Adding Types**: Define interfaces in component files or create dedicated type files

## File Hygiene

- Keep files focused and single-purpose
- Use descriptive names that indicate purpose
- Follow the established directory structure
- Document complex components with README files
- Remove unused imports and dependencies regularly 