"use client"

import { useState } from "react"
import { FaqItem } from "./faq-section"

interface AccordionFaqProps {
  items: FaqItem[]
}

export function AccordionFaq({ items }: AccordionFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function handleToggle(idx: number) {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  function handleKeyDown(event: React.KeyboardEvent, idx: number) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      handleToggle(idx)
    }
  }

  return (
    <div className="space-y-2" role="region" aria-label="FAQ Accordion">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx
        const itemId = `faq-item-${idx}`
        const contentId = `faq-content-${idx}`
        
        return (
          <div key={item.question} className="border rounded-md">
            <button
              className="w-full text-left px-4 py-3 font-medium focus:outline-none flex justify-between items-center hover:bg-accent/50 transition-colors"
              onClick={() => handleToggle(idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              aria-expanded={isOpen}
              aria-controls={contentId}
              id={itemId}
              type="button"
            >
              <span>{item.question}</span>
              <span 
                className="ml-2 text-muted-foreground transition-transform duration-200"
                aria-hidden="true"
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <div
                id={contentId}
                className="px-4 pb-4 text-muted-foreground"
                role="region"
                aria-labelledby={itemId}
              >
                {item.answer}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
} 