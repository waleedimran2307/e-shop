import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { emptyCart } from "../../redux/cartSlice";
import { toast } from "react-toastify";

const OrderConfirmation = () => {
  const location = useLocation();
  const { id } = useParams();
  const { Name, Address, City, Zip_Code } = location.state;
  const cartData = useSelector((store) => store.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //  products details
  const ProductData = () => {
    return cartData.products.map((item, index) => {
      return (
        <div
          className="flex flex-row justify-between text-xs text-gray-600 font-normal pl-1"
          key={item.id || index}
        >
          <p>
            {item.name} ( X {item.quantity})
          </p>
          <span>${item.totalPrice} </span>
        </div>
      );
    });
  };

  // Countinue Shopping
  const handleCountinueShopping = () => {
    dispatch(emptyCart());
    toast.success("Your order will be shipped within the next 24 hours!")
    navigate("/");
  };

  return (
    <>
      {/* <div className="flex flex-col px-40 gap-y-6">
        <div className="flex flex-col gap-y-2 relative left-1">
          <h1 className="text-xl font-medium">
            Thank you <span className="italic font-light "> {Name}</span> for
            your order!
          </h1>

          <p className="text-sm ">
            Your order has been placed successfully. You will receive an email
            confirmation shortly.
          </p>
        </div>

        <div className="flex flex-col bg-gray-200 py-5 px-4 gap-y-5 rounded-lg lg:max-w-3xl">
          <div className="flex flex-col gap-y-1">
            <h3 className="text-base font-medium">Order Summary </h3>
            <p className="text-xs text-gray-600 font-normal pl-1">
              Order Number: {id}
            </p>
          </div>
          <div className="flex flex-col gap-y-1 ">
            <h3 className="text-base font-medium">Shipping Information </h3>
            <p className="text-xs text-gray-600 font-normal pl-1">
              <span> {Address} </span> <br />
              <span>
                {City}, {Zip_Code}
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-y-1">
            <h3 className="text-base font-medium">Items Ordered </h3>
            {ProductData()}
          </div>

          <div className="flex flex-row justify-between">
            <span>Total Price:</span>
            <span className="text-xs text-gray-600 font-normal">
              ${cartData.totalPrice.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="flex flex-row gap-x-3">
          <button className="bg-green-500 text-white px-2 py-1 hover:bg-green-600 ">
            Track Order
          </button>
          <button
            className="bg-red-600 text-white px-2 py-1 hover:bg-red-800"
            onClick={() => handleCountinueShopping()}
          >
            Continue Shopping
          </button>
        </div>
      </div> */}

      <div className="flex flex-col px-6 sm:px-12 lg:px-20 xl:px-40 gap-y-6 mt-5">
        {/* Message  */}
        <div className="flex flex-col gap-y-2">
          <h1 className="text-lg sm:text-xl font-medium">
            Thank you <span className="italic font-light">{Name}</span> for your
            order!
          </h1>
          <p className="text-sm sm:text-base">
            Your order has been placed successfully. You will receive an email
            confirmation shortly.
          </p>
        </div>

        {/* order summary  */}
        <div className="flex flex-col bg-gray-200 py-5 px-4 sm:px-6 gap-y-5 rounded-lg w-full max-w-full lg:max-w-3xl">
          <div className="flex flex-col gap-y-1">
            <h3 className="text-base sm:text-lg font-medium">Order Summary</h3>
            <p className="text-xs sm:text-sm text-gray-600 font-normal pl-1">
              Order Number: {id}
            </p>
          </div>
          <div className="flex flex-col gap-y-1">
            <h3 className="text-base sm:text-lg font-medium">
              Shipping Information
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 font-normal pl-1">
              <span>{Address}</span> <br />
              <span>
                {City}, {Zip_Code}
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-y-1">
            <h3 className="text-base sm:text-lg font-medium">Items Ordered</h3>
            {ProductData()}
          </div>
          <div className="flex flex-row justify-between">
            <span className="text-sm sm:text-base font-medium">
              Total Price:
            </span>
            <span className="text-xs sm:text-sm text-gray-600 font-normal">
              ${cartData.totalPrice.toFixed(2)}
            </span>
          </div>
        </div>

        {/* button section  */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="bg-green-500 text-white px-4 py-2 text-sm sm:text-base rounded hover:bg-green-600">
            Track Order
          </button>
          <button
            className="bg-red-600 text-white px-4 py-2 text-sm sm:text-base rounded hover:bg-red-800"
            onClick={() => handleCountinueShopping()}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderConfirmation;
