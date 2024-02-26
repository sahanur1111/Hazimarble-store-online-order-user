import React from "react";

const Contact = () => {
  return (
    <div className="section-container py-8">
      {" "}
      <div className=" py-24 ">
        <h1 className=" text-white rounded-full shadow-lg text-center bg-yellow-400 font-bold text-2xl"> Hazi Marble House</h1>
        <p className="text-end font-bold "> Mobile - 7074574202</p>
        <address className="font-bold">
          {/* <h2 className='text-red'>Hazi Marble House</h2><hr/> */}
          Lohapur Kantagoriya, Nalhati, Birbhum, Pin-731237
        </address>
        <div
          className="relative overflow-hidden rounded-md"
          style={{ paddingBottom: "50%" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3636.670357596709!2d87.96887437355802!3d24.28824176791931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fa259229043557%3A0x8819ef79ab38e03d!2sHazi%20Marble%20House!5e0!3m2!1sen!2sin!4v1708117518286!5m2!1sen!2sin"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            className="absolute inset-0 w-full h-full"
          ></iframe>
        </div>
        </div>

        <hr />

        <h1 className=" text-white rounded-full text-center shadow-lg bg-yellow-400 font-bold text-2xl">Hazi Marble House Godown</h1>
        <p className="text-end font-bold "> Mobile - 9064837856</p>
        <address className="font-bold ">
          {/* <h2 className='text-red'>Hazi Marble House</h2><hr/> */}
          Lohapur Kantagoriya, Nalhati, Birbhum, Pin-731237
        </address>
        <div
          className="relative overflow-hidden rounded-md"
          style={{ paddingBottom: "40%" }}
        >
          <iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3636.6056932735937!2d87.96393907355808!3d24.29049926783084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fa250dce31d54b%3A0x33e1098caeaa3b0d!2sHazi%20Marble%20House%20Godown!5e0!3m2!1sen!2sin!4v1708127944428!5m2!1sen!2sin"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            className="absolute inset-0 w-full h-full"
          ></iframe>
        </div>
    </div>
  );
};

export default Contact;
