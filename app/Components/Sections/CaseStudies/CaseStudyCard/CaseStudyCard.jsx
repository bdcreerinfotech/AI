import Image from "next/image";
import React from "react";

export default function CaseStudyCard({ data }) {
  return (
    <div className="flex relative w-full">
      <div className="absolute top-0 left-0 z-0 w-[40%] aspect-[2.5/3] bg-[var(--primary-color)] rounded-lg rounded-tl-[0]"></div>
      <div className="relative w-full mt-3 ml-3 bg-white p-5 z-1">
        <div className="relative w-full aspect-square rounded-tr-lg overflow-hidden">
          <Image
            src={`/assets/case-studies/${data.img}`}
            alt={data.title}
            fill
            sizes="100%"
            style={{ objectFit: "cover" }}
          />
        </div>
        <h2 className="text-[30px] md:text-[38px] font-medium my-4 md:my-5 md:mb-8">{data.title}</h2>
        <p className="!text-base md:text-[23px] font-normal">{data.desc}</p>
      </div>
    </div>
  );
}
