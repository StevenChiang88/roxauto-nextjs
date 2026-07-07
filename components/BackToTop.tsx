import { useEffect, useState } from "react";
import { BiArrowToTop } from "react-icons/bi";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      aria-label="back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="btn btn-pop fixed right-5 bottom-5 z-[100] !px-3 !py-3"
    >
      <BiArrowToTop size={22} />
    </button>
  );
}
