import React, { useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFilterData } from "../../redux/productSlice";

const Header = () => {
  const Productsdata = useSelector((store) => store.cart);
  const Filtereddata = useSelector((store) => store.products);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const data = useRef();

  const dispatch = useDispatch();
  const [search, setSearchValue] = useState("");

  const handleSearchIcon = () => {
    dispatch(setFilterData(search));
    navigate("/filter-data");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSearchIcon();
  };

  return (
    <>
      {/* <nav className="flex flex-col justify-center pt-10 pb-3 px-4 md:px-16 lg:px-36  mx-auto gap-x-12 gap-y-6 mb-5 border-b-2">
        <div className="flex flex-row gap-x-8">
          <div className="flex items-center">
            <Link
              to={"/"}
              className="text-black no-underline text-xl font-bold"
            >
              <div className="text-black flex flex-col justify-start items-start text-center text-3xl font-bold">
                <h1 className="relative z-20">E_Shop</h1>
                <span className="relative  before:block before:absolute before:-inset-1 before:-skew-y-6 before:bg-[#dc2626] w-20 "></span>
              </div>
            </Link>
          </div>

          <form onSubmit={handleFormSubmit}>
            <div className="flex flex-1 border-2 relative rounded-lg min-w-[930px]">
              <input
                type="text"
                placeholder="Search..."
                className=" w-full px-3 py-1"
                ref={data}
                onChange={(e) => setSearchValue(e.target.value)}
              />

              <IoSearch
                className="text-xl absolute top-1 right-1 flex justify-end"
                style={{ fill: " #dc2626" }}
                onClick={handleSearchIcon}
              />
            </div>
          </form>

          <div className="flex items-center flex-row gap-x-2">
            <div className="flex flex-row justify-end relative  ">
              <Link to={"/cart"}>
                <FaCartArrowDown />
                <span className="bg-red-500 text-white p-[10px] rounded-full text-xs absolute -top-4 left-2 w-4 h-4 flex items-center justify-center">
                  {Productsdata.products.length}
                </span>
              </Link>
            </div>
            <div>
              <Link to={"/login"}>
                <button>Login</button>
              </Link> | <Link to={"/register"}>
                <button> Register </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-end gap-x-9 relative  text-sm font-medium">
          <Link
            className="no-underline text-black hover:underline hover:text-red-600"
            to={"/"}
          >
            Home
          </Link>
          <Link
            className="no-underline text-black hover:underline hover:text-red-600"
            to={"/shop"}
          >
            Shop
          </Link>
          <Link
            className="no-underline text-black hover:underline hover:text-red-600"
            to={"/contact"}
          >
            Contact
          </Link>
          <Link
            className="no-underline text-black hover:underline hover:text-red-600"
            to={"/about-us"}
          >
            About Us
          </Link>
        </div>
      </nav> */}

      <nav className="flex flex-col pt-4 pb-3 px-4 lg:px-36 mx-auto border-b-2">
        <div className="flex flex-row items-center justify-between gap-4 lg:gap-7">
          <div className="flex items-start ">
            <Link
              to={"/"}
              className="text-black no-underline text-xl font-bold"
            >
              <div className="text-black flex flex-col justify-start items-start text-center text-3xl font-bold">
                <h1 className="relative z-20">E_Shop</h1>
                <span className="relative before:block before:absolute before:-inset-1 before:-skew-y-6 before:bg-[#dc2626] w-20"></span>
              </div>
            </Link>
          </div>

          <form
            onSubmit={handleFormSubmit}
            className="flex flex-1 border-2 relative rounded-lg lg:top-1"
          >
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-1"
              ref={data}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <IoSearch
              className="text-xl absolute top-1 right-1 flex justify-end"
              style={{ fill: "#dc2626" }}
              onClick={handleSearchIcon}
            />
          </form>

          <div className="flex items-center gap-3 relative lg:top-1">
            <div className="relative">
              <Link to={"/cart"} className="text-black text-xl">
                <FaCartArrowDown />
              </Link>
              <span className="bg-red-500 text-white p-[10px] rounded-full text-xs absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center">
                {Productsdata.products.length}
              </span>
            </div>

            <div className="hidden lg:flex gap-x-1">
              <Link to={"/login"}>
                <button className="hover:underline hover:text-red-600">Login</button>
              </Link>
              |
              <Link to={"/register"}>
                <button className="hover:underline hover:text-red-600">Register</button>
              </Link>
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-black text-2xl"
              >
                ☰
              </button>
            </div>
          </div>
        </div>

        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row gap-y-3 lg:gap-x-9 text-sm font-medium mt-9 lg:mt-5 lg:justify-center`}
        >
          <Link
            className="no-underline text-black hover:underline hover:text-red-600"
            to={"/"}
          >
            Home
          </Link>
          <Link
            className="no-underline text-black hover:underline hover:text-red-600"
            to={"/shop"}
          >
            Shop
          </Link>
          <Link
            className="no-underline text-black hover:underline hover:text-red-600"
            to={"/contact"}
          >
            Contact
          </Link>
          <Link
            className="no-underline text-black hover:underline hover:text-red-600"
            to={"/about-us"}
          >
            About Us
          </Link>

          {isMenuOpen && (
            <div className="flex flex-col gap-y-2">
              <div className="flex gap-x-2">
                <Link to={"/login"}>
                  <button className="hover:underline hover:text-red-600">Login</button>
                </Link>
                |
                <Link to={"/register"}>
                  <button className="hover:underline hover:text-red-600">Register</button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
