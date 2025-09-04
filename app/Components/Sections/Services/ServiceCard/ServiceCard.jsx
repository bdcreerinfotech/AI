import Image from "next/image";
import React from "react";

export default function ServiceCard({ img, title, desc }) {
  return (
    <div className="relative flex h-fit w-[46.7%] box-content">
      <div className="absolute top-0 left-0 w-[30%] h-[calc(100%-.875rem)] bg-[var(--primary-color)] rounded-bl-lg"></div>
      <div className="flex h-[240px] mt-3.5 ml-3.5">
        <div className="relative w-[30%] h-[100%] bg-[var(--primary-color)] rounded-bl-lg overflow-hidden">
          <Image
            src={`/assets/${img}`}
            alt={title}
            fill
            sizes="100%"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="flex flex-col justify-center w-[70%] h-[100%] bg-[#f2f2f2] rounded-r-lg p-3.5 pl-7">
          <h2 className="text-[28px] font-semibold mb-3">{title}</h2>
          <h5>{desc}</h5>
        </div>
      </div>
    </div>
  );
}
