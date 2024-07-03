import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../components/homePage/MainPage";
import AdminPage from "../pages/AdminPage";
import SportsPage from "../pages/SportsPage";
import LetsMovePage from "../pages/LetsMovePage";
import AthletesPage from "../pages/AthletesPage";
import EditAthletes from "../components/products/EditAthletes";
import AddCategory from "../components/products/AddCategory";
import Favorites from "../components/Favorites";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { id: 1, link: "/", element: <MainPage /> },
    { id: 2, link: "/athletes", element: <AthletesPage /> },
    { id: 3, link: "/edit/:id", element: <EditAthletes /> },
    { id: 4, link: "/athletesPage", element: <AthletesPage /> },
    { id: 5, link: "/sports", element: <SportsPage /> },
    { id: 6, link: "/lets-move", element: <LetsMovePage /> },
    { id: 7, link: "/admin", element: <AdminPage /> },
    { id: 8, link: "/add-category", element: <AddCategory /> },
    { id: 9, link: "/favorites", element: <Favorites /> },

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
