import React, { useState, useEffect } from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import AishaLogo from "../../assets/Final Logo Transparent 3.svg";
import SignupManager from "../pages/SignupManager";
import Login from "../pages/Login";
import { Avatar, FormControl, IconButton, InputLabel, Menu, MenuItem, Select } from "@mui/material";
import { connect } from "react-redux";
import Logo from "../../assets/Aisha Logo.svg";
import { useNavigate } from "react-router";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Navbar({ isAuthenticated }) {
  const trigger = useScrollTrigger();
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleOnClickT = (id) => {
    navigate("/tenanthome");
    handleMenuClose();
  };
  const handleOnClickH = (id) => {
    navigate("/housemates");
    handleMenuClose();
  };
  const handleOnClickL = (id) => {
    navigate("/listings");
    handleMenuClose();
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar positon="static" elevation={4}>
        <Toolbar sx={{ height: "168px", background: "white" }}>
          <Link href="/">
            <Box component="img" alt="Logo" src={Logo} />
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Stack direction="row" spacing={2}>
            <Button color="inherit" size="large" sx={{ color: "#000" }} href={isAuthenticated ? "/dashboard" : "/"}>
              Home
            </Button>
            <Button color="inherit" size="large" sx={{ color: "#000" }} href="/events">
              Events
            </Button>

            <Button onClick={handleMouseEnter} endIcon={<ArrowDropDownIcon />}>
              Tenants
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={anchorEl}
              onClose={handleMenuClose}
              MenuListProps={{ onMouseLeave: handleMenuClose }}
              keepMounted>
              <MenuItem onClick={handleOnClickT}>Tenants</MenuItem>
              <MenuItem onClick={handleOnClickH}>Housemates</MenuItem>
              <MenuItem onClick={handleOnClickL}>Listings</MenuItem>
            </Menu>

            <Button color="inherit" size="large" sx={{ color: "#000" }} href="/homeowners">
              Homeowners
            </Button>
            <Button color="inherit" size="large" sx={{ color: "#000" }} href="/about">
              About
            </Button>
            <Button color="inherit" size="large" sx={{ color: "#000" }} href="/blogs">
              Blogs
            </Button>
            <Button color="inherit" size="large" sx={{ color: "#000" }} href="/contact">
              Contact
            </Button>
            <Login>
              <Button size="large" sx={{ color: "#F83E7D" }}>
                Login
              </Button>
            </Login>

            <SignupManager>
              <Button color="inherit" size="large" sx={{ color: "#F83E7D", background: "#F83E7D4A" }}>
                Get Started
              </Button>
            </SignupManager>
          </Stack>
        </Toolbar>
      </AppBar>
    </Slide>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Navbar);
