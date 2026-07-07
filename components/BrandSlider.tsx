import Image from "next/image";
import { useTranslation } from "next-i18next";
import Slider, { type SlideItem } from "./Slider";

interface BrandSliderProps {
  brandName: string;
  sliderData: SlideItem[];
}

export default function BrandSlider({ brandName, sliderData }: BrandSliderProps) {
  const { t } = useTranslation();
  return (
    <div className="grid w-full gap-8 md:grid-cols-2">
      <article className="glass overflow-hidden self-start">
        <Image
          className="w-full p-3"
          style={{ borderRadius: "calc(var(--radius) + 6px)" }}
          width={1000}
          height={420}
          src={`/static/images/brandspics/${brandName}.png`}
          alt={`${brandName} auto parts`}
        />
        <div className="p-5 pt-2">
          <h3>{brandName === "TAIWAN" ? "Taiwan Manufacturers" : brandName}</h3>
          <p className="text-muted mt-2">{t(`BrandsBox.${brandName}`)}</p>
        </div>
      </article>
      <div className="min-w-0 w-full self-center lg:px-10">
        <Slider data={sliderData} />
      </div>
    </div>
  );
}
