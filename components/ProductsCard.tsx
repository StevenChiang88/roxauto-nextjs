import Image from "next/image";

interface ProductsCardProps {
  parts: string;
  picname: string;
}

export default function ProductsCard({ parts, picname }: ProductsCardProps) {
  return (
    <article className="glass glass-hover flex flex-col items-center p-4 text-center">
      <Image
        style={{ borderRadius: "var(--radius)" }}
        alt={picname}
        width={280}
        height={280}
        src={`/static/images/Products/${picname}.jpg`}
      />
      <h4 className="py-4">{parts}</h4>
    </article>
  );
}
