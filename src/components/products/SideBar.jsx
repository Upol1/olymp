import React, { useEffect, useState } from "react";
import {
  Box,
  Paper,
  IconButton,
  Menu,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from "react-router-dom";
import { useProduct } from "../context/ProductContextProvider";

const SideBar = () => {
  // Состояние для управления открытием/закрытием меню
  const [anchorEl, setAnchorEl] = useState(null);

  // Использование контекста для получения списка видов спорта и функций для работы с ними
  const { sports, getSports, fetchByParams } = useProduct();

  // Хук для работы с параметрами поиска в URL
  const [searchParams, setSearchParams] = useSearchParams();

  // Состояние для хранения текущего значения поиска
  const [search, setSearch] = useState(searchParams.get("q") || "");

  // Состояние для хранения выбранного вида спорта
  const [selectedSport, setSelectedSport] = useState("");

  // Загрузка списка видов спорта при монтировании компонента
  useEffect(() => {
    getSports();
  }, [getSports]);

  // Установка выбранного вида спорта из параметров URL при изменении searchParams
  useEffect(() => {
    setSelectedSport(searchParams.get("sport") || "");
  }, [searchParams]);

  // Обработчик открытия меню
  const handleOpenNavMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Обработчик закрытия меню
  const handleCloseNavMenu = () => {
    setAnchorEl(null);
  };

  // Обработчик изменения текста поиска
  const handleSearchChange = (event) => {
    const searchText = event.target.value;
    setSearch(searchText);

    // Обновление параметров поиска в URL
    const params = new URLSearchParams();
    if (searchText) params.set("q", searchText);
    if (selectedSport) params.set("sport", selectedSport);
    setSearchParams(params);

    // Выполнение поиска с новыми параметрами
    fetchByParams(params);
  };

  // Обработчик изменения выбранного вида спорта
  const handleSportChange = (event) => {
    const sport = event.target.value;
    setSelectedSport(sport);

    // Обновление параметров поиска в URL
    const params = new URLSearchParams();
    if (search) params.set("q", search);
    if (sport) params.set("sport", sport);
    setSearchParams(params);

    // Выполнение поиска с новыми параметрами
    fetchByParams(params);
  };

  return (
    <Box sx={{ flexGrow: 1, width: "auto", height: "50px" }}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleOpenNavMenu}
        sx={{ color: "blue" }}
      >
        <SearchIcon />
      </IconButton>

      {/* Меню для поиска и фильтрации */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseNavMenu}
      >
        {/* Поле поиска */}
        <MenuItem>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 300,
              color: "blue",
            }}
          >
            <TextField
              sx={{ ml: 1, flex: 1 }}
              placeholder="Поиск спортсменов..."
              value={search}
              onChange={handleSearchChange}
              variant="standard"
              fullWidth
              InputProps={{
                endAdornment: (
                  <IconButton
                    sx={{ p: "10px", color: "#780000" }}
                    aria-label="search"
                    onClick={handleCloseNavMenu} // Закрытие меню при клике на кнопку поиска
                  >
                    <SearchIcon />
                  </IconButton>
                ),
              }}
            />
          </Paper>
        </MenuItem>

        <MenuItem>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Вид спорта</InputLabel>
            <Select
              value={selectedSport}
              onChange={handleSportChange}
              label="Вид спорта"
            >
              <MenuItem value="">Все виды спорта</MenuItem>
              {sports.map((sport) => (
                <MenuItem key={sport.id} value={sport.name}>
                  {sport.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default SideBar;
