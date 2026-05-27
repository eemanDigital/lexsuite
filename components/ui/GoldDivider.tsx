export function GoldDivider({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="h-px flex-1 bg-gold-dim" />
      <div className="h-1 w-1 rounded-full bg-gold" />
      <div className="h-px flex-1 bg-gold-dim" />
    </div>
  );
}
