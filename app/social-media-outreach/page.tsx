import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Target,
  TrendingUp,
  Clock,
  MessageCircle,
  BarChart3,
  Users,
  DollarSign,
  Home,
  Headset,
  Building,
  ShoppingCart,
  Heart,
  Briefcase,
} from "lucide-react"
import { ParticleBackground } from "@/components/particle-background"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function SocialMediaOutreachPage() {
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
                <span className="text-primary text-sm font-medium">AI-Powered Marketing</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary">
                AI-Powered Social Media Outreach
              </h1>
              <p className="text-muted-foreground md:text-xl max-w-[800px]">
                AI transforms your social media strategy by handling the heavy lifting—so you can focus on what really
                matters: creativity and connection. By automating time-consuming tasks like scheduling, data analysis,
                and audience segmentation, AI helps you reach the right people with the right message at the right time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button size="lg" className="px-8 gradient-button">
                <Link
            href="/contact">
                  Transform Your Social Media Strategy
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
                Key Benefits of AI-Powered Social Media Outreach
              </h2>
              <p className="text-muted-foreground md:text-lg max-w-[700px]">
                Discover how AI can revolutionize your social media presence and engagement
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Enhanced Targeting */}
              <Card className="gradient-card p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">🎯 Enhanced Targeting</h3>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground">
                      AI dives deep into user behavior, preferences, and habits to help you reach the right audience
                      with precision. By understanding what your audience cares about—and where they spend their
                      time—you can deliver highly personalized messages that truly resonate and drive engagement.
                    </p>
                  </CardContent>
                </div>
              </Card>

              {/* Increased Engagement */}
              <Card className="gradient-card p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">📈 Increased Engagement</h3>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground">
                      Automatically craft personalized posts and responses that connect with your followers. AI analyzes
                      audience data to generate relevant, engaging content—leading to more likes, comments, shares, and
                      stronger brand loyalty.
                    </p>
                  </CardContent>
                </div>
              </Card>

              {/* Time Efficiency */}
              <Card className="gradient-card p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">⏱️ Time Efficiency</h3>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground">
                      Let AI handle repetitive tasks like post scheduling, replying to common comments, and managing
                      DMs. Free up your team's time for what really matters—strategy, creativity, and building genuine
                      relationships with your audience.
                    </p>
                  </CardContent>
                </div>
              </Card>

              {/* Better Customer Interaction */}
              <Card className="gradient-card p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <MessageCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">💬 Better Customer Interaction</h3>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground">
                      With AI-powered chatbots and smart responses, you can engage customers instantly—anytime, day or
                      night. This 24/7 responsiveness builds trust, improves satisfaction, and shows customers you're
                      always there when they need you.
                    </p>
                  </CardContent>
                </div>
              </Card>

              {/* Data-Driven Insights */}
              <Card className="gradient-card p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <BarChart3 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">📊 Data-Driven Insights</h3>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground">
                      AI doesn't just track metrics—it reveals the why behind your performance. Get valuable insights on
                      what's working, what's trending, and how to fine-tune your content for better results. Make
                      smarter decisions backed by real-time data.
                    </p>
                  </CardContent>
                </div>
              </Card>

              {/* Scalable Outreach */}
              <Card className="gradient-card p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">📣 Scalable Outreach</h3>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground">
                      Whether you're managing hundreds or thousands of followers, AI helps you scale effortlessly.
                      Maintain a personal touch while growing your reach—without overwhelming your team or sacrificing
                      content quality.
                    </p>
                  </CardContent>
                </div>
              </Card>

              {/* Cost-Effective Growth */}
              <Card className="gradient-card p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <DollarSign className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">💡 Cost-Effective Growth</h3>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground">
                      Automate routine marketing tasks and reduce the need for additional staff. With AI, you can do
                      more with less—cutting costs while increasing efficiency and output. More impact, fewer resources.
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
                How Our AI Social Media Solution Works
              </h2>
              <p className="text-muted-foreground md:text-lg max-w-[700px]">
                A seamless process that transforms your social media strategy
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
                  <h3 className="text-xl font-semibold mb-2">Audience Analysis</h3>
                  <p className="text-muted-foreground">AI identifies your ideal audience and their preferences</p>
                </div>

                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <MessageCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Content Generation</h3>
                  <p className="text-muted-foreground">AI-assisted creation of engaging, personalized content</p>
                </div>

                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Automated Scheduling</h3>
                  <p className="text-muted-foreground">Optimal posting times based on audience activity patterns</p>
                </div>

                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <BarChart3 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Performance Analytics</h3>
                  <p className="text-muted-foreground">Continuous improvement through AI-powered insights</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-16 md:py-24 bg-background relative">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-primary/5 opacity-30"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 gradient-text">Industries We Serve</h2>
              <p className="text-muted-foreground md:text-lg max-w-[700px]">
                AI-powered social media solutions tailored for your specific industry
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="gradient-card p-6">
                <div className="flex items-center mb-6">
                  <Home className="h-10 w-10 text-primary mr-4" />
                  <h3 className="text-xl font-semibold">Real Estate</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  AI-powered social media strategies to showcase properties, engage potential buyers, and build your
                  real estate brand. Automate listing promotions and nurture client relationships with personalized
                  content.
                </p>
              </div>

              <div className="gradient-card p-6">
                <div className="flex items-center mb-6">
                  <Headset className="h-10 w-10 text-primary mr-4" />
                  <h3 className="text-xl font-semibold">Customer Support & Call Centers</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Transform customer service with AI-driven social media monitoring and response. Identify and address
                  customer concerns quickly, maintain consistent brand voice, and scale support operations efficiently.
                </p>
              </div>

              <div className="gradient-card p-6">
                <div className="flex items-center mb-6">
                  <ShoppingCart className="h-10 w-10 text-primary mr-4" />
                  <h3 className="text-xl font-semibold">E-commerce & Retail</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Drive sales through AI-optimized social campaigns, personalized product recommendations, and automated
                  customer engagement. Turn browsers into buyers with targeted content and promotions.
                </p>
              </div>

              <div className="gradient-card p-6">
                <div className="flex items-center mb-6">
                  <Building className="h-10 w-10 text-primary mr-4" />
                  <h3 className="text-xl font-semibold">B2B Services</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Establish thought leadership and generate qualified leads with AI-powered content strategies. Nurture
                  professional relationships and showcase your expertise across business networks.
                </p>
              </div>

              <div className="gradient-card p-6">
                <div className="flex items-center mb-6">
                  <Heart className="h-10 w-10 text-primary mr-4" />
                  <h3 className="text-xl font-semibold">Healthcare</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Build trust and educate patients with compliant, informative social content. AI helps maintain
                  regulatory compliance while delivering valuable health information and practice updates.
                </p>
              </div>

              <div className="gradient-card p-6">
                <div className="flex items-center mb-6">
                  <Briefcase className="h-10 w-10 text-primary mr-4" />
                  <h3 className="text-xl font-semibold">Professional Services</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Enhance your professional brand with consistent, authoritative social presence. AI helps lawyers,
                  accountants, and consultants share expertise and connect with potential clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Results & Metrics */}
        <section className="py-16 md:py-24 gradient-bg border-y border-border/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 gradient-text">Real Business Impact</h2>
              <p className="text-muted-foreground md:text-lg max-w-[700px]">
                Measurable results our clients achieve with AI-powered social media
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="gradient-border p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-4">67%</div>
                <p className="text-xl font-semibold mb-2">Increase in Engagement</p>
                <p className="text-muted-foreground">More likes, comments, and shares</p>
              </div>

              <div className="gradient-border p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-4">40%</div>
                <p className="text-xl font-semibold mb-2">Time Saved</p>
                <p className="text-muted-foreground">On social media management tasks</p>
              </div>

              <div className="gradient-border p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-4">52%</div>
                <p className="text-xl font-semibold mb-2">Lead Generation Boost</p>
                <p className="text-muted-foreground">More qualified leads from social channels</p>
              </div>
            </div>

            {/* Testimonial */}
            <div className="max-w-3xl mx-auto">
              <div className="gradient-card p-8 rounded-lg">
                <div className="flex flex-col items-center text-center">
                  <MessageCircle className="h-12 w-12 text-accent mb-6" />
                  <p className="text-xl italic mb-6">
                    "BotMate's social media automation solution transformed our online presence. We've seen a 78%
                    increase in engagement and a 45% boost in qualified leads coming through our social channels. The
                    time savings alone has been worth the investment—our team now focuses on strategy instead of
                    repetitive posting tasks."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full gradient-icon-bg flex items-center justify-center mr-4">
                      <span className="font-semibold text-primary">RK</span>
                    </div>
                    <div className="text-left">
                      <p className="font-semibold">Rachel Kim</p>
                      <p className="text-sm text-muted-foreground">Marketing Director, Urban Realty Group</p>
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
                Ready to Transform Your Social Media Strategy?
              </h2>
              <p className="md:text-xl max-w-[700px]">
                Get started with AI-powered social media automation today and see the difference in your engagement and
                results.
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
