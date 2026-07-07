/**
 * Hand-crafted glassmorphism backdrop: deep navy canvas with vivid
 * violet/cyan/magenta light blobs, strong enough to visibly diffuse
 * through the glass layers above. Colors live in styles/theme.css.
 */
const BLOBS = [
  { top: "-12%", left: "-10%", size: 700, color: "var(--blob-1)" },
  { top: "15%", left: "65%", size: 760, color: "var(--blob-2)" },
  { top: "48%", left: "10%", size: 640, color: "var(--blob-3)" },
  { top: "72%", left: "60%", size: 620, color: "var(--blob-4)" },
  { top: "92%", left: "20%", size: 520, color: "var(--blob-2)" },
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
            filter: "blur(80px)",
          }}
        />
      ))}
    </div>
  );
}
