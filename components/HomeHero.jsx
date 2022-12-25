import { useTranslation } from "next-i18next";
import React from "react";
import GeneralButton from "./GeneralButton";
import Slider from "./Slider";

const homePageSliderData = [
  { link: "roxhomepage01.jpeg", alt: "rox auto parts office" },
  { link: "roxhomepage02.jpg", alt: "Automotive Parts Associates" },
];

const HomeHero = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full lg:w-4/5 lg:mt-[5rem] bg-[#f1f2f4] dark:bg-[#121318] gap-8 p-14 flex justify-between flex-col lg:flex-row rounded-md">
      <div>
        <h1 className="text-xl lg:text-4xl">{t("HomePage.BannerTitle1")}</h1>
        <h1> {t("HomePage.BannerTitle2")}</h1>
        <h4> {t("HomePage.BannerText1")} </h4>
        <h4> {t("HomePage.BannerText3")} </h4>
        <div className="flex lg:gap-4 flex-col lg:flex-row">
          <GeneralButton href="/Contact" color="blue" />

          <GeneralButton href="/products" color="orange" />
        </div>
      </div>
      <div className="w-full lg:w-[40%]">
        <Slider data={homePageSliderData} />
      </div>
    </div>
  );
};

export default HomeHero;
