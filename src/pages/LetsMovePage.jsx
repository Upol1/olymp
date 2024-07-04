// LetsMovePage.js

import React from "react";
import "./LetsMovePage.css";

const LetsMovePage = () => {
  return (
    <div className="lets-move">
      <div className="lets-move-header">
        <h1>Давайте двигаться и праздновать</h1>
        <p className="tagline">
          #LetsMove: Вдохнови участников предстоящей Олимпиады своими движениями
        </p>
      </div>

      <div className="image-section">
        <h2>Смотри акцию МОК «Давайте двигаться и праздновать»</h2>
        <div className="image-placeholder">
          <img
            src="https://img.olympics.com/images/image/private/t_16-9_640/f_auto/primary/y7xlwlk8nfvpia9jlitq"
            alt="Image 1"
            className="image"
          />
        </div>
      </div>

      <div className="paris-2024-section">
        <h2>Двигайся в духе Парижа-2024!</h2>
        <p>
          Двигайся вместе с нами и присылай олимпийцам любимые движения для
          празднования. Они могут быть любыми: смешными, серьезными, в сольном
          или групповом исполнении. Главное - двигать телом!
        </p>
        <p>
          Не забудь поставить таг @olympics и отметить спортсмена. Используй
          также хештег #LetsMove, и, кто знает, может именно присланное тобой
          движение любимый спортсмен использует, чтобы отметить победу в Париже!
        </p>
        <p>
          Вдохновляйся Олимпийскими играми, веселись и наслаждайся движением.
        </p>
      </div>

      <div className="image-section">
        <div className="image-placeholder">
          <img
            src="https://img.olympics.com/images/image/private/t_4-3_640/f_auto/v1716454991/primary/andvd9erjmju5h37l3hj"
            alt="Image 2"
            className="image"
          />
        </div>
      </div>

      <div className="more-info">
        <p>Подробнее</p>
        <p>Время пришло! #letsmove</p>
      </div>

      <div className="footer">
        <p>© Олимпийские игры 2024</p>
      </div>
    </div>
  );
};

export default LetsMovePage;
