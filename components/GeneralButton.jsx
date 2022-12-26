import { useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";

const GeneralButton = ({ color, href }) => {
  const { t } = useTranslation();
  return (
    <Link href={href}>
      <button
        className={
          color === "blue"
            ? "text-white border border-[#3671E9] text-sm w-full bg-[#3671E9] hover:bg-white   hover:text-[#3671E9] hover:border hover:border-[#3671E9] px-14 py-2 uppercase rounded-md duration-500 my-4 lg:mr-8"
            : "text-white border border-[#E99736] text-sm w-full  bg-[#E99736] hover:bg-white hover:text-[#E99736] hover:border hover:border-[#E99736]  px-14 py-2 uppercase rounded-md duration-500 my-4"
        }
      >
        {href == "/Contact"
          ? t("generalButton.Contact")
          : t("generalButton.Products")}
      </button>
    </Link>
  );
};

export default GeneralButton;
