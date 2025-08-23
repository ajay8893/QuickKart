import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import hero1 from "../../../assets/banner/hero1.jpg"
import hero2 from "../../../assets/banner/hero2.jpg"
import hero3 from "../../../assets/banner/hero3.jpg"


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    image: hero1,
    title: "Starting ₹99 Budget Store",
  },
  {
    image: hero2,
    title: "Big Discounts",
  },
  {
    image: hero3,
    title: "New Arrivals",
  },
];

const HeroCarousel = () => {
return (
    <div className="w-full">
        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full h-[400px]"
        >
        {slides.map((slide, index) => (
        <SwiperSlide key={index}>
            <img
                src={slide.image}
                alt={slide.title}
                loading="lazy"
                className="w-full h-[400px] object-cover"
            />
            <div className="absolute bottom-5 left-5 bg-black bg-opacity-50 text-white p-3 rounded">
            {slide.title}
            </div>
        </SwiperSlide>
        ))}
        </Swiper>
    </div>
);
};

export default HeroCarousel;
