import React from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ContactCard from "../components/ContactCard";

const Products = () => {
  const { t } = useTranslation();
  const { locale } = useRouter();

  return (
    <div>
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
export default Products;
