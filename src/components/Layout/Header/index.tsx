import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { useLocation } from "react-router";
import NavLink from "./components/NavLink";
import AccountCircle from "@mui/icons-material/AccountCircle";

const pages = [
  { linkText: "Login", path: "/login" },
  { linkText: "Games", path: "/games" },
  { linkText: "Users", path: "/users" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];


const hideNavForRoute = () => {
  const location = useLocation();
  return location.pathname !== "/login" && location.pathname !== "/register";
};

const checkIfLoggedIn = () => {
  const token = localStorage.getItem("token");
  return token !== null && token !== undefined;
};

const handleOnclickLogout = () => {
  console.log("Handle Logout");
};

function Header() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (!hideNavForRoute()) return <></>;

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar
            sx={{ display: "flex", justifyContent: "space-between" }}
            disableGutters
          >
            <Box sx={{ display: "flex" }}>
              {/* Links */}
              {pages.map((page) => (
                <NavLink {...page} />
              ))}
            </Box>
            <Box sx={{ display: "flex" }}>
              {/* Profile Icon */}
              {checkIfLoggedIn() ? (
                <div>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>Sign Out</MenuItem>
                  </Menu>
                </div>
              ) : (
                <NavLink linkText="Login" path="/login" />
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Header;
