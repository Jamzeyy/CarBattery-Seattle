"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, Battery } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Coverage", href: "#coverage" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-surface/90 backdrop-blur-xl border-b border-border shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-lg bg-brand/15 flex items-center justify-center group-hover:bg-brand/25 transition-colors">
                <Battery className="w-5 h-5 text-brand" />
              </div>
              <div className="flex flex-col">
                <span className="font-[family-name:var(--font-heading)] text-lg leading-tight text-text-primary">
                  CAR BATTERY
                </span>
                <span className="text-[10px] font-semibold tracking-[0.3em] text-brand uppercase">
                  SEATTLE
                </span>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-text-secondary hover:text-brand transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href="tel:+12066048806"
                className="hidden sm:inline-flex items-center gap-2 bg-brand text-surface font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-brand-light transition-all hover:shadow-[0_0_20px_rgba(156,196,139,0.3)]"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-text-secondary hover:text-brand transition-colors"
              >
                {mobileOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-surface/98 backdrop-blur-xl pt-20 lg:hidden"
          >
            <div className="flex flex-col items-center gap-6 p-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-[family-name:var(--font-heading)] text-text-primary hover:text-brand transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="tel:+12066048806"
                className="mt-4 inline-flex items-center gap-3 bg-brand text-surface font-bold text-lg px-8 py-4 rounded-xl"
              >
                <Phone className="w-5 h-5" />
                (206) 604-8806
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
