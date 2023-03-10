import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import {
  AiOutlineMenu,
  AiFillFacebook,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";

import { MdModeNight } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";

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
  const [navOpen, setNavOpen] = useState(false);

  //設定darkMode
  const [darkMode, setDarkMode] = useState(false);
  const tailWindModeHandler = () => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  useEffect(() => {
    tailWindModeHandler();
  }, [darkMode]);

  return (
    <div className="sticky top-0 z-[100] w-full h-20 shadow-lg font-semibold text-lg bg-white/75 dark:bg-black/50 uppercase">
      <div className="flex justify-between items-center w-full h-full px-2 ">
        <Link href="/">
          <Image
            src={require("../public/static/images/roxicon.png")}
            alt="roxicon"
            width="125"
            height="50"
          />
        </Link>

        <ul className="hidden gap-4 lg:flex items-center mr-8  ">
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
            <Link href="/Products" locale={locale}>
              {t("navBar.Products")}
            </Link>
          </li>
          <li>
            <Link href="/Contact" locale={locale}>
              {t("navBar.Contact")}
            </Link>
          </li>

          <div
            onClick={() => {
              setDarkMode((prev) => !prev);
            }}
            className="cursor-pointer"
          >
            {!darkMode ? <BsFillSunFill /> : <MdModeNight />}
          </div>
          <div className="text-base">
            <Menu>
              <MenuButton bgColor="#3671E9" as={Button}>
                {locale === "en" ? <span>English</span> : <span>Español</span>}
              </MenuButton>
              <MenuList bgColor="#3671E9" minW="0" w={"90px"}>
                <MenuItem
                  bgColor="#3671E9"
                  onClick={() => {
                    languageHandler("en");
                  }}
                >
                  English
                </MenuItem>
                <MenuItem
                  bgColor="#3671E9"
                  onClick={() => {
                    languageHandler("es");
                  }}
                >
                  Español
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </ul>

        <div
          onClick={() => {
            setNavOpen(true);
          }}
          className="cursor-pointer flex lg:hidden "
        >
          <AiOutlineMenu size={25} />
        </div>
      </div>

      <div
        onClick={() => {
          setNavOpen(false);
        }}
        className={
          navOpen
            ? " lg:hidden fixed top-0 left-0 bg-black/30 w-full h-screen"
            : ""
        }
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={
            navOpen
              ? "fixed top-0 left-0 w-3/4 md:w-[65%] bg-white dark:bg-black shadow-md h-screen p-8 ease-in duration-500"
              : "fixed top-0 left-[-100%] h-screen ease-in duration-500"
          }
        >
          <div>
            <div className="flex justify-between">
              <Image
                src={require("../public/static/images/roxicon.png")}
                alt="roxicon"
                width="100"
                height="50"
                className="w-[100px] h-[50px] md:w-[150px] md:h-[80px]"
              />
              <div className="flex items-center text-base">
                <Menu>
                  <MenuButton bgColor="#3671E9" as={Button}>
                    {locale === "en" ? (
                      <span>English</span>
                    ) : (
                      <span>Español</span>
                    )}
                  </MenuButton>
                  <MenuList bgColor="#3671E9" minW="0" w={"90px"}>
                    <MenuItem
                      bgColor="#3671E9"
                      onClick={() => {
                        languageHandler("en");
                      }}
                    >
                      English
                    </MenuItem>
                    <MenuItem
                      bgColor="#3671E9"
                      onClick={() => {
                        languageHandler("es");
                      }}
                    >
                      Español
                    </MenuItem>
                  </MenuList>
                </Menu>
              </div>
            </div>

            <div className="border-b-2 border-gray-300 my-8">
              <h5 className="py-4 ">Eexperienced and reliable partner</h5>
            </div>
            <ul className="gap-8 flex flex-col items-start  ">
              <li>
                <Link
                  onClick={() => {
                    setNavOpen(false);
                  }}
                  href="/"
                  locale={locale}
                >
                  {t("navBar.Home")}
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setNavOpen(false);
                  }}
                  href="/Brands"
                  locale={locale}
                >
                  {t("navBar.Brands")}
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setNavOpen(false);
                  }}
                  href="/Products"
                  locale={locale}
                >
                  {t("navBar.Products")}
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setNavOpen(false);
                  }}
                  href="/Contact"
                  locale={locale}
                >
                  {t("navBar.Contact")}
                </Link>
              </li>
            </ul>

            <div className="mt-10 flex gap-4 text-3xl">
              <a
                target="blank"
                href="https://www.facebook.com/roxqualityparts/"
              >
                <AiFillFacebook />
              </a>
              <a target="blank" href="mailto:rox@rox.com.tw">
                <AiFillMail />
              </a>
              <a target="blank" href="tel:0227014959">
                <AiFillPhone />
              </a>

              <div
                onClick={() => {
                  setDarkMode((prev) => !prev);
                }}
                className="cursor-pointer"
              >
                {!darkMode ? <BsFillSunFill /> : <MdModeNight />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
