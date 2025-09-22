"use client";
import React from "react";
import { FaAngleDown, FaChevronRight } from "react-icons/fa";

function Navbar() {
  return (
    <nav
      className="w-full px-[6rem] py-[1.5rem] flex justify-between fixed top-0 left-0 cursor-pointer"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="flex justify-center items-center gap-[2rem]">
        <h1 className="flex logo font-bold text-4xl cursor-pointer">
          <span>DD</span>
          <FaAngleDown className="text-[3rem] text-orange-600" />
          <span>NYC</span>
        </h1>

        <ul className="flex gap-[4rem] font-semibold ml-12">
          <li>
            <a href="#work" className="ml-[1rem] cursor-pointer hover:text-zinc-600">
              Work
            </a>
          </li>
          <li>
            <a href="#agency" className="ml-[1rem] cursor-pointer hover:text-zinc-600">
              Agency
            </a>
          </li>
          <li>
            <a
              href="#service"
              className="ml-[1rem] cursor-pointer hover:text-zinc-600 flex justify-center items-center gap-2"
            >
              Service <FaChevronRight className="text-[9px]" />
            </a>
          </li>
          <li>
            <a
              href="#industry"
              className="ml-[1rem] cursor-pointer hover:text-zinc-600 flex justify-center items-center gap-2"
            >
              Industry <FaChevronRight className="text-[9px]" />
            </a>
          </li>
        </ul>
      </div>

      <div className="flex gap-6 justify-center items-center">
        <a
          href="#careers"
          className="text-zinc-600 text-lg cursor-pointer hover:text-orange-600"
        >
          Careers
        </a>
        <a
          href="#contact"
          className="px-5 py-2 font-bold cursor-pointer bg-orange-600 hover:bg-amber-700 rounded-full text-white"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
