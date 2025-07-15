import { AuthForm } from "@/components/features/auth"
import { Container } from "@/components/layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

interface AuthFormData {
  email: string
  password: string
  confirmPassword?: string
}

export default function AuthDemoPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string>()
  const [currentMode, setCurrentMode] = useState<"login" | "register">("login")

  async function handleAuthSubmit(data: AuthFormData) {
    setIsLoading(true)
    setError(undefined)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Simulate error for demo
    if (data.email === "error@example.com") {
      setError("Invalid credentials. Please try again.")
    } else {
      console.log("Auth data:", data)
      // In real app, you would handle authentication here
    }
    
    setIsLoading(false)
  }

  return (
    <Container className="py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Authentication Demo</h1>
        <p className="text-muted-foreground">
          Showcase of the refactored auth form component with improved TypeScript interfaces and accessibility
        </p>
      </div>

      <div className="flex justify-center">
        <div className="space-y-6 w-full max-w-md">
          <Card>
            <CardHeader>
              <CardTitle>Mode Toggle</CardTitle>
              <CardDescription>
                Switch between login and register modes to see the form adapt
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentMode("login")}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    currentMode === "login"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => setCurrentMode("register")}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    currentMode === "register"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  Register
                </button>
              </div>
            </CardContent>
          </Card>

          <AuthForm
            mode={currentMode}
            onSubmit={handleAuthSubmit}
            isLoading={isLoading}
            error={error}
          />

          <Card>
            <CardHeader>
              <CardTitle>Demo Instructions</CardTitle>
              <CardDescription>
                Try these scenarios to test the form validation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p><strong>Test Error:</strong> Use "error@example.com" to trigger an error</p>
              <p><strong>Test Validation:</strong> Try submitting with empty fields or invalid email</p>
              <p><strong>Test Password Match:</strong> In register mode, try mismatched passwords</p>
              <p><strong>Test Loading:</strong> All submissions show a 2-second loading state</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Container>
  )
} 