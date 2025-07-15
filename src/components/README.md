# Components Directory

This directory contains all reusable React components for the application, organized according to the cursor rules.

## Directory Structure

```
src/components/
├── ui/           # Shadcn UI components (buttons, cards, modals, etc.)
├── forms/        # Form-specific components
├── layout/       # Layout components (navbar, footer, etc.)
└── features/     # Feature-specific components (grouped by domain)
```

## Organization Principles

### By Type (Recommended for smaller projects)
- **ui/**: Reusable UI components from Shadcn UI
- **forms/**: Form components and validation
- **layout/**: Navigation and structural components

### By Feature (For larger applications)
- **features/auth/**: Authentication-related components
- **features/dashboard/**: Dashboard-specific components
- **features/profile/**: User profile components

## Naming Conventions

- Use lowercase with dashes for directories: `auth-wizard/`
- Use lowercase with dashes for component files: `user-profile.tsx`
- Use PascalCase for component names: `UserProfile`
- Favor named exports over default exports

## Component Structure

Each component should follow this structure:
1. Exported component
2. Subcomponents
3. Helper functions
4. Static content
5. TypeScript interfaces

## Usage Guidelines

- Keep components small and focused
- Use TypeScript interfaces for props
- Implement responsive design with Tailwind
- Follow accessibility best practices
- Use React Server Components when possible 