# Form Components

This directory contains form-specific components and validation utilities, following cursor rules for TypeScript interfaces and accessibility.

## Components

- **Input**: Enhanced text inputs with built-in labels, validation, and accessibility
- **Select**: Dropdown and multi-select components
- **Checkbox**: Checkbox and radio button components
- **Textarea**: Multi-line text input fields
- **Label**: Form labels with proper accessibility attributes
- **Validation**: Form validation utilities and error handling

## Enhanced Features

### Input Component
The Input component has been refactored to include:
- Built-in label support with required field indicators
- Improved accessibility with proper ARIA attributes
- Better error handling with descriptive error messages
- Unique ID generation for form associations
- Responsive design with Tailwind CSS

## Usage

Form components should:
- Support controlled and uncontrolled usage
- Include proper accessibility attributes
- Integrate with form validation libraries
- Follow consistent styling patterns
- Support error states and validation messages

## Examples

```tsx
// Enhanced Input with built-in label and validation
<Input
  label="Email Address"
  type="email"
  placeholder="Enter your email"
  hasError={!!errors.email}
  errorMessage={errors.email}
  required
/>

// Controlled input with validation
<Input
  label="Username"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
  hasError={!!errors.username}
  errorMessage={errors.username}
  required
/>
```

## Accessibility Features

All form components include:
- Proper `aria-invalid` attributes for error states
- `aria-describedby` for error message associations
- Unique IDs for label-input associations
- Required field indicators
- Screen reader friendly error messages 