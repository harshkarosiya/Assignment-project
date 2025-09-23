"use client";

import React, { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

export default function VideoSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="relative w-full h-[80vh] overflow-hidden mt-10 cursor-pointer">
      
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/chenab.mp4"
        muted
        loop
        playsInline
        onClick={togglePlay} // click anywhere to play/pause
      />

      
      {!isPlaying && (
        <div
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center z-10"
        >
          <div className="text-white text-6xl p-4 bg-black/20 rounded-full hover:scale-125 transition-transform flex items-center justify-center">
            <FaPlay />
          </div>
        </div>
      )}
    </section>
  );
}
