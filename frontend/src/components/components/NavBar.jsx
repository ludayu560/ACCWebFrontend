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


function Navbar({setNav}) {
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
            <Login></Login>
            <SignupManager></SignupManager>
          </Stack>
        </Toolbar>
      </AppBar>
    </Slide>
  );
}

export default Navbar;
