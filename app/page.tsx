import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import {
  MessageSquare,
  Bot,
  Users,
  Layers,
  Factory,
  ShoppingCart,
  Heart,
  DollarSign,
  Clock,
  BarChart3,
  MessageCircle,
  House,
  Award,
  Settings,
  CheckCircle,
  ArrowRight,
  Headset,
} from "lucide-react"
import { ParticleBackground } from "@/components/particle-background"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <ParticleBackground />
      {/* Header */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="nebula-glow"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
              <div className="inline-block bg-gradient-to-r from-primary/20 to-accent/20 px-4 py-2 rounded-full mb-2">
                <span className="text-primary text-sm font-medium">AI-Powered Innovation</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary">
                AI is not the future—it's the present.
              </h1>
              <p className="text-muted-foreground md:text-xl max-w-[700px]">
                Transform Your Business with AI From chatbots to custom AI agents, we deliver powerful automation and
                voice AI solutions that drive growth, boost efficiency, and elevate customer experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button size="lg" className="px-8 gradient-button">
                <Link href="/contact" >
                
                  Get Started
                  </Link>
                </Button>
                
              </div>
            </div>
          </div>
        </section>

        {/* Our AI Solutions */}
        <section id="services" className="py-16 md:py-24 bg-background relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-accent/5 opacity-30"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 gradient-text">Our AI Solutions</h2>
              <p className="text-muted-foreground md:text-lg max-w-[700px]">
                Comprehensive AI solutions designed to transform your business operations
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="gradient-card">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="gradient-icon-bg p-3 rounded-full">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>AI Chatbots Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    24/7 customer support with intelligent chatbots that understand and resolve customer queries.
                  </CardDescription>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="link" asChild className="text-accent hover:text-primary p-0">
                    <Link href="/chatbots" className="flex items-center">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="gradient-card">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="gradient-icon-bg p-3 rounded-full">
                    <Bot className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>AI Voice Agents</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Streamline workflows and reduce manual tasks with intelligent automation agents.
                  </CardDescription>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="link" asChild className="text-accent hover:text-primary p-0">
                    <Link href="/voice-agents" className="flex items-center">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="gradient-card">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="gradient-icon-bg p-3 rounded-full">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Operational Automation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Convert more prospects with AI-powered lead qualification and nurturing.
                  </CardDescription>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="link" asChild className="text-accent hover:text-primary p-0">
                    <Link href="/automation" className="flex items-center">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="gradient-card">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="gradient-icon-bg p-3 rounded-full">
                    <Layers className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>AI Powered Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    AI delivers personalized content, boosting engagement, conversions, and loyalty.
                  </CardDescription>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="link" asChild className="text-accent hover:text-primary p-0">
                    <Link href="/content-personalization" className="flex items-center">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              <Card className="gradient-card">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="gradient-icon-bg p-3 rounded-full">
                    <Layers className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>AI Automation Outreach</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    AI automates social media, enhancing creativity, targeting, and efficiency.
                  </CardDescription>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="link" asChild className="text-accent hover:text-primary p-0">
                    <Link href="/social-media-outreach" className="flex items-center">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section id="industries" className="py-16 md:py-24 gradient-bg border-y border-border/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 gradient-text">Industries We Serve</h2>
              <p className="text-muted-foreground md:text-lg max-w-[700px]">
                Empowering businesses across industries with AI-driven automation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="gradient-icon-bg p-4 rounded-full mb-4">
                  <Factory className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Manufacturing</h3>
                <p className="text-muted-foreground">AI agents for process automation</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="gradient-icon-bg p-4 rounded-full mb-4">
                  <ShoppingCart className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">E-commerce</h3>
                <p className="text-muted-foreground">Chatbots for sales & customer support</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="gradient-icon-bg p-4 rounded-full mb-4">
                  <Heart className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
                <p className="text-muted-foreground">AI assistants for patient management</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="gradient-icon-bg p-4 rounded-full mb-4">
                  <DollarSign className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Finance</h3>
                <p className="text-muted-foreground">AI for document processing & fraud detection</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="gradient-icon-bg p-4 rounded-full mb-4">
                  <House className="h-10 w-10 text-primary"/>
                </div>
                <h3 className="text-xl font-semibold mb-2">Real Estate</h3>
                <p className="text-muted-foreground">AI solutions for property listings and client engagement</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="gradient-icon-bg p-4 rounded-full mb-4">
                  <Headset className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
                <p className="text-muted-foreground">AI-powered service agents and support automation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Business Benefits */}
        <section className="py-16 md:py-24 bg-background relative">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-primary/5 opacity-30"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 gradient-text">
                Business Benefits of AI Chatbots & AI Agents
              </h2>
              <p className="text-muted-foreground md:text-lg max-w-[700px]">
                Tangible results that impact your bottom line
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 gradient-border">
                <DollarSign className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">30% Cost Reduction</h3>
                <p className="text-muted-foreground">Lower customer support costs with AI automation</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 gradient-border">
                <Clock className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">10x Faster Processing</h3>
                <p className="text-muted-foreground">Accelerate business processes with AI agents</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 gradient-border">
                <BarChart3 className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">10-25% Revenue Increase</h3>
                <p className="text-muted-foreground">Boost sales with AI-driven engagement</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 gradient-border">
                <MessageCircle className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
                <p className="text-muted-foreground">Reduce response time from hours to seconds</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 gradient-border">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">20-30% Higher Satisfaction</h3>
                <p className="text-muted-foreground">Improve customer experience with AI support</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 gradient-border">
                <Settings className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">50% More Personalization</h3>
                <p className="text-muted-foreground">Deliver tailored experiences with AI insights</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="about" className="py-16 md:py-24 gradient-bg border-y border-border/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 gradient-text">Why Choose BotMate?</h2>
              <p className="text-muted-foreground md:text-lg max-w-[700px]">
                We deliver excellence in AI implementation with proven results
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="flex flex-col items-center text-center p-6 gradient-card">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">AI Expertise</h3>
                <p className="text-muted-foreground">Backed by industry experts & cutting-edge technology</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 gradient-card">
                <Settings className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
                <p className="text-muted-foreground">Tailored AI chatbots & automation agents for your needs</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 gradient-card">
                <CheckCircle className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                <p className="text-muted-foreground">Increased efficiency & cost savings for businesses</p>
              </div>
            </div>

            {/* Testimonials */}
            <div className="space-y-8">
              <h3 className="text-xl md:text-2xl font-semibold text-center mb-8 gradient-text">What Our Clients Say</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="gradient-card p-6 rounded-lg">
                  <p className="italic mb-4">
                    "The AI chatbot developed by BotMate has transformed our customer service. Response times are down
                    by 80% and customer satisfaction is up by 25%."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full gradient-icon-bg flex items-center justify-center mr-3">
                      <span className="font-semibold text-primary">JD</span>
                    </div>
                    <div>
                      <p className="font-semibold">John Doe</p>
                      <p className="text-sm text-muted-foreground">CTO, E-commerce Company</p>
                    </div>
                  </div>
                </div>
                <div className="gradient-card p-6 rounded-lg">
                  <p className="italic mb-4">
                    "Implementing AI agents for our document processing has cut costs by 35% and improved accuracy. The
                    team at BotMate delivered beyond our expectations."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full gradient-icon-bg flex items-center justify-center mr-3">
                      <span className="font-semibold text-primary">JS</span>
                    </div>
                    <div>
                      <p className="font-semibold">Jane Smith</p>
                      <p className="text-sm text-muted-foreground">Operations Director, Financial Services</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action */}
        <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight gradient-text">
                Ready to transform your business with AI?
              </h2>
              <p className="md:text-xl max-w-[700px]">Book a Free Consultation Today!</p>
              <Button size="lg" className="mt-4 gradient-button">
                 <Link
            href="/contact">
                Schedule a Call
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
