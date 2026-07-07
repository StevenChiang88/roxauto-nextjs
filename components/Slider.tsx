import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export interface SlideItem {
  link: string;
  alt: string;
}

interface SliderProps {
  data: SlideItem[];
}

export default function Slider({ data }: SliderProps) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      className="overflow-hidden"
      style={{ borderRadius: "var(--radius)" }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.link}>
          <Image
            className="h-auto w-full"
            width={1000}
            height={640}
            src={`/static/images/${item.link}`}
            alt={item.alt}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
