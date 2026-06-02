import { ServiceDetailHero, ServiceDetailSection, ServiceDetailGrid, ServiceDetailFeatureBlock, ServiceDetailBullets, ServiceDetailPricing, ServiceDetailConnector } from "../../../components/services/ServiceDetailLayout";

export const metadata = {
  title: "NDPA Data Privacy Compliance | LexSuite",
  description:
    "NDPA-compliant privacy audits, DPIAs, breach response and NDPC registration advisory for Nigerian businesses.",
};

export default function DataPrivacyPage() {
  return (
    <main>
      <ServiceDetailHero
        label="NDPA 2023 Data Privacy Compliance"
        title="NDPA compliance is not optional. We make it simple."
        subtitle="The NDPA penalties are real and enforcement is accelerating. We help Nigerian companies document lawful processing, assess risk, and respond to breaches."
      />

      <ServiceDetailConnector />

      <ServiceDetailSection className="bg-white">
        <ServiceDetailGrid>
          <ServiceDetailFeatureBlock title="The problem">
            <p>
              Many businesses collect personal data without a lawful basis or
              documented policies, leaving them exposed to fines, reputational
              damage and compliance gaps.
            </p>
            <div className="mt-6 rounded-2xl bg-gold/5 p-6 text-grey-700 ring-1 ring-gold/10">
              <p className="font-bold text-navy">Privacy gaps are business risks.</p>
              <p className="mt-1">Breaches and non-compliance can damage trust and slow growth.</p>
            </div>
          </ServiceDetailFeatureBlock>

          <ServiceDetailFeatureBlock title="Who this is for" accent>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                <span>SaaS businesses collecting user data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                <span>E-commerce and fintech platforms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                <span>Any Nigerian company processing customer or employee data</span>
              </li>
            </ul>
            <div className="mt-8 rounded-2xl bg-white/10 p-5 text-sm text-grey-200">
              <p className="font-bold text-gold">Essential for growth</p>
              <p className="mt-1">We help you turn privacy compliance into a competitive advantage.</p>
            </div>
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
                "Full NDPA compliance audit",
                "Product-specific privacy policy",
                "Data protection impact assessment (DPIA)",
                "Data processing agreements with vendors",
                "Breach response plan and notification advisory",
                "NDPC registration guidance",
              ]}
              columns={2}
            />
          </div>
        </div>
      </ServiceDetailSection>

      <ServiceDetailSection className="bg-white">
        <ServiceDetailGrid>
          <ServiceDetailFeatureBlock title="What we fix">
            <div className="space-y-5">
              <p>
                Weak or missing privacy documentation, unclear legal basis for
                processing, and untested breach response processes.
              </p>
              <p>
                Our team helps you fix these gaps with NDPA-ready policies,
                impact assessments, and governance frameworks.
              </p>
            </div>
          </ServiceDetailFeatureBlock>

          <ServiceDetailPricing
            price="From ₦400,000 to ₦800,000"
            description="Included in growth packages from ₦750,000; standalone audits also available."
          />
        </ServiceDetailGrid>
      </ServiceDetailSection>
    </main>
  );
}
