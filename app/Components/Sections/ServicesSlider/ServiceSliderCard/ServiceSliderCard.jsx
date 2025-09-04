import Image from "next/image";
import React from "react";

export default function ServiceSliderCard({ cardData }) {
  return (
    <div className="relative h-[500px]">
      <div className="absolute bottom-0 left-0 h-[calc(100%-1.75rem)] w-[36%] bg-[var(--primary-color)] rounded-bl-lg"></div>
      <div className="relative flex h-full w-full pb-7 pl-7">
        <div className="relative h-full min-w-[37%] rounded-bl-lg overflow-hidden">
          <Image
            src={`/assets/service-slider/${cardData.img}`}
            alt={cardData.title}
            fill
            sizes="100%"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full bg-[#f2f2f2] rounded-r-lg p-10 text-center">
          <h2 className="text-[32px] font-semibold mb-6">{cardData.title}</h2>
          <p>{cardData.desc}</p>
        </div>
      </div>
    </div>
  );
}
