import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import ContactCard from "../components/ContactCard";
import GeneralBanner from "../components/GeneralBanner";
const Brands = () => {
  const { t } = useTranslation();
  const { locale } = useRouter();

  return (
    <div className="top-[5rem] w-full flex flex-col justify-center">
      <GeneralBanner/>
    <ContactCard/>
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

export default Brands;
