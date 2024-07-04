import { Pagination, Stack, Typography } from "@mui/material";
import React from "react";

const PaginationControlled = ({ page, count, handleChange }) => {
  return (
    <div>
      <Stack spacing={2}>
        <Typography>Страница: {page}</Typography>
        <Pagination
          count={count}
          variant="outlined"
          color="primary"
          onChange={handleChange}
          shape="rounded"
          sx={{
            "& .MuiPaginationItem-page": {
              color: "#000000", // черный цвет для цифр
            },
            "& .MuiPaginationItem-root.Mui-selected": {
              color: "#034078",
              backgroundColor: "#a2d2ff",
              "&:hover": {
                backgroundColor: "#00a6fb",
                color: "#034078",
              },
            },
          }}
        />
      </Stack>
    </div>
  );
};

export default PaginationControlled;
