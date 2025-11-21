import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-serif font-light text-foreground text-balance">
              Transform Your Life
            </h1>
            <p className="text-xl md:text-2xl font-light text-foreground/70 text-balance">
              Unlock your potential and create meaningful change with personalized life coaching
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/about">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Learn About Me
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-light text-center mb-16 text-foreground">Why Work With Me</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Personalized Approach",
                description: "Every coaching engagement is tailored to your unique goals, challenges, and aspirations.",
              },
              {
                title: "Proven Methodologies",
                description:
                  "I use evidence-based coaching frameworks that deliver measurable results and lasting change.",
              },
              {
                title: "Professional Expertise",
                description: "With years of experience coaching business professionals, I understand your world.",
              },
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <h3 className="text-2xl font-serif font-light text-foreground">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-serif font-light text-foreground">Ready to Begin Your Journey?</h2>
          <p className="text-lg text-foreground/70">
            Let's explore how coaching can help you achieve your goals and create the life you deserve.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Schedule a Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
