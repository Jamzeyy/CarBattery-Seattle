"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

const reviews = [
  {
    name: "Marcus T.",
    location: "Capitol Hill, Seattle",
    text: "My battery died at 11 PM on a Friday. Called these guys and they were there in 30 minutes. New battery installed, car running — all in under an hour. Absolute lifesaver.",
    rating: 5,
  },
  {
    name: "Jennifer L.",
    location: "Bellevue, WA",
    text: "I've used Car Battery Seattle twice now. Both times the service was incredibly fast and professional. The technician even showed me the health test results. Highly recommend.",
    rating: 5,
  },
  {
    name: "David R.",
    location: "Redmond, WA",
    text: "Stranded at a grocery store parking lot with two kids in the car. One call, and 40 minutes later I had a brand new battery with a full warranty. These guys are the real deal.",
    rating: 5,
  },
  {
    name: "Sofia M.",
    location: "Renton, WA",
    text: "¡Excelente servicio! They came to my house, replaced my battery, and even cleaned the terminals. Very professional and the price was fair. Will definitely call again.",
    rating: 5,
  },
  {
    name: "Chris K.",
    location: "Kirkland, WA",
    text: "Called at 6 AM before work. Technician arrived before I finished my coffee. New Interstate battery installed with a 3-year warranty. Can't beat that kind of service.",
    rating: 5,
  },
  {
    name: "Amanda W.",
    location: "West Seattle",
    text: "My car wouldn't start in my garage. They came right to my house, tested everything, and had me on the road in no time. So much better than getting a tow. 10/10.",
    rating: 5,
  },
];

const customerPhotos = [
  {
    src: "https://img1.wsimg.com/isteam/ip/78493546-e518-4c1f-8180-603f437ebee1/IMG_1718.PNG",
    alt: "5-star customer review for Car Battery Seattle service",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/78493546-e518-4c1f-8180-603f437ebee1/IMG_1717.PNG",
    alt: "Satisfied customer review of mobile battery installation in Seattle",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/78493546-e518-4c1f-8180-603f437ebee1/IMG_0157.PNG",
    alt: "Customer testimonial for 24/7 battery service in Seattle area",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/78493546-e518-4c1f-8180-603f437ebee1/IMG_0106.PNG",
    alt: "Google review for Car Battery Seattle emergency service",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/78493546-e518-4c1f-8180-603f437ebee1/IMG_0514.PNG",
    alt: "Positive review for fast battery replacement in Bellevue area",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="relative py-24 lg:py-32 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16 lg:mb-20">
            <span className="text-brand font-semibold text-sm uppercase tracking-widest">
              Reviews
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl mt-4 mb-6">
              Trusted by{" "}
              <span className="text-brand">Seattle Drivers</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Real stories from real customers across the greater Seattle
              area. See why thousands choose us for their battery needs.
            </p>
          </div>
        </ScrollReveal>

        {/* Customer screenshot gallery */}
        <ScrollReveal>
          <div className="flex gap-4 overflow-x-auto pb-6 mb-12 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
            {customerPhotos.map((photo, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, scale: 1.02 }}
                className="relative shrink-0 w-72 h-[420px] rounded-2xl overflow-hidden border border-border hover:border-brand/30 transition-colors snap-center"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="288px"
                />
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Written reviews */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-surface-card border border-border rounded-2xl p-8 hover:border-brand/30 transition-colors h-full flex flex-col"
              >
                <Quote className="w-8 h-8 text-brand/30 mb-4" />
                <p className="text-text-secondary leading-relaxed flex-1 mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="font-semibold text-text-primary text-sm">
                      {review.name}
                    </p>
                    <p className="text-text-muted text-xs">
                      {review.location}
                    </p>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 fill-brand text-brand"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <a
              href="https://g.page/r/CTVO-2WtLuA1EBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand font-semibold hover:underline"
            >
              Leave us a Google Review
              <span className="text-lg">→</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
