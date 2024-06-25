import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import { MenuItem } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import AnchorIcon from "@mui/icons-material/Anchor";
import LunchDiningSharpIcon from "@mui/icons-material/LunchDiningSharp";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const pages = [
    { id: 1, title: "Products", link: "/products" },
    { id: 4, title: "About", link: "/about" },
    { id: 5, title: "Contacts", link: "/contacts" },
  ];
  // "#ff8085"
  return (
    <AppBar
      style={{
        backgroundColor: "#4f94d4",
        color: "#01263a",
        border: " 5px solid black",
      }} // Цвета Красти Краба
      position="center"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AnchorIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Amatic SC, cursive",
              fontWeight: 700,
              fontSize: 40,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            KRUSTY KRAB
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
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
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Amatic SC, cursive",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            KRUSTY KRAB
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link
                key={page.id}
                to={page.link}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              </Link>
            ))}
          </Box>

          <Link
            to="/admin"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MenuItem>
              <Typography textAlign="center">
                <AdminPanelSettingsIcon
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0 }}
                ></AdminPanelSettingsIcon>
              </Typography>
            </MenuItem>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} />

          <Link to="/cart">
            <ShoppingCart style={{ color: "#01263a" }} />
          </Link>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, color: "#01263a" }}
                aria-controls="menu-appbar-user" // Уникальный id для меню пользователя
                aria-haspopup="true"
              >
                <LunchDiningSharpIcon />
              </IconButton>
            </Tooltip>
            <Menu
              id="menu-appbar-user"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem
                sx={{ backgroundColor: "pink" }}
                onClick={handleCloseUserMenu}
              >
                <Typography textAlign="center">[Admin]</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
