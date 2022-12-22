import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import Image from "next/image";

const Slider = ({ data }) => {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {data.map((item) => (
          <SwiperSlide>
            <Image
              className="h-full w-full"
              width="1000"
              height="1000"
              src={`/../public/assets/homepage/${item.link}`}
              alt={item.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
