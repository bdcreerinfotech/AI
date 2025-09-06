import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function ProcessCard({ data }) {
  return (
    <div className="process-card flex flex-col bg-[#f2f2f2] rounded-lg rounded-tl-[0] w-full p-5">
      <div className="flex justify-between">
        <span className="text-[#232323] text-[24px] font-medium mt-[10px]">
          {data.title}
        </span>
        <span className="text-[#a6a6a6] text-[100px] font-bold mt-[-30px]">
          {data.num}
        </span>
      </div>
      <div className="relative h-full w-full pl-4 pt-4">
        <div className="absolute top-0 left-0 bg-[var(--primary-color)] w-[40%] h-[40%] rounded-lg rounded-tl-[0]"></div>
        <div className="relative w-full aspect-square rounded-lg rounded-tl-[0] overflow-hidden">
          <Image
            src={`/assets/process/${data.img}`}
            alt={data.title}
            fill
            sizes="100%"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="m-4 mt-8">
        <p className="text-base!">{data.desc}</p>
      </div>
      <div className="flex justify-end">
        <button className="circle-btn">
          <FaArrowRight className="icon circle_left_arrow" />
          <FaArrowRight className="icon circle_right_arrow" />
        </button>
      </div>
    </div>
  );
}
