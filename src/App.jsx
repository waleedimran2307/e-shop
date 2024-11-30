import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header/index";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer theme="dark" bodyClassName="toast-body" />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
