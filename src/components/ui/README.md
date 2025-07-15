# UI Components

This directory contains reusable UI components built with Shadcn UI and Tailwind CSS.

## Available Components

### Button Components
- **Button**: Form buttons, action buttons, and interactive elements with multiple variants and sizes

### Card Components
- **Card**: Content containers with header, content, and footer sections
- **CardHeader**: Header section for cards
- **CardTitle**: Title component for cards
- **CardDescription**: Description component for cards
- **CardContent**: Main content area for cards
- **CardFooter**: Footer section for cards

### Form Components
- **Input**: Text input fields with proper styling and accessibility
- **Label**: Form labels with proper accessibility attributes
- **Textarea**: Multi-line text input fields
- **Select**: Dropdown selection component with options
- **SelectOption**: Individual option for select components
- **Checkbox**: Checkbox input with proper styling
- **Radio**: Radio button input with proper styling

### Display Components
- **Badge**: Small status indicators with multiple variants
- **Separator**: Visual dividers with horizontal and vertical orientations
- **Spinner**: Loading indicators with multiple sizes
- **Alert**: User feedback components with different types (success, error, warning, info)
- **AlertTitle**: Title component for alerts
- **AlertDescription**: Description component for alerts

### Layout Components
- **Container**: Responsive container with different sizes and padding options

## Usage

All components in this directory are designed to be:
- Reusable across multiple pages
- Accessible and responsive
- Consistent with the design system
- TypeScript-first with proper interfaces
- Built with class-variance-authority for variant management

## Importing Components

You can import components individually or use the index file:

```tsx
// Individual imports
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Or import from index
import { Button, Card, CardContent } from "@/components/ui"
```

## Demo

Visit `/components-demo` to see all components in action with examples of their variants and usage.

## Adding New Components

When adding new UI components:
1. Create the component file (e.g., `button.tsx`)
2. Use TypeScript interfaces for props
3. Implement proper accessibility features
4. Use the `cn` utility for className merging
5. Export from the index file
6. Update this README if adding a new category 