"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

interface CTAButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "md" | "lg" | "xl";
  showIcon?: boolean;
  className?: string;
}

export default function CTAButton({
  variant = "primary",
  size = "lg",
  showIcon = true,
  className = "",
}: CTAButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-3 font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-brand text-surface hover:bg-brand-light hover:shadow-[0_0_30px_rgba(156,196,139,0.4)]",
    secondary:
      "bg-surface-elevated text-brand border-2 border-brand hover:bg-brand hover:text-surface",
    outline:
      "bg-transparent text-brand border-2 border-brand/50 hover:border-brand hover:bg-brand/10",
  };

  const sizes = {
    md: "px-6 py-3 text-sm rounded-lg",
    lg: "px-8 py-4 text-base rounded-xl",
    xl: "px-10 py-5 text-lg rounded-xl",
  };

  return (
    <motion.a
      href="tel:+12066048806"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {showIcon && <Phone className="w-5 h-5" />}
      <span>(206) 604-8806</span>
    </motion.a>
  );
}
