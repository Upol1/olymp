import React from "react";
import { Box, Typography, Link, Grid, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#ffc2d1", color: "#000", padding: "40px 0" }}>
      <Grid container justifyContent="center" spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ textAlign: "center", padding: "10px", height: "280px" }}>
            <Typography
              variant="h6"
              sx={{ marginBottom: "10px", margin: "20px" }}
            >
              Олимпийские игры
            </Typography>
            <Link
              href="/"
              color="inherit"
              underline="none"
              sx={{
                display: "block",
                marginBottom: "5px",
                margin: "20px",
                fontSize: "18px",
              }}
            >
              Париж-2024
            </Link>
            <Link
              href="/athletes"
              color="inherit"
              underline="none"
              sx={{
                display: "block",
                marginBottom: "5px",
                margin: "20px",
                fontSize: "18px",
              }}
            >
              Результаты и медали
            </Link>
            <Link
              href="/athletes"
              color="inherit"
              underline="none"
              sx={{
                display: "block",
                marginBottom: "5px",
                margin: "20px",
                fontSize: "18px",
              }}
            >
              Повторы и лучшие моменты
            </Link>
            <Link
              href="/sports"
              color="inherit"
              underline="none"
              sx={{ display: "block", marginBottom: "5px", fontSize: "18px" }}
            >
              Все Олимпийские игры
            </Link>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Olympic_rings_without_rims.svg/800px-Olympic_rings_without_rims.svg.png"
              alt="Olympic Rings"
              style={{
                width: "190px",
                height: "auto",
                marginBottom: "20px",
                // margin: "20px",
                marginTop: "70px",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ textAlign: "center", padding: "10px" }}>
            <Typography
              variant="h6"
              sx={{
                marginBottom: "5px",
                margin: "20px",
                fontSize: "20px",
              }}
            >
              Olympic Channel
            </Typography>
            <Link
              href="/lets-move"
              color="inherit"
              underline="none"
              sx={{
                display: "block",
                marginBottom: "5px",
                marginTop: "20px",
                margin: "20px",
                fontSize: "18px",
              }}
            >
              Let's Move
            </Link>
            <Link
              href="/register"
              color="inherit"
              underline="none"
              sx={{
                display: "block",
                marginBottom: "5px",
                marginTop: "20px",
                margin: "20px",
                fontSize: "18px",
              }}
            >
              Регистрация
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ textAlign: "center", padding: "10px", margin: "20px" }}>
            <Typography variant="h6" sx={{ marginBottom: "10px" }}>
              Исследовать
            </Typography>
            <Link
              href="/athletes"
              color="inherit"
              underline="none"
              sx={{
                display: "block",
                marginBottom: "5px",
                margin: "20px",
                fontSize: "18px",
              }}
            >
              Атлеты
            </Link>
            <Link
              href="/sports"
              color="inherit"
              underline="none"
              sx={{ display: "block", marginBottom: "5px" }}
            >
              Виды
            </Link>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: "center", marginTop: "30px" }}>
        <IconButton href="https://www.facebook.com/olympics/" color="inherit">
          <FacebookIcon />
        </IconButton>
        <IconButton href="https://x.com/Olympic" color="inherit">
          <TwitterIcon />
        </IconButton>
        <IconButton
          href="https://www.instagram.com/Olympia_da/"
          color="inherit"
        >
          <InstagramIcon />
        </IconButton>
        <IconButton href="https://www.youtube.com/olympics" color="inherit">
          <YouTubeIcon />
        </IconButton>
      </Box>
      <Box sx={{ textAlign: "center", marginTop: "20px" }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} Все права защищены.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
