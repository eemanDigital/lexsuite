import Link from "next/link";
import { ScrollReveal } from "../../../components/ui/ScrollReveal";

export const metadata = {
  title: "NDPA Data Privacy Compliance | LexSuite",
  description:
    "NDPA-compliant privacy audits, DPIAs, breach response and NDPC registration advisory for Nigerian businesses.",
};

export default function DataPrivacyPage() {
  return (
    <main className="bg-off-white py-20">
      <section className="mx-auto max-w-6xl px-6 sm:px-8">
        <ScrollReveal>
          <div className="rounded-3xl bg-navy px-8 py-14 text-white shadow-sm">
            <p className="text-sm uppercase tracking-[0.35em] text-gold">
              NDPA 2023 Data Privacy Compliance
            </p>
            <h1 className="mt-6 text-4xl font-semibold sm:text-5xl">
              NDPA compliance is not optional. We make it simple.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-grey-200">
              The NDPA penalties are real and enforcement is accelerating. We help
              Nigerian companies document lawful processing, assess risk, and
              respond to breaches.
            </p>
          </div>
        </ScrollReveal>

        <section className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-grey-200 bg-white p-10 shadow-sm">
            <h2 className="text-2xl font-semibold text-navy">The problem</h2>
            <p className="mt-4 text-sm leading-7 text-grey-600">
              Many businesses collect personal data without a lawful basis or
              documented policies, leaving them exposed to fines, reputational
              damage and compliance gaps.
            </p>
            <div className="mt-8 rounded-3xl bg-grey-100 p-5 text-sm text-grey-700">
              <p>
                <strong>Privacy gaps are business risks.</strong> Breaches and
                non-compliance can damage trust and slow growth.
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-grey-200 bg-white p-10 shadow-sm">
            <h2 className="text-2xl font-semibold text-navy">Who this is for</h2>
            <ul className="mt-4 space-y-3 text-sm text-grey-600">
              <li>SaaS businesses collecting user data</li>
              <li>E-commerce and fintech platforms</li>
              <li>Any Nigerian company processing customer or employee data</li>
            </ul>
            <div className="mt-8 rounded-3xl bg-grey-100 p-5 text-sm text-grey-700">
              <p className="font-semibold text-navy">Essential for growth</p>
              <p>We help you turn privacy compliance into a competitive advantage.</p>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-grey-200 bg-white p-10 shadow-sm">
            <h2 className="text-2xl font-semibold text-navy">Our service</h2>
            <ul className="mt-6 space-y-3 text-sm text-grey-600">
              <li>Full NDPA compliance audit</li>
              <li>Product-specific privacy policy</li>
              <li>Data protection impact assessment (DPIA)</li>
              <li>Data processing agreements with vendors</li>
              <li>Breach response plan and notification advisory</li>
              <li>NDPC registration guidance</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-grey-200 bg-white p-10 shadow-sm">
            <h2 className="text-2xl font-semibold text-navy">What we fix</h2>
            <div className="mt-6 space-y-4 text-sm text-grey-600">
              <p>
                Weak or missing privacy documentation, unclear legal basis for
                processing, and untested breach response processes.
              </p>
              <p>
                Our team helps you fix these gaps with NDPA-ready policies,
                impact assessments, and governance frameworks.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-grey-200 bg-white p-10 shadow-sm">
          <h2 className="text-2xl font-semibold text-navy">Pricing</h2>
          <p className="mt-4 text-sm leading-7 text-grey-600">
            Included in growth packages from ₦750,000; standalone from ₦400,000
            to ₦800,000.
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
