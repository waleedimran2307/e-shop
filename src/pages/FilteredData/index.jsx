import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";

const FilteredData = () => {
  const Filtereddata = useSelector((store) => store.products);

  return (
    <>
      {Filtereddata && Filtereddata.filteredData.length > 0 ? (
        <div className="flex flex-col relative top-5 xl:px-20 lg:px-16 px-6 mb-20">
          <div className="text-black flex flex-col justify-center items-center text-center text-3xl font-bold">
            <h1 className="relative z-20">Shop</h1>
            <span className="relative  before:block before:absolute before:-inset-1 before:-skew-y-6 before:bg-[#dc2626] w-16"></span>
          </div>

          <div className="grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2  lg:gap-4  gap-3 relative top-10">
            {Filtereddata.filteredData.map((item, index) => (
              <ProductCard item={item} key={index} />
            ))}
          </div>
        </div>
      ) : (
        <div className=" flex justify-center items-center mx-auto mb-9 mt-5">
          <h1 className=" container text-xl  p-2 bg-red-500   text-white  text-center">
            There is no Product!
          </h1>
        </div>
      )}
    </>
  );
};

export default FilteredData;
