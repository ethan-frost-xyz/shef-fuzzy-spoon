import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DocumentationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight">Documentation</h1>
          <p className="text-muted-foreground mt-2">
            Welcome to the Shef Fuzzy Spoon documentation.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Coming Soon</CardTitle>
            <CardDescription>
              Documentation is currently under development. Check back soon for comprehensive guides and API references.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This page will contain detailed documentation for all components, features, and usage examples.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 