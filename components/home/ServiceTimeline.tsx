"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Building2, Shield, Lock, Cpu, Zap, Scale, ArrowRight, type LucideIcon } from "lucide-react";

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
    summary: "CAC registration and founder-friendly governance for digital companies.",
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
    summary: "Protect your code, brand and digital assets with market-ready IP agreements.",
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
    summary: "Investor-ready legal structure, cap table advice and due diligence preparation.",
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
    summary: "CBN licensing, AML/KYC design and regulatory mapping for payments and lending.",
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
    summary: "Training data, content ownership, algorithmic bias and agentic AI governance.",
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
    summary: "Dispute resolution and commercial litigation for digital businesses.",
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
    <section className="relative bg-gradient-to-b from-white to-off-white py-24">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full border border-gold/5" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full border border-gold/5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-14 text-center">
          <span className="inline-block rounded-full border border-gold/20 bg-gold/5 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            What we do
          </span>
          <h2 className="mt-6 text-4xl font-bold text-navy sm:text-5xl">
            Law firm for Nigerian digital businesses.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-grey-600">
            From CAC registration to AI governance — full-spectrum legal services
            built for the digital economy.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          {/* ─── LEFT: TIMELINE LIST ─── */}
          <div className="timeline-track relative rounded-2xl bg-white p-6 shadow-sm">
            {/* Background line */}
            <div className="absolute left-[31px] top-8 h-[calc(100%-64px)] w-[3px] rounded-full bg-grey-100" />

            {/* Animated gold indicator dot */}
            <motion.div
              className="absolute left-[23px] z-10"
              animate={{ top: indicatorTop - 14 }}
              transition={{ type: "spring", stiffness: 180, damping: 24 }}>
              <div className="flex h-7 w-[19px] items-center justify-center">
                <div className="h-[14px] w-[14px] rounded-full bg-gold shadow-[0_0_20px_rgba(201,168,76,0.45)]" />
              </div>
            </motion.div>

            {/* Animated gold line segment */}
            <motion.div
              className="absolute left-[31px] w-[3px] rounded-full bg-gradient-to-b from-gold to-gold/60"
              animate={{ top: 32, height: Math.max(indicatorTop - 32 + 4, 0) }}
              transition={{ type: "spring", stiffness: 180, damping: 24 }}
            />

            <div className="space-y-1">
              {services.map((service, idx) => {
                const isActive = idx === activeIndex;
                const Icon = service.icon;

                return (
                  <button
                    key={service.title}
                    ref={(el) => { dotRefs.current[idx] = el; }}
                    onClick={() => setActiveIndex(idx)}
                    className={`relative flex w-full items-center gap-5 rounded-xl px-5 py-4 text-left transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-gold/5 via-gold/5 to-transparent shadow-sm"
                        : "hover:bg-grey-50"
                    }`}>
                    {/* Icon */}
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                        isActive
                          ? "bg-gold shadow-md shadow-gold/20"
                          : "bg-grey-100"
                      }`}>
                      <Icon
                        size={22}
                        className={`transition-colors duration-300 ${
                          isActive ? "text-white" : "text-grey-500"
                        }`}
                      />
                    </div>

                    {/* Text */}
                    <div className="min-w-0 flex-1">
                      <span
                        className={`block text-base font-bold transition-colors duration-300 ${
                          isActive ? "text-gold" : "text-navy"
                        }`}>
                        {service.title}
                      </span>
                      <span className="mt-0.5 block truncate text-sm text-grey-500">
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
                      <ArrowRight size={18} strokeWidth={3} />
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
                className="rounded-2xl border border-grey-200 bg-white p-8 shadow-sm sm:p-10">
                {/* Header with icon */}
                <div className="flex items-center gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/10 to-gold/5 shadow-inner">
                    {(() => {
                      const Icon = activeService.icon;
                      return <Icon size={30} className="text-gold" />;
                    })()}
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                      Practice Area
                    </span>
                    <h3 className="mt-1 text-2xl font-bold text-navy sm:text-3xl">
                      {activeService.title}
                    </h3>
                  </div>
                </div>

                {/* Summary */}
                <p className="mt-6 text-base leading-7 text-grey-600 sm:text-lg">
                  {activeService.summary}
                </p>

                {/* Gold divider */}
                <div className="my-6 h-px w-full bg-gradient-to-r from-gold/60 via-gold/20 to-transparent" />

                {/* Detail list */}
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-grey-500">
                  What&apos;s included
                </span>
                <ul className="mt-4 space-y-3.5">
                  {activeService.details.map((detail, i) => (
                    <motion.li
                      key={detail}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.3 }}
                      className="flex items-start gap-4 text-sm text-grey-700 sm:text-base">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                      <span className="font-medium">{detail}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={activeService.href}
                  className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-navy px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#0d1a30] hover:shadow-lg">
                  <span>Explore {activeService.title}</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" strokeWidth={3} />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
