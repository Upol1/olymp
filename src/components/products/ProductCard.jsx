
import React, { useState, useEffect } from "react";
import {

  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";
import { useNavigate } from "react-router-dom";
import Detail from "./Detail";
import { AddShoppingCart } from "@mui/icons-material";
import { useCart } from "../../context/CartContextProvider";
import { ADMIN } from "../../helpers/const";
import { useAuth } from "../../context/AuthContextProvider";

const ProductCard = ({ elem }) => {
  const { addProductToCart, checkProductInCart, deleteProductFromCart } =
    useCart();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { deleteProduct } = useProduct();
  const handleDelete = () => {
    deleteProduct(elem.id);
    deleteProductFromCart(elem.id);
  };
  const { user } = useAuth();

import {
  StarBorder,
  Star,
  ThumbUpAlt,
  ThumbUpAltOutlined,
} from "@mui/icons-material"; // Измененные иконки для избранного
import { useProduct } from "../context/ProductContextProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Detail from "./Detail";
import { API_COMMENTS } from "../../helpers/const";

// Стилизованная кнопка, меняющая цвет при наведении
const AnimatedIconButton = styled(IconButton)({
  transition: "color 0.3s ease",
  "&:hover": {
    color: "#eb4b98",
  },
});

const ProductCard = ({ product }) => {
  const { deleteAthlete, getOneAthlete } = useProduct();
  const navigate = useNavigate();

  // Состояния для деталей, лайков, избранного, комментариев и нового комментария
  const [isDetailOpen, setDetailOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(() => {
    const savedLikes = localStorage.getItem(`likes_${product.id}`); // Получаем сохраненное количество лайков из localStorage
    return savedLikes ? parseInt(savedLikes, 10) : 0;
  });
  const [isFavorite, setIsFavorite] = useState(() => {
    const savedFavorite = localStorage.getItem(`favorite_${product.id}`); // Получаем сохраненное значение избранного из localStorage
    return savedFavorite === "true";
  });
  const [comments, setComments] = useState(() => {
    const savedComments = JSON.parse(
      localStorage.getItem(`comments_${product.id}`)
    ); // Получаем сохраненные комментарии из localStorage
    return savedComments || [];
  });
  const [newComment, setNewComment] = useState("");

  // Открытие и закрытие деталей
  const handleDetailOpen = () => setDetailOpen(true);
  const handleDetailClose = () => setDetailOpen(false);

  // Удаление продукта
  const handleRemoveProduct = () => {
    deleteAthlete(product.id);
  };

  // Редактирование продукта
  const handleEditProduct = () => {
    getOneAthlete(product.id);
    navigate(`/edit/${product.id}`); // Навигация к редактированию продукта
  };

  // Переключение лайка
  const handleLikeToggle = () => {
    setLiked((prevLiked) => !prevLiked); // Инвертируем состояние лайка
    if (!liked) {
      setLikesCount((prevCount) => prevCount + 1); // Увеличиваем количество лайков
    } else {
      setLikesCount((prevCount) => prevCount - 1); // Уменьшаем количество лайков
    }
  };

  // Обработка клика по избранному
  const handleFavoriteClick = () => {
    setIsFavorite((prevFavorite) => !prevFavorite); // Инвертируем состояние избранного
    localStorage.setItem(`favorite_${product.id}`, (!isFavorite).toString()); // Сохраняем состояние избранного в localStorage
    console.log(`Измененное состояние избранного для ${product.id}:`);
  };

  // Добавление комментария
  const handleAddComment = async () => {
    if (newComment.trim() !== "") {
      const newCommentData = {
        id: Date.now(),
        text: newComment,
        productId: product.id,
      };
      const updatedComments = [...comments, newCommentData]; // Добавляем новый комментарий в массив комментариев
      setComments(updatedComments); // Обновляем состояние комментариев
      setNewComment(""); // Очищаем поле для нового комментария
      localStorage.setItem(
        `comments_${product.id}`,
        JSON.stringify(updatedComments) // Сохраняем обновленные комментарии в localStorage
      );

      try {
        await axios.post(API_COMMENTS, newCommentData); // Отправляем новый комментарий на сервер
      } catch (error) {
        console.error("Ошибка при добавлении комментария на сервер:", error);
      }
    }
  };

  // Удаление комментария
  const handleDeleteComment = async (commentId) => {
    const updatedComments = comments.filter(
      (comment) => comment.id !== commentId
    ); // Фильтруем комментарии, оставляя только те, у которых id не совпадает с удаляемым
    setComments(updatedComments); // Обновляем состояние комментариев
    localStorage.setItem(
      `comments_${product.id}`,
      JSON.stringify(updatedComments) // Сохраняем обновленные комментарии в localStorage
    );

    try {
      await axios.delete(`${API_COMMENTS}/${commentId}`); // Удаляем комментарий с сервера
    } catch (error) {
      console.error("Ошибка при удалении комментария на сервере:", error);
    }
  };

  // Эффект для сохранения лайков в localStorage
  useEffect(() => {
    localStorage.setItem(`likes_${product.id}`, likesCount.toString());
  }, [likesCount, product.id]);

  // Эффект для загрузки комментариев с сервера и сохранения в localStorage
  useEffect(() => {
    const fetchCommentsFromServer = async () => {
      try {
        const response = await axios.get(API_COMMENTS); // Получаем все комментарии с сервера
        const productComments = response.data.filter(
          (comment) => comment.productId === product.id
        ); // Фильтруем комментарии по productId
        setComments(productComments); // Обновляем состояние комментариев
        localStorage.setItem(
          `comments_${product.id}`,
          JSON.stringify(productComments) // Сохраняем комментарии в localStorage
        );
      } catch (error) {
        console.error("Ошибка при загрузке комментариев с сервера:", error);
      }
    };

    fetchCommentsFromServer(); // Вызываем функцию загрузки комментариев
  }, [product.id]);


  return (
    <Card
      sx={{
        height: 750,
        boxShadow: "none",
        margin: "6px",
        width: { md: "30vw", lg: "19vw" },
      }}
    >
      <CardActionArea onClick={handleOpen}>
        <CardMedia sx={{ height: 440, borderRadius: 4 }} image={elem.image} />
      </CardActionArea>
      <CardContent
        sx={{
          padding: "20px 5px 0px 5px",
          display: "flex",
          height: 300,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5" fontSize="20" fontWeight={200} component="div">
          {elem.title}
        </Typography>
        <Stack>
          <Rating name="half-rating" defaultValue={0} precision={1} />
        </Stack>
        <Typography color="black" fontSize="24px" fontWeight={200}>
          {elem.price}kgs
        </Typography>
        <Typography color="gray" fontSize="20px" fontWeight={200}>
          {elem.description}
        </Typography>

        {user && user.role === ADMIN ? (
          <>
            <Button
              onClick={handleDelete}
              color="secondary"
              variant="outlined"
              size="medium"
            >
              Delete
            </Button>
            <Button
              onClick={() => navigate(`/edit/${elem.id}`)}
              variant="outlined"
              color="primary"
              size="medium"
            >
              Edit
            </Button>
          </>
        ) : (
          <IconButton
            sx={{
              backgroundColor: checkProductInCart(elem.id) ? "black" : "",
              color: checkProductInCart(elem.id) ? "white" : "",
            }}
            onClick={() => addProductToCart(elem)}
          >
            <AddShoppingCart />
          </IconButton>
        )}
      </CardContent>
      <Detail elem={elem} open={open} handleClose={handleClose} />

        maxWidth: 400,
        width: "60%",
        margin: "16px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        borderRadius: 8,
        transition: "box-shadow 0.3s ease",
        "&:hover": {
          boxShadow: "0 12px 20px rgba(0, 0, 0, 0.3)",
          transform: "scale(1.05)", // Увеличиваем масштаб при наведении
          boxShadow: "0 12px 20px rgba(0, 0, 0, 0.3)", // Увеличиваем тень
          backgroundColor: "#f0f0f0", // Изменяем фон
        },
      }}
    >
      <CardActionArea onClick={handleDetailOpen}>
        <CardMedia
          component="img"
          height="250"
          image={product.image || "https://via.placeholder.com/400"} // Используем изображение продукта или запасное изображение
          alt={product.name}
          sx={{
            objectFit: "cover",
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {product.sport} <br />
            {product.country} <br />
            {product.details}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardContent>
        <Stack direction="row" spacing={2} alignItems="center">
          <AnimatedIconButton
            onClick={handleLikeToggle}
            sx={{
              color: liked ? "#eb4b98" : "grey", // Изменяем цвет иконки лайка в зависимости от состояния liked
            }}
          >
            {liked ? <ThumbUpAlt /> : <ThumbUpAltOutlined />}
          </AnimatedIconButton>
          <Typography variant="body2" color="text.secondary">
            ({likesCount || 0} лайков)
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
          <Button
            variant="contained"
            size="small"
            color="secondary"
            onClick={handleRemoveProduct}
            sx={{ flexGrow: 1, mt: "0px" }}
          >
            Удалить
          </Button>
          <Button
            variant="contained"
            size="small"
            color="success"
            onClick={handleEditProduct}
            sx={{ ml: 1, flexGrow: 1 }}
          >
            Редактировать
          </Button>
        </Stack>
      </CardContent>
      <Stack direction="column" spacing={1} sx={{ px: 2, pb: 2 }}>
        <Typography variant="h6" gutterBottom>
          Комментарии
        </Typography>
        {comments.length === 0 ? (
          <Typography variant="body2" color="text.secondary">
            Нет комментариев
          </Typography>
        ) : (
          comments.map((comment) => (
            <div key={comment.id}>
              <Typography variant="body2" color="text.secondary">
                {comment.text}
              </Typography>
              <Button
                onClick={() => handleDeleteComment(comment.id)}
                variant="contained"
                color="error"
                sx={{ mt: 1 }}
              >
                Удалить
              </Button>
            </div>
          ))
        )}
        <TextField
          label="Добавить комментарий"
          variant="outlined"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          fullWidth
          multiline
          rows={2}
          sx={{ mt: 1, width: "auto", height: "50px" }}
        />
        <Button
          onClick={handleAddComment}
          variant="contained"
          color="primary"
          sx={{ mt: 1 }}
        >
          Добавить
        </Button>
      </Stack>
      <IconButton
        onClick={handleFavoriteClick}
        sx={{ alignSelf: "flex-end", color: "#d62839" }}
      >
        {isFavorite ? <Star /> : <StarBorder />}
      </IconButton>
      <Detail
        athlete={product}
        open={isDetailOpen}
        onClose={handleDetailClose}
      />
    </Card>
  );
};

export default ProductCard;
