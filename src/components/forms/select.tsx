import * as React from "react"
import { cn } from "@/lib/utils"

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  hasError?: boolean
  errorMessage?: string
}

interface SelectOptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
  value: string
  children: React.ReactNode
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, hasError, errorMessage, children, ...props }, ref) => {
    return (
      <div className="space-y-2">
        <select
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            hasError && "border-destructive focus-visible:ring-destructive",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        {hasError && errorMessage && (
          <p className="text-sm text-destructive">{errorMessage}</p>
        )}
      </div>
    )
  }
)
Select.displayName = "Select"

const SelectOption = React.forwardRef<HTMLOptionElement, SelectOptionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <option
        className={cn("", className)}
        ref={ref}
        {...props}
      >
        {children}
      </option>
    )
  }
)
SelectOption.displayName = "SelectOption"

export { Select, SelectOption }
export type { SelectProps, SelectOptionProps } 