import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  MessageSquare,
  Clock,
  Users,
  Heart,
  Zap,
  DollarSign,
  BarChart3,
  Bot,
  CheckCircle,
  MessageCircle,
  Settings,
} from "lucide-react"
import { ParticleBackground } from "@/components/particle-background"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function ChatbotsPage() {
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
                <span className="text-primary text-sm font-medium">AI-Powered Customer Engagement</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary">
                Boosting Business with AI Chatbots
              </h1>
              <p className="text-muted-foreground md:text-xl max-w-[800px]">
                AI Chatbots empower businesses to thrive by automating tasks, delivering 24/7 support, and personalizing
                every customer interaction. The result? Increased efficiency, lower costs, and stronger customer
                loyalty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button size="lg" className="px-8 gradient-button">
                <Link
            href="/contact">
                  Get Started with AI Chatbots
                  </Link>
                </Button>
               
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 md:py-24 bg-background relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-accent/5 opacity-30"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 gradient-text">
                How AI Chatbots Transform Your Business
              </h2>
              <p className="text-muted-foreground md:text-lg max-w-[700px]">
                Discover the powerful benefits that AI-powered chatbots bring to modern businesses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* 24/7 Customer Support */}
              <Card className="gradient-card p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">24/7 Customer Support</h3>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground">
                      Never miss a customer again. AI Chatbots operate around the clock—answering inquiries, processing
                      orders, and resolving issues—so your business stays responsive even when your team is offline.
                    </p>
                  </CardContent>
                </div>
              </Card>

              {/* Boost Sales & Lead Generation */}
              <Card className="gradient-card p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <BarChart3 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Boost Sales & Lead Generation</h3>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground">
                      AI Chatbots qualify leads, schedule appointments, and deliver personalized product recommendations
                      based on customer behavior and preferences. This not only improves conversion rates but also
                      enhances the overall customer journey.
                    </p>
                  </CardContent>
                </div>
              </Card>

              {/* Enhance Customer Experience */}
              <Card className="gradient-card p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Enhance Customer Experience</h3>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground">
                      Deliver instant, personalized responses every time. AI Chatbots analyze customer data to provide
                      hyper-relevant interactions, making customers feel heard and valued—leading to greater
                      satisfaction and long-term loyalty.
                    </p>
                  </CardContent>
                </div>
              </Card>

              {/* Streamline Operations & Save Time */}
              <Card className="gradient-card p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Streamline Operations & Save Time</h3>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground">
                      Automate repetitive tasks like booking appointments, answering FAQs, or handling basic
                      transactions. Free your team to focus on high-impact work while your chatbot handles the routine.
                    </p>
                  </CardContent>
                </div>
              </Card>

              {/* Reduce Operational Costs */}
              <Card className="gradient-card p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <DollarSign className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Reduce Operational Costs</h3>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground">
                      By automating everyday customer interactions, AI Chatbots help reduce staffing needs and cut down
                      on manual work—resulting in significant cost savings without compromising service quality.
                    </p>
                  </CardContent>
                </div>
              </Card>

              {/* Scalable Customer Support */}
              <Card className="gradient-card p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Scalable Customer Support</h3>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground">
                      Whether you're serving ten customers or ten thousand, AI Chatbots scale effortlessly to meet
                      demand. They adapt in real-time, allowing your business to grow without added complexity or
                      resource strain.
                    </p>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* How Our AI Chatbots Work */}
        <section className="py-16 md:py-24 gradient-bg border-y border-border/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 gradient-text">
                How Our AI Chatbots Work
              </h2>
              <p className="text-muted-foreground md:text-lg max-w-[700px]">
                Intelligent, adaptive, and seamlessly integrated with your business
              </p>
            </div>

            <div className="relative">
              {/* Process steps with connecting line */}
              <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary transform -translate-x-1/2"></div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4 relative">
                    <MessageSquare className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Natural Language Understanding</h3>
                  <p className="text-muted-foreground">Advanced AI that understands customer intent and context</p>
                </div>

                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <Settings className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Personalization Engine</h3>
                  <p className="text-muted-foreground">Tailors responses based on customer history and preferences</p>
                </div>

                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <Bot className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
                  <p className="text-muted-foreground">Improves over time through machine learning and feedback</p>
                </div>

                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
                  <p className="text-muted-foreground">Connects with your CRM, e-commerce, and business systems</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results & Metrics */}
        <section className="py-16 md:py-24 bg-background relative">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-primary/5 opacity-30"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 gradient-text">Real Business Impact</h2>
              <p className="text-muted-foreground md:text-lg max-w-[700px]">
                Measurable results our clients achieve with AI Chatbots
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="gradient-border p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-4">70%</div>
                <p className="text-xl font-semibold mb-2">Faster Response Times</p>
                <p className="text-muted-foreground">From minutes to seconds for customer inquiries</p>
              </div>

              <div className="gradient-border p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-4">35%</div>
                <p className="text-xl font-semibold mb-2">Cost Reduction</p>
                <p className="text-muted-foreground">Lower customer service operational expenses</p>
              </div>

              <div className="gradient-border p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-4">24%</div>
                <p className="text-xl font-semibold mb-2">Conversion Increase</p>
                <p className="text-muted-foreground">Higher sales from personalized recommendations</p>
              </div>
            </div>

            {/* Testimonial */}
            <div className="max-w-3xl mx-auto">
              <div className="gradient-card p-8 rounded-lg">
                <div className="flex flex-col items-center text-center">
                  <MessageCircle className="h-12 w-12 text-accent mb-6" />
                  <p className="text-xl italic mb-6">
                    "Implementing BotMate's chatbot solution transformed our customer service. We're now able to
                    handle 5x more inquiries without adding staff, and our customer satisfaction scores have increased
                    by 28%. The ROI has been incredible."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full gradient-icon-bg flex items-center justify-center mr-4">
                      <span className="font-semibold text-primary">MJ</span>
                    </div>
                    <div className="text-left">
                      <p className="font-semibold">Michael Johnson</p>
                      <p className="text-sm text-muted-foreground">Customer Experience Director, TechRetail Inc.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center space-y-8">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight gradient-text">
                Ready to Transform Your Customer Experience?
              </h2>
              <p className="md:text-xl max-w-[700px]">
                Get started with AI chatbots today and see the difference in your business metrics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gradient-button">
                <Link
            href="/contact">
                  Book a Free Consultation
                  </Link>
                </Button>
                
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
