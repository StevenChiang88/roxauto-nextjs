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
            ? "text-white hover:text-[#3671E9] bg-[#3671E9] hover:bg-white px-14 py-2 uppercase rounded-md duration-500 my-4 lg:mr-8"
            : "text-white hover:text-[#E99736] bg-[#E99736] hover:bg-white px-14 py-2 uppercase rounded-md duration-500 my-4"
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
