import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorEl(null);
  };

  const pages = [
    { id: 1, title: "Атлеты", link: "/athletes" },
    { id: 2, title: "Виды", link: "/sports" },
    { id: 3, title: "Let's Move", link: "/lets-move" },
    { id: 4, title: "Олимпийские игры", link: "/" },
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
            <Typography className="p" variant="h6" style={styles.title}>
              Олимпийские игры
            </Typography>
          </div>
          <div style={styles.centerItems}>
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
          <div style={styles.rightItems}>
            <img
              src=""
              alt=""
              style={{ ...styles.icon, width: "auto", height: 40 }}
            />
          </div>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            style={styles.menuButton}
            onClick={handleOpenNavMenu}
          >
            <MenuIcon style={styles.menuIcon} />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseNavMenu}
          >
            {pages.map((page) => (
              <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                <Typography variant="body1">
                  <Link
                    to={page.link}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {page.title}
                  </Link>
                </Typography>
              </MenuItem>
            ))}
          </Menu>
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
  menuIcon: {
    color: "#000000",
  },
  title: {
    marginLeft: 10,
    color: "#000000",
    overflow: "hidden",
    overflowY: "scroll",
  },
};

export default Navbar;
