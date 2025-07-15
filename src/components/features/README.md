# Feature Components

This directory contains components specific to particular features or domains of the application, following the modular approach outlined in cursor rules.

## Organization

Components are grouped by feature/domain:

- **auth/**: Authentication-related components (login, register, password reset)
  - `auth-form.tsx` - Reusable authentication form with validation
  - `index.ts` - Feature exports
- **dashboard/**: Dashboard-specific components (charts, widgets, analytics)
- **profile/**: User profile components (settings, preferences, avatar)
- **admin/**: Administrative components (user management, system settings)

## Structure

Each feature directory should contain:
```
feature-name/
├── components/     # Feature-specific components
├── hooks/         # Custom hooks for the feature
├── types/         # TypeScript interfaces
├── utils/         # Utility functions
└── index.ts       # Feature exports
```

## Current Features

### Authentication (`auth/`)
- **AuthForm**: Complete authentication form component with:
  - Login and register modes
  - Form validation with error handling
  - Loading states with proper accessibility
  - TypeScript interfaces for all props and data
  - Responsive design with Tailwind CSS

## Usage

Feature components should:
- Be self-contained and modular
- Include their own types and utilities
- Follow the same coding standards as other components
- Be easily testable and maintainable
- Support the feature's specific requirements

## Examples

```tsx
// Feature-specific component
import { AuthForm } from '@/components/features/auth'

// Usage in a page
<AuthForm
  mode="login"
  onSubmit={handleAuthSubmit}
  isLoading={isLoading}
  error={error}
/>
```

## Adding New Features

When adding new features:
1. Create a new directory under `features/`
2. Follow the modular structure with components, hooks, types, and utils
3. Export from an `index.ts` file
4. Update this README with documentation
5. Follow cursor rules for TypeScript interfaces and component structure 