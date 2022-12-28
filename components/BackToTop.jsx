import { Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { BiArrowToTop } from "react-icons/bi";

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [backToTopShow, switchBackToTopShow] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        switchBackToTopShow(true);
      } else {
        switchBackToTopShow(false);
      }
    });
  }, []);
  return (
    backToTopShow && (
      <Button
        className="fixed right-4 bottom-4 bg-gray-400  w-[50px] h-[45px] z-[100]"
        onClick={() => {
          scrollToTop();
        }}
      >
        <BiArrowToTop />
      </Button>
    )
  );
};

export default BackToTop;
