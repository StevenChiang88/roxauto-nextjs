import { useTranslation } from "next-i18next";
import React from "react";
import GeneralButton from "./GeneralButton";
import Slider from "./Slider";

const homePageSliderData = [
  { link: "homepage/roxhomepage01.jpeg", alt: "rox auto parts office" },
  { link: "homepage/roxhomepage02.jpg", alt: "Automotive Parts Associates" },
];

const HomeHero = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full lg:w-4/5 lg:mt-[5rem] bg-[#f1f2f4] dark:bg-[#121318] gap-8 p-14 flex justify-between flex-col lg:flex-row rounded-md">
      <div className="px-4 flex flex-col justify-between">
        <h1>{t("HomePage.BannerTitle1")}</h1>
        <h1> {t("HomePage.BannerTitle2")}</h1>
        <h5> {t("HomePage.BannerText1")} </h5>
        <h5> {t("HomePage.BannerText3")} </h5>
        <div className="flex lg:gap-4 flex-col lg:flex-row">
          <GeneralButton href="/Contact" color="blue" />

          <GeneralButton href="/Products" color="orange" />
        </div>
      </div>
      <div className="w-full lg:w-[45%]">
        <Slider data={homePageSliderData} />
      </div>
    </div>
  );
};

export default HomeHero;
