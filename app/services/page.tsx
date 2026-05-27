import { ServiceCard } from "../../components/services/ServiceCard";
import { ScrollReveal } from "../../components/ui/ScrollReveal";
import { Cpu, Shield, Lock, Rocket, Zap, Scale, FileText, Building2 } from "lucide-react";

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
      "Legally incorporated in 15 business days with founder-friendly governance documents.",
    href: "/services/corporate",
  },
  {
    icon: Shield,
    title: "IP Protection & Technology Law",
    description:
      "Own your code, protect your brand, and secure your software assets.",
    href: "/services/ip-technology",
  },
  {
    icon: Lock,
    title: "NDPA 2023 Data Privacy Compliance",
    description:
      "Make privacy a practical asset with audit-ready NDPA policies and DPIAs.",
    href: "/services/data-privacy",
  },
  {
    icon: Rocket,
    title: "Startup Structuring & Investor Readiness",
    description:
      "Build to be fundable from day one with cap table, ESOP and diligence-ready documents.",
    href: "/services/startup-advisory",
  },
  {
    icon: Zap,
    title: "Fintech & CBN Regulatory Compliance",
    description:
      "Navigate CBN licensing, AML/KYC and payment regulations with care.",
    href: "/services/fintech-compliance",
  },
];

const aiServices = [
  {
    icon: Cpu,
    title: "AI Training Data Compliance Audit",
    description:
      "Map sources, identify risk, and align your training pipeline with licensing obligations.",
    href: "/services/ai-legal#training-data",
  },
  {
    icon: FileText,
    title: "AI Content Ownership & Disclosure Framework",
    description:
      "Draft AI ownership clauses and disclosure policies for generated output.",
    href: "/services/ai-legal#content-ownership",
  },
  {
    icon: Scale,
    title: "Algorithmic Fairness & Automated Decision Review",
    description:
      "Review bias, human-in-the-loop controls and NDPA automated decision exposure.",
    href: "/services/ai-legal#algorithmic-bias",
  },
  {
    icon: Cpu,
    title: "Agentic AI Governance & Transaction Liability",
    description:
      "Set authority limits and liability protocols for AI systems that act on your behalf.",
    href: "/services/ai-legal#agentic-ai",
  },
  {
    icon: Shield,
    title: "Synthetic Identity & KYC Fraud Prevention",
    description:
      "Protect payment and onboarding stacks from AI deepfake and synthetic identity attacks.",
    href: "/services/ai-legal#deepfakes",
  },
  {
    icon: FileText,
    title: "AI Workplace Compliance Package",
    description:
      "Align employee monitoring and productivity tools with NDPA requirements.",
    href: "/services/ai-legal#workplace",
  },
  {
    icon: Shield,
    title: "Corporate AI Governance Framework",
    description:
      "Build board-level AI governance that supports investment and compliance diligence.",
    href: "/services/ai-legal#governance",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-12 rounded-2xl bg-navy px-8 py-14 text-white">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-[0.35em] text-gold">
              Full-Spectrum Legal-Tech Services
            </p>
            <h1 className="mt-6 text-4xl font-bold sm:text-5xl">
              Legal services designed for modern Nigerian digital businesses.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-grey-200">
              LexSuite blends legal precision with technology awareness to make
              compliance a live business advantage.
            </p>
          </ScrollReveal>
        </div>

        <section className="grid gap-6 lg:grid-cols-2">
          {coreServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </section>

        <section className="mt-16 rounded-2xl border border-grey-200 bg-white p-8 shadow-sm">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-[0.35em] text-gold">
              AI Legal Services — The Emerging Frontier
            </p>
            <h2 className="mt-4 text-3xl font-bold text-navy">
              Protect your AI products with specialist legal advice.
            </h2>
            <p className="mt-4 text-sm leading-7 text-grey-600">
              The global AI legal crisis is not coming — it is already here.
              Nigerian companies using AI tools are accumulating legal exposure
              they do not know they have.
            </p>
          </ScrollReveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {aiServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-grey-200 bg-white p-8 shadow-sm">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-[0.35em] text-gold">
              Pricing packages
            </p>
            <h2 className="mt-4 text-3xl font-bold text-navy">
              Practical packages for every stage of growth.
            </h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Foundation",
                price: "₦350,000",
                description:
                  "Ideal for idea-stage founders who need a solid legal launch.",
              },
              {
                title: "Growth",
                price: "₦750,000",
                description:
                  "For early traction startups requiring privacy, IP, and governance support.",
              },
              {
                title: "Investor-Ready",
                price: "₦1,500,000",
                description:
                  "Designed for startups preparing for fundraising and diligence.",
              },
            ].map((pkg) => (
              <div
                key={pkg.title}
                className="rounded-2xl border border-grey-200 bg-off-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-gold">
                <p className="text-sm uppercase tracking-[0.35em] text-gold">{pkg.title}</p>
                <p className="mt-4 text-3xl font-bold text-navy">{pkg.price}</p>
                <p className="mt-4 text-sm leading-7 text-grey-600">{pkg.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
