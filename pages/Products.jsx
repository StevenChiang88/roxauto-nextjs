import React from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ContactCard from "../components/ContactCard";
import GeneralBanner from "../components/GeneralBanner";
import ProductsCard from "../components/ProductsCard";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import { List, ListItem } from "@chakra-ui/layout";

const Products = () => {
  const { t } = useTranslation();
  const { locale } = useRouter();
  const jsonData = require(`../public/locales/${locale}/common.json`);

  return (
    <div className="flex flex-col items-center">
      <GeneralBanner
        title={t("ProductsPage.BannerTitle")}
        text={t("ProductsPage.BannerText")}
      />
      <div className="w-full p-8 bg-[#f1f2f4] dark:bg-[#121318] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        {jsonData.ProductsPage.PartsItem.map((item) => (
          <ProductsCard
            key={item.name}
            parts={item.name}
            picname={item.english}
          />
        ))}
      </div>
      <div className="w-full p-8 bg-[#f1f2f4] dark:bg-[#121318]">
        <Tabs>
          <div className="overflow-x-auto">
            <TabList>
              {jsonData.ProductsPage.PartsItem.map((item) => (
                <Tab key={item.name}>
                  <h3 className="w-[150px] font-semibold">{item.name}</h3>
                </Tab>
              ))}
            </TabList>
          </div>

          <TabPanels>
            {jsonData.ProductsPage.PartsItem.map((item) => (
              <TabPanel key={item}>
                <List className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                  {item.Parts.map((item) => (
                    <ListItem className="py-4" key={item} borderBottom="1px">
                      <h4 className="font-semibold">{item}</h4>
                      <h4>ads/asda/xzc</h4>
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
export default Products;
