import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";
import { FaHeadset } from "react-icons/fa6";

const InfoSection = () => {
  const infoData = [
    {
      icon: <FaShippingFast />,
      title: "Free Shipping",
      data: "Get Your orders delivered with no extra time ",
    },
    {
      icon: <FaHeadset />,
      title: "Support 24/7",
      data: "We are here to assist you anytime  ",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "100% Money back",
      data: "Full refund if you are not satisfied ",
    },
    {
      icon: <FaLock />,
      title: "Payment Secure",
      data: "Your payment information is safe with us   ",
    },
    {
      icon: <MdDiscount />,
      title: "Discount",
      data: "Enjoy the best prices on our products ",
    },
  ];

  return (
    <>
      <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 xl:grid-cols-5 mx-auto gap-3 justify-center xl:px-20 lg:px-16 px-6 w-full">
        {infoData.map((info, index) => (
          <div
            key={index}
            className="flex flex-col items-center py-6 px-6 gap-y-2 shadow-inner border rounded-lg bg-white  text-black transform transition-transform duration-300 hover:scale-105"
          >
            <span className="text-2xl" style={{ color: "#dc2626" }}>
              {info.icon}
            </span>
            <h2 className="text-lg font-medium mb-1 ">{info.title}</h2>
            <p className="text-center text-sm  text-gray-400">{info.data}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default InfoSection;
