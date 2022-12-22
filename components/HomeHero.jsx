import { useTranslation } from "next-i18next";
import React from "react";
import Slider from "./Slider";

const homePageSliderData = [
  { link: "roxhomepage01.jpeg", alt: "rox auto parts office" },
  { link: "roxhomepage02.jpg", alt: "Automotive Parts Associates" },
];

const HomeHero = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full lg:w-4/5 h-screen flex flex-col items-center justify-center">
      <div className="w-full bg-[#f1f2f4] dark:bg-[#121318] p-8 flex justify-between flex-col lg:flex-row">
        <div>
          <h1 className="text-xl lg:text-4xl">{t("HomePage.BannerTitle1")}</h1>
          <h1> {t("HomePage.BannerTitle2")}</h1>
          <h4> {t("HomePage.BannerText1")} </h4>
          <h4> {t("HomePage.BannerText3")} </h4>
        </div>
        <div className="w-full lg:w-[50%] lg:p-10">
          <Slider data={homePageSliderData} />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
