import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import  Swal  from "sweetalert2";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // EmailJS service ID and template ID, and public key
    const serviceId = "service_n4qvyc4";
    const templateId = "template_28q8ika";
    const publickKey = "Zc0VG_KSAvY09cXsb";

    // Create a new object that dynamic temple params

    const templateParams = {
      from_name: name,
      form_email: email,
      to_name: "Sahanur",
      message: message,
    };

    // send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publickKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        if (response) {
          Swal.fire({
            position: "top-right",
            icon: "success",
            title: `Hey ${name}, Your Message has been sent`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        console.log("Error sending email:", err);
      });
  };
  return (
    <div className=" py-8">
      {" "}
      <div className="section-container py-24">
        <h1 className=" text-white rounded-full text-center shadow-lg bg-yellow-400  font-bold text-2xl italic">
          Your queary is important to us
        </h1>

        <div className="w-full md:w-[870px] mx-auto px-4">
          <h2 className="text-2xl my-4 font-bold">
            For any question? <span className="text-green ">fill the form</span>
          </h2>
          <div>
            <form action="#" onSubmit={handleSubmit}>
              <div className="form-control w-full my-6">
                <label className="label">
                  <span className="label-text font-semibold">
                    Full Name<span className="text-red">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input input-bordered w-full"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-control w-full my-6">
                <label className="label">
                  <span className="label-text font-semibold">
                    Email<span className="text-red">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered w-full"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* product details */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    What is your query?
                  </span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-24"
                  placeholder="Type here........"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button className="btn bg-yellow-400 text-white flex items-center justify-center px-6">
                  Send Message <FiSend className="ml-2" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <Carousel
          infiniteLoop
          autoPlay
          showStatus={false}
          showArrows={false}
          showThumbs={false}
          interval={4000}
        >
          <div>
            <div className=" py-24 ">
              <div className="section-container">
                <h1 className=" text-white rounded-full shadow-lg text-center bg-yellow-400 font-semibold text-2xl">
                  {" "}
                  Hazi Marble House
                </h1>
                <p className="text-end font-semibold "> Mobile - 7074574202</p>
                <address className="font-bold">
                  {/* <h2 className='text-red'>Hazi Marble House</h2><hr/> */}
                  Lohapur Kantagoriya, Nalhati, Birbhum, Pin-731237
                </address>
              </div>
              <div
                className="relative overflow-hidden rounded-md"
                style={{ paddingBottom: "50%" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d171813.35249202562!2d87.92540717967289!3d24.241541053792982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fa259229043557%3A0x8819ef79ab38e03d!2sHazi%20Marble%20House!5e1!3m2!1sen!2sin!4v1712002122890!5m2!1sen!2sin&amp;output=embed"
                  frameBorder="false"
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
          <div>
            <div className="py-24">
              <div className="section-container">
                <h1 className="text-white rounded-full shadow-lg text-center bg-green font-semibold text-2xl">
                  Hazi Marble House Godown
                </h1>
                <p className="text-end font-semibold">Mobile - 7074574202</p>
                <address className="font-semibold">
                  Lohapur Kantagoriya, Nalhati, Birbhum, Pin-731237
                </address>
              </div>
              <div
                className="relative overflow-hidden rounded-md"
                style={{ paddingBottom: "50%" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19404.865157459517!2d87.95528227591261!3d24.285756863216374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fa250dce31d54b%3A0x33e1098caeaa3b0d!2sHazi%20Marble%20House%20Godown!5e1!3m2!1sen!2sin!4v1712001663964!5m2!1sen!2sin "
                  frameBorder="false"
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Contact;
