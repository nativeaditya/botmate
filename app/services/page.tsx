import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  MessageSquare,
  Bot,
  Users,
  Layers,
  FileText,
  Code,
  Calendar,
  CheckCircle,
  Zap,
  BarChart3,
  Heart,
  Clock,
  DollarSign,
  Settings,
  Phone,
  Award,
  Briefcase,
  ArrowRight,
} from "lucide-react"
import { ParticleBackground } from "@/components/particle-background"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
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
                <span className="text-primary text-sm font-medium">Our Services</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-400">
                AI-Powered Solutions to Automate and Scale Your Business
              </h1>
              <p className="text-muted-foreground md:text-xl max-w-[800px]">
                Our AI chatbots and intelligent agents help businesses enhance efficiency, reduce costs, and deliver
                seamless customer experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button size="lg" className="px-8 gradient-button">
                <Link
            href="/contact">
                  Book a Free Consultation
                  </Link>
                </Button>
                
              </div>
            </div>
          </div>
        </section>

        {/* Our AI Solutions */}
        <section id="solutions" className="py-16 md:py-24 bg-background relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-purple-500/5 opacity-30"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 gradient-text">Our AI Solutions</h2>
              <p className="text-muted-foreground md:text-lg max-w-[700px]">
                Comprehensive AI solutions designed to transform your business operations
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="gradient-card">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="gradient-icon-bg p-3 rounded-full">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>AI Chatbots for Customer Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Automate responses, handle FAQs, and improve customer engagement with intelligent AI chatbots.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="gradient-card">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="gradient-icon-bg p-3 rounded-full">
                    <Bot className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>AI Agents for Business Process Automation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    AI-driven agents to streamline repetitive tasks like invoice processing, data entry, and scheduling.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="gradient-card">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="gradient-icon-bg p-3 rounded-full">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>AI Sales & Lead Generation Bots</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Convert visitors into leads with AI-powered chatbots that engage, qualify, and route potential
                    customers.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="gradient-card">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="gradient-icon-bg p-3 rounded-full">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>AI-Powered Virtual Assistants</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Personal AI assistants that help employees with scheduling, data retrieval, and workflow automation.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="gradient-card">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="gradient-icon-bg p-3 rounded-full">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>AI Document Processing & OCR Automation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Automate document handling, invoice scanning, and data extraction with AI-powered OCR solutions.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="gradient-card">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="gradient-icon-bg p-3 rounded-full">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Custom AI Integrations & API Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Connect AI chatbots with CRMs, ERPs, and third-party applications for a seamless digital experience.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How Our AI Solutions Work */}
        <section className="py-16 md:py-24 gradient-bg border-y border-border/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 gradient-text">
                How Our AI Solutions Work
              </h2>
              <p className="text-muted-foreground md:text-lg max-w-[700px]">
                A streamlined process to implement AI solutions tailored to your business needs
              </p>
            </div>

            <div className="relative">
              {/* Process steps with connecting line */}
              <div className=""></div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4 relative">
                    <Briefcase className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Consultation</h3>
                  <p className="text-muted-foreground">Understand your business needs and challenges</p>
                </div>

                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <Settings className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AI Model Selection</h3>
                  <p className="text-muted-foreground">Choose the best AI model for your requirements</p>
                </div>

                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <Layers className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Integration</h3>
                  <p className="text-muted-foreground">Implement AI solutions into your business systems</p>
                </div>

                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Testing & Optimization</h3>
                  <p className="text-muted-foreground">Ensure efficiency and accuracy of AI solutions</p>
                </div>

                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Deployment & Support</h3>
                  <p className="text-muted-foreground">Continuous monitoring and updates</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-16">
              <Button size="lg" className="gradient-button">
              <Link
            href="/contact">
                Book a Free Consultation
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-background relative">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-primary/5 opacity-30"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 gradient-text">
                Why Choose BotMate?
              </h2>
              <p className="text-muted-foreground md:text-lg max-w-[700px]">
                We deliver excellence in AI implementation with proven results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="gradient-card p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <Award className="h-10 w-10 text-primary mr-4" />
                  <h3 className="text-xl font-semibold">Industry Expertise</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  AI-powered solutions tailored for businesses across various industries, backed by years of experience
                  and technical expertise.
                </p>
              </div>

              <div className="gradient-card p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <Layers className="h-10 w-10 text-primary mr-4" />
                  <h3 className="text-xl font-semibold">Seamless Integration</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Our AI chatbots and agents work seamlessly with your existing tools and systems, ensuring minimal
                  disruption to your operations.
                </p>
              </div>

              <div className="gradient-card p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <Clock className="h-10 w-10 text-primary mr-4" />
                  <h3 className="text-xl font-semibold">24/7 Support</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Dedicated team for AI maintenance, improvements, and round-the-clock support to ensure your AI
                  solutions are always performing optimally.
                </p>
              </div>

              <div className="gradient-card p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <BarChart3 className="h-10 w-10 text-primary mr-4" />
                  <h3 className="text-xl font-semibold">Proven Results</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Our AI solutions deliver measurable outcomes in cost savings, efficiency, customer experience, and
                  revenue growth.
                </p>
              </div>
            </div>

            {/* Results Metrics */}
            <div className="space-y-12 mb-16">
              <h3 className="text-2xl font-bold text-center gradient-text">Measurable Business Impact</h3>

              {/* Cost Savings & ROI */}
              <div className="gradient-border p-8">
                <h4 className="text-xl font-semibold mb-6 flex items-center">
                  <DollarSign className="h-6 w-6 text-primary mr-2" />
                  Cost Savings & ROI Growth
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">30%</div>
                    <p className="text-muted-foreground">Cost reduction in customer support</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">10x</div>
                    <p className="text-muted-foreground">Faster processing of business tasks</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">10-25%</div>
                    <p className="text-muted-foreground">Revenue increase with AI solutions</p>
                  </div>
                </div>
              </div>

              {/* Enhanced Customer Experience */}
              <div className="gradient-border p-8">
                <h4 className="text-xl font-semibold mb-6 flex items-center">
                  <Heart className="h-6 w-6 text-primary mr-2" />
                  Enhanced Customer Experience
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                    <p className="text-muted-foreground">Availability, reducing response time from hours to seconds</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">20-30%</div>
                    <p className="text-muted-foreground">Higher customer satisfaction</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">50%</div>
                    <p className="text-muted-foreground">More personalized responses</p>
                  </div>
                </div>
              </div>

              {/* Increased Sales & Lead Conversion */}
              <div className="gradient-border p-8">
                <h4 className="text-xl font-semibold mb-6 flex items-center">
                  <Users className="h-6 w-6 text-primary mr-2" />
                  Increased Sales & Lead Conversion
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">33%</div>
                    <p className="text-muted-foreground">Better lead qualification</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">20%</div>
                    <p className="text-muted-foreground">Higher sales conversions</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">67%</div>
                    <p className="text-muted-foreground">Sales growth in e-commerce with AI chatbots</p>
                  </div>
                </div>
              </div>

              {/* Productivity & Process Automation */}
              <div className="gradient-border p-8">
                <h4 className="text-xl font-semibold mb-6 flex items-center">
                  <Zap className="h-6 w-6 text-primary mr-2" />
                  Productivity & Process Automation
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">60-70%</div>
                    <p className="text-muted-foreground">Of manual tasks automated, boosting efficiency</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">50%</div>
                    <p className="text-muted-foreground">Lower invoice processing costs</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">30%</div>
                    <p className="text-muted-foreground">Reduction in supply chain delays</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
           
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
