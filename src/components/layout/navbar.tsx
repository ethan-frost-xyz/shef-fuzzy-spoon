"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCallback, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

interface NavItem {
  href: string
  label: string
  description?: string
}

interface NavCategory {
  label: string
  items: NavItem[]
}

const navCategories: NavCategory[] = [
  {
    label: "Demos",
    items: [
      {
        href: "/auth-demo",
        label: "Authentication",
        description: "Authentication demo"
      },
      {
        href: "/hero-demo",
        label: "Hero Section",
        description: "Hero section demo"
      },
      {
        href: "/faq-demo",
        label: "FAQ Section",
        description: "FAQ section demo"
      }
    ]
  },
  {
    label: "Components",
    items: [
      {
        href: "/components-demo",
        label: "UI Components",
        description: "UI components showcase"
      }
    ]
  }
]

function NavLink({ href, children, isActive }: { href: string; children: React.ReactNode; isActive: boolean }) {
  return (
    <Link href={href}>
      <Button variant="ghost" size="sm" className="relative">
        {children}
        {isActive && (
          <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-foreground/25 to-transparent" />
        )}
      </Button>
    </Link>
  )
}

function DropdownNav({ category }: { category: NavCategory }) {
  return (
    <div className="relative group">
      <Button
        variant="ghost"
        size="sm"
        className="relative"
      >
        {category.label}
        <ChevronDown className="ml-1 h-4 w-4" />
      </Button>
      
      <div className="absolute top-full left-0 mt-1 w-56 bg-popover border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="p-1">
          {category.items.map((item, index) => (
            <div key={item.href}>
              <Link 
                href={item.href} 
                className="flex flex-col items-start px-2 py-1.5 text-sm rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <span className="font-medium">{item.label}</span>
                {item.description && (
                  <span className="text-xs text-muted-foreground">
                    {item.description}
                  </span>
                )}
              </Link>
              {index < category.items.length - 1 && (
                <div className="h-px bg-muted mx-1 my-1" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function MobileNavItem({ href, label, description, isActive }: { 
  href: string; 
  label: string; 
  description?: string; 
  isActive: boolean 
}) {
  return (
    <Link href={href}>
      <Button
        variant="ghost"
        size="sm"
        className="justify-start w-full"
      >
        <div className="flex flex-col items-start">
          <span>{label}</span>
          {description && (
            <span className="text-xs text-muted-foreground">
              {description}
            </span>
          )}
        </div>
      </Button>
    </Link>
  )
}

function MobileNavCategory({ category }: { category: NavCategory }) {
  const pathname = usePathname()
  
  return (
    <div>
      <div className="px-3 py-2 text-sm font-medium text-muted-foreground">
        {category.label}
      </div>
      {category.items.map((item) => (
        <Link key={item.href} href={item.href}>
          <Button
            variant="ghost"
            size="sm"
            className="justify-start w-full ml-4"
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
      ))}
    </div>
  )
}

export function Navbar() {
  const pathname = usePathname()
  
  const isHomeActive = useMemo(() => pathname === "/", [pathname])
  const isDocumentationActive = useMemo(() => pathname === "/documentation", [pathname])

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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink href="/" isActive={isHomeActive}>
              Home
            </NavLink>

            {navCategories.map((category) => (
              <DropdownNav key={category.label} category={category} />
            ))}

            <NavLink href="/documentation" isActive={isDocumentationActive}>
              Documentation
            </NavLink>
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
            <MobileNavItem 
              href="/" 
              label="Home" 
              description="Main landing page" 
              isActive={isHomeActive} 
            />

            {navCategories.map((category) => (
              <MobileNavCategory key={category.label} category={category} />
            ))}

            <MobileNavItem 
              href="/documentation" 
              label="Documentation" 
              description="Guides and API references" 
              isActive={isDocumentationActive} 
            />
          </div>
        </div>
      </div>
    </nav>
  )
} 