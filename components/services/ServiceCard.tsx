import Link from "next/link";
import type { LucideIcon } from "lucide-react";

export function ServiceCard({
  title,
  description,
  href,
  icon: Icon,
}: {
  title: string;
  description: string;
  href: string;
  icon?: LucideIcon;
}) {
  return (
    <article className="group rounded-2xl border border-grey-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-gold/80 hover:shadow-gold">
      {Icon && (
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/5">
          <Icon size={22} className="text-gold" />
        </div>
      )}
      <h3 className="text-xl font-semibold text-navy transition group-hover:text-gold">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-grey-600">{description}</p>
      <Link
        href={href}
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold transition hover:gap-3">
        Learn more →
      </Link>
    </article>
  );
}
