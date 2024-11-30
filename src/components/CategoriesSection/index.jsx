import React from "react";

const CategoriesSection = () => {
  const data = [
    {
      img: "https://img.freepik.com/free-photo/portrait-man-shopping-buying-consumer-goods_23-2151669741.jpg",
      title: "Men ",
    },
    {
      img: "https://img.freepik.com/premium-photo/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone_8087-3877.jpg",
      title: "Women ",
    },
    {
      img: "https://thumbs.dreamstime.com/b/shopping-day-children-bunch-packages-kids-fashion-girls-sisters-friends-bags-violet-background-image-everything-170267000.jpg",
      title: "Kids",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-3 xl:gap-4 sm:gap-x-2  gap-x-1  xl:container xl:px-14 lg:px-16 px-6 mx-auto">
        {data.map((category, index) => (
          <div className="flex flex-row  mx-auto relative  transform transition-transform 
          duration-300 hover:scale-105 hover:z-[1000] cursor-pointer " key ={index}>
            <img src={category.img} alt="No image" className=" rounded-lg object-cover shadow-md h-full w-full" />
            <div className=" absolute sm:left-5 left-2 xl:top-[25%] top-2  flex flex-col">
              <h2 className="lg:text-3xl sm:text-base text-xs font-semibold">{category.title}</h2>
              <span className="text-neutral-700 text-xs pl-[2px]">View All</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoriesSection;
