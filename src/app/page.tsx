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
            <Link href="/hero-demo">
              <Button variant="outline" size="lg">
                View Hero Section Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
} 