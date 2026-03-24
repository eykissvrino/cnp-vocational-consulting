import { type ReactNode } from "react";

type BadgeVariant = "primary" | "green" | "navy";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  primary: "bg-primary-bg text-primary border border-primary/20",
  green: "bg-green/10 text-green border border-green/20",
  navy: "bg-navy/10 text-navy border border-navy/20",
};

export default function Badge({
  children,
  variant = "primary",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
