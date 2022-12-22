import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
const Navbar = () => {
  const router = useRouter();
  const { locale, push } = useRouter();

  const languageHandler = (language) => {
    language === "en"
      ? router.push("/", undefined, { locale: "en" })
      : router.push("/", undefined, { locale: "es" });
  };
  const { t } = useTranslation();

  return (
    <div className="fixed z-[100] w-full h-20 shadow-lg bg-[#e3e5e7]">
      <div className="flex justify-between items-center w-full h-full px-2">
        <Image
          src="/../public/assets/roxicon.png"
          alt="roxicon"
          width="125"
          height="50"
        />

        <ul className="hidden gap-4 md:flex items-center ">
          <li>
            <Link href="/" locale={locale}>
              {t("navBar.Home")}
            </Link>
          </li>
          <li>
            <Link href="/Brands" locale={locale}>
              {t("navBar.Brands")}
            </Link>
          </li>
          <li>
            <Link href="/Product" locale={locale}>
              {t("navBar.Products")}
            </Link>
          </li>
          <li>
            <Link href="/Contact" locale={locale}>
              {t("navBar.Contact")}
            </Link>
          </li>
          <Menu>
            <MenuButton as={Button}>
              {locale === "en" ? "English" : "Español"}
            </MenuButton>
            <MenuList>
              <MenuItem
                onClick={() => {
                  languageHandler("en");
                }}
              >
                English
              </MenuItem>
              <MenuItem
                onClick={() => {
                  languageHandler("es");
                }}
              >
                Español
              </MenuItem>
            </MenuList>
          </Menu>
        </ul>

        <AiOutlineMenu className="flex md:hidden " />
      </div>
    </div>
  );
};

export default Navbar;

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale)),
//       // Will be passed to the page component as props
//     },
//   };
// }
