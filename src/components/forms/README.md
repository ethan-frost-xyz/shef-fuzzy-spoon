# Form Components

This directory contains form-specific components and validation utilities.

## Components

- **Input**: Text inputs, number inputs, and textareas
- **Select**: Dropdown and multi-select components
- **Checkbox**: Checkbox and radio button components
- **Validation**: Form validation utilities and error handling

## Usage

Form components should:
- Support controlled and uncontrolled usage
- Include proper accessibility attributes
- Integrate with form validation libraries
- Follow consistent styling patterns
- Support error states and validation messages

## Examples

```tsx
// Controlled input with validation
<FormInput
  name="email"
  value={email}
  onChange={setEmail}
  error={errors.email}
  placeholder="Enter your email"
/>
``` 