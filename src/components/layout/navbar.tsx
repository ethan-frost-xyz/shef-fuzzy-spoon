"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface NavItem {
  href: string
  label: string
  description?: string
}

const navItems: NavItem[] = [
  {
    href: "/",
    label: "Home",
    description: "Main landing page"
  },
  {
    href: "/components-demo",
    label: "Components",
    description: "UI components showcase"
  },
  {
    href: "/auth-demo",
    label: "Auth",
    description: "Authentication demo"
  }
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="text-sm font-medium">
              Shef
            </Badge>
            <span className="hidden sm:inline-block text-lg font-semibold">
              Fuzzy Spoon
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <div key={item.href} className="relative">
                  <Link href={item.href}>
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      size="sm"
                      className="relative"
                    >
                      {item.label}
                      {isActive && (
                        <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-foreground/25 to-transparent" />
                      )}
                    </Button>
                  </Link>
                </div>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Separator className="my-2" />
          <div className="flex flex-col space-y-1 pb-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    className="justify-start w-full"
                  >
                    <div className="flex flex-col items-start">
                      <span>{item.label}</span>
                      {item.description && (
                        <span className="text-xs text-muted-foreground">
                          {item.description}
                        </span>
                      )}
                    </div>
                  </Button>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
} 