import { useDispatch, useSelector } from "react-redux";
import CategoriesSection from "../../components/CategoriesSection";
import HeroSection from "../../components/HeroSection";
import InfoSection from "../../components/InfoSection";
import TopProducts from "../../components/TopProducts";
import { setProducts } from "../../redux/productSlice";
import { mockUpdata } from "../../MockUpData";
import { useEffect } from "react";
import Shop from "../Shop";

const Home = () => {
  const products = useSelector((store) => store.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setProducts(mockUpdata));
  }, []);

  return (
    <>
      <div className="  flex flex-col xl:gap-y-20 gap-y-12 ">
        <HeroSection />
        <InfoSection />
        <CategoriesSection />
        <TopProducts products={products} />
        <Shop products={products} />
      </div>
    </>
  );
};

export default Home;
