import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="fixed flex w-[100%] justify-center h-[70px] bg-white z-10">
      <div className="box-layout flex items-center justify-between ">
        <Link href={"/"} className="relative flex h-[50px] w-[120px]">
          <Image
            src={"/assets/ci-logo.webp"}
            fill={true}
            sizes="100%"
            alt={"creer infotech"}
            style={{ objectFit: "contain" }}
          />
        </Link>
        <button className="bg-[var(--primary-color)] p-[10px_20px] text-white rounded-bl-lg rounded-tr-lg rounded-br-lg cursor-pointer hover:bg-[var(--primary-hover-color)]">
          GET A FREE QUOTE
        </button>
      </div>
    </div>
  );
}
