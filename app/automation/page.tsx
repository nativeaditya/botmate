import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Zap,
  MessageCircle,
  CheckCircle,
  DollarSign,
  Users,
  ArrowUpRight,
  Calendar,
  FileText,
  Database,
  Lightbulb,
  Share2,
} from "lucide-react"
import { ParticleBackground } from "@/components/particle-background"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function AutomationPage() {
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
                <span className="text-primary text-sm font-medium">AI-Powered Workflow Solutions</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary">
                Streamline Your Workflow with AI-Powered Automation
              </h1>
              <p className="text-muted-foreground md:text-xl max-w-[800px]">
                Revolutionize the way your business operates. Our AI-driven automation solutions handle time-consuming
                tasks like data entry, scheduling, and social media management—freeing your team to focus on what truly
                matters: strategy, innovation, and customer engagement. Optimize workflows, boost efficiency, and gain a
                competitive edge with intelligent automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button size="lg" className="px-8 gradient-button">
                <Link
            href="/contact">
                  Get Started with AI Automation
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
                Benefits of Operational Automation
              </h2>
              <p className="text-muted-foreground md:text-lg max-w-[700px]">
                Discover how AI-powered automation transforms business operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Increased Efficiency */}
              <Card className="gradient-card p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Increased Efficiency</h3>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground">
                      AI automation goes beyond time savings—it unlocks your team's potential. By automating repetitive
                      tasks, your team can focus on high-impact initiatives such as innovation, customer experience, and
                      strategic growth, accelerating your path to success.
                    </p>
                  </CardContent>
                </div>
              </Card>

              {/* Faster Decision-Making */}
              <Card className="gradient-card p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <Lightbulb className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Faster Decision-Making</h3>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground">
                      AI enables smarter, faster decisions by analyzing large datasets in real-time. Uncover hidden
                      patterns, predict future trends, and respond proactively to market changes—giving your business a
                      clear strategic advantage.
                    </p>
                  </CardContent>
                </div>
              </Card>

              {/* Reduced Errors */}
              <Card className="gradient-card p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Reduced Errors</h3>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground">
                      Eliminate costly mistakes. Automation ensures consistent, accurate execution of tasks, improving
                      data quality, reducing the need for corrections, and increasing overall productivity.
                    </p>
                  </CardContent>
                </div>
              </Card>

              {/* Cost Savings */}
              <Card className="gradient-card p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <DollarSign className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Cost Savings</h3>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground">
                      Automation reduces reliance on manual labor and streamlines operations, cutting overhead costs and
                      increasing profitability. Achieve more with fewer resources while maintaining top-tier
                      performance.
                    </p>
                  </CardContent>
                </div>
              </Card>

              {/* Improved Collaboration */}
              <Card className="gradient-card p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <Share2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Improved Collaboration</h3>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground">
                      Automated workflows enhance communication and task management across teams. By ensuring
                      information flows seamlessly, collaboration becomes smoother, productivity rises, and teams work
                      in sync.
                    </p>
                  </CardContent>
                </div>
              </Card>

              {/* Scalable Operations */}
              <Card className="gradient-card p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="gradient-icon-bg p-4 rounded-full mb-4">
                    <ArrowUpRight className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Scalable Operations</h3>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground">
                      Scale without stress. AI automation allows your business to handle increased workload and
                      complexity without needing to proportionally expand your team—supporting sustainable,
                      cost-effective growth.
                    </p>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Automation Solutions */}
        <section className="py-16 md:py-24 gradient-bg border-y border-border/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 gradient-text">
                Our AI Automation Solutions
              </h2>
              <p className="text-muted-foreground md:text-lg max-w-[700px]">
                Comprehensive automation tools designed for modern business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="gradient-icon-bg p-4 rounded-full mb-4">
                  <Database className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Data Processing</h3>
                <p className="text-muted-foreground">
                  Automate data entry, extraction, and analysis with AI-powered accuracy
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="gradient-icon-bg p-4 rounded-full mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Scheduling & Planning</h3>
                <p className="text-muted-foreground">
                  AI assistants that optimize calendars and streamline appointment booking
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="gradient-icon-bg p-4 rounded-full mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Document Automation</h3>
                <p className="text-muted-foreground">
                  Intelligent processing of invoices, contracts, and business documents
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="gradient-icon-bg p-4 rounded-full mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Lead Management</h3>
                <p className="text-muted-foreground">Automated lead scoring, qualification, and nurturing workflows</p>
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
                Measurable results our clients achieve with AI Automation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="gradient-border p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-4">75%</div>
                <p className="text-xl font-semibold mb-2">Time Saved</p>
                <p className="text-muted-foreground">On routine administrative tasks</p>
              </div>

              <div className="gradient-border p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-4">45%</div>
                <p className="text-xl font-semibold mb-2">Cost Reduction</p>
                <p className="text-muted-foreground">In operational expenses</p>
              </div>

              <div className="gradient-border p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-4">90%</div>
                <p className="text-xl font-semibold mb-2">Accuracy Improvement</p>
                <p className="text-muted-foreground">In data processing and document handling</p>
              </div>
            </div>

            {/* Testimonial */}
            <div className="max-w-3xl mx-auto">
              <div className="gradient-card p-8 rounded-lg">
                <div className="flex flex-col items-center text-center">
                  <MessageCircle className="h-12 w-12 text-accent mb-6" />
                  <p className="text-xl italic mb-6">
                    "BotMate's automation solutions transformed our operations. We've reduced manual data entry by
                    85%, cut processing time for customer documents from days to minutes, and our team now focuses on
                    strategic initiatives instead of repetitive tasks. The ROI has been exceptional."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full gradient-icon-bg flex items-center justify-center mr-4">
                      <span className="font-semibold text-primary">DP</span>
                    </div>
                    <div className="text-left">
                      <p className="font-semibold">David Parker</p>
                      <p className="text-sm text-muted-foreground">Operations Manager, Enterprise Solutions Ltd.</p>
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
                Ready to Automate Your Business Workflows?
              </h2>
              <p className="md:text-xl max-w-[700px]">
                Get started with AI-powered automation today and transform your business operations.
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
