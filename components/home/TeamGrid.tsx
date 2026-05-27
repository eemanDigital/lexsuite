import Image from "next/image";
import Link from "next/link";

const team = [
  { name: "Neil Williamson", role: "Commercial Contracts, AI, Technology Law" },
  { name: "Sasha Bark Jones", role: "Dispute Resolution, Litigation" },
  { name: "Gerard Dempsey", role: "Corporate Law, M&A" },
  { name: "Suzy Giele", role: "Employee Share Schemes, IP" },
];

export function TeamGrid() {
  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-8">
      <div className="mb-10 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-gold">Our Team</p>
        <h2 className="mt-3 text-3xl font-bold text-navy">Our solicitors and support staff</h2>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((t) => (
          <div key={t.name} className="group text-center">
            <div className="mx-auto h-40 w-40 overflow-hidden rounded-full bg-grey-100 transition group-hover:shadow-lg">
              <Image
                src="/lexsuite-logo.png"
                alt={t.name}
                width={160}
                height={160}
                className="h-full w-full object-cover p-6 opacity-60 grayscale transition group-hover:scale-105 group-hover:opacity-100"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-navy underline decoration-transparent transition group-hover:decoration-gold">{t.name}</h3>
            <p className="mt-1 text-sm text-grey-600">{t.role}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/about"
          className="inline-flex rounded-full border border-navy/20 px-6 py-3 text-sm font-semibold text-navy transition hover:bg-navy/5">
          Meet the full team →
        </Link>
      </div>
    </div>
  );
}
