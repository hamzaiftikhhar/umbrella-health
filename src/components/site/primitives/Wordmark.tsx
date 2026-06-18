import { cn } from "@/lib/utils";

export function Wordmark({ className, light }: { className?: string; light?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
        <path
          d="M16 4c0 0 -7 4 -7 12c0 5 3 8 7 8c4 0 7 -3 7 -8c0 -8 -7 -12 -7 -12Z"
          fill="currentColor"
          className={light ? "text-primary-foreground" : "text-primary"}
        />
        <path
          d="M16 24v4"
          stroke={light ? "currentColor" : "currentColor"}
          className={light ? "text-primary-foreground" : "text-primary"}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span
        className={cn(
          "font-display text-xl font-medium tracking-tight",
          light ? "text-primary-foreground" : "text-primary",
        )}
      >
        Umbrella
      </span>
    </span>
  );
}
