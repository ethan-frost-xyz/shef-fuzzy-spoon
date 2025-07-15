# Shef Fuzzy Spoon

A modern Next.js application built with TypeScript, React, Shadcn UI, and Tailwind CSS, following best practices for code hygiene and maintainability.

## 🚀 Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS v3** for styling
- **Shadcn UI** components
- **Responsive design** with mobile-first approach
- **Component organization** by type and feature
- **Performance optimized** with React Server Components

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable React components
│   ├── ui/             # Shadcn UI components
│   ├── forms/          # Form components
│   ├── layout/         # Layout components
│   └── features/       # Feature-specific components
└── lib/                # Utility functions
```

## 🛠️ Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📚 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Component Library

Visit `/components-demo` to see all available UI components:

- **Buttons** - Multiple variants with loading states and improved accessibility
- **Forms** - Enhanced input components with built-in labels and validation
- **Cards** - Content containers with headers and footers
- **Alerts** - User feedback components
- **Layout** - Responsive container with multiple size options

Visit `/auth-demo` to see the refactored authentication form component with:
- Login and register modes
- Form validation with error handling
- Loading states with proper accessibility
- TypeScript interfaces for all props and data

## 🏗️ Architecture

### Component Organization
- **UI Components** (`/components/ui/`) - Reusable Shadcn UI components with improved accessibility
- **Form Components** (`/components/forms/`) - Enhanced form inputs with built-in labels and validation
- **Layout Components** (`/components/layout/`) - Responsive structural components
- **Feature Components** (`/components/features/`) - Modular domain-specific components (auth, dashboard, etc.)

### Code Standards
- TypeScript interfaces over types
- Functional components with proper prop interfaces
- Mobile-first responsive design
- React Server Components when possible
- Descriptive naming with auxiliary verbs

## 🔧 Configuration

- **Tailwind CSS v3** - Configured with custom design tokens
- **TypeScript** - Strict mode enabled
- **ESLint** - Next.js recommended rules
- **PostCSS** - Optimized for production

## 📖 Documentation

- [Project Structure](./PROJECT_STRUCTURE.md) - Detailed project organization
- [Cursor Rules](./cursorrules.mdc) - Coding standards and conventions

## 🚀 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm run build
```

## 🤝 Contributing

1. Follow the coding standards in `cursorrules.mdc`
2. Use TypeScript for all new code
3. Organize components by type and feature
4. Write descriptive component and function names
5. Test components in the demo page

## 📄 License

This project is licensed under the ISC License.