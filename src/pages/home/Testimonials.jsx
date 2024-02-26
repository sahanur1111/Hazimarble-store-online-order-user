import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="section-container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
        <img src="/images/home/Testimonials/tails.png" alt="" />
        </div>
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subtitle">Testimonials</p>
            <h2 className="title">What Our Customers Say About Us 🥰</h2>
            <blockquote className="my-5 text-secondary leading-[30px]">
              "Customers rave about Hazi Marble House! Exceptional service,
              top-notch craftsmanship, and a stunning selection. Transforming
              spaces with elegance. Unmatched quality that speaks for itself.
              Highly recommended!"
            </blockquote>

            {/* avatert feed back  */}

            <div className="flex items-center gap-4 flex-wrap">
              <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-12">
                    <img src="../images/home/Testimonials/testimonial1.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="../images/home/Testimonials/testimonial2.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="../images/home/Testimonials/testimonial3.jpg" />
                  </div>
                </div>
                <div className="avatar placeholder">
                  <div className="w-12 bg-neutral text-neutral-content">
                    <span>+1.2k</span>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <h5 className="text-lg font-semibold">Customer Feedback</h5>
                <div className="flex items-center gap-2">
                    <FaStar className="text-yellow-400"/>
                    <span>4.9</span><span className="text-[#807E7E]">(12.5K Reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
