import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header({onForm}) {
  return (
    <div className="fixed flex w-[100%] justify-center h-[70px] bg-white z-10">
      <div className="box-layout flex items-center justify-between ">
        <Link href={"/"} className="relative flex h-[50px] w-[120px] sm:h-[50px] sm:w-[120px]">
          <Image
            src={"/assets/ci-logo.webp"}
            fill={true}
            sizes="100%"
            alt={"creer infotech"}
            style={{ objectFit: "contain" }}
          />
        </Link>
        <button onClick={onForm} className="bg-[var(--primary-color)] p-[10px_20px] text-white sm:text-base px-3 py-2 sm:px-5 sm:py-2 rounded-bl-lg rounded-tr-lg rounded-br-lg cursor-pointer hover:bg-[var(--primary-hover-color)]">
          GET A FREE QUOTE
        </button>
      </div>
    </div>
  );
}
