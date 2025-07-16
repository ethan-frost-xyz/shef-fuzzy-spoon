import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input, Label, Textarea, Select, SelectOption, Checkbox, Radio } from "@/components/forms"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Spinner } from "@/components/ui/spinner"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Container } from "@/components/layout"

export default function ComponentsDemoPage() {
  return (
    <Container className="py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">UI Components Demo</h1>
        <p className="text-muted-foreground">
          A showcase of all available UI components in the design system
        </p>
      </div>

      {/* Buttons */}
      <Card>
        <CardHeader>
          <CardTitle>Buttons</CardTitle>
          <CardDescription>Different button variants and sizes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button isLoading>Loading</Button>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">🚀</Button>
          </div>
        </CardContent>
      </Card>

      {/* Form Elements */}
      <Card>
        <CardHeader>
          <CardTitle>Form Elements</CardTitle>
          <CardDescription>Input fields, labels, and form controls</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Input 
              label="Email"
              type="email" 
              placeholder="Enter your email" 
              required
            />
          </div>
          
          <div className="space-y-2">
            <Input 
              label="Email (with error)"
              type="email" 
              placeholder="Enter your email" 
              hasError 
              errorMessage="Please enter a valid email address"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Textarea 
              id="message" 
              placeholder="Enter your message" 
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Select id="category">
              <SelectOption value="">Select a category</SelectOption>
              <SelectOption value="tech">Technology</SelectOption>
              <SelectOption value="design">Design</SelectOption>
              <SelectOption value="business">Business</SelectOption>
            </Select>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Radio id="newsletter" name="newsletter" />
              <Label htmlFor="newsletter">Subscribe to newsletter</Label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Display Components */}
      <Card>
        <CardHeader>
          <CardTitle>Display Components</CardTitle>
          <CardDescription>Badges, separators, and spinners</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>

          <div className="space-y-4">
            <div>Content above separator</div>
            <Separator />
            <div>Content below separator</div>
          </div>

          <div className="flex items-center gap-4">
            <Spinner size="sm" />
            <Spinner size="default" />
            <Spinner size="lg" />
            <Spinner size="xl" />
          </div>
        </CardContent>
      </Card>

      {/* Alerts */}
      <Card>
        <CardHeader>
          <CardTitle>Alerts</CardTitle>
          <CardDescription>Different alert types for user feedback</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <AlertTitle>Default Alert</AlertTitle>
            <AlertDescription>
              This is a default alert message for general information.
            </AlertDescription>
          </Alert>

          <Alert variant="success">
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              Your action was completed successfully.
            </AlertDescription>
          </Alert>

          <Alert variant="warning">
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
              Please review your input before proceeding.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Something went wrong. Please try again.
            </AlertDescription>
          </Alert>

          <Alert variant="info">
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>
              Here&apos;s some helpful information for you.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Layout Components */}
      <Card>
        <CardHeader>
          <CardTitle>Layout Components</CardTitle>
          <CardDescription>Container and layout utilities</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-medium">Container Sizes</h4>
            <div className="space-y-2">
              <Container size="sm" className="bg-muted p-4 rounded">
                Small container (max-w-sm)
              </Container>
              <Container size="default" className="bg-muted p-4 rounded">
                Default container (max-w-4xl)
              </Container>
              <Container size="lg" className="bg-muted p-4 rounded">
                Large container (max-w-6xl)
              </Container>
            </div>
          </div>
        </CardContent>
      </Card>
    </Container>
  )
} 