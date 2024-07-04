import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContextProvider";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null); // Создаем состояние для управления меню
  const { user, handleLogOut, loading } = useAuth(); // Используем контекст авторизации

  const handleOpenNavMenu = (event) => {
    setAnchorEl(event.currentTarget); // Обработчик для открытия меню
  };

  const handleCloseNavMenu = () => {
    setAnchorEl(null); // Обработчик для закрытия меню
  };

  const pages = [
    { id: 1, title: "Атлеты", link: "/athletes" },
    { id: 3, title: "Виды", link: "/sports" },
    { id: 4, title: "Let's Move", link: "/lets-move" },
  ]; // Массив страниц для навигации

  // Добавляем ссылку на страницу администратора только если пользователь авторизован
  if (user) {
    pages.push({ id: 2, title: "Админ", link: "/Admin" });
  }

  return (
    <div style={styles.root}>
      <AppBar position="static" style={styles.appBar}>
        {/* Создаем AppBar с заданным стилем */}
        <Toolbar style={styles.toolbar}>
          {/* Внутри AppBar создаем Toolbar */}
          <div style={styles.leftItems}>
            {/* Контейнер для левых элементов */}
            <img
              id="olympic-rings"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Olympic_rings_without_rims.svg/800px-Olympic_rings_without_rims.svg.png"
              alt="Olympic Rings"
              style={{ ...styles.icon, width: "auto", height: 40 }} // Логотип Олимпийских игр
            />
            <Link to={"/"}>
              <Typography
                className="p"
                variant="h6"
                style={{ textDecoration: "none", color: "#000" }} // Текст "Олимпийские игры"
              >
                Олимпийские игры
              </Typography>
            </Link>
          </div>
          <div style={{ ...styles.centerItems, flex: 1 }}>
            {/* Контейнер для центральных элементов */}
            {pages.map((page, index) => (
              // Проходим по массиву страниц и создаем кнопки навигации
              <IconButton
                key={page.id}
                color="inherit"
                component={Link}
                to={page.link}
                style={{
                  ...styles.menuButton,
                  marginLeft: index > 0 ? 10 : 0, // Устанавливаем отступ между кнопками
                }}
              >
                <Typography variant="body1" style={styles.menuItem}>
                  {page.title} {/* Название страницы */}
                </Typography>
              </IconButton>
            ))}
          </div>
          <div
            style={{
              ...styles.rightItems,
              marginLeft: "auto",
              marginRight: 20,
            }}
          >
            {!loading && (
              // Если загрузка завершена, показываем приветствие
              <Typography style={{ color: "#000", marginRight: 10 }}>
                {user ? "Hello, admin" : "Hello, guest"}{" "}
                {/* Приветствие в зависимости от состояния авторизации */}
              </Typography>
            )}
            {!loading && !user && (
              // Если пользователь не авторизован и загрузка завершена, показываем кнопку регистрации
              <IconButton
                color="inherit"
                component={Link}
                to="/register"
                style={{ ...styles.menuButton, color: "#000" }}
              >
                <Typography
                  variant="body1"
                  style={{ ...styles.menuItem, color: "#000" }}
                >
                  Регистрация
                </Typography>
              </IconButton>
            )}
            {!loading && user && (
              // Если пользователь авторизован и загрузка завершена, показываем кнопку выхода
              <IconButton
                color="inherit"
                onClick={handleLogOut}