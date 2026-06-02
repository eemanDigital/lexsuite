import Link from "next/link";
import { ScrollReveal, StaggerReveal, StaggerItem } from "../../components/ui/ScrollReveal";
import { ArrowRight, Building2, Shield, Lock, Rocket, Zap, Cpu, Scale, FileText, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Services | LexSuite Solicitors",
  description:
    "Full-spectrum legal-tech services: CAC registration, IP protection, NDPA compliance, fintech regulation and AI legal services.",
};

const coreServices = [
  {
    icon: Building2,
    title: "CAC Registration & Corporate Structuring",
    description:
      "Legally incorporated in 15 business days with founder-friendly governance documents tailored for digital companies.",
    href: "/services/corporate",
    highlights: ["Company registration with CAC", "Founders' agreement", "NDPA-compliant privacy policy"],
  },
  {
    icon: Shield,
    title: "IP Protection & Technology Law",
    description:
      "Own your code, protect your brand, and secure your software assets with market-ready IP agreements.",
    href: "/services/ip-technology",
    highlights: ["IP assignment agreements", "Trademark advisory", "Software license agreements"],
  },
  {
    icon: Lock,
    title: "NDPA 2023 Data Privacy Compliance",
    description:
      "Make privacy a practical asset with audit-ready NDPA policies, DPIAs and breach response planning.",
    href: "/services/data-privacy",
    highlights: ["Full NDPA compliance audit", "Data processing agreements", "Breach response plan"],
  },
  {
    icon: Rocket,
    title: "Startup Structuring & Investor Readiness",
    description:
      "Build to be fundable from day one with cap table, ESOP and diligence-ready documents that investors expect.",
    href: "/services/startup-advisory",
    highlights: ["Pre-seed & seed round structuring", "Cap table setup & ESOP", "Investor term sheet review"],
  },
  {
    icon: Zap,
    title: "Fintech & CBN Regulatory Compliance",
    description:
      "Navigate CBN licensing, AML/KYC frameworks and payment regulations with precision and speed.",
    href: "/services/fintech-compliance",
    highlights: ["CBN regulatory mapping", "AML/KYC policy development", "Licensing pathway advisory"],
  },
];

const aiServices = [
  {
    icon: Cpu,
    title: "AI Training Data Compliance",
    description: "Map sources, identify risk, and align your training pipeline with licensing obligations.",
    href: "/services/ai-legal#training-data",
  },
  {
    icon: FileText,
    title: "AI Content Ownership & Disclosure",
    description: "Draft AI ownership clauses and disclosure policies for generated output.",
    href: "/services/ai-legal#content-ownership",
  },
  {
    icon: Scale,
    title: "Algorithmic Fairness & Bias Review",
    description: "Review bias, human-in-the-loop controls and NDPA automated decision exposure.",
    href: "/services/ai-legal#algorithmic-bias",
  },
  {
    icon: Cpu,
    title: "Agentic AI Governance & Liability",
    description: "Set authority limits and liability protocols for AI systems that act on your behalf.",
    href: "/services/ai-legal#agentic-ai",
  },
  {
    icon: Shield,
    title: "Synthetic Identity & KYC Fraud Prevention",
    description: "Protect payment and onboarding stacks from AI deepfake and synthetic identity attacks.",
    href: "/services/ai-legal#deepfakes",
  },
  {
    icon: FileText,
    title: "AI Workplace Compliance Package",
    description: "Align employee monitoring and productivity tools with NDPA requirements.",
    href: "/services/ai-legal#workplace",
  },
  {
    icon: Shield,
    title: "Corporate AI Governance Framework",
    description: "Build board-level AI governance that supports investment and compliance diligence.",
    href: "/services/ai-legal#governance",
  },
];

