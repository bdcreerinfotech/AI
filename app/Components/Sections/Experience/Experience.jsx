import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Experience({onForm}) {
  return (
    <div className="flex relative justify-center min-h-[700px] max-sm:!my-[40px] my-[80px] bg-[#f2f2f2]">
      <div className="box-layout flex-col gap-[10%] max-sm:!py-[20%] p-[2%] box-content max-sm:!h-fit h-[750px] justify-center z-[1]">
        <div className="text-center">
          <h1 className="max-sm:!text-[32px] text-[52px] font-bold mb-4">
            Our Numbers Speak for Themselves
          </h1>
          <p className="max-sm:!text-base">
            With a proven track record of excellence, we continue to deliver
            cutting-edge AI and software solutions that drive business success
            worldwide.
          </p>
        </div>
        <div className="flex max-sm:!flex-col max-sm:!mt-[10%] max-sm:!gap-5">
          <div className="data-card">
            <h2 className="max-sm:!text-[72px]">3000+</h2>
            <p>Successful Projects Delivered</p>
          </div>
          <div className="data-card">
            <h2 className="max-sm:!text-[72px]">25+</h2>
            <p>Countries Served</p>
          </div>
          <div className="data-card">
            <h2 className="max-sm:!text-[72px]">8+</h2>
            <p>Years of Experience</p>
          </div>
        </div>
        <div className="flex justify-center mt-[80px] max-sm:!mt-[30px]">
          <button onClick={onForm} className="animated-btn max-sm:!text-[16px] rounded-tl-[0]! bg-transparent! text-[var(--primary-color)]!">
            <FaArrowRight className="icon left_side_arrow" />
            Schedule Consultation Call
            <FaArrowRight className="icon right_side_arrow" />
          </button>
        </div>
      </div>
      <div className="map-slider mt-[2%]">
        <div className="map-slidertrack">
          {Array(11)
            .fill()
            .map((_, idx) => (
              <div key={idx} className="relative h-full w-full">
                <Image
                  src={"/assets/map.webp"}
                  alt="map"
                  fill
                  sizes="100%"
                  style={{ zIndex: 1, objectFit: "contain" }}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
