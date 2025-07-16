import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Suspense } from "react"
import { AccordionFaq } from "./faq-accordion"
import { ListFaq } from "./faq-list"
import { CardFaq } from "./faq-card"

// Types
export interface FaqItem {
  question: string
  answer: string
}

export interface FaqSectionProps {
  items: FaqItem[]
  variant?: "accordion" | "list" | "card"
  title?: string
  description?: string
}

// Helpers
function hasHeaderContent(title?: string, description?: string): boolean {
  return Boolean(title || description)
}

function renderHeader(title?: string, description?: string) {
  if (!hasHeaderContent(title, description)) return null
  
  return (
    <div className="mb-8 text-center space-y-2">
      {title && <h2 className="text-3xl font-bold">{title}</h2>}
      {description && <p className="text-muted-foreground">{description}</p>}
    </div>
  )
}

function renderFaqContent(variant: string, items: FaqItem[]) {
  switch (variant) {
    case "accordion":
      return (
        <Suspense fallback={<div className="space-y-2">Loading...</div>}>
          <AccordionFaq items={items} />
        </Suspense>
      )
    case "list":
      return <ListFaq items={items} />
    case "card":
      return <CardFaq items={items} />
    default:
      return <ListFaq items={items} />
  }
}

// Main Component
export function FaqSection({ 
  items, 
  variant = "accordion", 
  title, 
  description 
}: FaqSectionProps) {
  return (
    <section className="py-8">
      {renderHeader(title, description)}
      {renderFaqContent(variant, items)}
    </section>
  )
} 