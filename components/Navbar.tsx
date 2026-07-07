import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { AiOutlineMenu, AiOutlineClose, AiFillFacebook, AiFillMail, AiFillPhone } from "react-icons/ai";
import LanguageMenu from "./LanguageMenu";
import ThemeToggle from "./ThemeToggle";
import { CONTACT_EMAIL, FACEBOOK_URL } from "../lib/site";

const NAV_ITEMS = [
  { href: "/", key: "navBar.Home" },
  { href: "/brands", key: "navBar.Brands" },
  { href: "/products", key: "navBar.Products" },
  { href: "/contact", key: "navBar.Contact" },
];

export default function Navbar() {
  const { t } = useTranslation();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="nav-glass sticky top-0 z-[100] w-full">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        <Link href="/" aria-label="Rox Auto Parts home">
          <Image src="/static/images/roxicon.png" alt="Rox Auto Parts logo" width={125} height={50} priority />
        </Link>

        <nav className="hidden items-center gap-6 font-semibold lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-accent transition-colors duration-200">
              {t(item.key)}
            </Link>
          ))}
          <ThemeToggle />
          <LanguageMenu />
        </nav>

        <button
          aria-label="open menu"
          onClick={() => setNavOpen(true)}
          className="cursor-pointer lg:hidden"
        >
          <AiOutlineMenu size={25} />
        </button>
      </div>

      {navOpen && (
        <div className="fixed inset-0 bg-black/40 lg:hidden" onClick={() => setNavOpen(false)}>
          <div
            onClick={(e) => e.stopPropagation()}
            className="glass fixed left-0 top-0 h-screen w-3/4 max-w-sm !rounded-none p-8"
            style={{ backdropFilter: "blur(24px)" }}
          >
            <div className="flex items-center justify-between">
              <Image src="/static/images/roxicon.png" alt="Rox Auto Parts logo" width={100} height={40} />
              <button aria-label="close menu" onClick={() => setNavOpen(false)}>
                <AiOutlineClose size={22} />
              </button>
            </div>

            <nav className="mt-10 flex flex-col gap-6 text-lg font-semibold">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setNavOpen(false)}
                  className="hover:text-accent transition-colors duration-200"
                >
                  {t(item.key)}
                </Link>
              ))}
            </nav>

            <div className="mt-10 flex items-center gap-4 text-2xl">
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <AiFillFacebook />
              </a>
              <a href={`mailto:${CONTACT_EMAIL}`} aria-label="Email">
                <AiFillMail />
              </a>
              <a href="tel:0227014959" aria-label="Phone">
                <AiFillPhone />
              </a>
              <ThemeToggle />
            </div>
            <div className="mt-6">
              <LanguageMenu />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
