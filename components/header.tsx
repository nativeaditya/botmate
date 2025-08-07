"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Layers } from "lucide-react"
import Image from "next/image"

export function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/50 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl">
          <Image src="/logo.png" alt="BotMate Logo" width={120} height={120} />
          
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${pathname === "/" ? "text-accent" : "hover:text-primary"}`}
          >
            Home
          </Link>
          <Link
            href="/services"
            className={`text-sm font-medium transition-colors ${pathname === "/services" ? "text-accent" : "hover:text-primary"}`}
          >
            Services
          </Link>
          <Link
            href="/industries"
            className={`text-sm font-medium transition-colors ${pathname === "/industries" ? "text-accent" : "hover:text-primary"}`}
          >
            Industries
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors ${pathname === "/about" ? "text-accent" : "hover:text-primary"}`}
          >
            About us
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium transition-colors ${pathname === "/contact" ? "text-accent" : "hover:text-primary"}`}
          >
            Contact
          </Link>
        </nav>
        <Button variant="outline" size="icon" className="md:hidden" onClick={toggleMobileMenu}>
          <Layers className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <nav
          className={`
          fixed top-[64px] left-0 right-0 bottom-0
          bg-gradient-to-r from-primary/20 to-purple-500/20
          transition-transform duration-300
          ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"}
        `}
        >
          <div className="p-4 space-y-4 bg-black">
            <Link
              href="/"
              className={`block text-lg font-medium transition-colors ${pathname === "/" ? "text-accent" : "hover:text-primary"}`}
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`block text-lg font-medium transition-colors ${pathname === "/services" ? "text-accent" : "hover:text-primary"}`}
              onClick={toggleMobileMenu}
            >
              Services
            </Link>
            <Link
              href="/industries"
              className={`block text-lg font-medium transition-colors ${pathname === "/industries" ? "text-accent" : "hover:text-primary"}`}
              onClick={toggleMobileMenu}
            >
              Industries
            </Link>
            <Link
              href="/about"
              className={`block text-lg font-medium transition-colors ${pathname === "/about" ? "text-accent" : "hover:text-primary"}`}
              onClick={toggleMobileMenu}
            >
              About us
            </Link>
            <Link
              href="/contact"
              className={`block text-lg font-medium transition-colors ${pathname === "/contact" ? "text-accent" : "hover:text-primary"}`}
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
