import Image from "next/image";
import { useTranslation } from "next-i18next";

const BRANDS = ["TAIWAN", "TOKAI", "SASAKI", "NISHIOKA"] as const;

export default function BrandsCard() {
  const { t } = useTranslation();
  return (
    <section className="w-full max-w-7xl px-4 py-14">
      <h2 className="my-4 text-center">{t("BrandsBox.BrandsTitle")}</h2>
      <p className="text-muted mx-auto mb-10 max-w-2xl text-center text-lg">{t("BrandsBox.BrandsText")}</p>

      <div className="grid gap-8 md:grid-cols-2">
        {BRANDS.map((brand) => (
          <article key={brand} className="glass glass-hover overflow-hidden">
            <Image
              className="w-full p-3"
              style={{ borderRadius: "calc(var(--radius) + 6px)" }}
              width={1000}
              height={420}
              src={`/static/images/brandspics/${brand}.png`}
              alt={`${brand} auto parts`}
            />
            <div className="p-5 pt-2">
              <h3>{brand === "TAIWAN" ? "Taiwan Manufacturers" : brand}</h3>
              <p className="text-muted mt-2">{t(`BrandsBox.${brand}`)}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
