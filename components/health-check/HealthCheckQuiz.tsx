"use client";

import { useMemo, useState } from "react";

const questions = [
  {
    id: 1,
    text: "Do you use any AI tool to help make or influence decisions about customers, employees, or applicants?",
    cluster: "Algorithmic Bias",
  },
  {
    id: 2,
    text: "Have you audited the data used to train or fine-tune any AI model in your products?",
    cluster: "Training Data",
  },
  {
    id: 3,
    text: "Do your contracts with customers address ownership and disclosure of AI-generated outputs?",
    cluster: "Content Ownership",
  },
  {
    id: 4,
    text: "Do you use any automated monitoring tools for employee productivity or attendance?",
    cluster: "Workplace AI",
  },
  {
    id: 5,
    text: "Has your board or management team reviewed your AI risk exposure in the last 12 months?",
    cluster: "Governance",
  },
  {
    id: 6,
    text: "Do you have a documented process for handling an AI-caused incident?",
    cluster: "Governance",
  },
  {
    id: 7,
    text: "Do any of your AI systems take actions without per-action human approval?",
    cluster: "Agentic AI",
  },
  {
    id: 8,
    text: "Do your Terms of Service address AI-generated content or automated decisions?",
    cluster: "Content Ownership",
  },
  {
    id: 9,
    text: "Have you reviewed your KYC verification stack for vulnerability to AI-generated identity documents?",
    cluster: "Deepfakes",
  },
  {
    id: 10,
    text: "Do you have a Data Protection Impact Assessment (DPIA) for AI systems processing personal data?",
    cluster: "Data Privacy",
  },
  {
    id: 11,
    text: "Are any of your AI training datasets scraped from third-party websites or platforms?",
    cluster: "Training Data",
  },
  {
    id: 12,
    text: "Do you have written policies governing what AI tools employees can use and in what contexts?",
    cluster: "Workplace AI",
  },
  {
    id: 13,
    text: "Do your AI hiring or credit-scoring tools include bias testing or audit mechanisms?",
    cluster: "Algorithmic Bias",
  },
  {
    id: 14,
    text: "Is there a clear human-in-the-loop override for any consequential automated decision in your business?",
    cluster: "Agentic AI",
  },
  {
    id: 15,
    text: "Have any of your vendor agreements for AI tools been reviewed for indemnification and liability clauses?",
    cluster: "Governance",
  },
];

const options = ["Yes", "No", "Not sure"];

const riskLabel = (score: number) => {
  if (score >= 12)
    return {
      label: "Critical",
      color: "text-red-600",
      tone: "Critical exposure requires immediate action.",
    };
  if (score >= 8)
    return {
      label: "High",
      color: "text-amber-600",
      tone: "High risk — act before compliance gaps become incidents.",
    };
  if (score >= 4)
    return {
      label: "Moderate",
      color: "text-yellow-600",
      tone: "Moderate risk — strengthen governance and policies.",
    };
  return {
    label: "Low",
    color: "text-emerald-600",
    tone: "Low risk — maintain control with ongoing monitoring.",
  };
};

export default function HealthCheckQuiz() {
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const clusterScores = useMemo(() => {
    const data: Record<string, number> = {};
    questions.forEach((question) => {
      const answer = answers[question.id];
      const score = answer === "No" || answer === "Not sure" ? 1 : 0;
      data[question.cluster] = (data[question.cluster] ?? 0) + score;
    });
    return data;
  }, [answers]);

  const totalScore = Object.values(clusterScores).reduce(
    (sum, value) => sum + value,
    0,
  );
  const outcome = riskLabel(totalScore);

  return (
    <div className="rounded-3xl bg-white p-10 shadow-sm">
      <div className="space-y-10 lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
        <div className="space-y-8">
          {questions.map((question) => (
            <div
              key={question.id}
              className="rounded-3xl border border-grey-200 bg-grey-100 p-6">
              <p className="font-semibold text-navy">
                {question.id}. {question.text}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {options.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() =>
                      setAnswers((prev) => ({ ...prev, [question.id]: option }))
                    }
                    className={`rounded-full border px-4 py-2 text-sm transition ${answers[question.id] === option ? "border-navy bg-navy text-white" : "border-grey-300 bg-white text-navy hover:border-gold"}`}>
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <aside className="space-y-6 rounded-3xl border border-grey-200 bg-[#081122] p-8 text-white shadow-sm">
          <div className="rounded-3xl bg-[#112240] p-6">
            <p className="text-sm uppercase tracking-[0.35em] text-gold">
              Exposure score
            </p>
            <p className="mt-4 text-6xl font-semibold text-white">
              {totalScore}
            </p>
            <p className={`mt-3 text-xl font-semibold ${outcome.color}`}>
              {outcome.label}
            </p>
            <p className="mt-4 text-sm leading-6 text-grey-300">
              {outcome.tone}
            </p>
          </div>
          <div className="space-y-4">
            {Object.entries(clusterScores).map(([cluster, score]) => (
              <div key={cluster}>
                <div className="flex items-center justify-between text-sm text-grey-300">
                  <span>{cluster}</span>
                  <span>{score}/3</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-white/10">
                  <div
                    className="h-2 rounded-full bg-gold"
                    style={{ width: `${Math.min((score / 3) * 100, 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-3xl bg-white/5 p-6 text-sm leading-6 text-grey-300">
            <p className="font-semibold text-white">Recommendation</p>
            <p className="mt-3">
              {outcome.label === "Low"
                ? "Keep your AI governance active and verify changes with a quarterly review."
                : outcome.label === "Moderate"
                  ? "Strengthen policy and incident response for AI workflows."
                  : "Book a rapid AI legal audit and secure your systems with updated controls."}
            </p>
          </div>
          <a
            href="mailto:hello@lexsuite.com.ng?subject=AI%20Legal%20Health%20Check%20Review"
            className="inline-flex w-full items-center justify-center rounded-full bg-gold px-5 py-3 text-sm font-semibold text-navy transition hover:bg-gold-light">
            Book your review
          </a>
        </aside>
      </div>
    </div>
  );
}
