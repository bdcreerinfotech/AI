"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import TestimonialCard from "./TestimonialCard/TestimonialCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Testimonials() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndexM, setActiveIndexM] = useState(0);

  const testimonials = [
    {
      review: "time.",
      name: "Team Lead, Leasing Automation Company",
      star: 4,
    },
    {
      review:
        "Perimattic developed a predictive AI analytics solution that transformed our patient data into actionable insights. Their deep learning expertise helped us enhance diagnosis accuracy and streamline operations. The team was highly professional and delivered exceptional results on time.",
      name: "Team Lead, Leasing Automation Company",
      star: 5,
    },
    {
      review:
        "Perimattic developed a predictive AI analytics solution that transformed our patient data into actionable insights. Their deep learning expertise helped us enhance diagnosis accuracy and streamline operations. The team was highly professional and delivered exceptional results on time.",
      name: "Team Lead, Leasing Automation Company",
      star: 5,
    },
    {
      review:
        "Perimattic developed a predictive AI analytics solution that transformed our patient data into actionable insights. Their deep learning expertise helped us enhance diagnosis accuracy and streamline operations. The team was highly professional and delivered exceptional results on time.",
      name: "Team Lead, Leasing Automation Company",
      star: 5,
    },
    {
      review:
        "Perimattic developed a predictive AI analytics solution that transformed our patient data into actionable insights. Their deep learning expertise helped us enhance diagnosis accuracy and streamline operations. The team was highly professional and delivered exceptional results on time.",
      name: "Team Lead, Leasing Automation Company",
      star: 5,
    },
  ];

  return (
    <div className="flex justify-center max-sm:!py-[40px] py-[80px]">
      <div className="relative box-layout max-sm:!flex-col-reverse">
        <div className="relative flex items-stretch  top-0 max-sm:!w-full min-w-[66.5%] max-sm:!left-0 left-[-5.6%] rounded-r-lg overflow-hidden">
          <Swiper
          className="!hidden md:!block"
            initialSlide={testimonials.length - 1}
            modules={[Autoplay]}
            ref={swiperRef}
            slidesPerView={2}
            spaceBetween={0}
            loop={true}
            autoplay={{
              delay: 2500, // time between slides in ms
              disableOnInteraction: false, // keep autoplay even after user swipes
            }}
            speed={800}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard
                  data={item}
                  isActive={(activeIndex + 1) % testimonials.length === index}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            className="md:!hidden"
            initialSlide={testimonials.length - 1}
            modules={[Autoplay]}
            ref={swiperRef}
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            autoplay={{
              delay: 2500, // time between slides in ms
              disableOnInteraction: false, // keep autoplay even after user swipes
            }}
            speed={800}
            onSlideChange={(swiper) => setActiveIndexM(swiper.realIndex)}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard
                  data={item}
                  isActive={activeIndexM === index}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-full">
          <h2 className="max-sm:!text-[20px] text-[30px] text-[var(--primary-color)] mb-12 max-sm:!mb-6 font-semibold">
            Customer Stories
          </h2>
          <h1 className="max-sm:!text-[32px] text-[52px] font-bold">
            A trusted partner for your business.
          </h1>
          <div className="flex gap-5 justify-start mt-7  text-[var(--primary-color)] text-6xl max-sm:!text-3xl max-sm:!mb-5">
            <button
              onClick={() => swiperRef.current.swiper.slidePrev()}
              className="cursor-pointer"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => swiperRef.current.swiper.slideNext()}
              className="cursor-pointer"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
