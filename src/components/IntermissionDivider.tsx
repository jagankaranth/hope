export function IntermissionDivider({ label }: { label: string }) {
  return (
    <div className="relative flex items-center justify-center py-12">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/50 to-gold/30" />
      <div className="px-6 flex items-center gap-3">
        <span className="text-gold text-xl">❋</span>
        <span className="font-poster tracking-[0.4em] text-gold text-sm md:text-base">{label}</span>
        <span className="text-gold text-xl">❋</span>
      </div>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gold/50 to-gold/30" />
    </div>
  );
}
