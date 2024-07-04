import React, { useState } from "react";
import { useProduct } from "../context/ProductContextProvider";
import { Box, TextField, Button } from "@mui/material";

const AddCategory = () => {
  // Использование контекста для работы с продуктами (спортами)
  const { createSport } = useProduct();

  // Состояние для хранения названия новой категории
  const [sport, setSport] = useState({
    name: "",
  });

  // Обработчик изменения значений полей формы
  const handleChange = (e) => {
    setSport({ ...sport, [e.target.name]: e.target.value });
  };

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    createSport(sport); // Вызов функции для создания новой категории спорта
    setSport({ ...sport, name: "" }); // Очистка поля ввода после добавления
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: "30%",
        height: "auto",
        padding: 2,
        border: "1px solid black",
        borderRadius: 1,
        margin: "100px 2%",
        backgroundColor: "#b5ffe1",
        color: "#01263a",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        top: "345px",
        right: "70px",
      }}
    >
      <TextField
        type="text"
        name="name"
        value={sport.name}
        onChange={handleChange}
        label="Sport Name"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: "16px", backgroundColor: "#ADE8FE" }}
      />
      <Button type="submit" variant="contained" color="primary">
        Add Category
      </Button>
    </Box>
  );
};

export default AddCategory;
