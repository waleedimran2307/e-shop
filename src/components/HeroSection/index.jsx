import React from "react";
import { CiCircleChevRight } from "react-icons/ci";

const HeroSection = () => {
  const categoriesData = [
    "Electronics",
    "Fashion",
    "Home and Kitchen",
    "Beauty",
    "Sports",
    "Automotive",
  ];

  return (
    <>
      <section className="  grid lg:grid-cols-6 grid-cols-1 xl:px-24 lg:px-16  px-6  py-3 gap-x-2 bg-white mt-2 ">
        <div>
          <div className="container col-span-1 border border-slate-300 lg:block hidden">
            <div className="text-white bg-[#dc2626] uppercase text-sm p-1">
              <h2>Shop by categories</h2>
            </div>

            {categoriesData.map((item, index) => (
              <div key={index}>
                <div className="flex flex-row px-1 pt-2 text-sm font-normal pb-1  bg-slate-100 gap-x-1 items-center ">
                  <span>
                    <CiCircleChevRight />
                  </span>
                  <span> {item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-5 bg-gray-300 w-full mt-8 md:mt-0 h-96 relative">
          <img
            src="https://png.pngtree.com/thumb_back/fw800/background/20230930/pngtree-d-render-of-a-smartphone-basket-and-shopping-cart-with-gift-image_13550310.png"
            alt="No image"
            className="h-full w-full"
          />
          <div className="absolute  top-12 lg:left-8 left-3">
            <h2 className=" xl:text-3xl lg:text-xl text-base font-bold">
              Welcome to E_Shop
            </h2>
            <p className="text-xl mt-2.5 font-bold text-gray-800  ">
              MILLIONS + PRODUCTS
            </p>
            <button className=" bg-[#dc2626] px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105 rounded-lg">
              SHOP NOW
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
