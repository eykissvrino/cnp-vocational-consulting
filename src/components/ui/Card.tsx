import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  topBorderColor?: string;
}

export default function Card({
  children,
  className = "",
  topBorderColor,
}: CardProps) {
  return (
    <div
      className={`bg-white border border-border rounded-xl hover:shadow-lg transition-shadow duration-300 overflow-hidden ${className}`}
      style={topBorderColor ? { borderTop: `3px solid ${topBorderColor}` } : undefined}
    >
      {children}
    </div>
  );
}
