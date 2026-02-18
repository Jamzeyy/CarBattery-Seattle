"use client";

import { Phone, Mail, Clock, MessageSquare } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTAButton from "@/components/ui/CTAButton";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 bg-surface-light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — CTA content */}
          <ScrollReveal direction="left">
            <div>
              <span className="text-brand font-semibold text-sm uppercase tracking-widest">
                Get a Free Quote
              </span>
              <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl mt-4 mb-6">
                Ready to Get{" "}
                <span className="text-brand">Back on the Road?</span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-10">
                Tell us your vehicle&apos;s{" "}
                <span className="text-text-primary font-semibold">
                  Year, Make &amp; Model
                </span>{" "}
                and your location. We&apos;ll respond with a price and arrival
                estimate — usually within minutes.
              </p>

              <div className="space-y-5 mb-10">
                {[
                  {
                    icon: Phone,
                    label: "(206) 604-8806",
                    href: "tel:+12066048806",
                    sub: "Call or text anytime",
                  },
                  {
                    icon: Mail,
                    label: "carbatteryseattle@gmail.com",
                    href: "mailto:carbatteryseattle@gmail.com",
                    sub: "Email for quotes",
                  },
                  {
                    icon: Clock,
                    label: "Open 24/7/365",
                    href: undefined,
                    sub: "Including all holidays",
                  },
                  {
                    icon: MessageSquare,
                    label: "¡Hablamos Español!",
                    href: undefined,
                    sub: "Bilingual service available",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-semibold text-text-primary hover:text-brand transition-colors"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <span className="font-semibold text-text-primary">
                          {item.label}
                        </span>
                      )}
                      <p className="text-text-muted text-sm">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <CTAButton variant="primary" size="xl" />
            </div>
          </ScrollReveal>

          {/* Right — Form */}
          <ScrollReveal direction="right">
            <form
              className="bg-surface-card border border-border rounded-2xl p-8 lg:p-10 space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="font-[family-name:var(--font-heading)] text-2xl mb-2">
                Request a Free Quote
              </h3>
              <p className="text-text-muted text-sm mb-6">
                We typically respond within 5–10 minutes.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1.5">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-surface-elevated border border-border rounded-xl px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/30 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1.5">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full bg-surface-elevated border border-border rounded-xl px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/30 transition-colors"
                    placeholder="(206) 555-0123"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-surface-elevated border border-border rounded-xl px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/30 transition-colors"
                  placeholder="you@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1.5">
                  Vehicle (Year, Make, Model) *
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-surface-elevated border border-border rounded-xl px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/30 transition-colors"
                  placeholder="e.g. 2019 Toyota Camry"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1.5">
                  Location / Details
                </label>
                <textarea
                  rows={3}
                  className="w-full bg-surface-elevated border border-border rounded-xl px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/30 transition-colors resize-none"
                  placeholder="Where are you? Any details we should know?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand text-surface font-bold text-base py-4 rounded-xl hover:bg-brand-light hover:shadow-[0_0_30px_rgba(156,196,139,0.3)] transition-all cursor-pointer"
              >
                Get My Free Quote
              </button>

              <p className="text-text-muted text-xs text-center">
                We&apos;ll never share your information. Response time: ~5 min.
              </p>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
