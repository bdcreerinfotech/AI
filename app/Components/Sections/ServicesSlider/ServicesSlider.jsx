"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import ServiceSliderCard from "./ServiceSliderCard/ServiceSliderCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function ServicesSlider() {
  const swiperRef = useRef(null);

  const slideContent = [
    {
      img: "generative-ai.webp",
      title: "Generative AI",
      desc: "We build advanced Generative AI solutions all over India using GPT-4, MidJourney, and DALL·E, enabling brand recognition, data analysis, and visualization.",
    },
    {
      img: "generative-ai.webp",
      title: "Generative AI",
      desc: "We build advanced Generative AI solutions all over India using GPT-4, MidJourney, and DALL·E, enabling brand recognition, data analysis, and visualization.",
    },
  ];

  return (
    <div className="flex justify-center max-sm:!py-[40px] py-[80px]">
      <div className="box-layout flex-col justify-center">
        <div className="text-center">
          <h1 className="max-sm:!text-[32px] text-[52px] font-bold mb-6 max-sm:!mb-3">
            AI Development Services in India
          </h1>
          <p className="block mb-14 max-sm:!hidden">
            We help businesses create all different flavors of <br /> Innovative
            AI Services in India.
          </p>
          <p className="mb-14 hidden max-sm:!block max-sm:!text-base">
            We help businesses create all different flavors of Innovative
            AI Services in India.
          </p>
        </div>
        <div>
          <Swiper
            modules={[Autoplay]}
            ref={swiperRef}
            slidesPerView={1}
            spaceBetween={200}
            loop={true}
            autoplay={{
              delay: 2500, // time between slides in ms
              disableOnInteraction: false, // keep autoplay even after user swipes
            }}
            speed={800}
          >
            {slideContent.map((item, index) => (
              <SwiperSlide key={index}>
                <ServiceSliderCard cardData={item} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex gap-5 justify-end mt-7 text-[var(--primary-color)] text-6xl">
            <button onClick={() => swiperRef.current.swiper.slidePrev()} className="cursor-pointer"><FaArrowLeft /></button>
            <button onClick={() => swiperRef.current.swiper.slideNext()} className="cursor-pointer"><FaArrowRight /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
