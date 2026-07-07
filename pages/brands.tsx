import type { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Seo from "../components/Seo";
import GeneralBanner from "../components/GeneralBanner";
import Tabs, { type TabItem } from "../components/Tabs";
import BrandSlider from "../components/BrandSlider";
import ContactCard from "../components/ContactCard";

const BRAND_NAMES = ["SASAKI", "NISHIOKA", "TOKAI", "TAIWAN"] as const;

export default function Brands() {
  const { t } = useTranslation();

  const tabs: TabItem[] = BRAND_NAMES.map((name) => {
    const parts = t(`BrandsPage.${name}Item`, { returnObjects: true }) as unknown as string[];
    const slides = Array.from({ length: 5 }, (_, i) => ({
      link: `brandspics/${name}/${i + 1}.jpg`,
      alt: `${name} taiwan auto parts ${i + 1}`,
    }));
    return {
      label: name === "TAIWAN" ? "Miscellaneous Taiwan Brands" : name,
      content: (
        <>
          <BrandSlider brandName={name} sliderData={slides} />
          <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {parts.map((item) => (
              <li key={item} className="border-b py-2" style={{ borderColor: "var(--surface-border)" }}>
                {item}
              </li>
            ))}
          </ul>
        </>
      ),
    };
  });

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Seo
        title="Our Brands — SASAKI, NISHIOKA, TOKAI | Rox Auto Parts"
        description={`${t("BrandsPage.BannerText")}`}
      />
      <GeneralBanner title={t("BrandsPage.BannerTitle")} text={t("BrandsPage.BannerText")} />
      <div className="w-full max-w-7xl px-4 py-10">
        <Tabs tabs={tabs} ariaLabel="brand part lists" />
      </div>
      <ContactCard />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale ?? "en")) },
});
