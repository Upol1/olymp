import React from "react";
import Navbar from "./components/homePage/Navbar";
import MainRoutes from "./routes/MainRoutes";
import Footer from "./components/Footer";
import ProductContextProvider from "./components/context/ProductContextProvider";

const App = () => {
  return (
    <ProductContextProvider>
      <Navbar />
      <MainRoutes />
      <Footer />
    </ProductContextProvider>
  );
};

export default App;
