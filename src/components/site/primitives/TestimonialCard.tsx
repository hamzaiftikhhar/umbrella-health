import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  quote: string;
  rating?: number;
}

export function TestimonialCard({ name, quote, rating = 5 }: TestimonialCardProps) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-border/60 bg-card p-6 shadow-[var(--shadow-card)]">
      <div className="flex gap-0.5 text-primary">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/80">"{quote}"</p>
      <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4">
        <p className="text-sm font-medium text-foreground">{name}</p>
        <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-secondary text-[10px] font-semibold text-primary">
          G
        </span>
      </div>
    </article>
  );
}
