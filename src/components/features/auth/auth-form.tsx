import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/forms/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { isValidEmail } from "@/lib/utils"

interface AuthFormProps {
  mode: "login" | "register"
  onSubmit: (data: AuthFormData) => void
  isLoading?: boolean
  error?: string
}

interface AuthFormData {
  email: string
  password: string
  confirmPassword?: string
}

interface AuthFormState {
  email: string
  password: string
  confirmPassword: string
  errors: Record<string, string>
}

function AuthForm({ mode, onSubmit, isLoading = false, error }: AuthFormProps) {
  const [formData, setFormData] = React.useState<AuthFormState>({
    email: "",
    password: "",
    confirmPassword: "",
    errors: {},
  })

  function handleInputChange(field: keyof AuthFormState, value: string) {
    setFormData(prev => ({
      ...prev,
      [field]: value,
      errors: { ...prev.errors, [field]: "" }
    }))
  }

  function validateForm(): boolean {
    const errors: Record<string, string> = {}

    if (!formData.email) {
      errors.email = "Email is required"
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Please enter a valid email"
    }

    if (!formData.password) {
      errors.password = "Password is required"
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters"
    }

    if (mode === "register") {
      if (!formData.confirmPassword) {
        errors.confirmPassword = "Please confirm your password"
      } else if (formData.password !== formData.confirmPassword) {
        errors.confirmPassword = "Passwords do not match"
      }
    }

    setFormData(prev => ({ ...prev, errors }))
    return Object.keys(errors).length === 0
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    
    if (!validateForm()) return

    const submitData: AuthFormData = {
      email: formData.email,
      password: formData.password,
    }

    if (mode === "register") {
      submitData.confirmPassword = formData.confirmPassword
    }

    onSubmit(submitData)
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>{mode === "login" ? "Sign In" : "Create Account"}</CardTitle>
        <CardDescription>
          {mode === "login" 
            ? "Enter your credentials to access your account"
            : "Create a new account to get started"
          }
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            hasError={!!formData.errors.email}
            errorMessage={formData.errors.email}
            required
          />
          
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            hasError={!!formData.errors.password}
            errorMessage={formData.errors.password}
            required
          />
          
          {mode === "register" && (
            <Input
              label="Confirm Password"
              type="password"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
              hasError={!!formData.errors.confirmPassword}
              errorMessage={formData.errors.confirmPassword}
              required
            />
          )}
          
          <Button 
            type="submit" 
            className="w-full"
            isLoading={isLoading}
            loadingText={mode === "login" ? "Signing in..." : "Creating account..."}
          >
            {mode === "login" ? "Sign In" : "Create Account"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export { AuthForm }
export type { AuthFormProps, AuthFormData } 