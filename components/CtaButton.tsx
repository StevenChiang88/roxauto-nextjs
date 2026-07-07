import Link from "next/link";
import type { ReactNode } from "react";

interface CtaButtonProps {
  href: string;
  variant?: "pop" | "ghost";
  children: ReactNode;
  className?: string;
}

/** Call-to-action link styled as a button (hand-rolled, token-driven). */
export default function CtaButton({ href, variant = "pop", children, className = "" }: CtaButtonProps) {
  return (
    <Link href={href} className={`btn ${variant === "pop" ? "btn-pop" : "btn-ghost"} ${className}`}>
      {children}
    </Link>
  );
}
