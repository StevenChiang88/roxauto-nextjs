import { Card } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import BrandsCard from "../components/BrandsCard";
import ContactCard from "../components/ContactCard";
import GeneralButton from "../components/GeneralButton";
import HomeHero from "../components/HomeHero";

const iconArray = ["Taiwan", "Gear", "Dollar", "Cooperate"];

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center">
      <HomeHero />
      <BrandsCard />
      <div className="w-full min-h-screen bg-[#F1F2F4] dark:bg-[#121318] flex justify-center items-center my-[5rem] ">
        <div className="w-full flex flex-col lg:flex-row p-8">
          <div className="lg:w-1/3 px-8 flex flex-col justify-between">
            <h2>{t("About.AboutTitle")}</h2>
            <h5>{t("About.AboutText1")}</h5>
            <h5>{t("About.AboutText2")}</h5>
            <GeneralButton href="/Products" color="orange" />
          </div>
          <div className="lg:w-2/3 grid md:grid-cols-2 gap-10 ">
            {iconArray.map((item, index) => (
              <Card
                key={item}
                className="flex items-center justify-around lg:max-h-[350px] text-black dark:text-white bg-[#e3e5e7] dark:bg-[#292E34] py-4  hover:bg-gray-400  dark:hover:bg-gray-500"
              >
                <Image
                  src={require(`../public/static/images/icons/${item}.png`)}
                  alt={item}
                  width="50"
                  height="50"
                />
                <h4 className="py-2">{t(`About.AboutBoxTitle${index + 1}`)}</h4>
                <p className="p-8">{t(`About.AboutBoxText${index + 1}`)}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <ContactCard />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      // Will be passed to the page component as props
    },
  };
}
