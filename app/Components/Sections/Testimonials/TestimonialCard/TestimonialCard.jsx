import React from "react";
import { FaStar } from "react-icons/fa6";

export default function TestimonialCard({ data, isActive }) {
  return (
    <div
      className={`flex flex-col justify-between !h-full bg-[var(--primary-color)] opacity-50 text-white p-10 max-sm:!p-5 ${
        isActive ? "opacity-100" : "opacity-50"
      }`}
    >
      <div className="mb-6">
        <h2 className="max-sm:!text-base text-[24px]/[1.4] font-medium">"{data.review}"</h2>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-[20px]/[1.3] font-semibold ">{data.name}</h3>
        <p className="flex gap-1">
          {[...Array(5)].map((_, idx) => (
            <FaStar
              key={idx}
              className={`text-base ${
                idx < data.star ? "text-[#f2be14]" : "text-gray-300"
              }`}
            />
          ))}
        </p>
      </div>
    </div>
  );
}
