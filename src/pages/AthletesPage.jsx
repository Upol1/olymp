import React, { useEffect } from "react";
import ProductList from "../components/products/ProductList";
import { useProduct } from "../components/context/ProductContextProvider";
import { useNavigate } from "react-router-dom";

const AthletesPage = () => {
  const { products } = useProduct();
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/athletes");
  }, [navigate]);

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      <ProductList products={products} />
    </div>
  );
};

export default AthletesPage;
