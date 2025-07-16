import * as React from "react"
import { cn } from "@/lib/utils"

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
  errorMessage?: string
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, hasError, errorMessage, ...props }, ref) => {
    return (
      <div className="space-y-2">
        <input
          type="radio"
          className={cn(
            "h-4 w-4 border border-input bg-background text-primary ring-offset-background focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                          hasError && "border-destructive",
            className
          )}
          ref={ref}
          {...props}
        />
        {hasError && errorMessage && (
          <p className="text-sm text-destructive">{errorMessage}</p>
        )}
      </div>
    )
  }
)
Radio.displayName = "Radio"

export { Radio }
export type { RadioProps } 