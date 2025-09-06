'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import Image from "next/image";

export default function TechStack() {
  const caseStacks = [
    { img: "figma.webp", title: "Figma" },
    { img: "react.webp", title: "React Native" },
    { img: "invision.webp", title: "InVision" },
    { img: "python.webp", title: "Python" },
    { img: "aws.webp", title: "AWS" },
    { img: "kubernetes.webp", title: "Kubernetes" },
    { img: "azure.webp", title: "Azure" },
    { img: "oracle.webp", title: "Oracle" },
    { img: "grafana.webp", title: "Grafana" },
    { img: "nodejs.webp", title: "Node.Js" },
  ];

  return (
    <div className="flex justify-center py-[40px] md:py-[80px]">
      <div className="box-layout flex-col">
        <div className="mb-10 md:mb-20">
          <h1 className="text-[32px] md:text-[52px] font-bold">Tech Stacks</h1>
        </div>
        <div>
          <Swiper
          className="!hidden md:!block"
            modules={[Autoplay]}
            slidesPerView={4}
            spaceBetween={0}
            loop={true}
            autoplay={{
              delay: 2500, // time between slides in ms
              disableOnInteraction: false, // keep autoplay even after user swipes
            }}
            speed={800}
          >
            {caseStacks.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="tech-img flex flex-col items-center">
                  <div className="relative w-[40%] aspect-square">
                    <Image
                      src={`/assets/tech-stack/${item.img}`}
                      alt={item.title}
                      fill
                      sizes="100%"
                      style={{objectFit: 'contain'}}
                    />
                  </div>
                  <p className="text-[35px] font-bold! mt-10">{item.title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
          className="relative !w-[105%] md:!hidden"
            modules={[Autoplay]}
            slidesPerView={2.5}
            spaceBetween={0}
            loop={true}
            autoplay={{
              delay: 2500, // time between slides in ms
              disableOnInteraction: false, // keep autoplay even after user swipes
            }}
            speed={800}
          >
            {caseStacks.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="tech-img flex flex-col items-center">
                  <div className="relative w-[60%] md:w-[40%] aspect-square">
                    <Image
                      src={`/assets/tech-stack/${item.img}`}
                      alt={item.title}
                      fill
                      sizes="100%"
                      style={{objectFit: 'contain'}}
                    />
                  </div>
                  <p className="!text-base md:text-[35px] font-bold! mt-5 md:mt-10">{item.title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
