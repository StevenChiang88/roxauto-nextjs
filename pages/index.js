import { Card } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BrandsCard from "../components/BrandsCard";
import ContactCard from "../components/ContactCard";
import GeneralButton from "../components/GeneralButton";
import HomeHero from "../components/HomeHero";
// import Dollar from "../public/static/images/icons/Dollar.svg";
// import Gears from "../public/static/images/icons/Gears.svg";
// import Handshake from "../public/static/images/icons/handshake.svg";
// import Taiwan from "../public/static/images/icons/Taiwan.svg";


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
            <GeneralButton href="/products" color="orange" />
          </div>
          <div className="lg:w-2/3 grid md:grid-cols-2 gap-10 ">
            <Card className="flex items-center justify-around lg:max-h-[350px] text-black dark:text-white bg-[#e3e5e7] dark:bg-[#292E34] py-4  hover:bg-gray-400  dark:hover:bg-gray-500">
              <image  src="../public/static/images/icons/compass-regular.svg" alt="Logo"/>
              {/* <Taiwan /> */}
              <h3 className="py-2">{t("About.AboutBoxTitle1")}</h3>
              <p className="p-8">{t("About.AboutBoxText1")}</p>
            </Card>
            <Card className="flex items-center justify-around  lg:max-h-[350px] text-black dark:text-white bg-[#e3e5e7] dark:bg-[#292E34] py-4  hover:bg-gray-400  dark:hover:bg-gray-500">
              {/* <Gears /> */}
              <h3 className="py-2  text-center">{t("About.AboutBoxTitle2")}</h3>
              <p className="p-8">{t("About.AboutBoxText2")}</p>
            </Card>
            <Card className="flex items-center justify-around  lg:max-h-[350px] text-black dark:text-white bg-[#e3e5e7] dark:bg-[#292E34] py-4  hover:bg-gray-400  dark:hover:bg-gray-500">
              {/* <Dollar /> */}
              <h3 className="py-2">{t("About.AboutBoxTitle3")}</h3>
              <p className="p-8">{t("About.AboutBoxText3")}</p>
            </Card>
            <Card className="flex items-center justify-around lg:max-h-[350px] text-black dark:text-white bg-[#e3e5e7] dark:bg-[#292E34] py-4  hover:bg-gray-400  dark:hover:bg-gray-500">
              {/* <Handshake /> */}
              <h3 className="py-2  text-center" >{t("About.AboutBoxTitle4")}</h3>
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
