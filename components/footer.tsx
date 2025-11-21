"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"

export function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
    setTimeout(() => {
      setEmail("")
      setSubscribed(false)
    }, 3000)
  }

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-light text-foreground">Life Coaching</h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Transform your life with personalized coaching tailored to your unique goals and aspirations.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-medium text-foreground text-sm">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-foreground/70 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-medium text-foreground text-sm">Stay Connected</h4>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="w-full px-3 py-2 bg-accent text-accent-foreground rounded-lg font-medium text-sm hover:bg-accent/90 transition-colors"
              >
                {subscribed ? "Subscribed!" : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
          <p>&copy; 2025 Life Coaching. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
