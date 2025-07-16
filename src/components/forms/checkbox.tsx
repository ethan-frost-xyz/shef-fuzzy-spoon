import * as React from "react"
import { cn } from "@/lib/utils"

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
  errorMessage?: string
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, hasError, errorMessage, ...props }, ref) => {
    return (
      <div className="space-y-2">
        <input
          type="checkbox"
          className={cn(
            "h-4 w-4 rounded border border-input bg-background text-primary ring-offset-background focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
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
Checkbox.displayName = "Checkbox"

export { Checkbox }
export type { CheckboxProps } 