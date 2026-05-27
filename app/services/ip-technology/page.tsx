import Link from "next/link";
import { ScrollReveal } from "../../../components/ui/ScrollReveal";

export const metadata = {
  title: "IP Protection & Technology Law | LexSuite",
  description:
    "Protect your code and brand with IP assignments, trademark advisory and software licensing for Nigerian startups.",
};

export default function IPTechnologyPage() {
  return (
    <main className="bg-off-white py-20">
      <section className="mx-auto max-w-6xl px-6 sm:px-8">
        <ScrollReveal>
          <div className="rounded-3xl bg-navy px-8 py-14 text-white shadow-sm">
            <p className="text-sm uppercase tracking-[0.35em] text-gold">
              IP & Technology Law
            </p>
            <h1 className="mt-6 text-4xl font-semibold sm:text-5xl">
              Own your code. Protect your brand.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-grey-200">
              Without written IP assignment and trademark protection, founders
              risk losing legal control of their software and brand. We secure
              your most valuable digital assets.
            </p>
          </div>
        </ScrollReveal>

        <section className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-grey-200 bg-white p-10 shadow-sm">
            <h2 className="text-2xl font-semibold text-navy">The problem</h2>
            <p className="mt-4 text-sm leading-7 text-grey-600">
              Freelance developers retain copyright by default, trademarks are
              unenforceable without registration, and unprotected code creates
              ownership disputes that can cripple growth.
            </p>
            <div className="mt-8 rounded-3xl bg-grey-100 p-5 text-sm text-grey-700">
              <p>
                <strong>Protect the thing investors value most.</strong> Your IP
                is the asset behind your product, and it needs legal control.
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-grey-200 bg-white p-10 shadow-sm">
            <h2 className="text-2xl font-semibold text-navy">Who this is for</h2>
            <ul className="mt-4 space-y-3 text-sm text-grey-600">
              <li>Startups with freelance or contractor development history</li>
              <li>SaaS companies with proprietary code</li>
              <li>Brands planning trademark registration</li>
            </ul>
            <div className="mt-8 rounded-3xl bg-grey-100 p-5 text-sm text-grey-700">
              <p className="font-semibold text-navy">What we protect</p>
              <p>Code, designs, trademarks and AI-generated IP are all covered.</p>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-grey-200 bg-white p-10 shadow-sm">
            <h2 className="text-2xl font-semibold text-navy">Our service</h2>
            <ul className="mt-6 space-y-3 text-sm text-grey-600">
              <li>IP assignment agreements for developers</li>
              <li>Trademark application advisory</li>
              <li>Copyright registration guidance</li>
              <li>Software license agreements</li>
              <li>IP audit for code and brand assets</li>
              <li>Enforcement and takedown procedures</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-grey-200 bg-white p-10 shadow-sm">
            <h2 className="text-2xl font-semibold text-navy">Why it matters</h2>
            <div className="mt-6 space-y-4 text-sm text-grey-600">
              <p>
                Without proper IP agreements, founders may lose ownership and
                face disputes as they scale.
              </p>
              <p>
                Our work ensures that your software, brand and creative outputs
                remain a business asset.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-grey-200 bg-white p-10 shadow-sm">
          <h2 className="text-2xl font-semibold text-navy">Pricing</h2>
          <p className="mt-4 text-sm leading-7 text-grey-600">
            Packages from ₦750,000 to ₦3,000,000 depending on IP scope.
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
