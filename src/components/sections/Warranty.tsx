"use client";

import { motion } from "framer-motion";
import { Shield, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Warranty() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand/5 via-transparent to-brand/5" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative bg-surface-card border border-brand/20 rounded-3xl p-10 lg:p-16 text-center overflow-hidden"
          >
            {/* Glow effect */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand/10 rounded-full blur-[100px]" />

            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand/15 mb-8">
                <Shield className="w-8 h-8 text-brand" />
              </div>

              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl mb-6">
                Interstate Batteries.{" "}
                <span className="text-brand">Nationwide Warranty.</span>
              </h2>

              <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                Every battery we install is brand new, top-tier quality, and
                backed by one of the strongest warranties in the industry.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                {[
                  {
                    title: "24–36 Month",
                    sub: "Free replacement warranty",
                  },
                  {
                    title: "5–6 Year",
                    sub: "Performance warranty",
                  },
                  {
                    title: "Nationwide",
                    sub: "Valid at any authorized location",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5 text-brand" />
                    <span className="font-[family-name:var(--font-heading)] text-xl text-brand">
                      {item.title}
                    </span>
                    <span className="text-text-secondary text-sm">
                      {item.sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
