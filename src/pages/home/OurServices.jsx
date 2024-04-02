import React from "react";
import { FaSmileBeam } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img5 from "/images/home/services/icon1.png";

const serviceLists = [
  // {
  //   id: 1,
  //   title: "Online",
  //   des: "Online Order free Now",
  //   image: "/images/home/services/icon1.png",
  // },
  {
    id: 2,
    title: "Online",
    des: "Online Order free Now",
    image: "/images/home/services/icon2.png",
  },
  {
    id: 3,
    title: "Online",
    des: "Online Order free Now",
    image: "/images/home/services/icon3.png",
  },
  {
    id: 4,
    title: "Online",
    des: "Online Order free Now",
    image: "/images/home/services/icon4.png",
  },
];

const OurServices = () => {
  return (
    <div className="section-container my-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* {text} */}
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subtitle">Services</p>
            <h2 className="title">Our Culinary Journey And Services </h2>
            <p className="my-5 text-secondary leading-[30px]">
              Embark on a culinary journey within the opulent confines of Marbel
              House. Our bespoke services offer gastronomic excellence,
              combining fine dining expertise with artisanal flair for an
              unforgettable culinary experience.
            </p>

            {/* <button className="btn bg-green text-white px-8 py-3 rounded-full">
              Explore
            </button> */}
            {/* click */}
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn bg-green text-white px-8 py-3 rounded-full"
              >
                Click Me{" "}
                <sub>
                  <FaSmileBeam />
                </sub>
              </div>
              <div
                tabIndex={0}
                className="dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-cyan-300 text-primary-content"
              >
                <div className="card-body">
                  <h3 className="card-title text-orange-400 italic">
                    Hazi Marble House
                  </h3>
                  <p className="text-black">Thank you for click me!❤️</p>
                  <p className="text-primary">Visit again!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* imgages */}
        <Carousel
          infiniteLoop
          autoPlay
          showStatus={false}
          showArrows={false}
          showThumbs={false}
          interval={700}
        >
          <div className="md:w-1/2">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center">
              <div className="shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-green cursor-pointer hover: border-indigo-600 transition-all duration-100 hover:border">
                <img src={img5} alt="" className="mx-auto" />
                <h5 className="pt-3 font-semibold">Online</h5>
                <p className="text-[#90BD95]">Online Order free Now</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center">
              <div className="shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-green cursor-pointer hover: border-indigo-600 transition-all duration-100 hover:border">
                <img src={img5} alt="" className="mx-auto" />
                <h5 className="pt-3 font-semibold">Online</h5>
                <p className="text-[#90BD95]">Online Order free Now</p>
              </div>
            </div>
          </div>
        </Carousel>
        <div className="md:w-1/2">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center">
            {serviceLists.map((service) => (
              <div
                key={service.id}
                className="shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-green cursor-pointer hover: border-indigo-600 transition-all duration-100 hover:border"
              >
                <img src={service.image} alt="" className="mx-auto" />
                <h5 className="pt-3 font-semibold">{service.title}</h5>
                <p className="text-[#90BD95]">{service.des}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
