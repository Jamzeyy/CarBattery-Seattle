"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const faqs = [
  {
    q: "How fast can you get to me?",
    a: "In most cases, our technician can reach you within 30–60 minutes across Seattle, Bellevue, Redmond, and surrounding areas. We dispatch from multiple hubs to keep response times short.",
  },
  {
    q: "What brands of batteries do you use?",
    a: "We exclusively use Interstate Batteries — the #1 automotive replacement battery brand in North America. Every battery is brand new and comes with a 24–36 month free replacement warranty plus an additional 5–6 year performance warranty.",
  },
  {
    q: "How much does a new battery cost?",
    a: "Pricing depends on your vehicle's year, make, and model. Call or text us your vehicle info and we'll give you an instant, no-obligation quote — typically within minutes.",
  },
  {
    q: "Do you service all vehicle types?",
    a: "Yes — we handle cars, trucks, SUVs, vans, and most specialty vehicles. If you have a unique battery setup, give us a call. We've likely seen it before.",
  },
  {
    q: "What's included with a battery replacement?",
    a: "Every replacement includes: inspection of the battery tray and cable terminals, a complete evaluation of your starting and charging systems, removal and recycling of the old battery, and professional installation of your new battery.",
  },
  {
    q: "Do you offer service in Spanish?",
    a: "¡Sí! Hablamos Español. Our bilingual team is ready to help you in both English and Spanish — just let us know your preference when you call.",
  },
  {
    q: "Is the warranty valid nationwide?",
    a: "Yes. Once our technician performs the battery health check and installation, your Interstate battery warranty is valid at any authorized location nationwide.",
  },
  {
    q: "What if I just need a battery test?",
    a: "No problem. We offer standalone health checks using professional-grade digital testers. We'll evaluate your battery, starting system, and charging system and let you know exactly where you stand — no pressure to buy.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className={`border border-border rounded-xl overflow-hidden transition-colors ${
        open ? "border-brand/30 bg-surface-card" : "hover:border-border"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
      >
        <span className="flex items-center gap-4">
          <span className="text-brand/40 font-mono text-sm">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-semibold text-text-primary">{faq.q}</span>
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-brand shrink-0 ml-4" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 pl-16 text-text-secondary leading-relaxed">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-brand font-semibold text-sm uppercase tracking-widest">
              FAQ
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl mt-4 mb-6">
              Got <span className="text-brand">Questions?</span>
            </h2>
            <p className="text-text-secondary text-lg">
              Everything you need to know about our service.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <FAQItem faq={faq} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
