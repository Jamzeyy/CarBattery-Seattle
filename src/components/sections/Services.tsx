"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

const services = [
  {
    image:
      "https://img1.wsimg.com/isteam/ip/78493546-e518-4c1f-8180-603f437ebee1/blob-18e9a35.png",
    alt: "Car battery delivery and installation at customer location in Seattle",
    title: "Delivery & Installation",
    description:
      "We bring a brand-new Interstate battery directly to your location — home, office, or roadside — and install it on the spot. No tow truck needed.",
    features: [
      "Same-day delivery",
      "Professional installation",
      "Old battery recycling",
    ],
  },
  {
    image:
      "https://img1.wsimg.com/isteam/ip/78493546-e518-4c1f-8180-603f437ebee1/service%20person%20hands%20on%20battery%20(6000%C3%974000).png",
    alt: "Technician testing car battery health with digital diagnostic device",
    title: "Certified Health Checks",
    description:
      "Our technicians use the latest digital testers to evaluate your battery's health, starting system, and charging system — before problems strand you.",
    features: [
      "Full system diagnostic",
      "Lifespan assessment",
      "Written health report",
    ],
  },
  {
    image:
      "https://img1.wsimg.com/isteam/ip/78493546-e518-4c1f-8180-603f437ebee1/IMG_9604.JPG",
    alt: "Before and after car battery replacement by Car Battery Seattle technician",
    title: "Battery Replacement",
    description:
      "Complete battery swap including terminal cleaning, tray inspection, and cable check. Every replacement comes with up to 6 years of warranty coverage.",
    features: [
      "Terminal & tray cleaning",
      "Cable inspection",
      "Up to 6-yr warranty",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16 lg:mb-20">
            <span className="text-brand font-semibold text-sm uppercase tracking-widest">
              What We Do
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl mt-4 mb-6">
              Every Service,{" "}
              <span className="text-brand">Delivered to You</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              From diagnostics to full replacement — our mobile technicians
              handle everything at your location so you never have to visit a
              shop.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-surface-card border border-border rounded-2xl overflow-hidden hover:border-brand/40 transition-colors h-full flex flex-col"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-surface-card/30 to-transparent" />
                </div>
                <div className="relative p-8 lg:p-8 flex-1 flex flex-col">
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl mb-4">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feat, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-2 text-sm text-text-secondary"
                      >
                        <ArrowRight className="w-3.5 h-3.5 text-brand shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
