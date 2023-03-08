import React, { useState, useEffect } from "react";
import { logout } from "../../AuthComponents/actions/auth";
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

function Mainbar({logout, setNav}) {
  const trigger = useScrollTrigger();
  const logout_user = () => {
    logout();
    setNav(false)
};
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar positon="static" >
        <Toolbar sx={{ height: '10vh', background: "white"}}>
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
            <Button color="inherit" size="large" sx={{ color: "#000" }} href="/">
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
            <Button color="inherit" size="large" sx={{ color: "#000" }} href="/listing">
              Listings
            </Button>
            <Button color="inherit" size="large" sx={{ color: "#000" }} href="/homeowners">
              Homeowners
            </Button>
            <Button color="inherit" size="large" sx={{ color: "#000" }} href="/about">
              About
            </Button>
            <Button color="inherit" size="large" sx={{ color: "#000" }} href="/">
              Blogs
            </Button>
            <Button color="inherit" size="large" sx={{ color: "#000" }} href="/contact">
              Contact
            </Button>
            <Button color="inherit" size="large" sx={{ color: "#000" }} onClick={logout_user}>
              Logout
            </Button>
            <IconButton>
              <Avatar></Avatar>
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </Slide>
  );
}

export default connect(null, {logout}) (Mainbar);
