import { ServiceDetailHero, ServiceDetailSection, ServiceDetailGrid, ServiceDetailFeatureBlock, ServiceDetailBullets, ServiceDetailPricing, ServiceDetailConnector } from "../../../components/services/ServiceDetailLayout";

export const metadata = {
  title: "CAC Registration & Corporate Structuring | ATL",
  description:
    "Fast CAC registration and founder-friendly governance for Nigerian digital businesses.",
};

export default function CorporatePage() {
  return (
    <main>
      <ServiceDetailHero
        label="Corporate Structuring"
        title="Legally incorporated in 15 business days."
        subtitle="Founders who build without legal foundations often face funding delays, ownership disputes and regulatory gaps. We deliver corporate structure that supports fast growth."
      />

      <ServiceDetailConnector />

      <ServiceDetailSection className="bg-white">
        <ServiceDetailGrid>
          <ServiceDetailFeatureBlock title="The problem">
            <p>
              Companies built without a formal entity, investor-ready governance
              and founder agreements are vulnerable to co-founder conflict,
              unregistered IP, and stalled fundraising.
            </p>
            <div className="mt-6 rounded-2xl bg-gold/5 p-6 text-grey-700 ring-1 ring-gold/10">
              <p className="font-bold text-navy">Delay-proof your launch.</p>
              <p className="mt-1">Startups without CAC or governance documents miss investor windows and lose negotiating leverage.</p>
            </div>
            <div className="mt-4 rounded-2xl bg-gold/5 p-6 text-grey-700 ring-1 ring-gold/10">
              <p className="font-bold text-navy">Protect founder equity.</p>
              <p className="mt-1">Founder agreements prevent co-founder disputes and preserve long-term ownership clarity.</p>
            </div>
          </ServiceDetailFeatureBlock>

          <ServiceDetailFeatureBlock title="Who this is for" accent>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                <span>Idea-stage founders who need legal launch support</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                <span>Freelancers and consultants incorporating as a company</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                <span>E-commerce and SaaS teams requiring compliant entity setup</span>
              </li>
            </ul>
            <div className="mt-8 rounded-2xl bg-white/10 p-5 text-sm text-grey-200">
              <p className="font-bold text-gold">What you get</p>
              <p className="mt-1">Fast CAC registration, governance documents, and founder protections.</p>
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
                "Company registration with CAC",
                "Memorandum & Articles of Association",
                "Founders' agreement with equity and exit terms",
                "NDPA-compliant privacy policy",
                "Terms of service tailored to your product",
                "Post-incorporation compliance checklist",
              ]}
              columns={2}
            />
          </div>
        </div>
      </ServiceDetailSection>

      <ServiceDetailSection className="bg-white">
        <ServiceDetailGrid>
          <ServiceDetailFeatureBlock title="Fast facts">
            <div className="space-y-5">
              <div>
                <p className="font-bold text-navy text-lg">15 business days</p>
                <p className="text-grey-600">Typical turnaround for corporate registration and documents.</p>
              </div>
              <div>
                <p className="font-bold text-navy text-lg">100% founder ownership</p>
                <p className="text-grey-600">We draft agreements that preserve control and investor trust.</p>
              </div>
              <div>
                <p className="font-bold text-navy text-lg">NDPA-ready</p>
                <p className="text-grey-600">Privacy documentation is included as part of company setup.</p>
              </div>
            </div>
          </ServiceDetailFeatureBlock>

          <ServiceDetailPricing
            price="Starting at ₦350,000"
            description="Foundation Package — ideal for idea-stage founders who need a solid legal launch."
          />
        </ServiceDetailGrid>
      </ServiceDetailSection>
    </main>
  );
}
