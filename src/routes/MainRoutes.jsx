import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../components/homePage/MainPage";
import EditProduct from "../components/products/EditProduct";
import AboutPage from "../pages/AboutPage";
import AdminPage from "../pages/AdminPage";
import ProductPage from "../pages/ProductPage";
import AtletesPage from "../pages/AtletesPage";
import SportsPage from "../pages/SportsPage";
import LetsMovePage from "../pages/LetsMovePage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { id: 1, link: "/", element: <MainPage /> },
    { id: 2, link: "/products", element: <ProductPage /> },
    { id: 3, link: "/edit/:id", element: <EditProduct /> },
    { id: 4, link: "/atletes", element: <AtletesPage /> },
    { id: 5, link: "/sports", element: <SportsPage /> },
    { id: 6, link: "/lets-move", element: <LetsMovePage /> },
    { id: 7, link: "/admin", element: <AdminPage /> },
    // { id: 8, link: "/cart", element: <CartPage /> },
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
