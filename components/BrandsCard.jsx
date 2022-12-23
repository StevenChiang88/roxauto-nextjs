import { Card } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import React from "react";

const BrandsCardData = [
  {
    BrandName: "Taiwan",
    BrandText: "BrandsBox.Taiwan",
  },

  {
    BrandName: "TOKAI",
    BrandText: "BrandsBox.TOKAI",
  },
  {
    BrandName: "SASAKI",
    BrandText: "BrandsBox.SASAKI",
  },
  {
    BrandName: "NISHIOKA",
    BrandText: "BrandsBox.NISHIOKA",
  },
];

const BrandsCard = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full lg:w-4/5 p-8 flex justify-between flex-col ">
      <h1>{t("BrandsBox.BrandsTitle")}</h1>
      <h3>{t("BrandsBox.BrandsText")}</h3>

      <div className="grid md:grid-cols-2 gap-8">
        {BrandsCardData.map((item) => (
          <Card
            key={item.BrandName}
            className="text-black bg-[#F1F2F4] dark:text-white  dark:bg-[#121318]"
          >
            <Image
              className="w-full h-auto "
              width="1000"
              height="200"
              src={`/../public/assets/brandspics/${item.BrandName}.png`}
              alt={item.BrandName}
            />
            <div className="p-4">
              <h3 className="font-bold text-2xl tracking-wide">
                {t(item.BrandName)}
              </h3>
              <p>{t(item.BrandText)}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BrandsCard;
