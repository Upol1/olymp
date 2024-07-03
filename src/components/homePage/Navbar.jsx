import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";

const Navbar = () => {
  const pages = [
    { id: 1, title: "Атлеты", link: "/athletes" },
    { id: 2, title: "Админ", link: "/admin" },
    { id: 3, title: "Виды", link: "/sports" },
    { id: 4, title: "Let's Move", link: "/lets-move" },
  ];

  return (
    <div style={styles.root}>
      <AppBar position="static" style={styles.appBar}>
        <Toolbar style={styles.toolbar}>
          <div style={styles.leftItems}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Olympic_rings_without_rims.svg/800px-Olympic_rings_without_rims.svg.png"
              alt="Olympic Rings"
              style={{ ...styles.icon, width: "auto", height: 40 }}
            />
            <Link to={"/"}>
              <Typography
                className="p"
                variant="h6"
                style={{ textDecoration: "none", color: "#000" }}
              >
                Олимпийские игры
              </Typography>
            </Link>
          </div>
          <div style={{ ...styles.centerItems, flex: 1 }}>
            {pages.map((page, index) => (
              <IconButton
                key={page.id}
                color="inherit"
                component={Link}
                to={page.link}
                style={{
                  ...styles.menuButton,
                  marginLeft: index > 0 ? 10 : 0,
                }}
              >
                <Typography variant="body1" style={styles.menuItem}>
                  {page.title}
                </Typography>
              </IconButton>
            ))}
          </div>
          <div style={{ ...styles.rightItems, marginLeft: "auto" }}>
            <IconButton
              color="inherit"
              component={Link}
              to="/register"
              style={styles.menuButton}
            >
              <Typography variant="body1" style={styles.menuItem}>
                Регистрация
              </Typography>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const styles = {
  root: {
    flexGrow: 1,
    overflow: "hidden",
    width: "100%",
    height: "auto",
  },
  appBar: {
    backgroundColor: "#ffc2d1",
    color: "#000000",
    overflow: "hidden",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    overflow: "hidden",
  },
  leftItems: {
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
  },
  centerItems: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  rightItems: {
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
  },
  menuButton: {
    marginRight: 10,
    overflow: "hidden",
  },
  menuItem: {
    color: "#000000",
  },
  icon: {
    width: "auto",
    height: 40,
    marginRight: 10,
    overflow: "hidden",
  },
};

export default Navbar;
