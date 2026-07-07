import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
];

interface LanguageMenuProps {
  /** Open the list upward (for placements near the bottom of the screen). */
  dropUp?: boolean;
}

/** Hand-rolled locale dropdown — keeps the current page when switching. */
export default function LanguageMenu({ dropUp = false }: LanguageMenuProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const current = LANGUAGES.find((l) => l.code === router.locale) ?? LANGUAGES[0];

  return (
    <div ref={ref} className="relative inline-block text-base normal-case">
      <button
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="btn btn-pop !py-1.5 !px-4"
      >
        {current.label}
      </button>
      {open && (
        <ul
          role="listbox"
          className={`absolute left-0 z-50 w-36 overflow-hidden py-1 shadow-xl ${
            dropUp ? "bottom-full mb-2" : "top-full mt-2"
          }`}
          style={{
            background: "var(--canvas)",
            border: "1px solid var(--surface-border)",
            borderRadius: "var(--radius)",
          }}
        >
          {LANGUAGES.map((lng) => (
            <li key={lng.code}>
              <button
                role="option"
                aria-selected={lng.code === router.locale}
                className="w-full px-4 py-2 text-left hover:text-accent"
                onClick={() => {
                  setOpen(false);
                  void router.push(router.asPath, undefined, { locale: lng.code });
                }}
              >
                {lng.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
