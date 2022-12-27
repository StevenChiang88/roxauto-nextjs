import { Card } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import React from "react";
import Slider from "./Slider";

const BrandSlider = ({ brandName, SliderData }) => {

  const { t } = useTranslation();
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <Card
          key={brandName}
          className="text-black bg-[#f1f2f4] dark:text-white  dark:bg-[#121318]"
        >
          <Image
            className="w-full h-auto "
            width="1000"
            height="200"
            src={require(`../public/static/images/brandspics/${brandName}.png`)}
            alt={brandName}
          />
          <div className="p-4 ">
            <h2>{brandName}</h2>
            <h5>{t(`BrandsBox.${brandName}`)}</h5>
          </div>
        </Card>
      </div>

      <div className="lg:px-10 ">
        <Slider data={SliderData} />
      </div>
    </div>
  );
};

export default BrandSlider;
