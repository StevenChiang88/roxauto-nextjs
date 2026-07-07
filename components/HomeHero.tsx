import { useTranslation } from "next-i18next";
import CtaButton from "./CtaButton";
import Slider from "./Slider";

const HOME_SLIDES = [
  { link: "homepage/roxhomepage01.jpeg", alt: "Rox Auto Parts office" },
  { link: "homepage/roxhomepage02.jpg", alt: "Automotive Parts Associates" },
];

export default function HomeHero() {
  const { t } = useTranslation();
  return (
    <section className="w-full px-4 pt-10 lg:pt-16">
      <div className="glass mx-auto flex max-w-7xl flex-col justify-between gap-10 p-8 lg:flex-row lg:p-14">
        <div className="flex flex-col justify-center gap-4 lg:w-1/2">
          <p className="text-accent text-sm font-bold uppercase tracking-[0.14em]">
            Rox Auto Parts · Since 1976
          </p>
          <h1>
            {t("HomePage.BannerTitle1")} <span className="text-accent">{t("HomePage.BannerTitle2")}</span>
          </h1>
          <p className="text-muted text-lg">{t("HomePage.BannerText1")}</p>
          <p className="text-muted text-lg">{t("HomePage.BannerText3")}</p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row">
            <CtaButton href="/contact">{t("generalButton.Contact")}</CtaButton>
            <CtaButton href="/products" variant="pop-alt">{t("generalButton.Products")}</CtaButton>
          </div>
        </div>
        <div className="w-full self-center lg:w-[45%]">
          <Slider data={HOME_SLIDES} />
        </div>
      </div>
    </section>
  );
}
