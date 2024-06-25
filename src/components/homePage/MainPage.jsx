import React from "react";

const MainPage = () => {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url('https://img.olympics.com/images/image/private/t_s_pog_overview_hero_xl_2x/f_auto/primary/wganxha7is1rwzqw9qs7')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        fontFamily: "Comic Sans MS, Comic Sans, cursiv",
      }}
      className="home-main-page"
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // полупрозрачная черная обводка
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="content"
      >
        <div
          style={{
            maxWidth: "800px",
            padding: "20px",
            textAlign: "center",
            color: "white",
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Olympic_rings_without_rims.svg/2880px-Olympic_rings_without_rims.svg.png"
            alt="Логотип Олимпийских игр"
            style={{
              width: "100%",
              maxWidth: "300px",
              marginBottom: "20px",
              borderRadius: "10px",
            }}
          />
          <h1
            style={{
              fontSize: "48px",
              marginBottom: "10px",
              fontWeight: "bold",
            }}
          >
            Олимпийские игры
          </h1>
          <h2
            style={{ fontSize: "36px", marginBottom: "20px", color: "#ffd60a" }}
          >
            Париж 2024
          </h2>
          <p style={{ fontSize: "24px", lineHeight: "1.6", color: "#ffd60a" }}>
            Пройдут с 26 июля по 11 августа 2024 года
          </p>
          <p style={{ fontSize: "20px", lineHeight: "1.6" }}>
            Олимпийские игры — это единственные по-настоящему глобальные,
            мультиспортивные и торжественные спортивные соревнования. Более 200
            стран съезжаются на летние и зимние Олимпийские игры, чтобы
            состязаться в более чем 400 дисциплинах, вдохновляться и ощущать
            уникальное единство.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
