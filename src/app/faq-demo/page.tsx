import { FaqSection } from "@/components/features"
import { Container } from "@/components/layout"
import { Separator } from "@/components/ui/separator"

// Static content
const demoFaqItems = [
  {
    question: "What is Shef Fuzzy Spoon?",
    answer: "Shef Fuzzy Spoon is a demo project showcasing modular UI components with Next.js, Shadcn UI, and Tailwind CSS."
  },
  {
    question: "How do I use these components?",
    answer: "Import the desired component from the src/components directory and use it in your Next.js pages or other components."
  },
  {
    question: "Are these components responsive?",
    answer: "Yes, all components are built with a mobile-first approach using Tailwind CSS for responsive design."
  },
  {
    question: "Can I customize the styles?",
    answer: "Absolutely! You can extend or override Tailwind classes and Shadcn UI props to match your brand."
  },
  {
    question: "Is TypeScript required?",
    answer: "Yes, all components are written in TypeScript for type safety and better developer experience."
  }
]

const faqVariants = [
  {
    variant: "accordion" as const,
    title: "Frequently Asked Questions (Accordion)",
    description: "Expandable questions for compact FAQ sections."
  },
  {
    variant: "list" as const,
    title: "Frequently Asked Questions (List)",
    description: "Simple list format for quick reference."
  },
  {
    variant: "card" as const,
    title: "Frequently Asked Questions (Card)",
    description: "Card layout for visually distinct FAQ items."
  }
]

// Main component
export default function FaqDemoPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <Container className="py-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">FAQ Section Demo</h1>
          <p className="text-muted-foreground">
            Different FAQ layouts for business and documentation pages
          </p>
        </div>
      </Container>

      {/* FAQ Variants */}
      {faqVariants.map((faqConfig, index) => (
        <div key={faqConfig.variant}>
          <Container className="py-8">
            <FaqSection
              items={demoFaqItems}
              variant={faqConfig.variant}
              title={faqConfig.title}
              description={faqConfig.description}
            />
          </Container>
          {index < faqVariants.length - 1 && <Separator />}
        </div>
      ))}
    </div>
  )
} 