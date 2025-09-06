import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="flex justify-center h-fit min-h-125 max-sm:!py-[40px] py-[80px] box-content">
      <div className="box-layout max-sm:!flex-col relative justify-between items-center">
        <div className="absolute max-sm:!relative max-sm:!w-full max-sm:!h-[300px] max-sm:!left-0 left-[-5.6%] w-[50%] h-[100%] rounded-xl rounded-tl-[0]! overflow-hidden">
          <Image
            src={"/assets/experience-section-image.webp"}
            alt="experience-section-image"
            fill
            sizes="100%"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="absolute max-sm:!mt-[40px] max-sm:!relative max-sm:!w-full right-0 w-[50%]">
          <h1 className="text-[52px]/[1.3] max-sm:!text-[32px]/[1.3] font-bold">Crafting Intelligent & Intuitive Digital Experiences</h1>
          <p className="text-[23px]/[1.4] max-sm:!mt-5 mt-12 mb-4 max-sm:!text-base">We specialize in designing AI-powered, user-centric web applications that blend seamless functionality with stunning UI/UX. Our solutions ensure effortless navigation, enhanced engagement, and optimized performance for modern businesses.</p>
        </div>
      </div>
    </div>
  );
}
