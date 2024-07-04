import React, { createContext, useContext, useState, useEffect } from "react";
import fire from "../../fire";
import { useNavigate } from "react-router-dom";

// Создаем контекст авторизации
const authContext = createContext();

// Кастомный хук для использования контекста авторизации
export const useAuth = () => useContext(authContext);

// Компонент провайдера контекста авторизации
const AuthContextProvider = ({ children }) => {
  // Состояния для управления формой и пользователем
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false); // Состояние для определения, зарегистрирован ли пользователь
  const navigate = useNavigate(); // Хук для навигации

  // Функция для регистрации пользователя
  const handleRegister = () => {
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        setHasAccount(true); // Устанавливаем флаг, что пользователь зарегистрирован
        navigate("/"); // Перенаправляем пользователя после успешной регистрации
      })
      .catch((error) => {
        // Обработка ошибок регистрации
        switch (error.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(error.message); // Устанавливаем сообщение об ошибке email
            break;
          case "auth/weak-password":
            setPasswordError(error.message); // Устанавливаем сообщение об ошибке пароля
            break;
          default:
            break;
        }
      });
  };

  // Функция для входа пользователя
  const handleLogin = () => {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigate("/"); // Перенаправляем пользователя после успешного входа
      })
      .catch((error) => {
        // Обработка ошибок входа
        switch (error.code) {
          case "auth/user-disabled":
          case "auth/invalid-email":
          case "auth/user-not-found":
            setEmailError(error.message); // Устанавливаем сообщение об ошибке email
            break;
          case "auth/wrong-password":
            setPasswordError(error.message); // Устанавливаем сообщение об ошибке пароля
            break;
          default:
            break;
        }
      });
  };

  // Функция для выхода пользователя
  const handleLogOut = () => {
    fire.auth().signOut();
    navigate("/"); // Перенаправляем пользователя после выхода
  };

  // Функция для отслеживания состояния авторизации пользователя
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user); // Устанавливаем пользователя в состояние, если он авторизован
      } else {
        setUser(null); // Сбрасываем состояние пользователя, если он не авторизован
      }
      setLoading(false); // Устанавливаем флаг, что загрузка завершена
    });
  };

  // Используем хук useEffect для вызова authListener при монтировании компонента
  useEffect(() => {
    authListener();
  }, []);

  // Возвращаем провайдер контекста с передаваемыми значениями и оборачиваем в него дочерние компоненты
  return (
    <authContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        user,
        loading,
        emailError,
        passwordError,
        handleRegister,
        handleLogin,
        handleLogOut,
        hasAccount,
        setHasAccount,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
