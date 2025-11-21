"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-light text-foreground mb-6">About Me</h1>
          <p className="text-lg text-foreground/70">Discover my journey and approach to life coaching</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Story */}
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-light text-foreground">My Story</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              My passion for helping others transform their lives began with my own journey of personal growth and
              discovery. After years working in the corporate world, I realized my true calling was to guide others
              through their own transitions and challenges.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              I've completed comprehensive training in life coaching methodologies, emotional intelligence, and
              behavioral change. My clients range from executives navigating career transitions to professionals seeking
              greater balance and fulfillment in their lives.
            </p>
          </div>

          {/* Philosophy */}
          <div className="space-y-6 border-t border-border pt-12">
            <h2 className="text-3xl font-serif font-light text-foreground">My Philosophy</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              I believe everyone has the capacity for meaningful change and growth. My role is to help you discover your
              own answers, overcome limiting beliefs, and take decisive action toward your goals. Through thoughtful
              questioning and active listening, we'll unlock the potential that already exists within you.
            </p>
          </div>

          {/* Credentials */}
          <div className="space-y-6 border-t border-border pt-12">
            <h2 className="text-3xl font-serif font-light text-foreground">Credentials & Training</h2>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-2 flex-shrink-0">•</span>
                <span>Certified Life Coach (ICF Accredited)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-2 flex-shrink-0">•</span>
                <span>Advanced Training in Executive Coaching</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-2 flex-shrink-0">•</span>
                <span>Certification in Emotional Intelligence & Leadership</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-2 flex-shrink-0">•</span>
                <span>15+ Years of Professional Development Experience</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="border-t border-border pt-12 text-center">
            <p className="text-lg text-foreground/70 mb-6">Let's explore how we can work together.</p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
