import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const containerVariants = cva(
  "mx-auto w-full",
  {
    variants: {
      size: {
        sm: "max-w-sm",
        default: "max-w-4xl",
        lg: "max-w-6xl",
        xl: "max-w-7xl",
        full: "max-w-full",
      },
      padding: {
        none: "",
        sm: "px-4",
        default: "px-6",
        lg: "px-8",
      },
    },
    defaultVariants: {
      size: "default",
      padding: "default",
    },
  }
)

interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, padding, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(containerVariants({ size, padding }), className)}
      {...props}
    />
  )
)
Container.displayName = "Container"

export { Container, containerVariants } 