import HealthCheckQuiz from "../../components/health-check/HealthCheckQuiz";

export const metadata = {
  title: "AI Legal Health Check | LexSuite",
  description:
    "Interactive 15-question AI legal health check to assess risk across training data, governance, bias and agentic AI.",
};

export default function HealthCheckPage() {
  return (
    <main className="bg-off-white py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="rounded-3xl bg-white p-10 shadow-sm">
          <p className="text-sm uppercase tracking-[0.35em] text-gold">
            AI Legal Health Check
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-navy">
            Assess your AI legal exposure in 15 questions.
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-grey-600">
            Answer quickly and receive a personalised risk summary focused on AI
            governance, training data, automated decisions, and privacy.
          </p>
        </div>

        <div className="mt-10">
          <HealthCheckQuiz />
        </div>
      </div>
    </main>
  );
}
