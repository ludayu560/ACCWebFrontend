import React, { useState, useEffect } from "react";
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

function Mainbar() {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar positon="static">
        <Toolbar sx={{ height: 114, background: "white" }}>
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
            <Button color="inherit" size="large" sx={{ color: "#000" }}>
              Home
            </Button>
            <Button color="inherit" size="large" sx={{ color: "#000" }}>
              Matches
            </Button>
            <Button color="inherit" size="large" sx={{ color: "#000" }}>
              Events
            </Button>
            <Button color="inherit" size="large" sx={{ color: "#000" }}>
              Market
            </Button>
            <Button color="inherit" size="large" sx={{ color: "#000" }}>
              Blog
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

export default Mainbar;
