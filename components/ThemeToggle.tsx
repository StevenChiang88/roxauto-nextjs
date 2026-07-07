import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BsFillSunFill } from "react-icons/bs";
import { MdModeNight } from "react-icons/md";

/** Light/dark toggle backed by next-themes (persisted, system-aware). */
export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <span className="w-5" />;

  const isDark = resolvedTheme === "dark";
  return (
    <button
      aria-label="toggle color mode"
      className="cursor-pointer p-1"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <MdModeNight size={20} /> : <BsFillSunFill size={20} />}
    </button>
  );
}
