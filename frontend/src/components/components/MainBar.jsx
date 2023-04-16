import React, { useState, useEffect } from "react";
import { logout } from "../../Redux/actions/auth";
import { connect } from 'react-redux';
import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Button,
  Link,
  Box,
  Slide,
  useScrollTrigger,
  Avatar,
  IconButton,
} from "@mui/material";
import Logo from "../../assets/Aisha Logo.svg";
import { useNavigate } from "react-router";

function Mainbar({logout, setNav}) {
  const navigate = useNavigate()

  const trigger = useScrollTrigger();
  const logout_user = () => {
    logout();
    setNav(false)
    navigate("/")
};
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar positon="static" >
        <Toolbar sx={{ height: '168px', background: "white"}}>
          <Link href="/">
            <Box
              component="img"
              sx={{ height: 40, top: -37, left: 30 }}
              alt="Logo"
              src={Logo}
            />
          </Link>

          <Box sx={{ flexGrow: 1 }} />

          <Stack direction="row" spacing={2}>
            <Button color="inherit" size="large" sx={{ color: "#000" }} href="/dashboard">
              Home
            </Button>
            <Button color="inherit" size="large" sx={{ color: "#000" }} href="/events">
              Events
            </Button>
            <Button color="inherit" size="large" sx={{ color: "#000" }} href="/tenanthome">
              Tenants
            </Button>
            <Button color="inherit" size="large" sx={{ color: "#000" }} href="/housemates">
              Housemates
            </Button>
            <Button color="inherit" size="large" sx={{ color: "#000" }} href="/listings">
              Listings
            </Button>
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
            <Button color="inherit" size="large" sx={{ color: "#000" }} onClick={
              logout_user
              }>
              Logout
            </Button>
            <IconButton href="/account">
              <Avatar></Avatar>
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </Slide>
  );
}

export default connect(null, {logout}) (Mainbar);
