import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
];

/** Hand-rolled locale dropdown — keeps the current page when switching. */
export default function LanguageMenu() {
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
    <div ref={ref} className="relative text-base normal-case">
      <button
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="btn btn-pop !py-1.5 !px-4"
      >
        {current.label}
      </button>
      {open && (
        <ul role="listbox" className="glass absolute right-0 mt-2 w-32 overflow-hidden py-1 z-50">
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
