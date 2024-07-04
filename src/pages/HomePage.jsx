import React from "react";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
// import MainPage from "../components/homePage/MainPage";

const HomePage = () => {
  return (
    <Box>
      {/* <MainPage /> */}

      <img
        src="https://img.olympics.com/images/image/private/t_s_16_9_g_auto/t_s_w1460/f_auto/primary/t6dhh1fiqscihvdmxtai"
        alt=""
        style={{ width: "100%", height: "120%" }}
      />

      <div className="conteiner">
        <img
          style={{
            position: "absolute",
            backgroundColor: "rgba(0, 0, 0, 0)",
            top: "71px",
          }}
          src="https://tickets.paris2024.org/obj/media/FR-Paris2024/specialLogos/checkoutApp/doubleP24_logo.png"
          alt=""
        />
        <img
          id="mi"
          style={{
            position: "absolute",
            backgroundColor: "rgba(0, 0, 0, 0)",
            top: "71px",
            left: "75%",
            width: "23%",
            height: "23%",
          }}
          src="https://tickets.paris2024.org/obj/media/FR-Paris2024/specialLogos/checkoutApp/Paris2024_ParaOLY_Visa_fr.png"
          alt=""
        />
        <div
          style={{
            position: "absolute",
            top: "89%",
            left: "30%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "29px",
            fontWeight: "bold",
          }}
        >
          <h1>
            ОФИЦИАЛЬНЫЕ <br /> БИЛЕТЫ
            <br />
            НА ИГРЫ ПАРИЖ <br /> 2024 ГОДА
          </h1>
          <span style={{ fontWeight: "3" }}>
            Добро пожаловать в официальную билетную кассу <br />
            Олимпийских и Паралимпийских игр 2024 года в Париже! <br /> Чтобы
            войти в свою учетную запись или создать ее.
          </span>
        </div>
      </div>

      <nav
        style={{
          backgroundColor: "rebeccapurple",
          color: "#fff",
          padding: "30px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "1.5em", fontWeight: "bold" }}>
          ОЛИМПИЙСКИЕ ИГРЫ
        </div>
        <div
          style={{
            color: "#fff",
            marginLeft: "50px",
            textDecoration: "none",
            fontSize: "1.5em",
          }}
        >
          <Link to="/" style={{ color: "white" }}>
            Главная
          </Link>
        </div>
      </nav>

      <div
        style={{
          background: "linear-gradient(135deg, #73a1ff 0%, #a8ff78 100%)",
          padding: "20px",
          borderRadius: "10px",
          color: "white",
          marginTop: "20px",
        }}
      >
        <h1 style={{ fontSize: "3em", marginBottom: "10px" }}>
          УВИДИМСЯ КАЖДЫЙ ЧЕТВЕРГ В 10:00!
        </h1>
        <p style={{ fontSize: "1.6em", marginBottom: "20px" }}>
          Каждый четверг будут доступны новые билеты на разные виды спорта!
          Заходите на этот сайт в 10 утра, чтобы попытать удачу. Потом будет
          поздно...
        </p>
        <Button
          style={{
            padding: "10px 20px",
            fontSize: "1em",
            color: "#000",
            background: "#fff",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer",
            transition: "0.3s ease",
            "&:hover": { bgcolor: "#8125DC " },
          }}
        >
          Купить билеты ↗️
        </Button>
      </div>

      <div className="conteiner1">
        <h1>БИЛЕТЫ НА ОЛИМПИЙСКИЕ И ПАРАЛИМПИЙСКИЕ ИГРЫ</h1>
        <div style={{ display: "flex" }}>
          <div
            style={{
              backgroundColor: "antiquewhite",
              borderRadius: "10px",
              color: "white",
              border: "1px",
              margin: "10px",
              width: "600px",
              height: "600px",
              boxShadow: "1px",
            }}
          >
            <img
              style={{ width: "100%", height: "80%", borderRadius: "20px" }}
              src="https://tickets.paris2024.org/obj/media/FR-Paris2024/teaser/home/1x1/VIGNETTE_OLY_FR-201223.webp"
              alt=""
              className="imge"
            />
            <h2
              style={{
                color: "#000",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              ОТКРОЙТЕ ДЛЯ СЕБЯ ДОСТУПНЫЕ БИЛЕТЫ
            </h2>
            <Button
              style={{
                color: "white",
                backgroundColor: "black",
                borderRadius: "20px",
                "&:hover": { bgcolor: "#8125DC " },
              }}
            >
              Я ИМЕЮ ДОСТУП К ПРОДАЖЕ ↗️
            </Button>
          </div>
          <div
            style={{
              backgroundColor: "antiquewhite",
              borderRadius: "10px",
              color: "white",
              border: "1px",
              margin: "10px",
              width: "600px",
              height: "600px",
              boxShadow: "2px",
            }}
          >
            <img
              style={{ width: "100%", height: "80%", borderRadius: "20px" }}
              src="https://tickets.paris2024.org/obj/media/FR-Paris2024/teaser/home/1x1/VIGNETTE_PARA_FR-201223.webp"
              alt=""
              className="imge"
            />
            <div className="span">
              <h2
                style={{
                  color: "#000",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                ОТКРОЙТЕ ДЛЯ СЕБЯ ДОСТУПНЫЕ БИЛЕТЫ
              </h2>
              <Button
                style={{
                  color: "white",
                  backgroundColor: "black",
                  borderRadius: "20px",
                  "&:hover": { bgcolor: "#8125DC " },
                }}
              >
                Я ИМЕЮ ДОСТУП К ПРОДАЖЕ ↗️
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "130px" }}>
        <h2 style={{ fontSize: "60px" }}>ВАЖНАЯ ИНФОРМАЦИЯ</h2>
        <p style={{ margin: "10px", fontSize: "25px" }}>
          Париж 2024 и его заинтересованные стороны недавно были
          проинформированы о попытке мошенничества, направленной на широкую
          общественность. Лица/организации, выдающие себя за команду «Париж
          2024», утверждают, что в сотрудничестве с Национальным олимпийским и
          спортивным комитетом Франции распространяют бесплатные билеты на
          церемонию открытия Паралимпийских игр в Париже 2024 в обмен на оплату
          транспортных расходов. Напоминаем, что PARIS 2024 не выдает бумажные
          билеты на сессии Олимпийских и Паралимпийских игр 2024 года в Париже.
          Мы рекомендуем вам проявить максимальную бдительность и не разглашать
          свои личные и/или банковские данные, если у вас есть хоть малейшее
          сомнение относительно отправителя электронного письма. Если у вас есть
          какие-либо сомнения относительно подлинности сообщения, отправленного
          «Париж 2024» в связи с продажей билетов на Игры, мы приглашаем вас
          связаться с командой «Париж 2024» по следующему адресу:
          целостностьandenforcement@paris2024.org
        </p>
      </div>
    </Box>
  );
};

export default HomePage;
