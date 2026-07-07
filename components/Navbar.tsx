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
    <>
      <header className="nav-glass sticky top-0 z-[100] w-full">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
          <Link href="/" aria-label="Rox Auto Parts home" className="transition-opacity duration-200 hover:opacity-75">
            <Image src="/static/images/roxicon.png" alt="Rox Auto Parts logo" width={125} height={50} priority />
          </Link>

          <nav className="hidden items-center gap-2 font-semibold lg:flex">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {t(item.key)}
              </Link>
            ))}
            <span className="nav-link cursor-pointer">
              <ThemeToggle />
            </span>
            <LanguageMenu />
          </nav>

          <button
            aria-label="open menu"
            onClick={() => setNavOpen(true)}
            className="nav-link cursor-pointer lg:hidden"
          >
            <AiOutlineMenu size={25} />
          </button>
        </div>
      </header>

      {/* mobile drawer lives OUTSIDE the blurred header (backdrop-filter breaks position:fixed inside it) */}
      <div
        className={`fixed inset-0 z-[110] bg-black/80 transition-opacity duration-300 lg:hidden ${
          navOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setNavOpen(false)}
        aria-hidden={!navOpen}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute right-0 top-0 flex h-full w-3/4 max-w-sm flex-col p-8 shadow-2xl transition-transform duration-300 ${
            navOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ background: "var(--canvas)" }}
        >
          <div className="flex items-center justify-between">
            <Image src="/static/images/roxicon.png" alt="Rox Auto Parts logo" width={100} height={40} />
            <button aria-label="close menu" className="nav-link" onClick={() => setNavOpen(false)}>
              <AiOutlineClose size={22} />
            </button>
          </div>

          <nav className="mt-10 flex flex-col gap-2 text-lg font-semibold">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setNavOpen(false)} className="nav-link">
                {t(item.key)}
              </Link>
            ))}
          </nav>

          <div className="mt-auto flex items-center gap-2 text-2xl">
            <a className="nav-link" href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <AiFillFacebook />
            </a>
            <a className="nav-link" href={`mailto:${CONTACT_EMAIL}`} aria-label="Email">
              <AiFillMail />
            </a>
            <a className="nav-link" href="tel:0227014959" aria-label="Phone">
              <AiFillPhone />
            </a>
            <span className="nav-link">
              <ThemeToggle />
            </span>
          </div>
          <div className="mt-4">
            <LanguageMenu dropUp />
          </div>
        </div>
      </div>
    </>
  );
}
