import Link from "next/link";
import { ScrollReveal } from "../../components/ui/ScrollReveal";
import { TeamGrid } from "../../components/home/TeamGrid";
import { Award, Shield, Scale, Users, Target } from "lucide-react";

export const metadata = {
  title: "About | LexSuite Solicitors",
  description:
    "About LexSuite — a Nigerian legal-tech firm offering AI legal, NDPA compliance, IP protection, and corporate advisory.",
};

const pillars = [
  {
    icon: Target,
    title: "Integrated legal-tech expertise",
    description:
      "We combine solicitor-led legal advice with product-aware technology counsel for companies at the digital frontier.",
  },
  {
    icon: Shield,
    title: "Regulatory clarity",
    description:
      "We translate NDPA, CBN, CAC and AI governance rules into practical workstreams for Nigerian teams.",
  },
  {
    icon: Scale,
    title: "Commercial precision",
    description:
      "Every contract, policy and advisory note is built to support fundraising, partnerships and growth.",
  },
  {
    icon: Users,
    title: "Risk-first design",
    description:
      "We anticipate litigation exposure, vendor liability and automated decision risk before they become business events.",
  },
  {
    icon: Award,
    title: "Board-level accountability",
    description:
      "AI governance and compliance are treated as enterprise duties, not optional back-office paperwork.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-navy text-white py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-[0.35em] text-gold">About LexSuite</p>
            <h1 className="mt-6 text-4xl font-bold sm:text-5xl">
              A Nigerian legal team built for the digital economy.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-grey-200">
              LexSuite Solicitors was founded to solve a growing problem:
              technology founders in Nigeria need legal advice that understands
              both the law and the software powering their products.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story + Why */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-5 rounded-2xl border border-grey-200 bg-white p-10">
              <h2 className="text-3xl font-bold text-navy">Our story</h2>
              <p className="text-base leading-7 text-grey-600">
                LexSuite began as a practice for founders, operators and legal
                teams who were building AI products, fintech services and SaaS
                platforms in Nigeria. We saw the same legal gaps repeat:
                unregistered companies, missing IP assignments, NDPA violations
                and AI governance blind spots.
              </p>
              <p className="text-base leading-7 text-grey-600">
                Today, we work with startups, fintechs and corporate teams to
                create compliance-ready businesses that are protected from the
                earliest stage of product development.
              </p>
            </div>
            <div className="space-y-5 rounded-2xl border border-grey-200 bg-white p-10">
              <h2 className="text-3xl font-bold text-navy">Why LexSuite</h2>
              <p className="text-base leading-7 text-grey-600">
                We are a team of solicitors, corporate advisors, and
                technology-minded legal strategists. Our advice is practical,
                not academic — designed for founders who need legal certainty
                without slowing down product delivery.
              </p>
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#07101c]">
                Book a discovery call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-off-white py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-gold">Brand pillars</p>
            <h2 className="mt-4 text-3xl font-bold text-navy">Principles that guide our work</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-grey-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-gold">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/5">
                  <pillar.icon size={22} className="text-gold" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-navy">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-grey-600">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-16">
        <TeamGrid />
      </section>

      {/* Accreditations */}
      <section className="bg-off-white py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Award,
                title: "Nigerian Bar Association",
                detail: "Solicitor registration and professional accountability.",
              },
              {
                icon: Shield,
                title: "CAC Accredited",
                detail: "Corporate compliance and company formation expertise.",
              },
              {
                icon: Scale,
                title: "NDPA Compliance Certified",
                detail: "Specialist support for data protection and AI governance.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-grey-200 bg-white p-8 shadow-sm">
                <item.icon size={28} className="text-gold" />
                <p className="mt-4 text-sm uppercase tracking-[0.35em] text-gold">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-grey-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
