import * as React from "react"
import { cn, generateId } from "@/lib/utils"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
  errorMessage?: string
  label?: string
  required?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, hasError, errorMessage, label, required, id, ...props }, ref) => {
    const inputId = id || generateId("input")
    
    return (
      <div className="space-y-2">
        {label && (
          <label 
            htmlFor={inputId} 
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </label>
        )}
        <input
          type={type}
          id={inputId}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                          hasError && "border-destructive",
            className
          )}
          ref={ref}
          aria-invalid={hasError}
          aria-describedby={hasError && errorMessage ? `${inputId}-error` : undefined}
          {...props}
        />
        {hasError && errorMessage && (
          <p 
            id={`${inputId}-error`}
            className="text-sm text-destructive"
            role="alert"
          >
            {errorMessage}
          </p>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
export type { InputProps } 