import Image from "next/image";
import React from "react";

export default function Certificate() {
  const awards = [
    "awarad_1.webp",
    "awarad_1.webp",
    "awarad_1.webp",
    "awarad_1.webp",
  ];

  return (
    <div className="flex justify-center py-[40px] md:py-[80px]">
      <div className="box-layout flex-col">
        <div className="text-center w-full mb-10">
          <h1 className="text-[32px]/[1.3] md:text-[52px]/[1.3] font-bold">
            One of the best <br /> AI company in India
          </h1>
        </div>
        <div className="flex justify-between flex-wrap">
          {awards.map((item, idx) => (
            <div key={idx} className="relative flex aspect-square w-[50%] md:w-[20%]">
              <Image
                src={`/assets/certificates/${item}`}
                alt="award 1"
                fill
                sizes="100%"
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
