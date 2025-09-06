import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Footer({onForm}) {
  return (
    <div className="flex justify-center py-[40px] md:py-[80px]">
      <div className="box-layout flex-col md:flex-row items-center bg-[#f2f2f2] h-full md:h-[500px]">
        <div className="relative w-full aspect-square md:h-full md:min-w-[40%]">
          <Image
            src={"/assets/mobile-apps.webp"}
            alt="Mobile Apps"
            fill
            sizes="100%"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="w-full p-4 md:p-9 text-center">
          <h2 className="text-[25px] md:text-[32px] font-semibold">
            Transform your Buisness with AI in India
          </h2>
          <p className="max-sm:!text-base my-4 mb-8 md:my-8 md:mb-16">
            Tailored AI solutions designed to create intelligent, efficient, and
            user-friendly applications that align with your unique business
            needs.
          </p>
          <div className="flex justify-end">
          <button onClick={onForm} className="animated-btn text-nowrap rounded-tl-[0]! bg-transparent! text-[var(--primary-color)]!">
            <FaArrowRight className="icon left_side_arrow max-sm:!h-[20px]" />
            Get in touch
            <FaArrowRight className="icon right_side_arrow max-sm:!h-[20px]" />
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
