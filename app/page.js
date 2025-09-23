"use client";
import React from "react";
import HeroXLinesDelayed from "./components/HeroXLinesDelayed";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Sliders from "./components/Sliders";
import Footer from "./components/Footer";
import PopupContact from "./components/PopupContact";
import VideoSection from "./components/VideoSection";




function Page() {
  return (
    <div className="relative w-full  bg-[#e9dfdf]   ">

      
      <div className="fixed inset-0 z-10  pointer-events-none">
        <HeroXLinesDelayed />
      </div>

      
      <div className="  relative z-20">
        <Navbar />
        <section className="w-full min-h-screen ">
        <HeroSection/>
        </section>
        
      </div>
      <Sliders/>
      <VideoSection/>
      <Footer/>
      <PopupContact/>

    </div>
  );
}

export default Page;
