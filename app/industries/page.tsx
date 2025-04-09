import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Factory,
  ShoppingCart,
  Heart,
  DollarSign,
  Plane,
  Bot,
  CheckCircle,
  Zap,
  ArrowRight,
  Settings,
  Briefcase,
  FileText,
  MessageSquare,
  Calendar,
  BarChart3,
  Shield,
  Truck,
  Search,
  Cpu,
  Brain,
  Layers,
} from "lucide-react"
import { ParticleBackground } from "@/components/particle-background"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function IndustriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ParticleBackground />
      {/* Header */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-primary/5 to-background/0 z-0"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
              <div className="inline-block bg-gradient-to-r from-primary/20 to-purple-500/20 px-4 py-2 rounded-full mb-2">
                <span className="text-primary text-sm font-medium">Industry Solutions</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-400">
                Empowering Every Industry with Intelligent AI Solutions
              </h1>
              <p className="text-muted-foreground md:text-xl max-w-[800px]">
                From automation to customer engagement, our AI solutions help businesses enhance efficiency, reduce
                costs, and unlock new growth opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button size="lg" className="px-8 gradient-button">
                <Link
            href="/contact">
                   Book a Consultation
                   </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section id="industries" className="py-16 md:py-24 bg-background relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-purple-500/5 opacity-30"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 gradient-text">Industries We Serve</h2>
              <p className="text-muted-foreground md:text-lg max-w-[700px]">
                Revolutionizing industries with AI-driven automation & intelligence
              </p>
            </div>

            {/* Manufacturing */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="gradient-icon-bg p-4 rounded-full">
                  <Factory className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold gradient-text">Manufacturing</h3>
              </div>
              <p className="text-lg mb-6">Optimizing production processes & reducing manual workloads.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="gradient-card">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="gradient-icon-bg p-3 rounded-full">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-base">AI-powered Invoice Processing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Automated processing for suppliers & vendors, reducing manual data entry by 90%.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="gradient-card">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="gradient-icon-bg p-3 rounded-full">
                      <Settings className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-base">Predictive Maintenance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      AI algorithms that predict and prevent machinery breakdowns before they occur.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="gradient-card">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="gradient-icon-bg p-3 rounded-full">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-base">AI-driven Quality Control</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Real-time defect detection systems that improve product quality and reduce waste.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="gradient-card">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="gradient-icon-bg p-3 rounded-full">
                      <Truck className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-base">Supply Chain Optimization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      AI-powered logistics management reducing delays by 30% and improving efficiency.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* E-commerce & Retail */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="gradient-icon-bg p-4 rounded-full">
                  <ShoppingCart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold gradient-text">E-commerce & Retail</h3>
              </div>
              <p className="text-lg mb-6">Enhancing customer experience & increasing sales.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="gradient-card">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="gradient-icon-bg p-3 rounded-full">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-base">AI Chatbots</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Personalized shopping assistance available 24/7, increasing conversion rates by 25%.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="gradient-card">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="gradient-icon-bg p-3 rounded-full">
                      <BarChart3 className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-base">Inventory Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      AI-powered inventory forecasting reducing stockouts by 45% and overstock by 30%.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="gradient-card">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="gradient-icon-bg p-3 rounded-full">
                      <Bot className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-base">Automated Order Processing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      End-to-end automation from order placement to fulfillment, reducing processing time by 70%.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="gradient-card">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="gradient-icon-bg p-3 rounded-full">
                      <Search className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-base">Personalized Recommendations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      AI algorithms that analyze customer behavior to suggest relevant products, increasing AOV by 20%.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Healthcare */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="gradient-icon-bg p-4 rounded-full">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold gradient-text">Healthcare</h3>
              </div>
              <p className="text-lg mb-6">Improving patient care & automating administrative tasks.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="gradient-card">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="gradient-icon-bg p-3 rounded-full">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-base">Automated Appointment Scheduling</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      AI assistants that handle appointment booking, reminders, and rescheduling, reducing no-shows by
                      40%.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="gradient-card">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="gradient-icon-bg p-3 rounded-full">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-base">Medical Data Processing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      AI-powered systems for organizing and analyzing patient records, improving data accuracy by 35%.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="gradient-card">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="gradient-icon-bg p-3 rounded-full">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-base">Virtual Health Assistants</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      24/7 patient engagement tools that provide information, answer questions, and monitor patient
                      status.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Finance & Banking */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="gradient-icon-bg p-4 rounded-full">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold gradient-text">Finance & Banking</h3>
              </div>
              <p className="text-lg mb-6">Streamlining transactions & ensuring fraud prevention.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="gradient-card">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="gradient-icon-bg p-3 rounded-full">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-base">AI-powered Fraud Detection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Real-time monitoring systems that prevent unauthorized activities, reducing fraud by 60%.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="gradient-card">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="gradient-icon-bg p-3 rounded-full">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-base">Financial Service Chatbots</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      AI chatbots for automated customer service, account inquiries, and loan processing assistance.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="gradient-card">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="gradient-icon-bg p-3 rounded-full">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-base">Document Automation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      AI systems for processing invoices, compliance checks, and financial documentation with 90%
                      accuracy.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Travel & Hospitality */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="gradient-icon-bg p-4 rounded-full">
                  <Plane className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold gradient-text">Travel & Hospitality</h3>
              </div>
              <p className="text-lg mb-6">Revolutionizing customer engagement & service automation.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="gradient-card">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="gradient-icon-bg p-3 rounded-full">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-base">AI Chatbots for Travel Assistance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Automated booking, itinerary management, and travel assistance available 24/7 for guests.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="gradient-card">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="gradient-icon-bg p-3 rounded-full">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-base">Personalized Guest Experience</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      AI-driven systems that learn guest preferences to deliver tailored recommendations and services.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* How AI Can Help Your Industry */}
        <section className="py-16 md:py-24 gradient-bg border-y border-border/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 gradient-text">
                How AI Can Help Your Industry
              </h2>
              <p className="text-muted-foreground md:text-lg max-w-[700px]">
                Discover the right AI-powered solution for your business
              </p>
            </div>

            <div className="relative">
              {/* Process steps with connecting line */}
              <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-blue-400 transform -translate-x-1/2"></div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4 relative">
                    <Briefcase className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Consultation</h3>
                  <p className="text-muted-foreground">Understanding your industry challenges and specific needs</p>
                </div>

                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <Brain className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AI Strategy</h3>
                  <p className="text-muted-foreground">Recommending the best AI model and implementation approach</p>
                </div>

                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <Layers className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Integration</h3>
                  <p className="text-muted-foreground">Seamless deployment into your existing business systems</p>
                </div>

                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Optimization & Support</h3>
                  <p className="text-muted-foreground">Continuous AI improvements and dedicated technical support</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-16">
              <Button size="lg" className="gradient-button">
              <Link
            href="/contact">
                Book a Free AI Strategy Call
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Future of AI in Your Industry */}
        <section className="py-16 md:py-24 bg-background relative">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-primary/5 opacity-30"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 gradient-text">
                Future of AI in Your Industry
              </h2>
              <p className="text-muted-foreground md:text-lg max-w-[700px]">
                AI is transforming industries now—don't get left behind
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="gradient-card p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <Factory className="h-10 w-10 text-primary mr-4" />
                  <h3 className="text-xl font-semibold">AI in Manufacturing</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Self-optimizing production lines that adjust parameters in real-time based on quality metrics,
                  material variations, and energy efficiency.
                </p>
                <div className="gradient-border p-4 rounded-lg">
                  <p className="text-sm italic">
                    "By 2025, AI-enabled factories will see a 30% increase in production speed with 50% fewer defects."
                  </p>
                </div>
              </div>

              <div className="gradient-card p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <Heart className="h-10 w-10 text-primary mr-4" />
                  <h3 className="text-xl font-semibold">AI in Healthcare</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  AI-driven diagnostics and treatment suggestions that analyze patient data, medical history, and the
                  latest research to assist healthcare providers.
                </p>
                <div className="gradient-border p-4 rounded-lg">
                  <p className="text-sm italic">
                    "AI diagnostic systems are already achieving 95% accuracy in certain specialties, exceeding
                    human-only diagnosis."
                  </p>
                </div>
              </div>

              <div className="gradient-card p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <ShoppingCart className="h-10 w-10 text-primary mr-4" />
                  <h3 className="text-xl font-semibold">AI in E-commerce</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Hyper-personalized shopping experiences that predict customer needs before they even search, creating
                  tailored product recommendations and interfaces.
                </p>
                <div className="gradient-border p-4 rounded-lg">
                  <p className="text-sm italic">
                    "Retailers using advanced AI personalization are seeing up to 15% higher conversion rates and 20%
                    larger average order values."
                  </p>
                </div>
              </div>

              <div className="gradient-card p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <DollarSign className="h-10 w-10 text-primary mr-4" />
                  <h3 className="text-xl font-semibold">AI in Finance</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  AI-driven investment recommendations and risk assessment tools that analyze market trends, economic
                  indicators, and individual financial situations.
                </p>
                <div className="gradient-border p-4 rounded-lg">
                  <p className="text-sm italic">
                    "Financial institutions using AI for fraud detection are preventing 60% more fraudulent transactions
                    than traditional systems."
                  </p>
                </div>
              </div>

              <div className="gradient-card p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <Plane className="h-10 w-10 text-primary mr-4" />
                  <h3 className="text-xl font-semibold">AI in Travel</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  AI-powered real-time itinerary planning that adapts to changing conditions, preferences, and
                  opportunities during travel for optimal experiences.
                </p>
                <div className="gradient-border p-4 rounded-lg">
                  <p className="text-sm italic">
                    "Smart hotels using AI-driven guest experience systems report 35% higher guest satisfaction scores
                    and 25% more repeat bookings."
                  </p>
                </div>
              </div>

              <div className="gradient-card p-8 rounded-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-6">
                    <Cpu className="h-10 w-10 text-primary mr-4" />
                    <h3 className="text-xl font-semibold">The AI Advantage</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Companies that implement AI solutions now will gain a significant competitive advantage as the
                    technology continues to evolve and transform industries.
                  </p>
                </div>
               
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
