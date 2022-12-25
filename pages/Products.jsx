import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ContactCard from "../components/ContactCard";
import GeneralBanner from "../components/GeneralBanner";
import ProductsCard from "../components/ProductsCard";

const Products = () => {
  const { t } = useTranslation();
  const { locale } = useRouter();
  const jsonData = require(`../public/locales/${locale}/common.json`);
  const [language, setLanguage] = useState(locale);
  // console.log(jsonData, "資料");
  console.log(locale, "目前語言");

  useEffect(() => {
    setLanguage(locale);
  }, [locale]);

  return (
    <div className="flex flex-col items-center">
      <GeneralBanner
        title={t("ProductsPage.BannerTitle")}
        text={t("ProductsPage.BannerText")}
      />
      <div className="w-full xl:w-4/5 p-8 bg-[#f1f2f4] dark:bg-[#121318] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {jsonData.ProductsPage.Parts.map((item) => (
          <ProductsCard key={item} parts={item} />
        ))}
      </div>

      <ContactCard />
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      // Will be passed to the page component as props
    },
  };
}
export default Products;
