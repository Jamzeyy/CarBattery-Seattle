"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "24/7", label: "Always Available" },
  { value: "5,000+", label: "Batteries Installed" },
  { value: "5.0★", label: "Google Rating" },
];

export default function ProofStrip() {
  return (
    <section className="relative py-16 border-y border-border overflow-hidden">
      <div className="absolute inset-0 bg-surface-light" />
      <div className="absolute inset-0 animate-shimmer" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl text-brand mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-text-secondary font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
