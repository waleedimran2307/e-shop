import React, { useEffect, useState } from "react";
import { FaCarSide, FaQuestion } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductsDetail = () => {
  const { id } = useParams();
  const products = useSelector((store) => store.products.products);
  const [detailProducts, setDetailProducts] = useState("");


  useEffect(() => {
    const newProducts = products.find((product) => product.id === id);
    setDetailProducts(newProducts);
  }, [id, detailProducts]);

  return (
    <>
      <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row gap-x-16 gap-y-5">
          <div className="md:w-1/2 py-4 shadow-md md:px-8 h-96 flex justify-center">
            <img
              src={detailProducts.imgURL}
              alt="No image"
              className="h-full"
            />
          </div>

          <div className="md:w-1/2 p-4 shadow-md md:p-16 flex flex-col items-center gap-y-2">
            <h2 className="text-3xl font-semibold mb-2">
              {" "}
              {detailProducts.Name}{" "}
            </h2>
            <p className="text-xl font-semibold text-gray-800 mb-4">
              {" "}
              ${detailProducts.Price}{" "}
            </p>

            <div className="flex items-center mb-4 gap-x-2">
              <input
                type="number"
                id="quantity"
                min="1"
                className="border p-1 w-16"
              />
              <button className=" bg-red-600 text-white py-1.5 px-4 hover:bg-red-800 ">
                Add to Cart
              </button>
            </div>

            <div className="flex flex-col gap-y-4 mt-4">
              <p className="flex items-center">
                <FaCarSide className="mr-1" />
                Delivery & Return
              </p>

              <p className="flex items-center">
                <FaQuestion className="mr-1" />
                Ask a Question
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold mb-2">Product Description</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
            voluptate quos impedit libero odio numquam sint culpa, in dolore a
            nostrum, iusto quia consequatur expedita! Iste at explicabo minus
            velit?
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductsDetail;
