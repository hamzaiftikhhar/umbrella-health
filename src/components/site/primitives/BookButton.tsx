import { ArrowRight } from "lucide-react";
import { BOOKING_URL } from "@/lib/site";
import { PremiumButton } from "./PremiumButton";
import type { ComponentProps, ReactNode } from "react";

interface BookButtonProps extends Omit<ComponentProps<typeof PremiumButton>, "children"> {
  children?: ReactNode;
  showArrow?: boolean;
}

export function BookButton({
  children = "Book appointment",
  showArrow = true,
  ...rest
}: BookButtonProps) {
  return (
    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex">
      <PremiumButton {...rest}>
        {children}
        {showArrow && (
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        )}
      </PremiumButton>
    </a>
  );
}
