"use client";

import { useEffect, useRef, useState } from "react";

export function AnimatedCounter({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 1200;
          const step = Math.max(1, Math.round(value / (duration / 16)));
          const ticker = window.setInterval(() => {
            start += step;
            if (start >= value) {
              setCount(value);
              window.clearInterval(ticker);
            } else {
              setCount(start);
            }
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div
      ref={ref}
      className="rounded-3xl border border-white/15 bg-[#0f1d34] p-6 text-center">
      <p className="text-4xl font-semibold text-gold">
        {count.toLocaleString()}
        {suffix || ""}
      </p>
      <p className="mt-3 text-sm leading-6 text-grey-300">{label}</p>
    </div>
  );
}
