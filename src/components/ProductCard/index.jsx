import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { Rate } from "antd";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { setStarRatingsProduct } from "../../redux/productSlice";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [starRatings, setStarRatings] = useState(item.starRatings);
  const cartItems = useSelector((state) => state.cart);
  const handleChangeStars = (e) => {
    setStarRatings(e);
  };

  const finalData = {
    Name: item.Name,
    Price: item.Price,
    id: item.id,
    imgURL: item.imgURL,
    starRatings: starRatings,
  };

  useEffect(() => {
    dispatch(setStarRatingsProduct(finalData));
  }, [starRatings]);

  const handleAddtoCart = (e, item) => {
    e.stopPropagation();
    e.preventDefault();

    const isItemInCart = cartItems.products.find(
      (cartItem) => cartItem.id === item.id
    );

    if (isItemInCart) {
      toast.info("Item already added in the cart!");
    } else {
      dispatch(addToCart(finalData));
      toast.success("Item added to the cart!");
    }
  };

  return (
    <>
      <div
        className="  px-3 py-3 flex flex-col gap-y-4 shadow-lg  border border-gray-200 transform transition-transform 
          duration-300 hover:scale-105 "
      >
        <img
          src={item.imgURL}
          alt="No image"
          className="w-3/3 max-h-48 object-contain"
        />
        <div className="flex flex-col gap-y-1">
          <h3 className="text-sm text-black"> {item.Name} </h3>
          <span className="text-xs text-gray-400"> {item.Price} </span>

          <div className="flex flex-col gap-y-2 mt-1">
            <Rate
              className="mb-1"
              value={starRatings}
              onChange={(e) => handleChangeStars(e)}
            />

            <button
              className="bg-[#dc2626] p-1 rounded-md text-white hover:bg-red-800"
              onClick={(e) => handleAddtoCart(e, item)}
            >
              {" "}
              Add to Cart
            </button>
            <button
              className="bg-gray-500 p-1 rounded-md text-white hover:bg-gray-700"
              onClick={() => navigate(`/product-detail/${item.id}`)}
            >
              {" "}
              View Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
