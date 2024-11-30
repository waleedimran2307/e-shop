import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../components/Error";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/cart";
import Checkout from "../pages/checkout";
import OrderConfirmation from "../pages/OrderConfirmation";
import FilteredData from "../pages/FilteredData";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProductsDetail from "../pages/ProductsDetail/";
import Contact from "../pages/Contact";

export const Routing = createBrowserRouter([
  {
    element: <App />,
    path: "/",

    children: [
      {
        element: <Home />,
        path: "/",
        errorElement: <Error />,
      },
      {
        element: <Shop />,
        path: "/shop",
        errorElement: <Error />,
      },
      {
        element: <Cart />,
        path: "/cart",
        errorElement: <Error />,
      },
      {
        element: <Checkout />,
        path: "/checkout",
        errorElement: <Error />,
      },
      {
        element: <OrderConfirmation />,
        path: `/order-confirmation/:id`,
        errorElement: <Error />,
      },
      {
        element: <FilteredData />,
        path: "/filter-data",
        errorElement: <Error />,
      },
      {
        element: <ProductsDetail />,
        path: "/product-detail/:id",
        errorElement: <Error />,
      },
      {
        element: <Contact />,
        path: "/contact",
        errorElement: <Error />,
      },
    ],
  },
  {
    element: <Login />,
    path: "/login",
    errorElement: <Error />,
  },
  {
    element: <Register />,
    path: "/register",
    errorElement: <Error />,
  },

  {
    element: <Error />,
    path: "*",
  },
]);
