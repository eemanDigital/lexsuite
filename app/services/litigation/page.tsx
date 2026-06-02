import { ServiceDetailHero, ServiceDetailSection, ServiceDetailGrid, ServiceDetailFeatureBlock, ServiceDetailBullets, ServiceDetailPricing, ServiceDetailConnector } from "../../../components/services/ServiceDetailLayout";

export const metadata = {
  title: "Litigation & Dispute Resolution | LexSuite Solicitors",
  description:
    "Commercial litigation, dispute resolution and enforcement for technology businesses in Nigeria.",
};

export default function LitigationPage() {
  return (
    <main>
      <ServiceDetailHero
        label="Litigation"
        title="Disputes resolved with commercial precision."
        subtitle="When prevention fails, you need a litigators' team who understands technology and commercial risk. We act swiftly to protect client assets and reputations."
      />

      <ServiceDetailConnector />

      <ServiceDetailSection className="bg-white">
        <ServiceDetailGrid>
          <ServiceDetailFeatureBlock title="The problem">
            <p>
              Disputes involving IP, contracts or payment failures often require
              fast legal action. Technology-specific evidence and preservation
              are critical.
            </p>
          </ServiceDetailFeatureBlock>

          <ServiceDetailFeatureBlock title="Who this is for" accent>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                <span>Startups and platform businesses facing contractual breaches</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                <span>Companies with IP infringement or takedown needs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                <span>Fintechs and payment platforms requiring urgent enforcement</span>
              </li>
            </ul>
          </ServiceDetailFeatureBlock>
        </ServiceDetailGrid>
      </ServiceDetailSection>

      <ServiceDetailSection className="bg-gradient-to-b from-white to-off-white">
        <div className="mx-auto max-w-5xl">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Our Service</span>
          <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">What we deliver</h2>
          <div className="mt-8">
            <ServiceDetailBullets
              items={[
                "Pre-action preservation and evidence gathering",
                "IP enforcement and takedown procedures",
                "Contract enforcement and injunctive relief",
                "Regulatory engagement and defence",
                "Alternative dispute resolution and mediation",
                "Post-judgment enforcement strategies",
              ]}
              columns={2}
            />
          </div>
        </div>
      </ServiceDetailSection>

      <ServiceDetailSection className="bg-white">
        <ServiceDetailGrid>
          <ServiceDetailFeatureBlock title="Why it matters">
            <div className="space-y-5">
              <p>
                Fast, decisive action in disputes can mean the difference between
                a resolved issue and a prolonged crisis.
              </p>
              <p>
                Our team combines litigation experience with technology-sector
                understanding for effective outcomes.
              </p>
            </div>
          </ServiceDetailFeatureBlock>

          <ServiceDetailPricing
            price="Case-dependent"
            description="Commercial pricing depends on case complexity — contact us for an initial assessment."
          />
        </ServiceDetailGrid>
      </ServiceDetailSection>
    </main>
  );
}
