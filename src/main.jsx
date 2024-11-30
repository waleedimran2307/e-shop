

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { Routing } from "./router/Rounting.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={Routing}>
        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>
);