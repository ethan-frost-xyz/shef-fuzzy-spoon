import { buttonVariants } from "@/components/ui/button"
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
                className={cn(buttonVariants({ variant: "default", size: "lg" }))}
              >
                {primaryAction.label}
              </a>
            )}
            {secondaryAction && (
              <a
                href={secondaryAction.href}
                className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
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