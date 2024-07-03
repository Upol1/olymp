import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Paper, Box, Modal } from "@mui/material";

const Detail = ({ athlete, open, onClose }) => {
  const navigate = useNavigate();

  // Функция для перехода на страницу деталей спортсмена по его ID
  const navigateToDetailsPage = () => {
    if (athlete) {
      navigate(`/athletes/${athlete.id}`);
    }
  };

  // Если данные спортсмена еще загружаются, показываем заглушку "Загрузка..."
  if (!athlete) {
    return <div>Загрузка...</div>;
  }

  // Закрытие модального окна при вызове onClose
  const handleClose = () => {
    onClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <div>
          <img width={380} src={athlete.image} alt="" />
        </div>
        <div>
          <h1>{athlete.name}</h1>
          <p style={{ fontSize: "20px", color: "#0466c8", marginLeft: "35px" }}>
            {athlete.sport}
          </p>
          <p style={{ fontSize: "20px", color: "red", marginLeft: "35px" }}>
            {athlete.country}
          </p>
        </div>
      </Box>
    </Modal>
  );
};

export default Detail;
