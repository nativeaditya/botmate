import Link from "next/link"
import { Bot, MessageSquare, Phone } from "lucide-react"
import Image from "next/image"


export function Footer() {
  return (
    <footer className="border-t border-border/20 py-12 bg-background/50">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 font-bold text-xl mb-4">
            <Image src="/logo.png" alt="BotMate Logo" width={120} height={120} />

            </div>
            <p className="text-muted-foreground">Empowering businesses with AI-driven solutions.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-muted-foreground hover:text-primary">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-primary">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-accent" />
                <a href="mailto:info@botmate.in" className="text-muted-foreground hover:text-primary">
                  info@botmate.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+91 9772121002" className="text-muted-foreground hover:text-primary">
                  +91 9772-1210-02
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} BotMate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
