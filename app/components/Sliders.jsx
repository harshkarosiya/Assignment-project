"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    name: "chenab bridge",
    img: "/images/Chenabin-02.jpg",
    disc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, officiis Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, officiis."
  },
  {
    name: "chenab bridge",
    img: "/images/Chenabin-01.jpg",
    disc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, officiis Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, officiis."
  },
  {
    name: "chenab bridge",
    img: "/images/Chenabin.jpg",
    disc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, officiis Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, officiis."
  },
  {
    name: "chenab bridge",
    img: "/images/Chenabin-04.jpg",
    disc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, officiis Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, officiis."
  },
  {
    name: "chenab bridge",
    img: "/images/Chenabin.jpg",
    disc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, officiis  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, officiis."
  },
];

function Sliders() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="w-3/4 m-auto h-full">
      <Slider {...settings}>
        {data.map((d, i) => (
          <div key={i} className="px-4">
            <article className="bg-white text-black rounded-xl shadow-md overflow-hidden">
              <div className="h-60 bg-zinc-600 flex justify-center items-center">
                <img
                  src={d.img}
                  className="w-full h-full object-cover"
                  alt={`${d.name} image`}
                />
              </div>

              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <h3 className="capitalize font-semibold">{d.name}</h3>
                <p className="text-sm text-gray-600 text-center">{d.disc}</p>
                <button className="px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700">
                  Read more
                </button>
              </div>
            </article>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Sliders;
