import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../components/homePage/MainPage";
import EditProduct from "../components/products/EditProduct";
import AboutPage from "../pages/AboutPage";
import AdminPage from "../pages/AdminPage";
import ProductPage from "../pages/ProductPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { id: 1, link: "/", element: <MainPage /> },
    { id: 2, link: "/products", element: <ProductPage /> },
    { id: 3, link: "/edit/:id", element: <EditProduct /> },
    { id: 4, link: "/about", element: <AboutPage /> },
    // { id: 5, link: "/contacts", element: <ContactsPage /> },
    { id: 6, link: "/admin", element: <AdminPage /> },
    // { id: 7, link: "/cart", element: <CartPage /> },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((elem) => (
        <Route key={elem.id} path={elem.link} element={elem.element} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
