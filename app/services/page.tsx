"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Services() {
  const services = [
    {
      title: "Executive Coaching",
      description:
        "Personalized coaching for leaders and executives seeking to maximize their impact, improve team dynamics, and navigate strategic challenges.",
      features: ["1-on-1 sessions", "Monthly progress tracking", "90-day transformation plan"],
    },
    {
      title: "Career Transition Coaching",
      description:
        "Navigate career changes with confidence. Whether you're exploring a new direction or making a major pivot, I'll help you create a clear path forward.",
      features: ["Career assessment", "Goal setting & planning", "Interview preparation"],
    },
    {
      title: "Work-Life Balance Coaching",
      description:
        "Achieve greater harmony between your professional ambitions and personal well-being. Learn sustainable strategies for lasting fulfillment.",
      features: ["Customized action plans", "Stress management techniques", "Accountability support"],
    },
    {
      title: "Goal Achievement Coaching",
      description:
        "Turn your aspirations into reality with structured coaching that keeps you focused, motivated, and accountable every step of the way.",
      features: ["Strategic planning", "Milestone tracking", "Motivation & accountability"],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-light text-foreground mb-6">Services</h1>
          <p className="text-lg text-foreground/70">
            Tailored coaching programs designed for your unique goals and challenges
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, i) => (
              <div
                key={i}
                className="space-y-6 p-8 border border-border rounded-lg bg-card hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-serif font-light text-foreground">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent"></span>
                      <span className="text-foreground/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-serif font-light text-foreground">Investment in Yourself</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Coaching is an investment in your future. I offer flexible packages tailored to your needs and budget. Let's
            discuss the best option for you.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Get Pricing Information
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h3 className="text-3xl font-serif font-light text-foreground">Ready to Get Started?</h3>
          <p className="text-lg text-foreground/70">
            Schedule a free consultation to explore which service is right for you.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Schedule Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
