# Layout Components

This directory contains layout-related components that provide structure and navigation for the application.

## Components

### Navbar

A responsive navigation bar component that provides navigation between different demo pages.

**Features:**
- Responsive design with mobile-first approach
- Active state indication for current page
- Mobile hamburger menu
- Sticky positioning with backdrop blur
- Uses shadcn/ui components (Button, Badge, Separator)

**Usage:**
```tsx
import { Navbar } from "@/components/layout"

// The navbar is automatically included in the root layout
// and provides navigation to:
// - Home (/)
// - Components Demo (/components-demo)
// - Auth Demo (/auth-demo)
```

**Props:**
- No props required - the component automatically detects the current route using `usePathname`

**Styling:**
- Uses Tailwind CSS for responsive design
- Implements backdrop blur for modern glass effect
- Mobile menu with collapsible navigation
- Active state with subtle underline indicator

### Container

A flexible container component for consistent layout spacing.

**Usage:**
```tsx
import { Container } from "@/components/layout"

<Container>
  <YourContent />
</Container>
``` 