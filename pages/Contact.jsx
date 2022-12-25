import React from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import GeneralBanner from "../components/GeneralBanner";
import { Input, Textarea } from "@chakra-ui/react";

const Products = () => {
  const { t } = useTranslation();
  const { locale } = useRouter();

  return (
    <div className="flex flex-col items-center">
      <GeneralBanner
        title={t("ContactPage.BannerTitle")}
        text={t("ContactPage.BannerText")}
      />

      <div className="w-full lg:w-4/5 bg-[#f1f2f4] dark:bg-[#121318] grid grid-cols-1 md:grid-cols-2 p-8">
        <div className="md:px-6">
          <h2>{t("ContactPage.ContactTitle")}</h2>
          <p>{t("ContactPage.ContactSubTitle")}</p>
          <p>{t("ContactPage.ContactText1")}</p>
          <p>{t("ContactPage.ContactText2")}</p>
          <p>{t("ContactPage.ContactText3")}</p>
        </div>
        <div>
          <form className="flex flex-col gap-4 w-full">
            <Input placeholder={t("ContactPage.ContactForm1")} />
            <Input placeholder={t("ContactPage.ContactForm2")} />
            <Input placeholder={t("ContactPage.ContactForm3")} />
            <Input placeholder={t("ContactPage.ContactForm4")} />
            <Textarea rows="5" placeholder={t("ContactPage.ContactForm5")} />
          </form>
        </div>
      </div>
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
