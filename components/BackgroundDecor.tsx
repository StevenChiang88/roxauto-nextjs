/**
 * Hand-crafted glass backdrop: fixed base wash plus large blurred color
 * blobs. Colors come from CSS variables in styles/theme.css, so the
 * same component adapts to light/dark and to each style branch.
 */
const BLOBS = [
  { top: "-10%", left: "-8%", size: 680, color: "var(--blob-1)" },
  { top: "25%", left: "65%", size: 760, color: "var(--blob-2)" },
  { top: "58%", left: "5%", size: 640, color: "var(--blob-3)" },
  { top: "82%", left: "60%", size: 560, color: "var(--blob-4)" },
];

export default function BackgroundDecor() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden" style={{ background: "var(--decor-base)" }}>
      {BLOBS.map((blob, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            top: blob.top,
            left: blob.left,
            width: blob.size,
            height: blob.size,
            background: `radial-gradient(circle, ${blob.color} 0%, transparent 70%)`,
            filter: "blur(70px)",
          }}
        />
      ))}
    </div>
  );
}
