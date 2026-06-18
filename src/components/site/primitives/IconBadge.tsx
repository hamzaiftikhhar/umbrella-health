import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function IconBadge({
  icon: Icon,
  className,
  size = "md",
}: {
  icon: LucideIcon;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizeMap = {
    sm: "h-9 w-9",
    md: "h-12 w-12",
    lg: "h-16 w-16",
  };
  const iconSize = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-7 w-7",
  };
  return (
    <span
      className={cn(
        "inline-grid place-items-center rounded-full bg-[color:var(--mint)] text-primary",
        sizeMap[size],
        className,
      )}
    >
      <Icon className={iconSize[size]} />
    </span>
  );
}
