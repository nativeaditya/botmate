import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Zap,
  MessageCircle,
  Users,
  Lightbulb,
  RefreshCw,
  Rocket,
  Target,
  BarChart3,
  Heart,
  ThumbsUp,
  Layers,
} from "lucide-react"
import { ParticleBackground } from "@/components/particle-background"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function ContentPersonalizationPage() {
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
                <span className="text-primary text-sm font-medium">AI-Powered Personalization</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary">
                Personalized Content Experiences with AI
              </h1>
              <p className="text-muted-foreground md:text-xl max-w-[800px]">
                Deliver the right content to the right person—every time. AI-powered content recommendations create
                hyper-personalized user journeys that boost engagement, improve navigation, and increase conversions. By
                analyzing visitor behavior in real time, AI ensures each user sees the most relevant articles, products,
                or services—building trust and long-term customer relationships.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button size="lg" className="px-8 gradient-button">
                <Link
            href="/contact">
                  Get Started with AI Personalization
                  </Link>
                </Button>
               
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 md:py-24 bg-background relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-accent/5 opacity-30"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 gradient-text">
                Benefits of AI-Powered Content Recommendations for Every Visitor
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="gradient-card p-8 rounded-lg mb-12">
                <p className="text-lg">
                  AI-driven content recommendations are transforming digital experiences through powerful
                  personalization. By intelligently analyzing each visitor's browsing history, preferences, and
                  real-time behavior, advanced AI algorithms deliver dynamic, relevant suggestions—whether it's
                  articles, products, or services.
                </p>
                <p className="text-lg mt-4">
                  This personalized approach captivates attention, encourages deeper engagement, and simplifies site
                  navigation. The result? Higher conversion rates, longer session durations, and more satisfied users.
                </p>
                <p className="text-lg mt-4">
                  By delivering truly tailored content to every visitor, businesses not only increase performance
                  metrics but also build stronger relationships and foster meaningful, lasting connections with their
                  audience.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {/* Increased Engagement */}
              <Card className="gradient-card p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">🔥 Increased Engagement</h3>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground">
                      When content aligns with user interests, people stick around. Personalized recommendations
                      encourage longer visits, higher click-through rates, and deeper interaction—making every session
                      more rewarding for your audience.
                    </p>
                  </CardContent>
                </div>
              </Card>

              {/* Higher Conversion Rates */}
              <Card className="gradient-card p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <Lightbulb className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">💡 Higher Conversion Rates</h3>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground">
                      AI doesn't just recommend—it guides. By surfacing content that matches user needs, it naturally
                      leads visitors toward key actions like signing up, making a purchase, or downloading resources.
                      The result? Better user experiences and stronger business outcomes.
                    </p>
                  </CardContent>
                </div>
              </Card>

              {/* Better User Retention */}
              <Card className="gradient-card p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <RefreshCw className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">🔁 Better User Retention</h3>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground">
                      Personalized experiences foster loyalty. When visitors consistently find content that resonates,
                      they're more likely to return, engage again, and become long-term users or customers.
                    </p>
                  </CardContent>
                </div>
              </Card>

              {/* Improved User Experience */}
              <Card className="gradient-card p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <Rocket className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">🚀 Improved User Experience</h3>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground">
                      Make browsing effortless. AI serves up the right content at the right time, minimizing the need
                      for searching or scrolling. It's a smoother, smarter experience that keeps users satisfied and
                      coming back for more.
                    </p>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24 gradient-bg border-y border-border/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 gradient-text">
                How AI Content Personalization Works
              </h2>
              <p className="text-muted-foreground md:text-lg max-w-[700px]">
                Intelligent algorithms that understand and adapt to your audience
              </p>
            </div>

            <div className="relative">
              {/* Process steps with connecting line */}
              <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary transform -translate-x-1/2"></div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4 relative">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Data Collection</h3>
                  <p className="text-muted-foreground">
                    Gathering user behavior, preferences, and interaction patterns
                  </p>
                </div>

                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <Layers className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
                  <p className="text-muted-foreground">Processing data through advanced machine learning algorithms</p>
                </div>

                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Content Matching</h3>
                  <p className="text-muted-foreground">
                    Identifying the most relevant content for each individual user
                  </p>
                </div>

                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <ThumbsUp className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
                  <p className="text-muted-foreground">Refining recommendations based on ongoing user interactions</p>
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
                Measurable results our clients achieve with AI Content Personalization
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="gradient-border p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-4">37%</div>
                <p className="text-xl font-semibold mb-2">Increase in Engagement</p>
                <p className="text-muted-foreground">Higher page views and time on site</p>
              </div>

              <div className="gradient-border p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-4">28%</div>
                <p className="text-xl font-semibold mb-2">Conversion Rate Boost</p>
                <p className="text-muted-foreground">More visitors taking desired actions</p>
              </div>

              <div className="gradient-border p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-4">42%</div>
                <p className="text-xl font-semibold mb-2">Improved Retention</p>
                <p className="text-muted-foreground">Higher return visitor rates</p>
              </div>
            </div>

            {/* Testimonial */}
            <div className="max-w-3xl mx-auto">
              <div className="gradient-card p-8 rounded-lg">
                <div className="flex flex-col items-center text-center">
                  <MessageCircle className="h-12 w-12 text-accent mb-6" />
                  <p className="text-xl italic mb-6">
                    "Implementing BotMate's content personalization solution transformed our digital experience. Our
                    average session duration increased by 45%, and our conversion rate jumped by 32%. Most importantly,
                    our customers tell us they love how our site seems to 'understand' exactly what they're looking
                    for."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full gradient-icon-bg flex items-center justify-center mr-4">
                      <span className="font-semibold text-primary">EM</span>
                    </div>
                    <div className="text-left">
                      <p className="font-semibold">Emily Martinez</p>
                      <p className="text-sm text-muted-foreground">Digital Marketing Director, Global Media Inc.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 md:py-24 gradient-bg border-y border-border/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 gradient-text">
                Content Personalization Use Cases
              </h2>
              <p className="text-muted-foreground md:text-lg max-w-[700px]">
                How different industries leverage AI-powered content recommendations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="gradient-card p-6">
                <div className="flex items-center mb-6">
                  <BarChart3 className="h-10 w-10 text-primary mr-4" />
                  <h3 className="text-xl font-semibold">E-commerce</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Product recommendations based on browsing history, purchase patterns, and similar customer profiles,
                  increasing average order value and conversion rates.
                </p>
              </div>

              <div className="gradient-card p-6">
                <div className="flex items-center mb-6">
                  <Heart className="h-10 w-10 text-primary mr-4" />
                  <h3 className="text-xl font-semibold">Media & Publishing</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Article and content suggestions that match reader interests, increasing page views, subscription
                  rates, and advertising revenue.
                </p>
              </div>

              <div className="gradient-card p-6">
                <div className="flex items-center mb-6">
                  <Users className="h-10 w-10 text-primary mr-4" />
                  <h3 className="text-xl font-semibold">B2B Services</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Personalized resource recommendations (case studies, whitepapers, webinars) based on industry, company
                  size, and stage in the buyer journey.
                </p>
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
                Ready to Personalize Your Content Experience?
              </h2>
              <p className="md:text-xl max-w-[700px]">
                Get started with AI-powered content personalization today and transform how your audience engages with
                your brand.
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
