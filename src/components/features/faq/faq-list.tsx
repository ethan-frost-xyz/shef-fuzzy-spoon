import { FaqItem } from "./faq-section"

interface ListFaqProps {
  items: FaqItem[]
}

export function ListFaq({ items }: ListFaqProps) {
  return (
    <dl className="space-y-6" role="region" aria-label="FAQ List">
      {items.map((item, idx) => (
        <div key={item.question} className="space-y-2">
          <dt className="font-semibold text-base">{item.question}</dt>
          <dd className="text-muted-foreground ml-4">{item.answer}</dd>
        </div>
      ))}
    </dl>
  )
} 