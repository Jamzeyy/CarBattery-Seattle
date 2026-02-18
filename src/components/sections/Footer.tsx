"use client";

import { Battery, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-brand/15 flex items-center justify-center">
                <Battery className="w-5 h-5 text-brand" />
              </div>
              <div className="flex flex-col">
                <span className="font-[family-name:var(--font-heading)] text-lg leading-tight">
                  CAR BATTERY
                </span>
                <span className="text-[10px] font-semibold tracking-[0.3em] text-brand uppercase">
                  SEATTLE
                </span>
              </div>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed max-w-sm">
              Stress-free, 24/7 mobile car battery service across the greater
              Seattle area. We come to you — anytime, anywhere.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Services", href: "#services" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "Service Areas", href: "#coverage" },
                { label: "Reviews", href: "#reviews" },
                { label: "FAQ", href: "#faq" },
                { label: "Get a Quote", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-text-secondary text-sm hover:text-brand transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-lg mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+12066048806"
                  className="flex items-center gap-2 text-sm text-text-secondary hover:text-brand transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand" />
                  (206) 604-8806
                </a>
              </li>
              <li>
                <a
                  href="mailto:carbatteryseattle@gmail.com"
                  className="flex items-center gap-2 text-sm text-text-secondary hover:text-brand transition-colors"
                >
                  <Mail className="w-4 h-4 text-brand" />
                  carbatteryseattle@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-5 inline-flex items-center gap-2 bg-brand/10 border border-brand/20 rounded-full px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand" />
              </span>
              <span className="text-xs font-semibold text-brand">
                Open 24/7/365
              </span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            &copy; {new Date().getFullYear()} Car Battery Seattle. All rights
            reserved.
          </p>
          <p className="text-text-muted text-xs">
            Seattle &bull; Bellevue &bull; Redmond &amp; Surrounding Areas
          </p>
        </div>
      </div>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-surface/95 backdrop-blur-xl border-t border-border p-3">
        <a
          href="tel:+12066048806"
          className="flex items-center justify-center gap-2 bg-brand text-surface font-bold py-3.5 rounded-xl w-full"
        >
          <Phone className="w-5 h-5" />
          Call Now — (206) 604-8806
        </a>
      </div>
    </footer>
  );
}
