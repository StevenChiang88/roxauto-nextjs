import type { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Seo from "../components/Seo";
import HomeHero from "../components/HomeHero";
import BrandsCard from "../components/BrandsCard";
import AboutSection from "../components/AboutSection";
import ContactCard from "../components/ContactCard";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center">
      <Seo
        title="Rox Auto Parts | Taiwan Automotive Parts Exporter Since 1976"
        description={`${t("HomePage.BannerText1")}`}
      />
      <HomeHero />
      <BrandsCard />
      <AboutSection />
      <ContactCard />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale ?? "en")) },
});
