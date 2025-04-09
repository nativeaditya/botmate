import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Award,
  Layers,
  CheckCircle,
  Settings,
  Factory,
  ShoppingCart,
  Heart,
  DollarSign,
  Plane,
  Users,
  Briefcase,
  Code,
  Zap,
  ArrowRight,
  Phone,
  Mail,
  BarChart3,
} from "lucide-react"
import { ParticleBackground } from "@/components/particle-background"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
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
            <div className="flex flex-col items-center text-center space-y-6 md:space-y-8 mb-12">
              <div className="inline-block bg-gradient-to-r from-primary/20 to-purple-500/20 px-4 py-2 rounded-full mb-2">
                <span className="text-primary text-sm font-medium">About Us</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-400">
                Pioneering AI Innovation for Businesses
              </h1>
            </div>

            {/* Who We Are */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">Who We Are</h2>
              <div className="space-y-6 text-lg">
                <p>
                  At BotMate, we are a team of AI experts, engineers, and business strategists dedicated to
                  revolutionizing industries with intelligent automation. Our mission is to help businesses leverage the
                  power of AI-driven chatbots and automation agents to improve efficiency, enhance customer experiences,
                  and drive growth.
                </p>
                <p>
                  With cutting-edge machine learning, natural language processing (NLP), and AI automation, we build
                  scalable and intelligent solutions that seamlessly integrate into existing workflows. Whether you're
                  looking to automate customer interactions, streamline business operations, or optimize
                  decision-making, BotMate delivers AI solutions tailored to your needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 md:py-24 gradient-bg border-y border-border/20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 gradient-text">Our Mission</h2>
              <div className="text-3xl md:text-4xl font-bold italic mb-8">
                "Empowering businesses with AI to automate, innovate, and scale."
              </div>
              <p className="text-lg">
                We believe that AI is not just a tool for the future—it's a game-changer today. Our goal is to make AI
                accessible and practical for businesses of all sizes, transforming how they operate, communicate, and
                grow.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-background relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-purple-500/5 opacity-30"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 gradient-text">
                Why Choose BotMate?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="gradient-card p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">AI Expertise & Innovation</h3>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground">
                      We specialize in developing state-of-the-art AI chatbots, virtual assistants, and automation
                      solutions tailored for various industries.
                    </p>
                  </CardContent>
                </div>
              </Card>

              <Card className="gradient-card p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <Layers className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Seamless Integration</h3>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground">
                      Our AI-powered solutions are designed to work with your existing CRM, ERP, and enterprise systems,
                      ensuring a smooth transition to automation.
                    </p>
                  </CardContent>
                </div>
              </Card>

              <Card className="gradient-card p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <BarChart3 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Proven Business Impact</h3>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground">
                      From reducing operational costs to boosting efficiency by up to 50%, our AI solutions deliver
                      measurable results.
                    </p>
                  </CardContent>
                </div>
              </Card>

              <Card className="gradient-card p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">End-to-End AI Solutions</h3>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground">
                      From consultation to deployment and ongoing support, we provide a complete AI transformation
                      journey for your business.
                    </p>
                  </CardContent>
                </div>
              </Card>

              <Card className="gradient-card p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <Code className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Custom AI Development</h3>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground">
                      Every business is unique, and so are our AI solutions. We design custom chatbots, automation
                      agents, and AI-driven tools that fit your industry-specific needs.
                    </p>
                  </CardContent>
                </div>
              </Card>

              <Card className="gradient-card p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <Settings className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">AI That Understands & Learns</h3>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground">
                      Our AI models continuously improve using data-driven learning, ensuring smarter, more efficient
                      interactions over time.
                    </p>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24 gradient-bg border-y border-border/20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 gradient-text text-center">
                Our Story – How BotMate Started
              </h2>
              <div className="space-y-6 text-lg">
                <p>
                  Founded with a vision to redefine business automation, BotMate emerged as a response to the
                  increasing need for AI-driven efficiency in industries like manufacturing, e-commerce, healthcare,
                  finance, and more.
                </p>
                <p>
                  As businesses struggled with manual workflows, rising operational costs, and inefficient customer
                  service, we saw an opportunity to bridge the gap with intelligent automation.
                </p>
                <p>
                  Today, BotMate is a trusted AI solutions provider, helping companies automate processes, optimize
                  performance, and create seamless digital experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-16 md:py-24 bg-background relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-purple-500/5 opacity-30"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 gradient-text">Industries We Serve</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
              <div className="flex flex-col items-center text-center">
                <div className="gradient-icon-bg p-4 rounded-full mb-4">
                  <Factory className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Manufacturing</h3>
                <p className="text-muted-foreground">
                  AI-powered invoice processing, predictive maintenance, and quality control.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="gradient-icon-bg p-4 rounded-full mb-4">
                  <ShoppingCart className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">E-commerce & Retail</h3>
                <p className="text-muted-foreground">
                  AI chatbots for customer support, sales automation, and personalized recommendations.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="gradient-icon-bg p-4 rounded-full mb-4">
                  <Heart className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
                <p className="text-muted-foreground">
                  AI-driven appointment scheduling, medical data automation, and virtual assistants.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="gradient-icon-bg p-4 rounded-full mb-4">
                  <DollarSign className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Finance & Banking</h3>
                <p className="text-muted-foreground">
                  AI fraud detection, automated document processing, and AI-powered customer support.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="gradient-icon-bg p-4 rounded-full mb-4">
                  <Plane className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Travel & Hospitality</h3>
                <p className="text-muted-foreground">
                  AI chatbots for automated bookings, customer service, and personalized travel experiences.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <Button asChild className="gradient-button">
                <Link href="/industries">
                  Explore More: Industries We Serve
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 md:py-24 gradient-bg border-y border-border/20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 gradient-text text-center">Our Team</h2>
              <p className="text-lg text-center mb-12">
                Behind BotMate is a group of AI researchers, developers, and automation specialists who are passionate
                about bringing AI-powered efficiency to businesses. Our diverse team brings expertise in machine
                learning, software development, UX design, and business strategy to create AI solutions that deliver
                real value.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 flex items-center justify-center mb-4">
                    <Users className="h-16 w-16 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">AI Researchers</h3>
                  <p className="text-muted-foreground mt-2">
                    Experts in machine learning and natural language processing
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 flex items-center justify-center mb-4">
                    <Code className="h-16 w-16 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Developers</h3>
                  <p className="text-muted-foreground mt-2">
                    Software engineers specializing in AI integration and automation
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 flex items-center justify-center mb-4">
                    <Briefcase className="h-16 w-16 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Business Strategists</h3>
                  <p className="text-muted-foreground mt-2">Experts in digital transformation and AI implementation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our AI Development Process */}
        <section className="py-16 md:py-24 bg-background relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-purple-500/5 opacity-30"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 gradient-text">
                Our AI Development Process
              </h2>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Process steps with connecting line */}
              <div className="hidden md:block absolute left-[40px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-blue-400"></div>

              <div className="space-y-12">
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="gradient-icon-bg p-4 rounded-full">
                      <Briefcase className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">1. AI Consultation & Strategy</h3>
                    <p className="text-muted-foreground">
                      Understanding your business needs and identifying the right AI approach.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="gradient-icon-bg p-4 rounded-full">
                      <Code className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">2. AI Solution Design</h3>
                    <p className="text-muted-foreground">
                      Developing tailored AI-powered automation and chatbot solutions.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="gradient-icon-bg p-4 rounded-full">
                      <Layers className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">3. Implementation & Integration</h3>
                    <p className="text-muted-foreground">Seamlessly integrating AI into your existing systems.</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="gradient-icon-bg p-4 rounded-full">
                      <Settings className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">4. AI Training & Optimization</h3>
                    <p className="text-muted-foreground">Ensuring continuous learning and improvement of AI models.</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="gradient-icon-bg p-4 rounded-full">
                      <Zap className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">5. Ongoing Support & Upgrades</h3>
                    <p className="text-muted-foreground">Regular updates, performance monitoring, and enhancements.</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-12">
                <Button className="gradient-button">
                <Link
            href="/contact">
                  Start Your AI Journey Today: Book a Free Consultation
                  </Link>
                  </Button>
              </div>
            </div>
          </div>
        </section>

        {/* BotMate in Numbers */}
        <section className="py-16 md:py-24 gradient-bg border-y border-border/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 gradient-text">BotMate in Numbers</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="gradient-border p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-4">50%+</div>
                <p className="text-muted-foreground">Increase in operational efficiency across industries</p>
              </div>

              <div className="gradient-border p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-4">24/7</div>
                <p className="text-muted-foreground">
                  AI-powered automation for customer support and business processes
                </p>
              </div>

              <div className="gradient-border p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-4">95%</div>
                <p className="text-muted-foreground">Accuracy in AI-driven document processing and fraud detection</p>
              </div>

              <div className="gradient-border p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-4">100+</div>
                <p className="text-muted-foreground">Seamless AI integrations with business applications</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-blue-500/20"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center space-y-8">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight gradient-text">
                Ready to Automate & Scale Your Business?
              </h2>
              <p className="md:text-xl max-w-[700px]">Let's discuss how AI can transform your business operations.</p>

              <div className="flex justify-center">
                <Button size="lg" className="gradient-button">
                <Link
            href="/contact">
                  Schedule a Free Consultation
                  </Link>
                </Button>
                
              </div>
            </div>
          </div>
        </section>

        {/* Connect With Us */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-6">
              <h2 className="text-2xl font-bold gradient-text">Connect With Us</h2>

              <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:info@botmate.in" className="hover:text-primary transition-colors">
                    info@botmate.in
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:+916367727023" className="hover:text-primary transition-colors">
                    +91 6367727023
                  </a>
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
