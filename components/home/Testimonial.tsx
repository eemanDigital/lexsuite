export function Testimonial({ quote, author, meta }: { quote: string; author: string; meta?: string }) {
  return (
    <blockquote className="mx-auto max-w-3xl">
      <p className="text-xl font-serif leading-relaxed text-navy sm:text-2xl">&ldquo;{quote}&rdquo;</p>
      <footer className="mt-6">
        <p className="font-semibold text-navy">{author}</p>
        {meta ? <p className="mt-1 text-sm text-grey-600">{meta}</p> : null}
      </footer>
    </blockquote>
  );
}
