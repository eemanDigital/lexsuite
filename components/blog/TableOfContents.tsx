"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function TableOfContents({
  toc,
}: {
  toc: { id: string; text: string; level: number }[];
}) {
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!toc || toc.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -70% 0px", threshold: 0 },
    );

    toc.forEach((t) => {
      const el = document.getElementById(t.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [toc]);

  if (!toc || toc.length === 0) return null;
  return (
    <>
      <div className="xl:hidden mb-4">
        <button
          onClick={() => setOpen((s) => !s)}
          className="rounded-lg border border-grey-200 bg-white px-4 py-2 text-sm font-medium">
          {open ? "Hide contents" : "Show contents"}
        </button>
      </div>

      <nav
        className={`${open ? "block" : "hidden"} xl:block`}
        aria-label="Table of contents">
        <div className="sticky top-28 max-h-[70vh] overflow-auto rounded-lg border border-grey-200 bg-white p-4 text-sm">
          <p className="mb-3 font-semibold text-navy">On this page</p>
          <ul className="space-y-2">
            {toc.map((item) => (
              <li
                key={item.id}
                style={{ marginLeft: `${(item.level - 1) * 12}px` }}>
                <a
                  href={`#${item.id}`}
                  className={`block text-grey-700 hover:text-navy ${active === item.id ? "font-semibold text-navy" : ""}`}>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
