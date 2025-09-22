"use client";
import React from "react";
import { FaAngleDown } from "react-icons/fa";

function HeroSection() {
  return (
    <section className="">
      <div className="relative">
        <h1 className="absolute z-20 text-[6rem] top-[12rem] font-bold tracking-tight left-[4rem]">
          Сreative design agency,
        </h1>
        <div className="absolute z-10 left-[40rem]" aria-hidden="true">
          <FaAngleDown className="text-[35rem] text-[#ff6600]" />
        </div>
        <h2 className="absolute z-0 text-[6rem] top-[19rem] font-bold tracking-tight left-[4rem]">
          located in the heart of NYC.
        </h2>
      </div>

      <div className="relative">
        <div className="flex absolute top-[38rem] left-[5rem] justify-center items-center gap-4">
          <span className="text-lg">Reviewed on</span>
          <img
            src="/images/rating.png"
            className="w-[4rem]"
            alt="Clutch rating"
          />
        </div>
        <div className="flex absolute top-[40.6rem] left-[5rem] justify-center items-center gap-3">
          <span className="text-lg tracking-wider">Clutch</span>
          <span className="text-lg">101 reviews</span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
