import React from "react";
import { Link } from "react-router-dom";
import { SlSocialTwitter } from "react-icons/sl";
import { GrLinkedinOption } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io";
import { RiFacebookFill } from "react-icons/ri";

const Footer = () => {
  const footerData = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Shop",
      path: "/shop",
    },
    {
      title: "About Us",
      path: "/about-us",
    },
    {
      title: "Contact Us",
      path: "/contact-us",
    },
  ];

  return (
    <>

      <footer>
        <div className="flex flex-col gap-y-10 relative top-12 bg-gray-900 text-white pt-20 lg:px-20 px-4 pb-4">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-10">
          
            <div className="flex flex-col gap-y-6">
              <Link to={"/"}>
                <div className="text-white flex flex-col justify-start  text-3xl font-bold">
                  <h1 className="relative z-20">E_Shop</h1>
                  <span className="relative before:block before:absolute before:-inset-1 before:-skew-y-6 before:bg-[#dc2626] w-20"></span>
                </div>
              </Link>
              <p className="text-sm text-left mx-auto lg:pr-10">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
                odit laborum nemo, hic eius culpa quisquam tempore dicta dolor
                nisi ullam, dolore porro esse similique est maxime, doloribus
                corporis libero.
              </p>
            </div>

            <div className="flex flex-col justify-start  sm:items-center items-start gap-y-5  lg:text-left">
              <h1 className="text-base">Quick Links</h1>
              <div className="flex flex-col gap-y-2 text-sm">
                {footerData.map((data, index) => (
                  <div
                    key={index}
                    className="hover:text-red-600 hover:underline"
                  >
                    <Link to={data.path}>{data.title}</Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-y-4  md:text-left">
              <h1 className="text-base mb-2">Follow Us</h1>
              <div className="flex flex-row justify-start gap-x-3">
                <div className="border rounded-full bg-white w-7 h-7 flex justify-center items-center hover:bg-red-600 hover:border-none group">
                  <a href="#">
                    <RiFacebookFill className="fill-black group-hover:fill-white" />
                  </a>
                </div>
                <div className="border rounded-full bg-white w-7 h-7 flex justify-center items-center hover:bg-red-600 hover:border-none group">
                  <a href="#">
                    <SlSocialTwitter className="fill-black group-hover:fill-white" />
                  </a>
                </div>
                <div className="border rounded-full bg-white w-7 h-7 flex justify-center items-center hover:bg-red-600 hover:border-none group">
                  <a href="#">
                    <IoLogoInstagram className="fill-black group-hover:fill-white" />
                  </a>
                </div>
                <div className="border rounded-full bg-white w-7 h-7 flex justify-center items-center hover:bg-red-600 hover:border-none group">
                  <a href="#">
                    <GrLinkedinOption className="fill-black group-hover:fill-white" />
                  </a>
                </div>
              </div>
              <div className="flex flex-row justify-center md:justify-start">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full pl-2 border border-gray-500 rounded-l-md bg-transparent text-base outline-none"
                />
                <span className="relative bg-red-600 text-base p-2 rounded-r-md cursor-pointer">
                  Subscribe
                </span>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-gray-600 relative flex sm:flex-row flex-col gap-y-3 sm:justify-between pt-5">
            <div className="text-center sm:text-left text-sm">
              © 2024 E_Shop All rights reserved
            </div>
            <div className="flex flex-row justify-center gap-x-2 items-center relative text-center sm:text-left">
              <span className="sm:text-sm text-xs cursor-pointer">Privacy Policy</span> 
               <span className="lg:hidden block"> | </span>
              <span className="sm:text-sm text-xs cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
