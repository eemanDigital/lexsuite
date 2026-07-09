"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Building2,
  Shield,
  Lock,
  Cpu,
  Zap,
  Scale,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

interface ServiceItem {
  title: string;
  href: string;
  icon: LucideIcon;
  summary: string;
  details: string[];
}

const services: ServiceItem[] = [
  {
    title: "Corporate Structuring",
    href: "/services/corporate",
    icon: Building2,
    summary:
      "CAC registration and founder-friendly governance for digital companies.",
    details: [
      "Company registration with CAC in 15 business days",
      "Memorandum & Articles of Association drafted",
      "Founders' agreement with equity and exit terms",
      "NDPA-compliant privacy policy included",
      "Post-incorporation compliance checklist",
    ],
  },
  {
    title: "IP & Technology Law",
    href: "/services/ip-technology",
    icon: Shield,
    summary:
      "Protect your code, brand and digital assets with market-ready IP agreements.",
    details: [
      "IP assignment agreements for freelance developers",
      "Trademark application advisory",
      "Software license agreements",
      "IP audit for code and brand assets",
      "Enforcement and takedown procedures",
    ],
  },
  {
    title: "Data Privacy",
    href: "/services/data-privacy",
    icon: Lock,
    summary: "NDPA-compliant policies, DPIAs and breach response planning.",
    details: [
      "Full NDPA compliance audit",
      "Product-specific privacy policy",
      "Data protection impact assessment (DPIA)",
      "Data processing agreements with vendors",
      "Breach response plan and NDPC registration",
    ],
  },
  {
    title: "Startup Advisory",
    href: "/services/startup-advisory",
    icon: Shield,
    summary:
      "Investor-ready legal structure, cap table advice and due diligence preparation.",
    details: [
      "Pre-seed and seed round legal structuring",
      "Cap table setup and ESOP design",
      "Investor term sheet review",
      "Due diligence readiness preparation",
      "Co-founder and advisor agreements",
    ],
  },
  {
    title: "Fintech Compliance",
    href: "/services/fintech-compliance",
    icon: Zap,
    summary:
      "CBN licensing, AML/KYC design and regulatory mapping for payments and lending.",
    details: [
      "CBN regulatory mapping for payment products",
      "Licensing pathway advisory",
      "AML/KYC policy development",
      "Money Laundering Act compliance review",
      "Risk mapping for AI and data privacy overlap",
    ],
  },
  {
    title: "AI Legal Services",
    href: "/services/ai-legal",
    icon: Cpu,
    summary:
      "Training data, content ownership, algorithmic bias and agentic AI governance.",
    details: [
      "AI training data compliance audit",
      "Content ownership & disclosure framework",
      "Algorithmic fairness & automated decision review",
      "Agentic AI governance & transaction liability",
      "Corporate AI governance framework",
    ],
  },
  {
    title: "Litigation",
    href: "/services/litigation",
    icon: Scale,
    summary:
      "Dispute resolution and commercial litigation for digital businesses.",
    details: [
      "Commercial dispute resolution",
      "Breach of contract litigation",
      "IP infringement enforcement",
      "Regulatory defence",
      "Alternative dispute resolution (mediation/arbitration)",
    ],
  },
];

