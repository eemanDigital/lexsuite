import { ServiceDetailHero, ServiceDetailSection, ServiceDetailGrid, ServiceDetailFeatureBlock, ServiceDetailBullets, ServiceDetailPricing, ServiceDetailConnector } from "../../../components/services/ServiceDetailLayout";

export const metadata = {
  title: "Fintech & CBN Compliance | ATL",
  description:
    "CBN licensing, AML/KYC design and regulatory mapping for Nigerian fintech and payments platforms.",
};

export default function FintechCompliancePage() {
  return (
    <main>
      <ServiceDetailHero
        label="Fintech Compliance"
        title="Operating without the right CBN license is a criminal offence."
        subtitle="The regulatory landscape for fintech in Nigeria is complex and fast-moving. We help you understand licensing, AML/KYC, and the overlap with AI and data protection obligations."
      />

      <ServiceDetailConnector />

      <ServiceDetailSection className="bg-white">
        <ServiceDetailGrid>
          <ServiceDetailFeatureBlock title="The problem">
            <p>
              Fintech founders often build products before confirming the right
              license, which can expose them to regulatory enforcement and
              costly redesigns.
            </p>
            <div className="mt-6 rounded-2xl bg-gold/5 p-6 text-grey-700 ring-1 ring-gold/10">
              <p className="font-bold text-navy">Licensing exposure is not theoretical.</p>
              <p className="mt-1">CBN and AML obligations affect product design, onboarding, and money movement.</p>
            </div>
          </ServiceDetailFeatureBlock>

          <ServiceDetailFeatureBlock title="Who this is for" accent>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                <span>Payments platforms and digital lenders</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                <span>Wallet providers and neo-bank products</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                <span>Any business using fintech data or payment rails</span>
              </li>
            </ul>
            <div className="mt-8 rounded-2xl bg-white/10 p-5 text-sm text-grey-200">
              <p className="font-bold text-gold">Built for compliance</p>
              <p className="mt-1">We map regulatory obligations so your product roadmap stays aligned.</p>
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
                "CBN regulatory mapping for payment and lending products",
                "Licensing pathway advisory",
                "AML/KYC policy development",
                "Money Laundering Act compliance review",
                "Investment and securities regulatory guidance",
                "Risk mapping for AI and data privacy overlap",
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
                Fintech products that ignore regulatory design risk fines,
                license suspension, and product redesign after launch.
              </p>
              <p>
                Our advisory helps you build a compliance-first architecture with
                a legal guardrail for growth.
              </p>
            </div>
          </ServiceDetailFeatureBlock>

          <ServiceDetailPricing
            price="From ₦600,000 to ₦1,500,000"
            description="Pricing depends on product scope — contact us for a tailored assessment."
          />
        </ServiceDetailGrid>
      </ServiceDetailSection>
    </main>
  );
}
