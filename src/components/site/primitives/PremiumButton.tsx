import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "outline" | "light";

interface PremiumButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary-glow shadow-[0_8px_24px_-12px_color-mix(in_oklab,var(--primary)_60%,transparent)]",
  ghost: "bg-transparent text-foreground hover:bg-secondary",
  outline:
    "border border-foreground/20 bg-transparent text-foreground hover:border-foreground/40 hover:bg-foreground/5",
  light: "bg-background text-primary hover:bg-background/90",
};

export const PremiumButton = forwardRef<HTMLButtonElement, PremiumButtonProps>(
  ({ variant = "primary", className, children, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0",
          variants[variant],
          className,
        )}
        {...rest}
      >
        {children}
      </button>
    );
  },
);
PremiumButton.displayName = "PremiumButton";
