import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import SideBar from "./SideBar";
import PaginationControlled from "./Pagination";
import { useProduct } from "../context/ProductContextProvider";

const ProductList = () => {
  // Использование контекста для получения функций и данных о спортсменах
  const { getAthletes, athletes: athleteData } = useProduct();

  // Состояние для текущей страницы пагинации
  const [page, setPage] = useState(1);

  // Загрузка списка спортсменов при загрузке компонента
  useEffect(() => {
    getAthletes();
  }, []);

  // Количество элементов на странице пагинации
  const itemPerPage = 6;

  // Вычисление общего количества страниц пагинации на основе данных спортсменов
  const count = Math.ceil(athleteData.length / itemPerPage);

  // Функция для получения текущих данных на текущей странице
  const currentData = () => {
    const beginIndex = (page - 1) * itemPerPage;
    const endIndex = beginIndex + itemPerPage;
    return athleteData.slice(beginIndex, endIndex);
  };

  // Обработчик изменения страницы пагинации
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <SideBar />

      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {currentData().map((athlete) => (
          <ProductCard key={athlete.id} product={athlete} />
        ))}

        <PaginationControlled
          page={page}
          count={count}
          handleChange={handleChange}
        />
      </Box>
    </Box>
  );
};

export default ProductList;
