import Link from "next/link";
import { ScrollReveal } from "../../../components/ui/ScrollReveal";

export const metadata = {
  title: "AI Legal Services | LexSuite Solicitors",
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
    <main className="bg-off-white py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="rounded-3xl bg-navy px-8 py-14 text-white shadow-sm">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-[0.35em] text-gold">
              AI Legal Services
            </p>
            <h1 className="mt-6 text-4xl font-semibold sm:text-5xl">
              The global AI legal crisis is here. We help Nigerian companies
              survive it.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-grey-200">
              LexSuite is uniquely positioned to diagnose both the technical
              root of AI risk and the legal liability that flows from it.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={`#${section.id}`}
              className="rounded-3xl border border-grey-200 bg-white p-8 text-sm font-semibold text-navy transition hover:border-gold hover:bg-grey-50">
              {section.title}
            </Link>
          ))}
        </div>

        <div className="mt-16 space-y-16">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="rounded-3xl border border-grey-200 bg-white p-10 shadow-sm">
              <h2 className="text-3xl font-semibold text-navy">
                {section.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-grey-600">
                {section.description}
              </p>
              <ul className="mt-6 space-y-3 text-sm text-grey-700">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-gold" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