const packages = [
  {
    title: "Foundation",
    price: "₦350,000",
    description: "Ideal for idea-stage founders who need a solid legal launch.",
    features: ["CAC registration", "Founders' agreement", "Privacy policy", "Basic IP advisory"],
  },
  {
    title: "Growth",
    price: "₦750,000",
    description: "For early traction startups requiring privacy, IP, and governance support.",
    features: ["Everything in Foundation", "NDPA compliance audit", "IP assignment agreements", "Data processing agreements"],
    featured: true,
  },
  {
    title: "Investor-Ready",
    price: "₦1,500,000",
    description: "Designed for startups preparing for fundraising and diligence.",
    features: ["Everything in Growth", "Cap table setup", "Term sheet review", "Due diligence preparation"],
  },
];

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden">
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-[#061b34] to-[#001226] py-28 lg:py-36">
        {/* Silk orbs */}
        <div className="pointer-events-none absolute -top-48 -right-48 h-[600px] w-[600px] rounded-full bg-gradient-to-bl from-gold/15 via-gold/5 to-transparent blur-3xl" />
        <div className="pointer-events-none absolute -bottom-48 -left-48 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-gold/10 via-accent-blue/[0.03] to-transparent blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 left-1/3 h-[350px] w-[350px] rounded-full bg-gradient-to-r from-gold/8 to-transparent blur-3xl" />

        {/* Flowing curves */}
        <svg className="pointer-events-none absolute top-0 left-0 w-full h-40 text-gold/[0.04]" preserveAspectRatio="none" viewBox="0 0 1440 160" fill="currentColor">
          <path d="M0,60 C360,140 720,20 1440,80 L1440,0 L0,0 Z" />
        </svg>
        <svg className="pointer-events-none absolute bottom-0 left-0 w-full h-40 text-gold/[0.03]" preserveAspectRatio="none" viewBox="0 0 1440 160" fill="currentColor">
          <path d="M0,100 C360,20 720,140 1440,60 L1440,160 L0,160 Z" />
        </svg>

        {/* Decorative grid dots */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #00D8CC 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <ScrollReveal>
            <span className="inline-block rounded-full border border-gold/30 bg-gold/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Full-Spectrum Services
            </span>
            <h1 className="mt-8 text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
              Legal services designed for <br />
              <span className="text-gold">modern Nigerian digital businesses.</span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-grey-200 sm:text-xl">
              LexSuite blends legal precision with technology awareness to make
              compliance a live business advantage — from CAC registration to AI governance.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-bold text-navy transition hover:brightness-95">
                Book a Consultation
                <ArrowRight size={18} strokeWidth={3} />
              </Link>
              <Link
                href="#core-services"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white/10">
                Explore Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── CORE SERVICES — STAGGERED MAGAZINE LAYOUT ─── */}
      <section id="core-services" className="relative overflow-hidden bg-white py-28 lg:py-36">
        {/* Background silk */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-off-white/50 to-white" />
        <div className="pointer-events-none absolute -top-32 -left-32 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-gold/8 to-transparent blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-gradient-to-tl from-gold/5 to-transparent blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mb-20 text-center">
            <span className="inline-block rounded-full border border-gold/20 bg-gold/5 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Our Core Practice Areas
            </span>
            <h2 className="mt-6 text-4xl font-bold text-navy sm:text-5xl lg:text-6xl">
              What we do best.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-grey-500">
              From incorporation to compliance — full-spectrum legal services for Nigerian digital businesses.
            </p>
          </div>

          <div className="space-y-32">
            {coreServices.map((service, i) => {
              const Icon = service.icon;
              const isReversed = i % 2 === 1;

              return (
                <ScrollReveal
                  key={service.title}
                  direction={isReversed ? "right" : "left"}
                  className={`relative flex flex-col items-center gap-12 lg:flex-row ${isReversed ? "lg:flex-row-reverse" : ""}`}>
                  {/* Decorative connector line */}
                  <div className={`hidden lg:block absolute top-1/2 h-px w-1/3 bg-gradient-to-r ${isReversed ? "left-0 from-gold/30 to-transparent" : "right-0 from-transparent to-gold/30"}`} />

                  {/* Visual side — large decorative element */}
                  <div className="relative flex w-full shrink-0 items-center justify-center lg:w-[45%]">
                    {/* Gradient backdrop */}
                    <div className="absolute h-64 w-64 rounded-full bg-gradient-to-br from-gold/15 via-gold/5 to-transparent blur-2xl" />
                    <div className="relative flex h-48 w-48 items-center justify-center rounded-3xl bg-gradient-to-br from-gold/10 to-gold/5 shadow-xl ring-1 ring-gold/20">
                      <Icon size={72} className="text-gold" strokeWidth={1.2} />
                    </div>
                    {/* Decorative dots */}
                    <div className="absolute -top-4 -right-4 h-8 w-8 rounded-full border-2 border-gold/20" />
                    <div className="absolute -bottom-2 -left-2 h-4 w-4 rounded-full bg-gold/20" />
                  </div>

                  {/* Content side */}
                  <div className="w-full lg:w-[55%]">
                    <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
                      {`0${i + 1}`}
                    </span>
                    <h3 className="mt-3 text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-grey-600 sm:text-xl">
                      {service.description}
                    </p>

                    {/* Highlights */}
                    <ul className="mt-6 space-y-3">
                      {service.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-3 text-base font-medium text-text-dark">
                          <CheckCircle size={18} className="shrink-0 text-gold" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={service.href}
                      className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-navy px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#3D3D3D] hover:shadow-lg">
                      <span>Explore {service.title.split("&")[0].trim()}</span>
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" strokeWidth={3} />
                    </Link>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CONNECTIVE SECTION — PREMIUM IMMERSIVE ─── */}
      <section className="relative overflow-hidden py-32 lg:py-40">
        {/* Deep gradient canvas */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-[#222] to-[#111]" />

        {/* Glowing hex tech mesh — full background */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: `
            linear-gradient(60deg, #00D8CC 1px, transparent 1px),
            linear-gradient(-60deg, #00D8CC 1px, transparent 1px)
          `,
          backgroundSize: '60px 104px',
          backgroundPosition: '0 0, 30px 52px',
        }} />

        {/* Radiant glow center */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-gold/15 via-gold/8 to-transparent blur-3xl" />

        {/* Silk orbs */}
        <div className="pointer-events-none absolute -top-40 -right-32 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-gold/12 via-gold/5 to-transparent blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-[450px] w-[450px] rounded-full bg-gradient-to-tr from-gold/8 via-accent-blue/[0.03] to-transparent blur-3xl" />

        {/* Flowing curves */}
        <svg className="pointer-events-none absolute top-0 left-0 w-full h-32 text-gold/[0.04]" preserveAspectRatio="none" viewBox="0 0 1440 120" fill="currentColor">
          <path d="M0,60 C360,120 720,10 1440,80 L1440,0 L0,0 Z" />
        </svg>
        <svg className="pointer-events-none absolute bottom-0 left-0 w-full h-32 text-gold/[0.03]" preserveAspectRatio="none" viewBox="0 0 1440 120" fill="currentColor">
          <path d="M0,60 C360,0 720,110 1440,40 L1440,120 L0,120 Z" />
        </svg>

        {/* Floating decorative elements */}
        <div className="pointer-events-none absolute top-1/4 right-[15%] h-16 w-16 rounded-full border border-gold/20" />
        <div className="pointer-events-none absolute bottom-1/3 left-[10%] h-10 w-10 rounded-full bg-gold/10 blur-sm" />
        <div className="pointer-events-none absolute top-1/3 left-[20%] h-3 w-3 rounded-full bg-gold/30" />
        <div className="pointer-events-none absolute bottom-1/4 right-[25%] h-4 w-4 rounded-full bg-gold/20" />

        {/* Decorative grid dots */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #00D8CC 1.5px, transparent 1.5px)', backgroundSize: '50px 50px' }} />

        <ScrollReveal>
        <div className="relative mx-auto max-w-5xl px-6 text-center sm:px-8">
          {/* Glowing border frame */}
          <div className="relative mx-auto max-w-3xl rounded-3xl border border-gold/20 bg-black/20 p-8 backdrop-blur-sm sm:p-12 lg:p-16">
            {/* Inner glow */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-gold/5 to-transparent opacity-50" />

            <div className="relative">
              <span className="inline-block rounded-full border border-gold/30 bg-gold/15 px-6 py-2 text-xs font-bold uppercase tracking-[0.3em] text-gold">
                The Emerging Frontier
              </span>
              <h2 className="mt-8 text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
                AI Legal{" "}
                <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                  Services
                </span>
              </h2>
              <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-gold/60 to-gold/20" />
              <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-grey-200 sm:text-xl lg:text-2xl">
                The global AI legal crisis is not coming — it is already here.
                Nigerian companies using AI tools are accumulating legal exposure
                they do not know they have.
              </p>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* ─── AI SERVICES — ALTERNATING FLOW LAYOUT ─── */}
      <section className="relative overflow-hidden bg-white py-28 lg:py-36">
        {/* Background silk */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-off-white/30 to-white" />
        <div className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-gradient-to-bl from-gold/10 via-gold/5 to-transparent blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-gold/8 via-accent-blue/[0.02] to-transparent blur-3xl" />

        {/* Background pattern — vertical flowing lines */}
        <svg className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.03]" preserveAspectRatio="none" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100,0 C200,200 50,400 150,800" stroke="#00D8CC" strokeWidth="1" />
          <path d="M300,0 C400,300 250,500 350,800" stroke="#00D8CC" strokeWidth="0.8" />
          <path d="M600,0 C700,200 550,400 650,800" stroke="#00D8CC" strokeWidth="0.6" />
          <path d="M900,0 C1000,300 850,500 950,800" stroke="#00D8CC" strokeWidth="0.8" />
          <path d="M1200,0 C1300,200 1150,400 1250,800" stroke="#00D8CC" strokeWidth="0.6" />
          <path d="M1400,0 C1450,300 1350,500 1400,800" stroke="#00D8CC" strokeWidth="0.4" />
        </svg>

        {/* Dot grid overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #00D8CC 1px, transparent 1px)', backgroundSize: '45px 45px' }} />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <div className="space-y-24">
            {aiServices.map((service, i) => {
              const Icon = service.icon;
              const isEven = i % 2 === 0;

              return (
                <ScrollReveal key={service.title} direction={isEven ? "left" : "right"}>
                <div className="relative group">
                  {/* Decorative connector — vertical line */}
                  <div className={`hidden lg:block absolute top-0 bottom-0 w-px bg-gradient-to-b from-gold/20 via-gold/10 to-transparent ${isEven ? "left-12" : "right-12"}`} />

                  {/* Step number — large decorative */}
                  <div className={`relative flex items-start gap-8 lg:gap-16 ${isEven ? "" : "lg:flex-row-reverse"}`}>
                    {/* Decorative number column */}
                    <div className="hidden shrink-0 lg:block">
                      <span className="text-[120px] font-bold leading-none text-gold/10 select-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="relative flex-1">
                      {/* Hover glow */}
                      <div className="pointer-events-none absolute -inset-8 rounded-3xl bg-gradient-to-r from-gold/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      <div className="relative flex items-start gap-6">
                        {/* Icon */}
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/10 to-gold/5 ring-1 ring-gold/20 transition-all duration-500 group-hover:shadow-gold-lg group-hover:ring-gold/40">
                          <Icon size={30} className="text-gold" />
                        </div>

                        <div className="flex-1">
                          <Link href={service.href} className="group/link">
                            <h3 className="text-2xl font-bold text-navy transition-colors duration-300 group-hover/link:text-gold sm:text-3xl">
                              {service.title}
                            </h3>
                          </Link>
                          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-grey-500 sm:text-xl">
                            {service.description}
                          </p>
                          <Link
                            href={service.href}
                            className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gold transition-all hover:gap-3">
                            <span>Learn more</span>
                            <ArrowRight size={16} strokeWidth={3} className="transition-transform group-hover/link:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Mobile step indicator */}
                    <div className="lg:hidden shrink-0">
                      <span className="text-5xl font-bold text-gold/10">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                  </div>
                </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── PRICING PACKAGES ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-off-white to-white py-28 lg:py-36">
        {/* Silk background */}
        <div className="pointer-events-none absolute -top-32 -left-32 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-gold/10 to-transparent blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-gradient-to-tl from-gold/8 to-transparent blur-3xl" />
        <svg className="pointer-events-none absolute top-0 left-0 w-full h-20 text-gold/[0.03]" preserveAspectRatio="none" viewBox="0 0 1440 80" fill="currentColor">
          <path d="M0,40 C360,0 720,80 1440,20 L1440,0 L0,0 Z" />
        </svg>

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mb-16 text-center">
            <span className="inline-block rounded-full border border-gold/20 bg-gold/5 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Pricing Packages
            </span>
            <h2 className="mt-6 text-4xl font-bold text-navy sm:text-5xl">
              Practical packages for every stage of growth.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-grey-500">
              Transparent pricing designed for Nigerian digital businesses at every stage.
            </p>
          </div>

          <StaggerReveal className="grid gap-8 lg:grid-cols-3">
            {packages.map((pkg) => (
              <StaggerItem key={pkg.title}>
              <div
                className={`relative overflow-hidden rounded-3xl p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-gold-lg ${
                  pkg.featured
                    ? "bg-navy text-white ring-2 ring-gold/30"
                    : "bg-white text-navy ring-1 ring-grey-200"
                }`}>
                {pkg.featured && (
                  <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gold/10 blur-2xl" />
                )}
                <p className={`text-sm uppercase tracking-[0.35em] font-semibold ${pkg.featured ? "text-gold" : "text-gold"}`}>
                  {pkg.title}
                </p>
                <p className={`mt-4 text-4xl font-bold ${pkg.featured ? "text-white" : "text-navy"}`}>
                  {pkg.price}
                </p>
                <p className={`mt-4 text-base leading-relaxed ${pkg.featured ? "text-grey-200" : "text-grey-500"}`}>
                  {pkg.description}
                </p>
                <ul className="mt-8 space-y-3">
                  {pkg.features.map((f) => (
                    <li key={f} className={`flex items-center gap-3 text-sm font-medium ${pkg.featured ? "text-grey-200" : "text-grey-600"}`}>
                      <CheckCircle size={16} className={`shrink-0 ${pkg.featured ? "text-gold" : "text-gold"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold transition ${
                    pkg.featured
                      ? "bg-gold text-navy hover:brightness-95"
                      : "bg-navy text-white hover:bg-[#3D3D3D]"
                  }`}>
                  Get Started
                  <ArrowRight size={16} strokeWidth={3} />
                </Link>
              </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="relative overflow-hidden bg-navy py-24">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-gold/10 to-transparent blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-gold/8 to-transparent blur-3xl" />

        <ScrollReveal>
        <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-8">
          <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Ready to work with us?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-grey-200 sm:text-xl">
            Tell us about your legal challenge and we&apos;ll respond with a practical path forward.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-bold text-navy transition hover:brightness-95">
              Book a Free Consultation
              <ArrowRight size={18} strokeWidth={3} />
            </Link>
            <Link
              href="mailto:hello@lexsuite.com.ng"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white/10">
              hello@lexsuite.com.ng
            </Link>
          </div>
        </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
