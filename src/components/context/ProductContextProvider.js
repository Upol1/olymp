import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_PRODUCTS } from "../../helpers/const";

// Создание контекста для продуктов
export const ProductContext = createContext();
export const useProduct = () => useContext(ProductContext);

// Начальное состояние для редюсера
const INIT_STATE = {
  athletes: [],
  oneAthlete: {},
};

// Редюсер для управления состоянием
const productReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_ATHLETES":
      return { ...state, athletes: action.payload };
    case "GET_ONE_ATHLETE":
      return { ...state, oneAthlete: action.payload };
    case "TOGGLE_LIKE":
      return {
        ...state,
        athletes: state.athletes.map((athlete) =>
          athlete.id === action.payload
            ? { ...athlete, liked: !athlete.liked }
            : athlete
        ),
      };
    case "ADD_COMMENT":
      return {
        ...state,
        athletes: state.athletes.map((athlete) =>
          athlete.id === action.payload.productId
            ? {
                ...athlete,
                comments: [...athlete.comments, action.payload.comment],
              }
            : athlete
        ),
      };
    case "TOGGLE_FAVORITE":
      return {
        ...state,
        athletes: state.athletes.map((athlete) =>
          athlete.id === action.payload
            ? { ...athlete, favorite: !athlete.favorite }
            : athlete
        ),
      };
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(productReducer, INIT_STATE);

  // Получение всех спортсменов
  const getAthletes = async () => {
    try {
      const response = await axios.get(API_PRODUCTS);
      dispatch({ type: "GET_ATHLETES", payload: response.data });
    } catch (error) {
      console.error("Error fetching athletes:", error);
    }
  };

  // Редактирование данных спортсмена
  const editAthlete = async (id, editedAthlete) => {
    try {
      await axios.patch(`${API_PRODUCTS}/${id}`, editedAthlete);
      getAthletes(); // Обновление списка спортсменов после редактирования
      navigate("/athletes");
    } catch (error) {
      console.error("Error editing athlete:", error);
    }
  };

  // Переключение лайка у спортсмена
  const toggleLike = async (id) => {
    try {
      await axios.patch(`${API_PRODUCTS}/${id}`, { liked: true });
      dispatch({ type: "TOGGLE_LIKE", payload: id });
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  // Добавление комментария к спортсмену
  const addComment = async (id, comment) => {
    try {
      // Логика добавления комментария
      const updatedAthlete = {
        comments: [...state.oneAthlete.comments, comment],
      };
      await axios.patch(`${API_PRODUCTS} /${id}`, updatedAthlete);
      dispatch({ type: "ADD_COMMENT", payload: { productId: id, comment } });
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  // Переключение состояния избранного у спортсмена
  const toggleFavorite = async (id) => {
    try {
      await axios.patch(`${API_PRODUCTS}/${id}`, { favorite: true });
      dispatch({ type: "TOGGLE_FAVORITE", payload: id });
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  };

  // Объект значений, передаваемых через контекст
  const values = {
    athletes: state.athletes,
    oneAthlete: state.oneAthlete,
    getAthletes,
    editAthlete,
    toggleLike,
    addComment,
    toggleFavorite,
  };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export default ProductContextProvider;
