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
              <select
                defaultValue="default"
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="marble">Marble</option>
                <option value="wall">Wall Tiles</option>
                <option value="floor">Floor Tiles</option>
                <option value="plumbing">Plumbing</option>
                <option value="sanitary">Sanitary</option>
                <option value="popular">Popular</option>
                <option value="offer">Offer</option>
              </select>
            </div>

            {/* price */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text font-semibold">Price<span className="text-red">*</span></span>
              </label>
              <input
                type="number"
                placeholder="Price"
                {...register("price", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
           {/* optional */}
           <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Only for Special</span>
            </label>
            <input
              type="text"
              {...register("optional", { required: true })}
              placeholder="2 Special word"
              className="input input-bordered w-full"
            />
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
             {/* 4th row */}
          <div className="form-control w-full my-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          <button className="btn bg-green text-white px-6">
            Add Item <AiTwotoneFileAdd/>
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;
