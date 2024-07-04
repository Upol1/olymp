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

  // Создание нового спортсмена
  const createAthlete = async (newAthlete) => {
    await axios.post(API_PRODUCTS, newAthlete);
    getAthletes(); // Обновление списка спортсменов после добавления
    navigate("/athletes");
  };

  // Получение всех спортсменов
  const getAthletes = (params = {}) => {
    const searchParams = new URLSearchParams(params); // Создаем объект URLSearchParams из params для обработки параметров запроса

    axios
      .get(`${API_PRODUCTS}?${searchParams.toString()}`) // Преобразуем URLSearchParams в строку для использования в запросе
      .then((response) => {
        dispatch({ type: "GET_ATHLETES", payload: response.data }); // Отправляем данные в Redux store
      })
      .catch((error) => {
        console.error("Error fetching athletes:", error); // Ловим ошибки и выводим в консоль
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
