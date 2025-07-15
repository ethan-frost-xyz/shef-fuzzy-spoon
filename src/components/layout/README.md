# Layout Components

This directory contains structural and layout components used across the application.

## Components

- **Header**: Main navigation and site header
- **Footer**: Site footer with links and information
- **Sidebar**: Navigation sidebar for dashboard layouts
- **Container**: Content wrapper with consistent spacing
- **Grid**: Layout grid components for responsive designs

## Usage

Layout components should:
- Be responsive and mobile-first
- Support different screen sizes
- Maintain consistent spacing and alignment
- Include proper semantic HTML structure
- Support dark/light theme switching

## Examples

```tsx
// Main layout wrapper
<Container>
  <Header />
  <main className="flex-1">
    {children}
  </main>
  <Footer />
</Container>
``` 