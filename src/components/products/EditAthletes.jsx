import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useProduct } from "../context/ProductContextProvider";

const EditAthletes = () => {
  const { id } = useParams(); // Получаем параметр id из URL с помощью хука useParams
  const { fetchOneProduct, editAthlete, oneAthlete } = useProduct(); // Получаем необходимые функции и состояния из контекста

  // Состояние для хранения данных спортсмена, которые будут изменяться
  const [product, setProduct] = useState({
    name: "",
    sport: "",
    country: "",
    image: "",
    rating: 0,
  });

  // Эффект для загрузки данных спортсмена по id при загрузке компонента
  useEffect(() => {
    fetchOneProduct(id);
  }, [id]);

  // Эффект для обновления состояния product при получении данных о спортсмене
  useEffect(() => {
    if (oneAthlete) {
      setProduct(oneAthlete);
    }
  }, [oneAthlete]);

  // Обработчик изменения данных в полях ввода
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  // Обработчик для обновления данных спортсмена
  const handleUpdateProduct = () => {
    editAthlete(id, product);
  };

  // Обработчик изменения рейтинга (если требуется в дальнейшем)
  const handleRatingChange = (newRating) => {
    setProduct({
      ...product,
      rating: newRating,
    });
  };

  return (
    <Box
      sx={{
        width: "50%",
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="h4" align="center">
        Edit Athlete
      </Typography>
      <TextField
        name="name"
        label="Name"
        variant="outlined"
        value={product.name}
        onChange={handleInputChange}
      />
      <TextField
        name="sport"
        label="Sport"
        variant="outlined"
        value={product.sport}
        onChange={handleInputChange}
      />
      <TextField
        name="country"
        label="Country"
        variant="outlined"
        value={product.country}
        onChange={handleInputChange}
      />
      <TextField
        name="image"
        label="Image URL"
        variant="outlined"
        value={product.image}
        onChange={handleInputChange}
      />

      <Button variant="contained" onClick={handleUpdateProduct}>
        Edit Athlete
      </Button>
    </Box>
  );
};

export default EditAthletes;
