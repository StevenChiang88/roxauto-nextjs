import Image from "next/image";
import { useTranslation } from "next-i18next";
import CtaButton from "./CtaButton";

const ICONS = ["Taiwan", "Gear", "Dollar", "Cooperate"] as const;

export default function AboutSection() {
  const { t } = useTranslation();
  return (
    <section className="w-full px-4 py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row">
        <div className="flex flex-col justify-center gap-4 lg:w-1/3">
          <h2>{t("About.AboutTitle")}</h2>
          <p className="text-muted">{t("About.AboutText1")}</p>
          <p className="text-muted">{t("About.AboutText2")}</p>
          <div>
            <CtaButton href="/products">{t("generalButton.Products")}</CtaButton>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:w-2/3">
          {ICONS.map((icon, index) => (
            <article key={icon} className="glass glass-hover flex flex-col items-center gap-2 p-6 text-center">
              <Image src={`/static/images/icons/${icon}.png`} alt="" aria-hidden width={50} height={50} />
              <h4 className="py-1">{t(`About.AboutBoxTitle${index + 1}`)}</h4>
              <p className="text-muted">{t(`About.AboutBoxText${index + 1}`)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
