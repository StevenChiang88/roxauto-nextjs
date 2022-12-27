import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide,  } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import Image from "next/image";

const Slider = ({ data }) => {
  SwiperCore.use([Autoplay]);
console.log(data, "Sloder的資料")
  return (
    <>
      <Swiper autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }} pagination={true} modules={[Pagination]} className="mySwiper">
        {data.map((item) => (
          <SwiperSlide key={item.link}>
            <Image
              className="h-full w-full"
              width="1000"
              height="1000"
              src={require(`../public/static/images/${item.link}`)}
              alt={item.link}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
