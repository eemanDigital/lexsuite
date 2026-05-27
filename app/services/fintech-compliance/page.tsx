import Link from "next/link";
import { ScrollReveal } from "../../../components/ui/ScrollReveal";

export const metadata = {
  title: "Fintech & CBN Compliance | LexSuite",
  description:
    "CBN licensing, AML/KYC design and regulatory mapping for Nigerian fintech and payments platforms.",
};

export default function FintechCompliancePage() {
  return (
    <main className="bg-off-white py-20">
      <section className="mx-auto max-w-6xl px-6 sm:px-8">
        <ScrollReveal>
          <div className="rounded-3xl bg-navy px-8 py-14 text-white shadow-sm">
            <p className="text-sm uppercase tracking-[0.35em] text-gold">
              Fintech Compliance
            </p>
            <h1 className="mt-6 text-4xl font-semibold sm:text-5xl">
              Operating without the right CBN license is a criminal offence.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-grey-200">
              The regulatory landscape for fintech in Nigeria is complex and
              fast-moving. We help you understand licensing, AML/KYC, and the
              overlap with AI and data protection obligations.
            </p>
          </div>
        </ScrollReveal>

        <section className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-grey-200 bg-white p-10 shadow-sm">
            <h2 className="text-2xl font-semibold text-navy">The problem</h2>
            <p className="mt-4 text-sm leading-7 text-grey-600">
              Fintech founders often build products before confirming the right
              license, which can expose them to regulatory enforcement and
              costly redesigns.
            </p>
            <div className="mt-8 space-y-4 rounded-3xl bg-grey-100 p-5 text-sm text-grey-700">
              <p>
                <strong>Licensing exposure is not theoretical.</strong> CBN and
                AML obligations affect product design, onboarding, and money
                movement.
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-grey-200 bg-white p-10 shadow-sm">
            <h2 className="text-2xl font-semibold text-navy">Who this is for</h2>
            <ul className="mt-4 space-y-3 text-sm text-grey-600">
              <li>Payments platforms and digital lenders</li>
              <li>Wallet providers and neo-bank products</li>
              <li>Any business using fintech data or payment rails</li>
            </ul>
            <div className="mt-8 space-y-4 rounded-3xl bg-grey-100 p-5 text-sm text-grey-700">
              <p className="font-semibold text-navy">Built for compliance</p>
              <p>We map regulatory obligations so your product roadmap stays aligned.</p>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-grey-200 bg-white p-10 shadow-sm">
            <h2 className="text-2xl font-semibold text-navy">Our service</h2>
            <ul className="mt-6 space-y-3 text-sm text-grey-600">
              <li>CBN regulatory mapping for payment and lending products</li>
              <li>Licensing pathway advisory</li>
              <li>AML/KYC policy development</li>
              <li>Money Laundering Act compliance review</li>
              <li>Investment and securities regulatory guidance</li>
              <li>Risk mapping for AI and data privacy overlap</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-grey-200 bg-white p-10 shadow-sm">
            <h2 className="text-2xl font-semibold text-navy">Why it matters</h2>
            <div className="mt-6 space-y-4 text-sm text-grey-600">
              <p>
                Fintech products that ignore regulatory design risk fines,
                license suspension, and product redesign after launch.
              </p>
              <p>
                Our advisory helps you build a compliance-first architecture with
                a legal guardrail for growth.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-grey-200 bg-white p-10 shadow-sm">
          <h2 className="text-2xl font-semibold text-navy">Pricing</h2>
          <p className="mt-4 text-sm leading-7 text-grey-600">
            Pricing ranges from ₦600,000 to ₦1,500,000 depending on product
            scope.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy transition hover:bg-gold-light">
            Book a consultation
          </Link>
        </section>
      </section>
    </main>
  );
}
