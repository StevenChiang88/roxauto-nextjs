import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "pop" | "pop-alt" | "ghost";

interface CtaButtonProps {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

const VARIANT_CLASS: Record<Variant, string> = {
  pop: "btn-pop",
  "pop-alt": "btn-pop-alt",
  ghost: "btn-ghost",
};

/** Call-to-action link styled as a button (hand-rolled, token-driven). */
export default function CtaButton({ href, variant = "pop", children, className = "" }: CtaButtonProps) {
  return (
    <Link href={href} className={`btn ${VARIANT_CLASS[variant]} ${className}`}>
      {children}
    </Link>
  );
}
