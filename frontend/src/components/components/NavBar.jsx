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
} from "@mui/material";
import AishaLogo from "../../assets/Final Logo Transparent 3.svg";

// import "./Navbar.css";

function Navbar() {
  const trigger = useScrollTrigger(); 
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar positon="static" elevation={4}>
        <Toolbar sx={{ height: 168, background: "white" }}>
          <Link href="/">
            <Box
              component="img"
              sx={{ width: 253, height: 229, top: -37, left: 30 }}
              alt="Logo"
              src={AishaLogo}
            />
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Stack direction="row" spacing={5}>
            <Link href="/login">
            <Button color="inherit" size="large" sx={{ color: "#F83E7D" }}>
            Log in
            </Button>
            </Link>

            <Link href="/signup">
            <Button
              color="inherit"
              size="large"
              sx={{ color: "#F83E7D", background: "#F83E7D4A" }}
            >
              Get Started
            </Button>
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </Slide>
  );
}

export default Navbar;
