import Link from "next/link";
import { ScrollReveal, StaggerReveal, StaggerItem } from "../../components/ui/ScrollReveal";
import { TeamGrid } from "../../components/home/TeamGrid";
import { Award, Shield, Scale, Users, Target } from "lucide-react";

export const metadata = {
  title: "About | ATL Solicitors",
  description:
    "About ATL — a Nigerian legal-tech firm offering AI legal, NDPA compliance, IP protection, and corporate advisory.",
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
            <p className="text-sm uppercase tracking-[0.35em] text-gold">About ATL</p>
            <h1 className="mt-6 text-4xl font-bold sm:text-5xl">
              A Nigerian legal team built for the digital economy.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-grey-200">
              ATL Solicitors was founded to solve a growing problem:
              technology founders in Nigeria need legal advice that understands
              both the law and the software powering their products.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story + Why */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-2">
            <ScrollReveal direction="left">
              <div className="space-y-6 sm:space-y-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy">Our story</h2>
                <div className="space-y-4 sm:space-y-5">
                  <p className="text-base sm:text-lg leading-7 sm:leading-8 text-grey-600">
                    ATL began as a practice for founders, operators and legal
                    teams who were building AI products, fintech services and SaaS
                    platforms in Nigeria. We saw the same legal gaps repeat:
                    unregistered companies, missing IP assignments, NDPA violations
                    and AI governance blind spots.
                  </p>
                  <p className="text-base sm:text-lg leading-7 sm:leading-8 text-grey-600">
                    Today, we work with startups, fintechs and corporate teams to
                    create compliance-ready businesses that are protected from the
                    earliest stage of product development.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="space-y-6 sm:space-y-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy">Why ATL</h2>
                <div className="space-y-4 sm:space-y-5">
                  <p className="text-base sm:text-lg leading-7 sm:leading-8 text-grey-600">
                    We are a team of solicitors, corporate advisors, and
                    technology-minded legal strategists. Our advice is practical,
                    not academic — designed for founders who need legal certainty
                    without slowing down product delivery.
                  </p>
                  <p className="text-base sm:text-lg leading-7 sm:leading-8 text-grey-600">
                    We combine deep regulatory expertise with product thinking to
                    help companies build compliance into their core business logic,
                    not as an afterthought.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex rounded-full bg-navy px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#07101c]">
                  Book a discovery call
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pillars */}
      {/* Pillars / Values */}
      <section className="bg-off-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 sm:mb-20 text-center">
            <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-gold">Our principles</p>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-navy">What guides our work</h2>
          </div>
          <StaggerReveal className="grid gap-12 sm:gap-14 md:grid-cols-2 lg:gap-16">
            {pillars.map((pillar) => (
              <StaggerItem key={pillar.title}>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <pillar.icon size={24} className="text-gold" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-navy">{pillar.title}</h3>
                  </div>
                  <p className="text-base leading-7 text-grey-600 ml-10">{pillar.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Team */}
      <section className="bg-off-white py-20 sm:py-24">
        <ScrollReveal>
          <TeamGrid />
        </ScrollReveal>
      </section>

      {/* Accreditations */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 sm:mb-20 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy">Professional recognition</h2>
          </div>
          <StaggerReveal className="grid gap-12 sm:gap-14 md:grid-cols-2 lg:gap-16">
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
              <StaggerItem key={item.title}>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <item.icon size={24} className="text-gold" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-navy">{item.title}</h3>
                  </div>
                  <p className="text-base leading-7 text-grey-600 ml-10">{item.detail}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>
    </main>
  );
}
