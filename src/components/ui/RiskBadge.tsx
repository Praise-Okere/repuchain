import { cn } from "@/lib/utils";
import { ShieldCheck, ShieldAlert, ShieldX } from "lucide-react";

interface RiskBadgeProps {
  level: "trusted" | "moderate" | "high-risk";
  size?: "sm" | "md" | "lg";
}

export const RiskBadge = ({ level, size = "md" }: RiskBadgeProps) => {
  const config = {
    "trusted": {
      label: "Trusted",
      color: "text-[var(--color-accent-teal)]",
      bg: "bg-[var(--color-accent-teal)]/10",
      border: "border-[var(--color-accent-teal)]/20",
      icon: <ShieldCheck className="w-full h-full" />,
    },
    "moderate": {
      label: "Moderate",
      color: "text-[var(--color-accent-amber)]",
      bg: "bg-[var(--color-accent-amber)]/10",
      border: "border-[var(--color-accent-amber)]/20",
      icon: <ShieldAlert className="w-full h-full" />,
    },
    "high-risk": {
      label: "High Risk",
      color: "text-[var(--color-accent-red)]",
      bg: "bg-[var(--color-accent-red)]/10",
      border: "border-[var(--color-accent-red)]/20",
      icon: <ShieldX className="w-full h-full" />,
    },
  };

  const current = config[level];

  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs gap-1 h-6",
    md: "px-3 py-1 text-sm gap-1.5 h-8",
    lg: "px-4 py-2 text-base gap-2 h-10",
  };

  const iconSizes = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  return (
    <div className={cn(
      "flex items-center rounded-full border font-medium tracking-wide border-solid backdrop-blur-sm",
      current.color,
      current.bg,
      current.border,
      sizeClasses[size]
    )}>
      <span className={iconSizes[size]}>{current.icon}</span>
      <span className="font-display font-semibold uppercase">{current.label}</span>
    </div>
  );
};
