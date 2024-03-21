import React from "react";
import bannerImg from "/images/home/banner.png";
import { useTheme } from "../hooks/ThemeContext";
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`section-container bg-gradient-to-r from-[#FAFAFA] from 0% to-[#FCFCFC] to-100% ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <div
        className={`py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8 ${
          isDarkMode ? "text-white" : ""
        }`}
      >
        {/* img */}
        <div className="md:w-1/2 space-y-7 px-4 bg-red">
            <img src={bannerImg} alt="" />
            </div>
          <div className="flex flex-col md:flex-row items-center justify-around -mt-14 gap-4">
            <div className="bg-white px-3 py-2 rounded-2xl flex items-center gap-3 shadow-sm w-64">
              <img
                src="/images/home/basin.png"
                alt=""
                className="w-20 h-15 rounded-2xl"
              />
              <div className="font-medium mb-1">
                <h5 className={`${isDarkMode ? "text-gray" : ""}`}>Wash Basin</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-500"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                </div>
                <p className="text-red font-bold">₹ 4999/-</p>
              </div>
            </div>
            <div className="bg-white px-3 py-2 rounded-2xl md:flex items-center gap-3 shadow-sm w-64 hidden">
              <img
                src="/images/home/sanitary.png"
                alt=""
                className="w-14 h-14 rounded-2xl"
              />
              <div className="space-y-1">
                <h5 className={`${isDarkMode ? "text-gray" : ""}`}>Sanitary</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-500"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                </div>
                <p className="text-red font-bold">₹ 6999/-</p>
              </div>
            </div>
          </div>
        </div>

        {/* texts */}
        <div className="md:w-1/2 space-y-7 px-4">
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
            Hazi Marble House is an elegant residence known for{' '} {"   "}
            <span className="text-green">
              <TypeAnimation
               sequence ={[
                "Marble.",
                "Pipe  .",
                "Tiles  .",
                 "Plumbing  ",
                 "Sanitary "
              ]}
              // typeSpeed = {10}
              // backSpeed = {5}
              speed={-120}
              repeat={Infinity}
              
              />
              </span>
          </h2>
          <p className="text-xl text-[#4A4A4A]">
          <TypeAnimation
            sequence={["Discover quality marble, pipes, basins, and tiles for your home at our store. Elevate your space with our diverse, stylish selections."]}
            speed={10}
            loop
            />
          </p>
          <button className="btn bg-green px-8 py-3 font-semibold text-white rounded-full">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
