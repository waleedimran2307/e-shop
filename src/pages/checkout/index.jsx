import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AccordionSection from "../../components/AccordionSection";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Checkout = () => {
  const cartData = useSelector((store) => store.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [shippingData, setShippingData] = useState(() => {
    const savedData = localStorage.getItem("shippingData");
    return savedData
      ? JSON.parse(savedData)
      : {
          Name: "",
          Email: "",
          Phone: "",
          Address: "",
          City: "",
          Zip_Code: "",
        };
  });

  useEffect(() => {
    localStorage.setItem("shippingData", JSON.stringify(shippingData));
  }, [shippingData]);

  //  place order function
  const handlePlaceOrder = () => {
    const isFormValid = Object.values(shippingData).every(
      (value) => value.trim() !== ""
    );

    if (isFormValid) {
      const id = uuidv4().replace(/\D/g, "").slice(0, 15).substr(0, 4);
      const Orderid = Number(id);
      navigate(`/order-confirmation/${Orderid}`, {
        state: shippingData,
      });
    } else {
      console.log("Please fill in all fields before placing the order.");
    }
  };

  const renderData = () => {
    return cartData.products.map((item, index) => {
      return (
        <div
          className="grid grid-cols-3 items-center text-xs  border-b border-gray-200 pb-1"
          key={item.id || index}
        >
          <div className="flex flex-row gap-x-3 col-span-2 items-center">
            <img
              src={item.imgURL}
              alt="No image"
              className="w-16 h-16 object-contain  rounded"
            />

            <div className="flex flex-col">
              <h3>{item.name}</h3>
              <span className="text-xs font-light text-gray-500">
                {" "}
                ${item.price} x {item.quantity}{" "}
              </span>
            </div>
          </div>

          <span className="text-right">${item.totalPrice}</span>
        </div>
      );
    });
  };

  return (
    <>
      {cartData.products && cartData.products.length > 0 ? (
        <>
          <div className=" flex justify-center items-center sm:px-12  px-2 mb-9 mt-5 w-full">
            <h1 className="uppercase  w-full  text-xl  p-2 bg-red-500   text-white  text-center">
              Checkout
            </h1>
          </div>

          <div className=" sm:px-12 px-2  grid lg:grid-cols-2 grid-cols-1 md:justify-items-start justify-items-center gap-x-4">
            <AccordionSection
              shippingData={shippingData}
              setShippingData={setShippingData}
            ></AccordionSection>

            {/* order summary  */}
            <div className=" border border-gray-300 shadow-inner rounded-md relative lg:top-20 top-5 xl:max-w-full  w-full p-4  max-h-min  flex flex-col  gap-y-2 ">
              <div className="text-xs font-medium uppercase pb-4">
                <p>Order Summary</p>
              </div>

              {renderData()}

              <div className="flex flex-col">
                <div className="flex flex-row text-sm justify-between py-2 ">
                  <p>Total Price:</p>
                  <div className="flex flex-col">
                    <span>${cartData.totalPrice.toFixed(2)} </span>
                  </div>
                </div>
              </div>

              <button
                className="bg-red-500 p-1 text-white text-sm font-normal hover:bg-red-800"
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className=" flex justify-center items-center mx-auto mb-9">
          <h1 className=" container text-xl  p-2 bg-red-500   text-white  text-center">
            There is no product for checkout!
          </h1>
        </div>
      )}
    </>
  );
};

export default Checkout;
