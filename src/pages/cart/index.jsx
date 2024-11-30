import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  addQuantityFromCart,
  addToCart,
  DecreaseQuantityFromCart,
  deleteToCart,
} from "../../redux/cartSlice";
import OpenModal from "../../components/OpenModal";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Cart = () => {
  const [openModal, setOpenModal] = useState(false);
  const cartData = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [address, setAddress] = useState("");

  // Subtract function
  const handleSubtractButton = (e, data) => {
    if (data.quantity > 1) {
      dispatch(DecreaseQuantityFromCart(data));
    }
  };

  // add function
  const handleAddButton = (e, data) => {
    if (data.quantity > 20) return;
    dispatch(addQuantityFromCart(data));
  };

  // delete Product
  const handleDeleteProduct = (e, data) => {
    dispatch(deleteToCart(data));
    toast.success("Item has been deleted Successfully!")
  };

  const renderData = () => {
    return cartData.products.map((data, index) => {
      return (
        <div
          className="grid grid-cols-7 items-center text-sm font-light  border-b border-gray-300 w-full  md:gap-x-8 gap-x-14 pt-2 pb-2 "
          key={index || data.id}
        >
          <div className="sm:col-span-3 col-span-2 flex flex-row gap-x-2 items-center">
            <img src={data.imgURL} alt="No image" className="w-14 h-14" />
            {data.name}
          </div>
          <h1> ${data.price} </h1>

          <div className="flex flex-row items-center gap-x-1 px-0 border border-gray-200 w-full min-w-min">
            <button
              className="bg-slate-200 p-1  w-full"
              onClick={(e) => handleSubtractButton(e, data)}
            >
              -
            </button>
            <h1 className="w-full text-center"> {data.quantity} </h1>
            <button
              className="bg-slate-200 p-1 w-full"
              onClick={(e) => handleAddButton(e, data)}
            >
              +
            </button>
          </div>
          <h1> ${data.totalPrice} </h1>
          <div
            className=" relative left-2"
            onClick={(e) => handleDeleteProduct(e, data)}
          >
            <RiDeleteBinLine className="w-5 h-5 fill-red-500 hover:fill-red-700" />
          </div>
        </div>
      );
    });
  };

  return (
    <>
      {cartData.products && cartData.products.length > 0 ? (
        <>
          <div className=" flex justify-center items-center xl:px-12 sm:px-12 px-1 mb-9 w-full mt-5">
            <h1 className="uppercase  w-full  text-xl  p-2 bg-red-500   text-white  text-center">
              Shopping Cart
            </h1>
          </div>

          <div className=" xl:px-10 lg:px-10 sm:px-12 px-2 grid lg:grid-cols-2 grid-cols-1 xl:gap-x-6 gap-x-8 mb-10">
            {/* Add cart products detail  */}

            <div className="flex flex-col gap-y-4">
              <div className="grid sm:grid-cols-7 grid-cols-7  md:text-sm text-xs font-medium  md:uppercase md:gap-x-8 gap-x-14">
                <h1 className="sm:col-span-3 col-span-2 pl-4">Product</h1>
                <h1>Price</h1>
                <h1>Quantity</h1>
                <h1>Subtotal</h1>
                <h1>Remove</h1>
              </div>

              {cartData.products &&
                cartData.products.length > 0 &&
                renderData()}
            </div>

            {/* products summary  */}
            <div className=" border border-gray-300 shadow-inner rounded-md relative xl:top-12 top-5 lg:max-w-full  lg:mx-0  p-4  lg:w-full    max-h-min    gap-y-1">
              <div className="text-xs font-medium uppercase">
                <p>Cart Totals</p>
              </div>

              <div className=" text-xs font-thin text-gray-500 uppercase border-b border-gray-300 mt-2 mb-1">
                <div className="mb-1 flex flex-row justify-between">
                  <p>Total Items</p>
                  <span> {cartData.totalQuantity} </span>
                </div>
              </div>

              <div className="flex flex-col w-full pr-10 pt-2 border-b border-gray-300 ">
                <p className=" text-sm"> Shipping:</p>

                <div className="flex flex-col relative left-4">
                  {address === "" ? (
                    <p className="text-sm w-full">shipping to...</p>
                  ) : (
                    <p className="text-sm w-full">
                      shipping to{" "}
                      <span className="font-bold text-xs"> {address} </span>
                    </p>
                  )}

                  <span
                    className="text-blue-600 no-underline text-xs pb-2 cursor-pointer hover:underline"
                    onClick={() => setOpenModal(true)}
                  >
                    Change Address
                  </span>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex flex-row text-sm justify-between py-2 ">
                  <p>Total Price:</p>
                  <div className="flex flex-col">
                    <span>${cartData.totalPrice.toFixed(2)} </span>
                  </div>
                </div>
              </div>

              <button
                className="bg-red-500 p-1 text-white text-sm font-normal w-full"
                onClick={() => navigate("/checkout")}
              >
                Proceed to checkout
              </button>
            </div>

            <OpenModal
              openModal={openModal}
              setOpenModal={setOpenModal}
              setAddress={setAddress}
            />
          </div>
        </>
      ) : (
        <div className=" flex justify-center items-center mx-auto mb-9">
          <h1 className=" container text-xl  p-2 bg-red-500   text-white  text-center">
            Card is Empty!
          </h1>
        </div>
      )}
    </>
  );
};

export default Cart;
