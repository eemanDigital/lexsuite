import { ScrollReveal } from "../../components/ui/ScrollReveal";

export const metadata = {
  title: "Contact | LexSuite Solicitors",
  description:
    "Contact LexSuite Solicitors for CAC registration, NDPA compliance, AI legal audits and corporate advisory.",
};

const services = [
  "Corporate Structuring",
  "IP & Technology Law",
  "NDPA Compliance",
  "Startup Advisory",
  "Fintech Compliance",
  "AI Legal Services",
];

export default function ContactPage() {
  const formAction = process.env.NEXT_PUBLIC_FORMSPREE_ID
    ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`
    : "mailto:hello@lexsuite.com.ng?subject=Contact%20request";

  return (
    <main className="bg-white py-20">
      <section className="mx-auto max-w-4xl px-6 sm:px-8">
        <ScrollReveal>
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-gold">Contact</p>
            <h1 className="mt-4 text-4xl font-bold text-navy">Contact Us</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-grey-600 mx-auto">
              Tell us about your legal challenge and we will respond with a practical
              path to compliance, protection and risk-managed product delivery.
            </p>
          </div>
        </ScrollReveal>

        <form
          action={formAction}
          method="POST"
          className="mt-12 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="block text-sm text-grey-600 mb-1.5">Your name *</label>
              <input
                name="name"
                required
                className="w-full rounded-lg bg-grey-100 px-4 py-3 text-sm text-navy outline-none transition focus:bg-white focus:ring-2 focus:ring-gold/30"
              />
            </div>
            <div>
              <label className="block text-sm text-grey-600 mb-1.5">Your email *</label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-lg bg-grey-100 px-4 py-3 text-sm text-navy outline-none transition focus:bg-white focus:ring-2 focus:ring-gold/30"
              />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="block text-sm text-grey-600 mb-1.5">Your phone *</label>
              <input
                name="phone"
                required
                className="w-full rounded-lg bg-grey-100 px-4 py-3 text-sm text-navy outline-none transition focus:bg-white focus:ring-2 focus:ring-gold/30"
              />
            </div>
            <div>
              <label className="block text-sm text-grey-600 mb-1.5">Subject</label>
              <select
                name="service"
                className="w-full rounded-lg bg-grey-100 px-4 py-3 text-sm text-navy outline-none transition focus:bg-white focus:ring-2 focus:ring-gold/30">
                <option value="">Select a service</option>
                {services.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="block text-sm text-grey-600 mb-1.5">Country/Region</label>
              <input
                name="country"
                className="w-full rounded-lg bg-grey-100 px-4 py-3 text-sm text-navy outline-none transition focus:bg-white focus:ring-2 focus:ring-gold/30"
              />
            </div>
            <div>
              <label className="block text-sm text-grey-600 mb-1.5">Company</label>
              <input
                name="company"
                className="w-full rounded-lg bg-grey-100 px-4 py-3 text-sm text-navy outline-none transition focus:bg-white focus:ring-2 focus:ring-gold/30"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-grey-600 mb-1.5">Message</label>
            <textarea
              name="message"
              rows={4}
              className="w-full rounded-lg bg-grey-100 px-4 py-3 text-sm text-navy outline-none transition focus:bg-white focus:ring-2 focus:ring-gold/30"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-gold px-8 py-3.5 text-sm font-semibold text-navy transition hover:brightness-95">
            Submit
          </button>
        </form>

        <div className="mt-12 text-center">
          <p className="text-sm text-grey-500">
            Or reach us directly at{' '}
            <a href="mailto:hello@lexsuite.com.ng" className="text-gold font-semibold hover:underline">
              hello@lexsuite.com.ng
            </a>
            {' '}·{' '}
            <a href="tel:+2348090000000" className="text-gold font-semibold hover:underline">
              +234 809 000 0000
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
