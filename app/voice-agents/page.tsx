import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Clock,
  Zap,
  Bot,
  MessageCircle,
  Settings,
  HeadphonesIcon,
  PhoneCall,
  PhoneForwarded,
  UserCheck,
  BadgePercent,
  Award,
} from "lucide-react"
import { ParticleBackground } from "@/components/particle-background"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function VoiceAgentsPage() {
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
                <span className="text-primary text-sm font-medium">AI-Powered Voice Solutions</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary">
                Boost Your Business with AI Voice Agents
              </h1>
              <p className="text-muted-foreground md:text-xl max-w-[800px]">
                AI Voice Agents are transforming customer interactions—offering 24/7 availability, seamless engagement,
                and intelligent call handling. By answering inquiries, qualifying leads, and scheduling appointments in
                real-time, they enhance customer experience and unlock new levels of business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button size="lg" className="px-8 gradient-button">
                <Link
            href="/contact">
                  Get Started with AI Voice Agents
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
                How AI Voice Agents Transform Your Business
              </h2>
              <p className="text-muted-foreground md:text-lg max-w-[700px]">
                Discover the powerful benefits that AI-powered voice agents bring to modern businesses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* 24/7 Availability */}
              <Card className="gradient-card p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">24/7 Availability</h3>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground">
                      Never miss a call again. AI Voice Agents are always on—day and night—ensuring every customer
                      interaction is captured. Around-the-clock availability builds trust, enhances your brand image,
                      and maximizes business opportunities.
                    </p>
                  </CardContent>
                </div>
              </Card>

              {/* Instant Responses */}
              <Card className="gradient-card p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Instant Responses</h3>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground">
                      Speed matters. AI Voice Agents provide accurate, immediate answers to customer queries—eliminating
                      wait times and ensuring consistent communication across channels. The result? Happier customers
                      and higher satisfaction rates.
                    </p>
                  </CardContent>
                </div>
              </Card>

              {/* Smart Call Handling */}
              <Card className="gradient-card p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <PhoneForwarded className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Smart Call Handling</h3>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground">
                      AI automates call routing, answers FAQs, takes messages, and shares essential information—freeing
                      up your human team to focus on more complex tasks. This boosts efficiency and delivers a smoother
                      customer experience.
                    </p>
                  </CardContent>
                </div>
              </Card>

              {/* Lead Qualification */}
              <Card className="gradient-card p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <UserCheck className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Lead Qualification</h3>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground">
                      AI Voice Agents intelligently engage callers to qualify leads, capture key details, and pass on
                      only high-potential prospects to your sales team. This improves lead quality, saves valuable time,
                      and supports smarter selling.
                    </p>
                  </CardContent>
                </div>
              </Card>

              {/* Cost-Effective Support */}
              <Card className="gradient-card p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <BadgePercent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Cost-Effective Support</h3>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground">
                      Scale your support without scaling your costs. By handling routine calls and common queries, AI
                      reduces the need for large customer service teams—cutting expenses while maintaining top-notch
                      service.
                    </p>
                  </CardContent>
                </div>
              </Card>

              {/* Consistent Customer Experience */}
              <Card className="gradient-card p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Consistent Customer Experience</h3>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground">
                      Say goodbye to inconsistent service. AI Voice Agents deliver professional, reliable, and efficient
                      interactions every time, reinforcing your brand's reputation and ensuring a seamless customer
                      journey.
                    </p>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* How Our AI Voice Agents Work */}
        <section className="py-16 md:py-24 gradient-bg border-y border-border/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 gradient-text">
                How Our AI Voice Agents Work
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
                    <PhoneCall className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Natural Voice Understanding</h3>
                  <p className="text-muted-foreground">Advanced AI that understands caller intent and context</p>
                </div>

                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <HeadphonesIcon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Human-Like Conversations</h3>
                  <p className="text-muted-foreground">Natural dialogue flow with appropriate responses</p>
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
                    <Settings className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
                  <p className="text-muted-foreground">Connects with your CRM, phone systems, and business tools</p>
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
                Measurable results our clients achieve with AI Voice Agents
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="gradient-border p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-4">85%</div>
                <p className="text-xl font-semibold mb-2">Call Resolution Rate</p>
                <p className="text-muted-foreground">First-call resolution without human intervention</p>
              </div>

              <div className="gradient-border p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-4">40%</div>
                <p className="text-xl font-semibold mb-2">Cost Reduction</p>
                <p className="text-muted-foreground">Lower call center operational expenses</p>
              </div>

              <div className="gradient-border p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-4">28%</div>
                <p className="text-xl font-semibold mb-2">Conversion Increase</p>
                <p className="text-muted-foreground">Higher sales from qualified leads</p>
              </div>
            </div>

            {/* Testimonial */}
            <div className="max-w-3xl mx-auto">
              <div className="gradient-card p-8 rounded-lg">
                <div className="flex flex-col items-center text-center">
                  <MessageCircle className="h-12 w-12 text-accent mb-6" />
                  <p className="text-xl italic mb-6">
                    "Implementing BotMate's voice agent solution has been a game-changer for our business. Our call
                    handling capacity increased by 300% without adding staff, and our lead conversion rate improved by
                    32%. The ROI was evident within the first month."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full gradient-icon-bg flex items-center justify-center mr-4">
                      <span className="font-semibold text-primary">SR</span>
                    </div>
                    <div className="text-left">
                      <p className="font-semibold">Sarah Rodriguez</p>
                      <p className="text-sm text-muted-foreground">Operations Director, Global Services Inc.</p>
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
                Ready to Transform Your Customer Calls?
              </h2>
              <p className="md:text-xl max-w-[700px]">
                Get started with AI voice agents today and see the difference in your business metrics.
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
