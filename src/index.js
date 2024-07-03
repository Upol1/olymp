import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductContextProvider from "./components/context/ProductContextProvider";
import FavoriteContextProvider from "./components/context/FavoriteContextProvider";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <FavoriteContextProvider>
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
    </FavoriteContextProvider>
  </BrowserRouter>
);