export function ServiceTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [indicatorTop, setIndicatorTop] = useState(0);
  const dotRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const dot = dotRefs.current[activeIndex];
    if (dot) {
      const rect = dot.getBoundingClientRect();
      const parent = dot.closest(".timeline-track")?.getBoundingClientRect();
      if (parent) {
        setIndicatorTop(rect.top - parent.top + rect.height / 2);
      }
    }
  }, [activeIndex]);

  const activeService = services[activeIndex];

  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      {/* Silk gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-off-white to-gold/[0.02]" />

      {/* Flowing silk orbs */}
      <div className="pointer-events-none absolute -top-40 -right-32 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-gold/12 via-gold/5 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[450px] w-[450px] rounded-full bg-gradient-to-tr from-gold/8 via-accent-blue/[0.02] to-transparent blur-3xl" />
      <div className="pointer-events-none absolute top-1/4 right-1/4 h-[250px] w-[250px] rounded-full bg-gradient-to-l from-gold/6 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/3 left-1/3 h-[200px] w-[200px] rounded-full bg-gradient-to-r from-gold/5 to-transparent blur-3xl" />

      {/* Subtle flowing wave lines */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

      {/* Decorative flowing curve — top */}
      <svg
        className="pointer-events-none absolute top-0 left-0 w-full h-24 text-gold/[0.04]"
        preserveAspectRatio="none"
        viewBox="0 0 1440 100"
        fill="currentColor">
        <path d="M0,30 C360,90 720,10 1440,50 L1440,0 L0,0 Z" />
      </svg>

      {/* Decorative flowing curve — bottom */}
      <svg
        className="pointer-events-none absolute bottom-0 left-0 w-full h-24 text-gold/[0.03]"
        preserveAspectRatio="none"
        viewBox="0 0 1440 100"
        fill="currentColor">
        <path d="M0,70 C360,10 720,90 1440,30 L1440,100 L0,100 Z" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
        <div className="mb-10 sm:mb-14 text-center">
          <span className="inline-block rounded-full border border-gold/20 bg-gold/5 px-4 sm:px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            What we do
          </span>
          <h2 className="mt-5 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
            Law firm for Nigerian digital businesses.
          </h2>
          <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base md:text-lg leading-6 sm:leading-7 text-grey-600">
            From CAC registration to AI governance — full-spectrum legal
            services built for the digital economy.
          </p>
        </div>

        <div className="grid gap-8 sm:gap-10 md:gap-12 md:grid-cols-[1fr_1.3fr] md:items-start lg:grid-cols-[1fr_1.4fr]">
          {/* ─── LEFT: TIMELINE LIST ─── */}
          <div className="timeline-track relative rounded-2xl bg-white p-4 sm:p-5 md:p-6 shadow-sm">
            {/* Background line */}
            <div className="absolute left-[22px] sm:left-[26px] md:left-[31px] top-8 h-[calc(100%-64px)] w-[3px] rounded-full bg-grey-100" />

            {/* Animated gold indicator dot */}
            <motion.div
              className="absolute left-[14px] sm:left-[18px] md:left-[23px] z-10"
              animate={{ top: indicatorTop - 14 }}
              transition={{ type: "spring", stiffness: 180, damping: 24 }}>
              <div className="flex h-7 w-[19px] items-center justify-center">
                <div className="h-[14px] w-[14px] rounded-full bg-gold shadow-[0_0_20px_rgba(0,216,204,0.45)]" />
              </div>
            </motion.div>

            {/* Animated gold line segment */}
            <motion.div
              className="absolute left-[22px] sm:left-[26px] md:left-[31px] w-[3px] rounded-full bg-gradient-to-b from-gold to-gold/60"
              animate={{ top: 32, height: Math.max(indicatorTop - 32 + 4, 0) }}
              transition={{ type: "spring", stiffness: 180, damping: 24 }}
            />

            <div className="space-y-0.5 sm:space-y-1">
              {services.map((service, idx) => {
                const isActive = idx === activeIndex;
                const Icon = service.icon;

                return (
                  <button
                    key={service.title}
                    ref={(el) => {
                      dotRefs.current[idx] = el;
                    }}
                    onClick={() => setActiveIndex(idx)}
                    className={`relative flex w-full items-center gap-3 sm:gap-4 md:gap-5 rounded-xl px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-4 text-left transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-gold/5 via-gold/5 to-transparent shadow-sm"
                        : "hover:bg-grey-50"
                    }`}>
                    {/* Icon */}
                    <div
                      className={`flex h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-lg sm:rounded-xl transition-all duration-300 ${
                        isActive
                          ? "bg-gold shadow-md shadow-gold/20"
                          : "bg-grey-100"
                      }`}>
                      <Icon
                        size={18}
                        className={`transition-colors duration-300 ${
                          isActive ? "text-white" : "text-grey-500"
                        }`}
                      />
                    </div>

                    {/* Text */}
                    <div className="min-w-0 flex-1">
                      <span
                        className={`block text-sm md:text-base font-bold transition-colors duration-300 ${
                          isActive ? "text-gold" : "text-navy"
                        }`}>
                        {service.title}
                      </span>
                      <span className="mt-0.5 hidden sm:block truncate text-xs md:text-sm font-medium text-grey-500">
                        {service.summary}
                      </span>
                    </div>

                    {/* Active arrow indicator */}
                    <div
                      className={`shrink-0 transition-all duration-300 ${
                        isActive
                          ? "text-gold opacity-100"
                          : "text-grey-300 opacity-0"
                      }`}>
                      <ArrowRight size={16} strokeWidth={3} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ─── RIGHT: DETAILS PANEL ─── */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="rounded-2xl border border-grey-200 bg-white p-5 sm:p-6 md:p-8 shadow-sm lg:p-10">
                {/* Header with icon */}
                <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
                  <div className="flex h-11 w-11 sm:h-14 sm:w-14 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-gold/10 to-gold/5 shadow-inner">
                    {(() => {
                      const Icon = activeService.icon;
                      return <Icon size={22} className="text-gold sm:hidden" />;
                    })()}
                    {(() => {
                      const Icon = activeService.icon;
                      return <Icon size={26} className="text-gold hidden sm:block md:hidden" />;
                    })()}
                    {(() => {
                      const Icon = activeService.icon;
                      return <Icon size={30} className="text-gold hidden md:block" />;
                    })()}
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                      Practice Area
                    </span>
                    <h3 className="mt-1 text-lg sm:text-xl md:text-2xl font-bold text-navy lg:text-3xl">
                      {activeService.title}
                    </h3>
                  </div>
                </div>

                {/* Summary */}
                <p className="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base leading-6 sm:leading-7 text-grey-600 font-medium lg:text-lg">
                  {activeService.summary}
                </p>

                {/* Gold divider */}
                <div className="my-4 sm:my-5 md:my-6 h-px w-full bg-gradient-to-r from-gold/60 via-gold/20 to-transparent" />

                {/* Detail list */}
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-grey-500">
                  What&apos;s included
                </span>
                <ul className="mt-3 sm:mt-3.5 md:mt-4 space-y-2 sm:space-y-2.5 md:space-y-3">
                  {activeService.details.map((detail, i) => (
                    <motion.li
                      key={detail}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.3 }}
                      className="flex items-start gap-2.5 sm:gap-3 md:gap-4 text-sm text-grey-700">
                      <span className="mt-1.5 sm:mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                      <span className="font-medium">{detail}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={activeService.href}
                  className="group mt-5 sm:mt-6 md:mt-8 inline-flex items-center gap-3 rounded-xl bg-navy px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 text-sm font-bold text-white transition-all hover:bg-[#3D3D3D] hover:shadow-lg">
                  <span>Explore {activeService.title}</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                    strokeWidth={3}
                  />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
