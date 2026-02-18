"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const areas = [
  {
    hub: "Seattle",
    zones: [
      "Downtown",
      "West Seattle",
      "Alki",
      "White Center",
      "Shoreline",
    ],
  },
  {
    hub: "Bellevue",
    zones: [
      "Newcastle",
      "Mercer Island",
      "Sammamish",
      "Issaquah",
      "Renton",
    ],
  },
  {
    hub: "Redmond",
    zones: [
      "Kirkland",
      "Bothell",
      "Cottage Lake",
      "Union Hill",
      "High Bridge",
    ],
  },
  {
    hub: "North",
    zones: ["Lynnwood", "Everett", "Mill Creek", "Snohomish", "Monroe"],
  },
  {
    hub: "South",
    zones: ["Kent", "Tukwila", "Sea-Tac", "Burien", "Duval"],
  },
];

export default function Coverage() {
  return (
    <section id="coverage" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16 lg:mb-20">
            <span className="text-brand font-semibold text-sm uppercase tracking-widest">
              Service Areas
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl mt-4 mb-6">
              Covering the{" "}
              <span className="text-brand">Greater Seattle Area</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Three service hubs in Seattle, Bellevue &amp; Redmond. We reach
              every surrounding community — no location is too far.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {areas.map((area, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-surface-card border border-border rounded-2xl p-6 hover:border-brand/30 transition-colors"
              >
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-brand" />
                  <h3 className="font-[family-name:var(--font-heading)] text-lg text-brand">
                    {area.hub}
                  </h3>
                </div>
                <ul className="space-y-1.5">
                  {area.zones.map((zone, j) => (
                    <li
                      key={j}
                      className="text-sm text-text-secondary"
                    >
                      {zone}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <p className="text-text-muted text-sm">
              Don&apos;t see your area?{" "}
              <a href="tel:+12066048806" className="text-brand font-semibold hover:underline">
                Call us
              </a>{" "}
              — we likely cover it.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
