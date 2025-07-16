"use client"

import { ContactForm } from "@/components/features/contact"
import { Container } from "@/components/layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  priority: "low" | "medium" | "high"
}

export default function ContactDemoPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string>()
  const [success, setSuccess] = useState<string>()

  async function handleContactSubmit(data: ContactFormData) {
    setIsLoading(true)
    setError(undefined)
    setSuccess(undefined)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Simulate error for demo
    if (data.email === "error@example.com") {
      setError("Failed to send message. Please try again later.")
    } else {
      setSuccess("Thank you for your message! We'll get back to you soon.")
      // In a real application, you would send the data to your backend
      console.log("Contact form data:", data)
    }
    
    setIsLoading(false)
  }

  return (
    <Container className="py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Contact Form Demo</h1>
        <p className="text-muted-foreground">
          Showcase of the contact form component with validation, loading states, and error handling
        </p>
      </div>

      <div className="flex justify-center">
        <div className="space-y-6 w-full max-w-4xl">
          <ContactForm
            onSubmit={handleContactSubmit}
            isLoading={isLoading}
            error={error}
            success={success}
          />

          <Card>
            <CardHeader>
              <CardTitle>Demo Instructions</CardTitle>
              <CardDescription>
                Try these scenarios to test the form validation and functionality
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p><strong>Test Error:</strong> Use &quot;error@example.com&quot; to trigger an error response</p>
              <p><strong>Test Validation:</strong> Try submitting with empty required fields</p>
              <p><strong>Test Email Validation:</strong> Enter an invalid email format</p>
              <p><strong>Test Message Length:</strong> Try a message shorter than 10 characters</p>
              <p><strong>Test Loading:</strong> All submissions show a 2-second loading state</p>
              <p><strong>Test Priority:</strong> Change the priority level to see the select component</p>
              <p><strong>Test Success:</strong> Fill out the form correctly to see success message</p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Features</CardTitle>
                <CardDescription>
                  What makes this contact form special
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Real-time form validation</p>
                <p>• Accessible form controls</p>
                <p>• Loading states with spinner</p>
                <p>• Error and success messaging</p>
                <p>• Responsive grid layout</p>
                <p>• Priority level selection</p>
                <p>• Phone number field (optional)</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Technical Details</CardTitle>
                <CardDescription>
                  Implementation highlights
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• TypeScript interfaces for type safety</p>
                <p>• Client-side validation with error clearing</p>
                <p>• Reusable form components</p>
                <p>• Proper ARIA attributes</p>
                <p>• Mobile-first responsive design</p>
                <p>• Consistent with design system</p>
                <p>• Error boundary handling</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Container>
  )
} 