import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface HeroSectionProps {
  variant?: "centered" | "split" | "minimal"
  title: string
  subtitle?: string
  description?: string
  primaryAction?: {
    label: string
    href: string
  }
  secondaryAction?: {
    label: string
    href: string
  }
  image?: {
    src: string
    alt: string
  }
  backgroundImage?: string
  className?: string
}

export function HeroSection({
  variant = "centered",
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  image,
  backgroundImage,
  className
}: HeroSectionProps) {
  function renderContent() {
    const content = (
      <div className="space-y-6">
        {subtitle && (
          <p className="text-lg font-medium text-primary">{subtitle}</p>
        )}
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="text-xl text-muted-foreground max-w-2xl">
            {description}
          </p>
        )}
        {(primaryAction || secondaryAction) && (
          <div className="flex flex-col sm:flex-row gap-4">
            {primaryAction && (
              <a
                href={primaryAction.href}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8"
              >
                {primaryAction.label}
              </a>
            )}
            {secondaryAction && (
              <a
                href={secondaryAction.href}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8"
              >
                {secondaryAction.label}
              </a>
            )}
          </div>
        )}
      </div>
    )

    if (variant === "split" && image) {
      return (
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>{content}</div>
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      )
    }

    return content
  }

  return (
    <section
      className={cn(
        "relative py-24 sm:py-32",
        backgroundImage && "bg-cover bg-center bg-no-repeat",
        className
      )}
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : undefined
      }
    >
      {backgroundImage && (
        <div className="absolute inset-0 bg-black/50" />
      )}
      <Container className="relative">
        <div
          className={cn(
            "text-center",
            variant === "split" && "text-left",
            variant === "minimal" && "max-w-3xl mx-auto"
          )}
        >
          {renderContent()}
        </div>
      </Container>
    </section>
  )
} 