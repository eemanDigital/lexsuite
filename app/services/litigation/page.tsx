import Link from "next/link";

export const metadata = {
  title: "Litigation & Dispute Resolution | LexSuite Solicitors",
  description:
    "Commercial litigation, dispute resolution and enforcement for technology businesses in Nigeria.",
};

export default function LitigationPage() {
  return (
    <main className="bg-off-white py-20">
      <section className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="rounded-3xl bg-navy px-8 py-14 text-white shadow-sm">
          <p className="text-sm uppercase tracking-[0.35em] text-gold">
            Litigation
          </p>
          <h1 className="mt-6 text-4xl font-semibold sm:text-5xl">
            Disputes resolved with commercial precision.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-grey-200">
            When prevention fails, you need a litigators' team who understands
            technology and commercial risk. We act swiftly to protect client
            assets and reputations.
          </p>
        </div>

        <section className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-grey-200 bg-white p-10 shadow-sm">
            <h2 className="text-2xl font-semibold text-navy">The problem</h2>
            <p className="mt-4 text-sm leading-7 text-grey-600">
              Disputes involving IP, contracts or payment failures often require
              fast legal action. Technology-specific evidence and preservation
              are critical.
            </p>
          </div>
          <div className="rounded-3xl border border-grey-200 bg-white p-10 shadow-sm">
            <h2 className="text-2xl font-semibold text-navy">
              Who this is for
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-grey-600">
              <li>
                Startups and platform businesses facing contractual breaches
              </li>
              <li>Companies with IP infringement or takedown needs</li>
              <li>
                Fintechs and payment platforms requiring urgent enforcement
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-grey-200 bg-white p-10 shadow-sm">
          <h2 className="text-2xl font-semibold text-navy">Our service</h2>
          <ul className="mt-6 grid gap-3 text-sm text-grey-600 sm:grid-cols-2">
            <li>Pre-action preservation and evidence gathering</li>
            <li>IP enforcement and takedown procedures</li>
            <li>Contract enforcement and injunctive relief</li>
            <li>Regulatory engagement and defence</li>
            <li>Alternative dispute resolution and mediation</li>
            <li>Post-judgment enforcement strategies</li>
          </ul>
        </section>

        <section className="mt-12 rounded-3xl border border-grey-200 bg-white p-10 shadow-sm">
          <h2 className="text-2xl font-semibold text-navy">Pricing</h2>
          <p className="mt-4 text-sm leading-7 text-grey-600">
            Commercial pricing depends on case complexity — contact us for an
            initial assessment.
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
