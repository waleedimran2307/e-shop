import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";

const Shop = () => {
  const products = useSelector((store) => store.products);

  return (
    <>
      <div className="flex flex-col relative top-5 xl:px-20 lg:px-16 px-6 mb-20">
        <div className="text-black flex flex-col justify-center items-center text-center text-3xl font-bold">
          <h1 className="relative z-20">Shop</h1>
          <span className="relative  before:block before:absolute before:-inset-1 before:-skew-y-6 before:bg-[#dc2626] w-16"></span>
        </div>

        <div className="grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2  lg:gap-4  gap-3 relative top-10">
          {products.products.map((item, index) => (
            <ProductCard item={item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
