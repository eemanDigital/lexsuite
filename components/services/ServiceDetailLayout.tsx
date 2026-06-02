import Link from "next/link";
import { ReactNode } from "react";
import { ScrollReveal } from "../ui/ScrollReveal";
import { ArrowRight, CheckCircle } from "lucide-react";

type HeroProps = {
  label: string;
  title: string;
  subtitle: string;
};

type SectionProps = {
  children: ReactNode;
  className?: string;
};

type GridSectionProps = {
  children: ReactNode;
};

type FeatureBlockProps = {
  title: string;
  children: ReactNode;
  accent?: boolean;
};

type PricingBlockProps = {
  price: string;
  description: string;
  href?: string;
};

export function ServiceDetailHero({ label, title, subtitle }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-[#061b34] to-[#001226] py-28 lg:py-36">
      {/* Silk orbs */}
      <div className="pointer-events-none absolute -top-48 -right-48 h-[600px] w-[600px] rounded-full bg-gradient-to-bl from-gold/15 via-gold/5 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 -left-48 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-gold/10 via-accent-blue/[0.03] to-transparent blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 left-1/3 h-[350px] w-[350px] rounded-full bg-gradient-to-r from-gold/8 to-transparent blur-3xl" />

      {/* Flowing curves */}
      <svg
        className="pointer-events-none absolute top-0 left-0 w-full h-40 text-gold/[0.04]"
        preserveAspectRatio="none"
        viewBox="0 0 1440 160"
        fill="currentColor">
        <path d="M0,60 C360,140 720,20 1440,80 L1440,0 L0,0 Z" />
      </svg>
      <svg
        className="pointer-events-none absolute bottom-0 left-0 w-full h-40 text-gold/[0.03]"
        preserveAspectRatio="none"
        viewBox="0 0 1440 160"
        fill="currentColor">
        <path d="M0,100 C360,20 720,140 1440,60 L1440,160 L0,160 Z" />
      </svg>

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #00D8CC 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <ScrollReveal>
          <span className="inline-block rounded-full border border-gold/30 bg-gold/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            {label}
          </span>
          <h1 className="mt-8 text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-grey-200 sm:text-xl">
            {subtitle}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function ServiceDetailSection({
  children,
  className = "",
}: SectionProps) {
  return (
    <section className={`relative overflow-hidden py-20 lg:py-28 ${className}`}>
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">{children}</div>
    </section>
  );
}

export function ServiceDetailGrid({ children }: GridSectionProps) {
  return <div className="grid gap-10 lg:grid-cols-2">{children}</div>;
}

export function ServiceDetailFeatureBlock({
  title,
  children,
  accent,
}: FeatureBlockProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl p-10 shadow-sm transition hover:shadow-gold-lg ${
        accent
          ? "bg-gradient-to-br from-navy via-[#061b34] to-[#001226] text-white ring-1 ring-gold/20"
          : "bg-white text-navy ring-1 ring-grey-200"
      }`}>
      {accent && (
        <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gold/10 blur-3xl" />
      )}
      <h2
        className={`text-2xl font-bold sm:text-3xl ${accent ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      <div
        className={`mt-5 space-y-4 text-base leading-relaxed sm:text-lg ${accent ? "text-grey-200" : "text-grey-600"}`}>
        {children}
      </div>
    </div>
  );
}

export function ServiceDetailBullets({
  items,
  columns = 1,
}: {
  items: string[];
  columns?: 1 | 2;
}) {
  return (
    <div className={`grid gap-3 ${columns === 2 ? "sm:grid-cols-2" : ""}`}>
      {items.map((item) => (
        <div
          key={item}
          className="flex items-start gap-3 text-base font-medium text-text-dark sm:text-lg">
          <CheckCircle size={20} className="mt-0.5 shrink-0 text-gold" />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

export function ServiceDetailPricing({
  price,
  description,
  href = "/contact",
}: PricingBlockProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gold/5 to-gold/[0.02] p-10 ring-1 ring-gold/20 shadow-sm">
      <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gold/10 blur-3xl" />
      <div className="relative">
        <h2 className="text-2xl font-bold text-navy sm:text-3xl">Pricing</h2>
        <p className="mt-4 text-lg leading-relaxed text-grey-600 sm:text-xl">
          {description}
        </p>
        <p className="mt-2 text-3xl font-bold text-gold sm:text-4xl">{price}</p>
        <Link
          href={href}
          className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-navy px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#3D3D3D] hover:shadow-lg">
          <span>Book a consultation</span>
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
            strokeWidth={3}
          />
        </Link>
      </div>
    </div>
  );
}

export function ServiceDetailConnector() {
  return (
    <div className="relative h-24 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full text-gold/[0.04]"
        preserveAspectRatio="none"
        viewBox="0 0 1440 100"
        fill="currentColor">
        <path d="M0,50 C360,0 720,100 1440,30 L1440,100 L0,100 Z" />
      </svg>
    </div>
  );
}
