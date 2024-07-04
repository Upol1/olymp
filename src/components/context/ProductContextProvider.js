import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { API_PRODUCTS, API_CATEGORIES } from "../../helpers/const";
import { useNavigate } from "react-router-dom";

// Создание контекста для продуктов
export const ProductContext = createContext();
export const useProduct = () => useContext(ProductContext);

// Начальное состояние для редюсера
const INIT_STATE = {
  athletes: [],
  oneAthlete: {},
  sports: [],
  categories: [], // Добавлено состояние для категорий

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
    case "GET_SPORTS":
      return { ...state, sports: action.payload };
    case "GET_CATEGORIES": // Добавлен case для категорий
      return { ...state, categories: action.payload };
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
  // Создание нового спортсмена
  const createAthlete = async (newAthlete) => {
    await axios.post(API_PRODUCTS, newAthlete);
    getAthletes(); // Обновление списка спортсменов после добавления
    navigate("/athletes");
  };

  // Получение всех спортсменов
  const getAthletes = (params = {}) => {
    const searchParams = new URLSearchParams(params); // Добавлено для поддержки параметров
    axios
      .get(`${API_PRODUCTS}?${searchParams}`) // Добавлено для поддержки параметров
      .then((response) => {
        dispatch({ type: "GET_ATHLETES", payload: response.data });
      })
      .catch((error) => {
        console.error("Error fetching athletes:", error);
      });
  };

  // Удаление спортсмена
  const deleteAthlete = async (id) => {
    await axios.delete(`${API_PRODUCTS}/${id}`);
    getAthletes(); // Обновление списка после удаления
  };

  // Получение одного спортсмена
  const getOneAthlete = async (id) => {
    try {
      const { data } = await axios.get(`${API_PRODUCTS}/${id}`);
      dispatch({ type: "GET_ONE_ATHLETE", payload: data });
    } catch (error) {
      console.error("Error fetching athlete details:", error);
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
    await axios.patch(`${API_PRODUCTS}/${id}`, editedAthlete);
    getAthletes(); // Обновление списка спортсменов после редактирования
    navigate("/athletes");
  };

  // Создание новой категории (вида спорта)
  const createSport = async (newSport) => {
    await axios.post(API_CATEGORIES, newSport);
    getSports(); // Обновление списка видов спорта после добавления
    navigate("/athletes");
  };

  // Получение всех категорий (видов спорта)
  const getSports = async () => {
    try {
      const { data } = await axios.get(API_CATEGORIES);
      dispatch({ type: "GET_SPORTS", payload: data });
      dispatch({ type: "GET_CATEGORIES", payload: data }); // Использование одной и той же функции для категорий
    } catch (error) {
      console.error("Error fetching sports:", error);
    }
  };

  // Фильтрация по параметрам
  const fetchByParams = (query, value) => {
    const search = new URLSearchParams(window.location.search);
    if (value === "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }
    const url = `${window.location.pathname}?${search}`;
    navigate(url);
    getAthletes(Object.fromEntries(search.entries())); // Обновление списка с учетом новых параметров
  };

  // Получение данных одного спортсмена
  const fetchOneProduct = async (id) => {
    try {
      const { data } = await axios.get(`${API_PRODUCTS}/${id}`);
      dispatch({ type: "GET_ONE_ATHLETE", payload: data });
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  // Объект значений, передаваемых через контекст
  const values = {

    athletes: state.athletes,
    oneAthlete: state.oneAthlete,
    toggleLike,
    addComment,
    toggleFavorite,
    createAthlete,
    getAthletes,
    athletes: state.athletes,
    deleteAthlete,
    getOneAthlete,
    oneAthlete: state.oneAthlete,
    editAthlete,
    createSport,
    getSports,
    sports: state.sports,
    categories: state.categories, // Использование состояния категорий
    fetchByParams,
    fetchOneProduct,
  };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export default ProductContextProvider;
