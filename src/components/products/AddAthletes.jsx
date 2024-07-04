import React, { useState } from "react";
import { useProduct } from "../context/ProductContextProvider";
import { Box, TextField, Button } from "@mui/material";

const AddAthletes = () => {
  const { createAthlete } = useProduct(); // Использование хука useContext для получения функции createAthlete из ProductContextProvider
  const [athlete, setAthlete] = useState({
    // Использование хука useState для управления состоянием формы
    name: "",
    sport: "",
    country: "",
    image: "",
  });

  // Обработчик изменения значений полей ввода
  const handleChange = (e) => {
    setAthlete({ ...athlete, [e.target.name]: e.target.value });
  };

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    createAthlete(athlete); // Вызов функции createAthlete для добавления нового спортсмена
    //  сброс значений после отправки формы
    setAthlete({
      name: "",
      sport: "",
      country: "",
      image: "",
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit} // Обработчик отправки формы
      sx={{
        width: "500px",
        height: "350px",
        padding: 2,
        border: "1px solid black",
        borderRadius: 1,
        margin: "100px",
        backgroundColor: "#ADE8FE",
        color: "#01263a",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginLeft: "70px",
        float: "left",
      }}
    >
      <TextField
        fullWidth
        type="text"
        name="name"
        value={athlete.name}
        onChange={handleChange} // Обработчик изменения для поля 'name'
        label="Name"
        sx={{ marginBottom: "16px", backgroundColor: "#b5ffe1" }}
      />
      <TextField
        fullWidth
        type="text"
        name="sport"
        value={athlete.sport}
        onChange={handleChange} // Обработчик изменения для поля 'sport'
        label="Sport"
        sx={{ marginBottom: "16px", backgroundColor: "#b5ffe1" }}
      />
      <TextField
        fullWidth
        type="text"
        name="country"
        value={athlete.country}
        onChange={handleChange}
        label="Country"
        sx={{ marginBottom: "16px", backgroundColor: "#b5ffe1" }}
      />
      <TextField
        fullWidth
        minRows={3}
        name="image"
        value={athlete.image}
        onChange={handleChange}
        label="Image"
        sx={{ marginBottom: "16px", backgroundColor: "#b5ffe1" }}
      />
      <Button type="submit" variant="contained" color="success">
        Add Athlete
      </Button>
    </Box>
  );
};

export default AddAthletes;
