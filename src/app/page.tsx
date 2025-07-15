import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 lg:p-24">
      <div className="max-w-4xl w-full space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Welcome to Shef Fuzzy Spoon
          </h1>
          <p className="text-lg text-muted-foreground">
            A modern Next.js application built with TypeScript, React, and Tailwind CSS
          </p>
        </div>
        
        <div className="bg-card border rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            🎉 Your Next.js app is ready!
          </h2>
          <p className="text-lg mb-6 text-muted-foreground">
            Built with TypeScript, React, Shadcn UI, and Tailwind CSS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/components-demo">
              <Button variant="outline" size="lg">
                View UI Components Demo
              </Button>
            </Link>
            <Link href="/auth-demo">
              <Button variant="outline" size="lg">
                View Auth Form Demo
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group rounded-lg border p-6 transition-colors hover:border-border hover:bg-muted/50">
            <h3 className="mb-3 text-xl font-semibold flex items-center gap-2">
              Next.js
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </h3>
            <p className="text-sm text-muted-foreground">
              The React framework for production.
            </p>
          </div>
          
          <div className="group rounded-lg border p-6 transition-colors hover:border-border hover:bg-muted/50">
            <h3 className="mb-3 text-xl font-semibold">TypeScript</h3>
            <p className="text-sm text-muted-foreground">
              Type-safe JavaScript for better development experience.
            </p>
          </div>
          
          <div className="group rounded-lg border p-6 transition-colors hover:border-border hover:bg-muted/50">
            <h3 className="mb-3 text-xl font-semibold">Tailwind CSS</h3>
            <p className="text-sm text-muted-foreground">
              Utility-first CSS framework for rapid UI development.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 