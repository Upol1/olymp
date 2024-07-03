import React, { useState } from "react";
import { useAuth } from "../components/context/AuthContextProvider";
import "../pages/Auth.css";

const Auth = () => {
  // Используем хук useAuth для получения состояния и функций авторизации
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleRegister,
    handleLogin,
    emailError,
    passwordError,
  } = useAuth();

  // Локальное состояние для переключения между регистрацией и входом
  const [isRegister, setIsRegister] = useState(true);

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault(); // Предотвращаем стандартное поведение формы
    if (email && password) {
      if (isRegister) {
        handleRegister(); // Вызываем функцию регистрации
      } else {
        handleLogin(); // Вызываем функцию входа
      }
    }
  };

  return (
    <div className="auth-container">
      {/* Левый раздел страницы */}
      <div className="left-section"></div>
      {/* Правый раздел страницы с формой */}
      <div className="right-section">
        <div className="auth-form">
          <h2 className="auth-title">{isRegister ? "Регистрация" : "Вход"}</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Электронная почта</label>
              <input
                type="email"
                autoFocus
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Устанавливаем email
              />
              <p className="error-msg">{emailError}</p>{" "}
              {/* Сообщение об ошибке email */}
            </div>
            <div className="input-group">
              <label>Пароль</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Устанавливаем пароль
              />
              <p className="error-msg">{passwordError}</p>{" "}
              {/* Сообщение об ошибке пароля */}
            </div>
            <div className="btn-container">
              <button type="submit">
                {isRegister ? "Регистрация" : "Вход"} {/* Кнопка отправки */}
              </button>
              <p>
                {isRegister ? "Уже есть аккаунт?" : "Нет аккаунта?"}{" "}
                <span onClick={() => setIsRegister(!isRegister)}>
                  {isRegister ? "Вход" : "Регистрация"}{" "}
                  {/* Переключение между регистрацией и входом */}
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
