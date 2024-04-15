import React from "react";
import { useTheme } from "../hooks/ThemeContext";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  const { isDarkMode } = useTheme();
  return (
    <div>
      <footer className={`footer xl:px-24 py-10 px-4 text-base-content ${
          isDarkMode ? "dark" : "" // Apply dark mode class
        }`}>
        <aside>
          <img src="/logo.png" alt="" />
          <p className="my-5 md:w-40">
            <p className="font-bold">
            Hazi Marbel House ❤️.
            </p>
            <p>Lohapur, Birbhum, WB</p>
            <hr />
            Providing reliable tech since<scan className="font-bold text-orange-500"> 2019 </scan>.
          </p>
        </aside>
        <nav>
          <header className="footer-title text-black">Useful links</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Events</a>
          <a className="link link-hover">Blogs</a>
          <a className="link link-hover">FAQ</a>
        </nav>
        <nav>
          <header className="footer-title">Main Menu</header>
          <a className="link link-hover" href="/">Home</a>
          <a className="link link-hover" href="/offer">Offers</a>
          <a className="link link-hover"href="/menu">Product</a>
          <a className="link link-hover">Online Booking</a>
        </nav>
        <nav>
          <header className="footer-title" href="/contact">Contact Us</header>
          <a className="link link-hover"><p><IoMdMail/></p>hazimarble@gmail.com</a>
          <a className="link link-hover font-bold"><FaPhoneVolume />9064837856</a>
          <a className="link link-hover font-bold">7074574202</a>
          <a className="link link-hover">Social media</a>
        </nav>
      </footer>
        <hr />
      <footer  className={`footer items-center xl:px-24 px-4 py-4 mt-2 ${
          isDarkMode ? "dark" : "" // Apply dark mode class
        }`}>
        <aside className="items-center grid-flow-col">
          <p>Copyright © 2024 - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a
            href="https://www.facebook.com/hazimarble"
            className="cursor-pointer"
          >
            <FaInstagram className="w-5 h-5 text-pink-700" />
          </a>
          <a
            href="https://www.facebook.com/hazimarble"
            className="cursor-pointer"
          >
            <LuFacebook className="w-5 h-5 text-blue-500" />
          </a>
          <a
            href="https://www.facebook.com/hazimarble"
            className="cursor-pointer"
          >
            <AiOutlineYoutube className="w-5 h-5 text-red" />
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
