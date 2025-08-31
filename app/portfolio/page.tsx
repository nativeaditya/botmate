import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Home, ShoppingCart, DollarSign, CheckCircle, ArrowRight } from "lucide-react"
import { ParticleBackground } from "@/components/particle-background"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ParticleBackground />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="nebula-glow"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary">
                {"Your Competitors Are Already Automating. Why Are You Still Guessing?"}
              </h1>
              <p className="text-muted-foreground md:text-xl">
                {"If you’re not automating, you’re not competing—you’re losing."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="px-8 gradient-button">
                  <Link href="/contact">Secure your AI edge now</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="px-8 border-primary/30 hover:border-primary/60 bg-transparent"
                >
                  <Link href="/contact">Contact us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-16 md:py-24 bg-background relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-accent/5 opacity-30"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight gradient-text">Customer Reviews</h2>
              <p className="text-muted-foreground mt-2">Real results from real businesses</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Healthcare */}
              <Card className="gradient-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Healthcare</h3>
                </div>
                <CardContent className="p-0 space-y-4">
                  <p className="italic text-lg leading-relaxed">
                    {
                      "“As a clinic owner, I was drowning in patient calls and appointment requests. Botmate built us an AI agent that now handles 80% of our scheduling automatically. Patients love how fast it is, and my staff finally has time to focus on real care instead of phones. It feels like we added a full-time receptionist—without the cost!”"
                    }
                  </p>
                  <p className="text-sm text-muted-foreground">— Nikita kumawat, Sunrise Wellness Clinic</p>
                </CardContent>
              </Card>

              {/* Real Estate */}
              <Card className="gradient-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Home className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">{"🏠 Real Estate"}</h3>
                </div>
                <CardContent className="p-0 space-y-4">
                  <p className="italic text-lg leading-relaxed">
                    {
                      "“Before Botmate, I was losing leads just because I couldn’t respond fast enough. Now, our AI agent instantly chats with potential buyers, shares property details, and even books site visits. In the first month, we saw a 40% jump in qualified leads. Honestly, it’s like having a 24/7 sales assistant who never gets tired.”"
                    }
                  </p>
                  <p className="text-sm text-muted-foreground">— Aditya Baswal, Pooja Property</p>
                </CardContent>
              </Card>

              {/* E-commerce */}
              <Card className="gradient-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <ShoppingCart className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">E-commerce</h3>
                </div>
                <CardContent className="p-0 space-y-4">
                  <p className="italic text-lg leading-relaxed">
                    {
                      "“We sell fashion products online, and customer queries were overwhelming—order tracking, size questions, returns. Botmate’s AI chatbot now handles all of it instantly. Our response time went from hours to seconds, and customer satisfaction scores are at an all-time high. Plus, it boosted our repeat sales because customers feel taken care of.”"
                    }
                  </p>
                  <p className="text-sm text-muted-foreground">— Lokesh Sirohiya, Sharda Collection</p>
                </CardContent>
              </Card>

              {/* Finance */}
              <Card className="gradient-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Finance</h3>
                </div>
                <CardContent className="p-0 space-y-4">
                  <p className="italic text-lg leading-relaxed">
                    {
                      "“As a financial services firm, accuracy and trust are everything. Botmate built us an AI automation system that now manages client FAQs, loan eligibility queries, and document reminders without error. Our team saves hours daily, and clients love the professional, instant support. Botmate has made us faster, more reliable, and more client-focused.”"
                    }
                  </p>
                  <p className="text-sm text-muted-foreground">— Riya kumawat, ProFin Fincare limited</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Videos */}
        <section className="py-16 md:py-24 gradient-bg border-y border-border/20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight gradient-text">See It In Action</h2>
              <p className="text-muted-foreground mt-2">Quick demos of AI in the real world</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="w-full aspect-video rounded-lg overflow-hidden gradient-border">
                <iframe
                  title="AI Demo 1"
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/kOx6J5LzAt4"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="w-full aspect-video rounded-lg overflow-hidden gradient-border">
                <iframe
                  title="AI Demo 2"
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/DwzjjXZ3vQg"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="w-full aspect-video rounded-lg overflow-hidden gradient-border">
                <iframe
                  title="AI Demo 3"
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/T2pYS1Kf35U"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 md:py-24 bg-background relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-accent/5 opacity-30"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight gradient-text">Case Studies</h2>
              <p className="text-muted-foreground mt-2">Proven outcomes, not promises</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Real Estate */}
              <div className="gradient-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Real Estate Agency – More Leads, Less Work</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Challenge: Agents were losing leads because inquiries on WhatsApp & Instagram weren’t answered
                  quickly.
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  Solution: Built a Real Estate AI Agent to reply instantly, share property details, and book site
                  visits.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>{"🚀 Lead response time cut from 12 hours → 10 seconds"}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>{"📈 70% more property viewings in 2 months"}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>{"💰 2x more closed sales"}</span>
                  </li>
                </ul>
              </div>

              {/* Healthcare */}
              <div className="gradient-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Healthcare Clinic – Patients Served Smarter</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Challenge: Staff overwhelmed with calls & bookings, patients frustrated with delays.
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  Solution: Deployed a Healthcare AI Agent for instant WhatsApp booking, reminders, and FAQ handling.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>{"⏱️ Appointment booking time reduced from 90 min → 1 min"}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>{"📅 40% fewer no-shows with reminders"}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>{"🏆 Doubled patient flow without extra staff"}</span>
                  </li>
                </ul>
              </div>

              {/* E-Commerce */}
              <div className="gradient-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">E-Commerce Brand – Converting Browsers into Buyers</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Challenge: 40% of potential buyers left unanswered when asking product questions.
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  Solution: Installed AI Customer Agent to answer instantly, share product photos, and capture leads.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>{"💡 3x higher conversion from social media leads"}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>{"⚡ Response time cut to seconds"}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>{"💰 42% revenue growth in 30 days"}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <Button asChild size="lg" className="gradient-button">
                <Link href="/contact">
                  Talk to an expert <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
