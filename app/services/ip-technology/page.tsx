import { ServiceDetailHero, ServiceDetailSection, ServiceDetailGrid, ServiceDetailFeatureBlock, ServiceDetailBullets, ServiceDetailPricing, ServiceDetailConnector } from "../../../components/services/ServiceDetailLayout";

export const metadata = {
  title: "IP Protection & Technology Law | LexSuite",
  description:
    "Protect your code and brand with IP assignments, trademark advisory and software licensing for Nigerian startups.",
};

export default function IPTechnologyPage() {
  return (
    <main>
      <ServiceDetailHero
        label="IP & Technology Law"
        title="Own your code. Protect your brand."
        subtitle="Without written IP assignment and trademark protection, founders risk losing legal control of their software and brand. We secure your most valuable digital assets."
      />

      <ServiceDetailConnector />

      <ServiceDetailSection className="bg-white">
        <ServiceDetailGrid>
          <ServiceDetailFeatureBlock title="The problem">
            <p>
              Freelance developers retain copyright by default, trademarks are
              unenforceable without registration, and unprotected code creates
              ownership disputes that can cripple growth.
            </p>
            <div className="mt-6 rounded-2xl bg-gold/5 p-6 text-grey-700 ring-1 ring-gold/10">
              <p className="font-bold text-navy">Protect the thing investors value most.</p>
              <p className="mt-1">Your IP is the asset behind your product, and it needs legal control.</p>
            </div>
          </ServiceDetailFeatureBlock>

          <ServiceDetailFeatureBlock title="Who this is for" accent>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                <span>Startups with freelance or contractor development history</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                <span>SaaS companies with proprietary code</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                <span>Brands planning trademark registration</span>
              </li>
            </ul>
            <div className="mt-8 rounded-2xl bg-white/10 p-5 text-sm text-grey-200">
              <p className="font-bold text-gold">What we protect</p>
              <p className="mt-1">Code, designs, trademarks and AI-generated IP are all covered.</p>
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
                "IP assignment agreements for developers",
                "Trademark application advisory",
                "Copyright registration guidance",
                "Software license agreements",
                "IP audit for code and brand assets",
                "Enforcement and takedown procedures",
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
                Without proper IP agreements, founders may lose ownership and
                face disputes as they scale.
              </p>
              <p>
                Our work ensures that your software, brand and creative outputs
                remain a business asset.
              </p>
            </div>
          </ServiceDetailFeatureBlock>

          <ServiceDetailPricing
            price="From ₦750,000 to ₦3,000,000"
            description="Packages depend on IP scope — contact us for a tailored quote."
          />
        </ServiceDetailGrid>
      </ServiceDetailSection>
    </main>
  );
}
