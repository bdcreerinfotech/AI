import Image from "next/image";
import React from "react";
import { FaArrowRight } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <div className="relative flex justify-center items-center overflow-hidden w-full h-[665px] bg-amber-50">
      <Image
        src={"/assets/hero-img.webp"}
        fill={true}
        sizes="100%"
        alt={"Hero Image"}
        style={{ zIndex: 0, objectFit: "cover" }}
        className="absolute w-100 h-100 top-0 left-0"
      />
      <div className="absolute box-layout items-center justify-between pt-[70px] ">
        <div className="w-[50%] flex flex-col gap-5 ">
          <h1 className="text-[52px]/[1.3] font-bold">
            AI Development <br /> Services in India
          </h1>
          <p className="text-2xl">
            Harness cutting-edge AI solutions to automate workflows, boost
            efficiency, and unlock smarter decision-making for your business.
          </p>
          <button className="animated-btn rounded-tl-[0]!">
            <FaArrowRight className="icon left_side_arrow" />
              CONSULT OUR AI EXPERTS
            <FaArrowRight className="icon right_side_arrow" />
          </button>
        </div>
        <form className="flex flex-col justify-between items-end h-[470px] w-[500px] bg-[var(--primary-color)] rounded-xl box-border p-10 ">
          <div className="input-row">
            <div className="input-col">
              <label htmlFor="first-name" className="input-label">
                First Name
              </label>
              <input className="input-field" type="text" name="first-name" />
            </div>
            <div className="input-col">
              <label htmlFor="first-name" className="input-label">
                Last Name
              </label>
              <input className="input-field" type="text" name="last-name" />
            </div>
          </div>
          <div className="input-row">
            <div className="input-col w-[100%]">
              <label htmlFor="first-name" className="input-label">
                Phone Number
              </label>
              <input
                className="input-field w-[100%]!"
                type="phone"
                name="phone"
              />
            </div>
          </div>
          <div className="input-row">
            <div className="input-col w-[100%]">
              <label htmlFor="first-name" className="input-label">
                Email
              </label>
              <input
                className="input-field w-[100%]!"
                type="phone"
                name="email"
              />
            </div>
          </div>
          <button className="bg-white font-bold text-[var(--primary-color)] p-[15px_30px] mt-3 rounded-[.25rem] cursor-pointer">
            Let's connect
          </button>
        </form>
      </div>
    </div>
  );
}
