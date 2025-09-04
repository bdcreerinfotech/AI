import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="flex justify-center h-fit min-h-125 py-[40px] box-content">
      <div className="box-layout relative justify-between items-center">
        <div className="absolute left-[-5.6%] w-[50%] h-[100%] rounded-xl rounded-tl-[0]! overflow-hidden">
          <Image
            src={"/assets/experience-section-image.webp"}
            alt="experience-section-image"
            fill
            sizes="100%"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="absolute right-0 w-[50%]">
          <h1 className="text-[52px]/[1.3] font-bold">Crafting Intelligent & Intuitive Digital Experiences</h1>
          <p className="text-[23px]/[1.4] mt-12 mb-4 ">We specialize in designing AI-powered, user-centric web applications that blend seamless functionality with stunning UI/UX. Our solutions ensure effortless navigation, enhanced engagement, and optimized performance for modern businesses.</p>
        </div>
      </div>
    </div>
  );
}
