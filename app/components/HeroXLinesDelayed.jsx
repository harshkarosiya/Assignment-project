"use client";
import { useEffect, useRef } from "react";

export default function HeroXLinesDelayed() {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);

  useEffect(() => {
    let cursorX = window.innerWidth / 2;
    let cursorY = window.innerHeight / 2;

    let line1X = cursorX;
    let line1Y = cursorY;
    let line2X = cursorX;
    let line2Y = cursorY;

    const ease = 0.03; 

    const handleMouseMove = (e) => {
      cursorX = e.clientX;
      cursorY = e.clientY;
    };

    const animate = () => {
      
      line1X += (cursorX - line1X) * ease;
      line1Y += (cursorY - line1Y) * ease;
      line2X += (cursorX - line2X) * ease;
      line2Y += (cursorY - line2Y) * ease;

      if (line1Ref.current)
        line1Ref.current.style.transform = `translate3d(${line1X}px, ${line1Y}px, 0) rotate(45deg)`;
      if (line2Ref.current)
        line2Ref.current.style.transform = `translate3d(${line2X}px, ${line2Y}px, 0) rotate(-45deg)`;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative w-screen h-screen overflow-hidden ">
      
      <div
        ref={line1Ref}
        className="absolute left-0 top-0 pointer-events-none z-20 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute left-[-100vw] top-0 w-[200vw] h-[1px] bg-black/30 flex items-center">
          <div className="flex-1 h-[1px] bg-black/30"></div>
          <span className="mx-2 text-black font-medium text-sm md:text-base  px-2 whitespace-nowrap">
            Innovating in your industry
          </span>
          <div className="flex-1 h-[1px] bg-black/30"></div>
        </div>
      </div>

      
      <div
        ref={line2Ref}
        className="absolute left-0 top-0 pointer-events-none z-10 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute left-[-100vw] top-0 w-[200vw] h-[1px] bg-black/30"></div>
      </div>

     
    </section>
  );
}
