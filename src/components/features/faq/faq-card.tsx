import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FaqItem } from "./faq-section"

interface CardFaqProps {
  items: FaqItem[]
}

export function CardFaq({ items }: CardFaqProps) {
  return (
    <div 
      className="grid gap-6 sm:grid-cols-1 md:grid-cols-2" 
      role="region" 
      aria-label="FAQ Cards"
    >
      {items.map((item) => (
        <Card key={item.question} className="h-fit">
          <CardHeader>
            <CardTitle className="text-base font-semibold leading-tight">
              {item.question}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            {item.answer}
          </CardContent>
        </Card>
      ))}
    </div>
  )
} 