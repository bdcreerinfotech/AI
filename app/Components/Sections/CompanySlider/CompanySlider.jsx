import Image from "next/image";
import React from "react";

export default function CompanySlider() {
  const slider = [
    "/assets/slider-1/kfc.webp",
    "/assets/slider-1/kpmg.webp",
    "/assets/slider-1/google.webp",
    "/assets/slider-1/dominos.webp",
    "/assets/slider-1/americana.webp",
    "/assets/slider-1/bcg.webp",
  ];

  return (
    <div className="relative h-[100px] w-[100%] box-content py-[40px] pt-[80px] overflow-hidden place-items-center">
      <div className="slide-track">
        {slider.map((item, idx) => (
          <div className="slider-card contrast-[.4]" key={idx}>
            <Image
              src={item}
              fill={true}
              sizes="100%"
              alt={"creer infotech"}
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
