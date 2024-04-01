import React, { useState } from "react";
import { FiSend } from "react-icons/fi";

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
        if(response){
        Swal.fire({
          position: "top-right",
          icon: "success",
          title: `Hey ${name}, Your Message has been sent`,
          showConfirmButton: false,
          timer: 1500
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
        <div className="w-full md:w-[870px] mx-auto px-4">
      <h2 className="text-2xl my-4 font-bold">
        Upload A New <span className="text-green ">Product</span>
      </h2>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text font-semibold">Product Name<span className="text-red">*</span></span>
            </label>
            <input
              type="text"
              placeholder="Product Name"
              {...register("name", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex gap-6">
            {/* category */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text font-semibold">Category<span className="text-red">*</span></span>
              </label>
            </div>
          </div>
          {/* product details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Product Details</span>
            </label>
            <textarea
              {...register("product", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Type some word about your product up to 20 words."
            ></textarea>
          </div>
          <button className="btn bg-green text-white px-6">
            Send Message <FiSend />
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;
