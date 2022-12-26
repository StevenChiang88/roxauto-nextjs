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
      <h1 className="text-center my-4">{t("BrandsBox.BrandsTitle")}</h1>
      <h5 className="text-center">{t("BrandsBox.BrandsText")}</h5>

      <div className="grid md:grid-cols-2 gap-8">
        {BrandsCardData.map((item) => (
          <Card
            key={item.BrandName}
            className="text-black bg-[#f1f2f4] dark:text-white  dark:bg-[#121318]"
          >
            <Image
              className="w-full h-auto "
              width="1000"
              height="200"
              src={`/../public/assets/brandspics/${item.BrandName}.png`}
              alt={item.BrandName}
            />
            <div className="p-4">
              <h2>
                {t(item.BrandName)}
              </h2>
              <h5>{t(item.BrandText)}</h5>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BrandsCard;
