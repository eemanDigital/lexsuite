import { ServiceDetailHero, ServiceDetailSection, ServiceDetailGrid, ServiceDetailFeatureBlock, ServiceDetailBullets, ServiceDetailPricing, ServiceDetailConnector } from "../../../components/services/ServiceDetailLayout";

export const metadata = {
  title: "Startup Structuring & Investor Readiness | ATL",
  description:
    "Cap table modelling, shareholders agreements and investor-ready legal packaging for Nigerian startups.",
};

export default function StartupAdvisoryPage() {
  return (
    <main>
      <ServiceDetailHero
        label="Startup Advisory"
        title="Build to be fundable from day one."
        subtitle="Investors expect legal readiness before they write the first cheque. We help founders build the structures, documents and disclosures that make due diligence smooth."
      />

      <ServiceDetailConnector />

      <ServiceDetailSection className="bg-white">
        <ServiceDetailGrid>
          <ServiceDetailFeatureBlock title="The problem">
            <p>
              Startups often enter fundraising with incomplete legal packaging,
              which delays deals, forces last-minute renegotiation and weakens
              valuation.
            </p>
          </ServiceDetailFeatureBlock>

          <ServiceDetailFeatureBlock title="Who this is for" accent>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                <span>Seed-stage founders preparing to pitch investors</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                <span>Companies 3-6 months from fundraise</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                <span>Teams building a scalable shareholder structure</span>
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
                "Shareholders' agreement with investor protections",
                "Cap table modelling for multiple rounds",
                "ESOP design and documentation",
                "Due diligence data room setup",
                "Term sheet review for up to three rounds",
                "Startup Act advisory for eligibility and benefits",
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
                Investor-ready legal packaging signals professionalism and
                reduces friction during fundraising.
              </p>
              <p>
                Our work ensures your cap table, governance and disclosures
                meet the standards institutional investors expect.
              </p>
            </div>
          </ServiceDetailFeatureBlock>

          <ServiceDetailPricing
            price="From ₦1,500,000"
            description="Investor-Ready package — designed for startups preparing for fundraising and diligence."
          />
        </ServiceDetailGrid>
      </ServiceDetailSection>
    </main>
  );
}
