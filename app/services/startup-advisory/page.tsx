import Link from "next/link";

export const metadata = {
  title: "Startup Structuring & Investor Readiness | LexSuite",
  description:
    "Cap table modelling, shareholders agreements and investor-ready legal packaging for Nigerian startups.",
};

export default function StartupAdvisoryPage() {
  return (
    <main className="bg-off-white py-20">
      <section className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="rounded-3xl bg-navy px-8 py-14 text-white shadow-sm">
          <p className="text-sm uppercase tracking-[0.35em] text-gold">
            Startup Advisory
          </p>
          <h1 className="mt-6 text-4xl font-semibold sm:text-5xl">
            Build to be fundable from day one.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-grey-200">
            Investors expect legal readiness before they write the first cheque.
            We help founders build the structures, documents and disclosures
            that make due diligence smooth.
          </p>
        </div>

        <section className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-grey-200 bg-white p-10 shadow-sm">
            <h2 className="text-2xl font-semibold text-navy">The problem</h2>
            <p className="mt-4 text-sm leading-7 text-grey-600">
              Startups often enter fundraising with incomplete legal packaging,
              which delays deals, forces last-minute renegotiation and weakens
              valuation.
            </p>
          </div>
          <div className="rounded-3xl border border-grey-200 bg-white p-10 shadow-sm">
            <h2 className="text-2xl font-semibold text-navy">
              Who this is for
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-grey-600">
              <li>Seed-stage founders preparing to pitch investors</li>
              <li>Companies 3-6 months from fundraise</li>
              <li>Teams building a scalable shareholder structure</li>
            </ul>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-grey-200 bg-white p-10 shadow-sm">
          <h2 className="text-2xl font-semibold text-navy">Our service</h2>
          <ul className="mt-6 grid gap-3 text-sm text-grey-600 sm:grid-cols-2">
            <li>Shareholders' agreement with investor protections</li>
            <li>Cap table modelling for multiple rounds</li>
            <li>ESOP design and documentation</li>
            <li>Due diligence data room setup</li>
            <li>Term sheet review for up to three rounds</li>
            <li>Startup Act advisory for eligibility and benefits</li>
          </ul>
        </section>

        <section className="mt-12 rounded-3xl border border-grey-200 bg-white p-10 shadow-sm">
          <h2 className="text-2xl font-semibold text-navy">Pricing</h2>
          <p className="mt-4 text-sm leading-7 text-grey-600">
            Investor-Ready package from ₦1,500,000.
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
