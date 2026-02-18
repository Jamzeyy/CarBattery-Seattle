"use client";

import { Phone, MapPin, Wrench } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTAButton from "@/components/ui/CTAButton";

const steps = [
  {
    num: "01",
    icon: Phone,
    title: "Call or Text Us",
    description:
      "Tell us your vehicle's year, make, model, and your location. We'll give you an instant quote and arrival estimate.",
  },
  {
    num: "02",
    icon: MapPin,
    title: "We Come to You",
    description:
      "Our technician heads out with the right battery for your vehicle. Average arrival time: 45 minutes or less.",
  },
  {
    num: "03",
    icon: Wrench,
    title: "Drive Away Happy",
    description:
      "We test, remove your old battery, install the new one, and verify everything works — on the spot. Done.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-24 lg:py-32 bg-surface-light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16 lg:mb-20">
            <span className="text-brand font-semibold text-sm uppercase tracking-widest">
              How It Works
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl mt-4 mb-6">
              Back on the Road{" "}
              <span className="text-brand">in 3 Steps</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              No waiting rooms. No tow trucks. Just a fast, professional
              battery service that comes to wherever you are.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-16 mb-16">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-brand/30 to-transparent" />
                )}
                <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-brand/10 border border-brand/20 mb-6">
                  <step.icon className="w-8 h-8 text-brand" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-brand text-surface text-xs font-bold flex items-center justify-center">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-2xl mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center">
            <CTAButton variant="primary" size="xl" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
