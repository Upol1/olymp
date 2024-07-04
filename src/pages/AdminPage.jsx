import React from "react";
import AddAthletes from "../components/products/AddAthletes";
import AddCategory from "../components/products/AddCategory";

const AdminPage = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://cdn.finam.ru/images/publications/1631816/c68b_df60b2ee1b.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
        marginTop: "-100px",
      }}
    >
      <AddAthletes />
      <AddCategory />
    </div>
  );
};

export default AdminPage;
