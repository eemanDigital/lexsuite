import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "../../../components/ui/ScrollReveal";
import { ServiceDetailHero, ServiceDetailSection, ServiceDetailConnector } from "../../../components/services/ServiceDetailLayout";

export const metadata = {
  title: "AI Legal Services | ATL Solicitors",
  description:
    "Specialist AI legal services including training data audits, algorithmic fairness, agentic AI governance and synthetic identity prevention.",
};

const sections = [
  {
    id: "training-data",
    title: "AI Training Data Compliance Audit",
    description:
      "Publicly visible content is not publicly licensed content. We map data sources and identify licensed, unlicensed and ambiguous training materials.",
    bullets: [
      "Map all data sources used in your AI training pipeline",
      "Identify licensing, scraping and copyright risks",
      "Draft data licensing agreements and training policies",
    ],
  },
  {
    id: "content-ownership",
    title: "AI Content Ownership & Disclosure Framework",
    description:
      "We help you define who owns AI-generated output, draft client disclosures and update service agreements for AI-powered deliverables.",
    bullets: [
      "Review client and vendor agreements for AI ownership",
      "Draft AI disclosure policies for customers and employees",
      "Advise on human contribution requirements for copyright and contracts",
    ],
  },
  {
    id: "algorithmic-bias",
    title: "Algorithmic Fairness & Automated Decision-Making Review",
    description:
      "Automated does not mean unaccountable. We identify when Nigerian law and the NDPA apply to automated decisions and bias risk.",
    bullets: [
      "Map automated decision points in your product",
      "Review training data for bias exposure",
      "Draft human-in-the-loop protocols and disclosure mechanisms",
    ],
  },
  {
    id: "agentic-ai",
    title: "Agentic AI Governance & Transaction Liability Framework",
    description:
      "AI systems that act without per-action human approval must be governed. We set authority limits and incident escalation for agentic workflows.",
    bullets: [
      "Map agentic process flows for payments and communications",
      "Draft AI agent authority and escalation policies",
      "Review indemnity and liability clauses in vendor agreements",
    ],
  },
  {
    id: "deepfakes",
    title: "Synthetic Identity & KYC Fraud Prevention Protocol",
    description:
      "AI-generated fake IDs are bypassing KYC stacks now. We review your onboarding controls and exposure to synthetic identity attacks.",
    bullets: [
      "Assess KYC vulnerability to AI-generated documents",
      "Draft updated KYC and AML policies",
      "Build incident response procedures for synthetic identity fraud",
    ],
  },
  {
    id: "workplace",
    title: "AI Workplace Compliance Package",
    description:
      "Employee monitoring platforms must comply with the NDPA. We design monitoring governance and employee transparency policies.",
    bullets: [
      "Draft NDPA-compliant monitoring policies",
      "Review vendor agreements for HR software and analytics tools",
      "Update employment contracts for AI-assisted performance review",
    ],
  },
  {
    id: "governance",
    title: "Corporate AI Governance Framework",
    description:
      "AI governance is a board-level duty of care. We build inventories, risk categories and management reporting that investors trust.",
    bullets: [
      "Inventory and classify AI uses by risk",
      "Build board-level AI governance policy and reporting",
      "Create incident response playbooks for AI failures",
    ],
  },
];

export default function AILegalPage() {
  return (
    <main>
      <ServiceDetailHero
        label="AI Legal Services"
        title="The global AI legal crisis is here. We help Nigerian companies survive it."
        subtitle="ATL is uniquely positioned to diagnose both the technical root of AI risk and the legal liability that flows from it."
      />

      <ServiceDetailConnector />

      {/* Service navigation links */}
      <ServiceDetailSection className="bg-white">
        <div className="mx-auto max-w-6xl">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Jump to</span>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {sections.map((section) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gold/5 to-gold/[0.02] p-6 ring-1 ring-gold/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-gold-lg">
                <div className="pointer-events-none absolute -inset-full -skew-x-12 bg-gradient-to-r from-transparent via-gold/10 to-transparent transition-all duration-700 group-hover:inset-0" />
                <span className="relative text-lg font-bold text-navy transition-colors group-hover:text-gold">
                  {section.title}
                </span>
                <ArrowRight size={16} className="relative mt-2 text-gold transition-transform group-hover:translate-x-1" strokeWidth={3} />
              </Link>
            ))}
          </div>
        </div>
      </ServiceDetailSection>

      {/* Detailed sections */}
      <div className="space-y-6">
        {sections.map((section, i) => (
          <ServiceDetailSection
            key={section.id}
            className={i % 2 === 0 ? "bg-white" : "bg-gradient-to-b from-white to-off-white"}>
            <div id={section.id} className="mx-auto max-w-6xl scroll-mt-24">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
                {`Service 0${i + 1}`}
              </span>
              <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
                {section.title}
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-grey-600 sm:text-xl">
                {section.description}
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {section.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-3 rounded-2xl bg-white p-5 ring-1 ring-grey-200">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold" />
                    <span className="text-base font-medium text-text-dark">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          </ServiceDetailSection>
        ))}
      </div>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-[#061b34] to-[#001226] py-24">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-gold/10 to-transparent blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-gold/8 to-transparent blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-8">
          <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Ready to secure your AI future?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-grey-200 sm:text-xl">
            Get in touch for a confidential discussion about your AI legal needs.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-bold text-navy transition hover:brightness-95">
              Book a Consultation
              <ArrowRight size={18} strokeWidth={3} />
            </Link>
            <Link
              href="mailto:hello@lexsuite.com.ng"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white/10">
              hello@lexsuite.com.ng
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
