import Link from "next/link";
import { ScrollReveal } from "../../../components/ui/ScrollReveal";

export const metadata = {
  title: "CAC Registration & Corporate Structuring | LexSuite",
  description:
    "Fast CAC registration and founder-friendly governance for Nigerian digital businesses.",
};

export default function CorporatePage() {
  return (
    <main className="bg-off-white py-20">
      <section className="mx-auto max-w-6xl px-6 sm:px-8">
        <ScrollReveal>
          <div className="rounded-3xl bg-navy px-8 py-14 text-white shadow-sm">
            <p className="text-sm uppercase tracking-[0.35em] text-gold">
              Corporate Structuring
            </p>
            <h1 className="mt-6 text-4xl font-semibold sm:text-5xl">
              Legally incorporated in 15 business days.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-grey-200">
              Founders who build without legal foundations often face funding
              delays, ownership disputes and regulatory gaps. We deliver corporate
              structure that supports fast growth.
            </p>
          </div>
        </ScrollReveal>

        <section className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-grey-200 bg-white p-10 shadow-sm">
            <h2 className="text-2xl font-semibold text-navy">The problem</h2>
            <p className="mt-4 text-sm leading-7 text-grey-600">
              Companies built without a formal entity, investor-ready governance
              and founder agreements are vulnerable to co-founder conflict,
              unregistered IP, and stalled fundraising.
            </p>
            <div className="mt-8 space-y-4">
              <div className="rounded-3xl bg-grey-100 p-5 text-sm text-grey-700">
                <strong>Delay-proof your launch.</strong> Startups without CAC or
                governance documents miss investor windows and lose negotiating
                leverage.
              </div>
              <div className="rounded-3xl bg-grey-100 p-5 text-sm text-grey-700">
                <strong>Protect founder equity.</strong> Founder agreements prevent
                co-founder disputes and preserve long-term ownership clarity.
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-grey-200 bg-white p-10 shadow-sm">
            <h2 className="text-2xl font-semibold text-navy">Who this is for</h2>
            <ul className="mt-4 space-y-3 text-sm text-grey-600">
              <li>Idea-stage founders who need legal launch support</li>
              <li>Freelancers and consultants incorporating as a company</li>
              <li>E-commerce and SaaS teams requiring compliant entity setup</li>
            </ul>
            <div className="mt-8 space-y-4 rounded-3xl bg-grey-100 p-6 text-sm text-grey-700">
              <p className="font-semibold text-navy">What you get</p>
              <p>Fast CAC registration, governance documents, and founder protections.</p>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-grey-200 bg-white p-10 shadow-sm">
            <h2 className="text-2xl font-semibold text-navy">What we deliver</h2>
            <ul className="mt-6 space-y-3 text-sm text-grey-600">
              <li>Company registration with CAC</li>
              <li>Memorandum & Articles of Association</li>
              <li>Founders' agreement with equity and exit terms</li>
              <li>NDPA-compliant privacy policy</li>
              <li>Terms of service tailored to your product</li>
              <li>Post-incorporation compliance checklist</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-grey-200 bg-white p-10 shadow-sm">
            <h2 className="text-2xl font-semibold text-navy">Fast facts</h2>
            <div className="mt-6 space-y-4 text-sm text-grey-600">
              <div>
                <p className="font-semibold text-navy">15 business days</p>
                <p>Typical turnaround for corporate registration and documents.</p>
              </div>
              <div>
                <p className="font-semibold text-navy">100% founder ownership</p>
                <p>We draft agreements that preserve control and investor trust.</p>
              </div>
              <div>
                <p className="font-semibold text-navy">NDPA-ready</p>
                <p>Privacy documentation is included as part of company setup.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-grey-200 bg-white p-10 shadow-sm">
          <h2 className="text-2xl font-semibold text-navy">Pricing</h2>
          <p className="mt-4 text-sm leading-7 text-grey-600">
            Foundation Package starting at ₦350,000.
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
