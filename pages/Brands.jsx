import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import ContactCard from "../components/ContactCard";
import GeneralBanner from "../components/GeneralBanner";
import {
  List,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import BrandSlider from "../components/BrandSlider";

const Brands = () => {
  const { t } = useTranslation();
  const { locale } = useRouter();
  const jsonData = require(`../public/locales/${locale}/common.json`);

  const BrandArray = [
    {
      name: "SASAKI",
      data: [],
      brandparts: jsonData.BrandsPage.SASAKIItem,
    },
    {
      name: "NISHIOKA",
      data: [],
      brandparts: jsonData.BrandsPage.NISHIOKAItem,
    },
    {
      name: "TOKAI",
      data: [],
      brandparts: jsonData.BrandsPage.TOKAIItem,
    },
    {
      name: "TAIWAN",
      data: [],
      brandparts: jsonData.BrandsPage.TAIWANItem,
    },
  ];

  BrandArray.forEach((item) => {
    for (let i = 1; i <= 5; i++) {
      let x = {};
      x.link = `brandspics/${item.name}/${i}.jpg`;
      x.alt = "taiwan auto parts";
      item.data.push(x);
    }
  });

  return (
    <div className="top-[5rem] w-full flex flex-col justify-center items-center">
      <GeneralBanner
        title={t("BrandsPage.BannerTitle")}
        text={t("BrandsPage.BannerText")}
      />
      <div className="w-full lg:w-[90%]">
        <Tabs>
          <TabList className="flex flex-col lg:flex-row border-b-2 border-gray-500">
            <Tab className="font-semibold flex-1 py-4 lg:py-10">SASAKI</Tab>
            <Tab className="font-semibold flex-1 py-4 lg:py-10 ">NISHIOKA</Tab>
            <Tab className="font-semibold flex-1 py-4 lg:py-10">TOKAI</Tab>
            <Tab className="font-semibold flex-1 py-4 lg:py-10">
              Miscellaneous Taiwan Brands
            </Tab>
          </TabList>

          <TabPanels>
            {BrandArray.map((item, index) => (
              <TabPanel key={item.name}>
                <BrandSlider
                  brandName={item.name}
                  SliderData={BrandArray[index].data}
                />
                <List className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-4">
                  {item.brandparts.map((item) => (
                    <ListItem borderBottom="1px" className="py-2 " key={item}>
                      {item}
                    </ListItem>
                  ))}
                </List>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </div>

      <ContactCard />
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

export default Brands;
