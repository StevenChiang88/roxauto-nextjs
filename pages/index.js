import { Card } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BrandsCard from "../components/BrandsCard";
import ContactCard from "../components/ContactCard";
import GeneralButton from "../components/GeneralButton";
import HomeHero from "../components/HomeHero";
import Dollar from "../public/assets/icons/Dollar.svg";
import Gears from "../public/assets/icons/Gears.svg";
import Handshake from "../public/assets/icons/handshake.svg";
import Taiwan from "../public/assets/icons/Taiwan.svg";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center">
      <HomeHero />
      <BrandsCard />
      <div className="w-full min-h-screen bg-[#F1F2F4] dark:bg-[#121318] flex justify-center items-center ">
        <div className="w-full flex flex-col lg:flex-row p-8">
          <div className="lg:w-1/3 p-8">
            <p>{t("About.AboutTitle")}</p>
            <h1>{t("About.AboutText1")}</h1>
            <p>{t("About.AboutText2")}</p>
            <GeneralButton href="/products" color="orange" />
          </div>
          <div className="lg:w-2/3 grid md:grid-cols-2 gap-10 ">
            <Card className="flex items-center justify-around lg:max-h-[300px] text-black dark:text-white bg-[#e3e5e7] dark:bg-[#292E34] py-4">
              <Taiwan />
              <h1>{t("About.AboutBoxTitle1")}</h1>
              <p className="p-8">{t("About.AboutBoxText1")}</p>
            </Card>
            <Card className="flex items-center justify-around  lg:max-h-[300px] text-black dark:text-white bg-[#e3e5e7] dark:bg-[#292E34] py-4">
              <Gears />
              <h1>{t("About.AboutBoxTitle2")}</h1>
              <p className="p-8">{t("About.AboutBoxText2")}</p>
            </Card>
            <Card className="flex items-center justify-around  lg:max-h-[300px] text-black dark:text-white bg-[#e3e5e7] dark:bg-[#292E34] py-4 ">
              <Dollar />
              <h1>{t("About.AboutBoxTitle3")}</h1>
              <p className="p-8">{t("About.AboutBoxText3")}</p>
            </Card>
            <Card className="flex items-center justify-around lg:max-h-[300px] text-black dark:text-white bg-[#e3e5e7] dark:bg-[#292E34] py-4">
              <Handshake />
              <h1>{t("About.AboutBoxTitle4")}</h1>
              <p className="p-8">{t("About.AboutBoxText4")}</p>
            </Card>
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
