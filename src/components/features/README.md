# Feature Components

This directory contains components specific to particular features or domains of the application.

## Organization

Components are grouped by feature/domain:

- **auth/**: Authentication-related components (login, register, password reset)
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
└── README.md      # Feature documentation
```

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
import { useAuth } from '@/components/features/auth/hooks/useAuth'
import { UserProfile } from '@/components/features/profile/components/UserProfile'
``` 