import { HeroSection } from "@/components/hero"
import { Container } from "@/components/layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function HeroDemoPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <Container className="py-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Hero Section Demo</h1>
          <p className="text-muted-foreground">
            Different hero section layouts for business websites
          </p>
        </div>
      </Container>

      {/* Centered Hero - Restaurant */}
      <HeroSection
        variant="centered"
        subtitle="Authentic Italian Cuisine"
        title="Experience the Taste of Italy"
        description="Fresh ingredients, traditional recipes, and warm hospitality. Join us for an unforgettable dining experience that brings the flavors of Italy to your table."
        primaryAction={{
          label: "View Menu",
          href: "#menu"
        }}
        secondaryAction={{
          label: "Make Reservation",
          href: "#reservation"
        }}
        backgroundImage="https://picsum.photos/1600/900"
      />

      <Separator />

      {/* Split Hero - Daycare */}
      <HeroSection
        variant="split"
        subtitle="Nurturing Young Minds"
        title="Where Learning Meets Fun"
        description="Our experienced educators create a safe, stimulating environment where children can explore, learn, and grow. Enroll your child in our comprehensive early childhood program."
        primaryAction={{
          label: "Schedule a Tour",
          href: "#tour"
        }}
        secondaryAction={{
          label: "Learn More",
          href: "#about"
        }}
        image={{
          src: "https://picsum.photos/800/800",
          alt: "Children playing and learning"
        }}
      />

      <Separator />

      {/* Minimal Hero - Bowling Alley */}
      <HeroSection
        variant="minimal"
        subtitle="Family Entertainment Center"
        title="Strike Up Some Fun"
        description="Perfect for parties, leagues, or casual play. Our state-of-the-art lanes and family-friendly atmosphere make every visit memorable."
        primaryAction={{
          label: "Book a Lane",
          href: "#booking"
        }}
      />

      <Separator />

      {/* Centered Hero - Service Business */}
      <HeroSection
        variant="centered"
        subtitle="Professional Cleaning Services"
        title="Your Home, Our Priority"
        description="Reliable, thorough, and eco-friendly cleaning services for homes and offices. Trust our experienced team to keep your space spotless."
        primaryAction={{
          label: "Get Free Quote",
          href: "#quote"
        }}
        secondaryAction={{
          label: "Our Services",
          href: "#services"
        }}
        backgroundImage="https://picsum.photos/1600/900"
      />

      {/* Demo Information */}
      <Container className="py-16">
        <Card>
          <CardHeader>
            <CardTitle>Hero Section Variants</CardTitle>
            <CardDescription>
              Different layouts and use cases for business websites
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="font-semibold">Centered Hero</h4>
                <p className="text-sm text-muted-foreground">
                  Perfect for restaurants, service businesses, and landing pages. 
                  Features centered text with optional background image overlay.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Split Hero</h4>
                <p className="text-sm text-muted-foreground">
                  Ideal for daycares, schools, and businesses that want to showcase 
                  their facility or products alongside compelling copy.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Minimal Hero</h4>
                <p className="text-sm text-muted-foreground">
                  Clean and simple design for businesses that want to focus on 
                  their core message without visual distractions.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Customizable</h4>
                <p className="text-sm text-muted-foreground">
                  All variants support custom actions, images, and styling to 
                  match your brand and business needs.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Container>
    </div>
  )
} 