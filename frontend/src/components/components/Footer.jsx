import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Stack, Button, Link, Box, Slide, useScrollTrigger, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import StyledTextField from "./StyledTextField";
import StyledButton from "./StyledButton";

function Footer() {
  return (
    <Grid container bgcolor="#113170" sx={{ height: "538px" }} p={5} px={20} spacing={10}>
      <Grid item xs={6}>
        <Stack>
          <Typography sx={{ color: "white" }} pb={30} pr={20}>
            Aisha Comfortable Coliving is a digital platform that works to empower women through new housing solutions
            and strives to build an inclusive community for women.
          </Typography>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Typography sx={{ color: "white" }}>© 2022 Aisha Comfortable Coliving</Typography>
        </Stack>
      </Grid>
      <Grid item xs={2}>
        <Typography sx={{ color: "white" }}>COMPANY</Typography>
        <Stack pt={2}>
          <Typography sx={{ color: "white" }}>About</Typography>
          <Typography sx={{ color: "white" }}>Tenants</Typography>
          <Typography sx={{ color: "white" }}>Homeowners</Typography>
          <Typography sx={{ color: "white" }}>Events</Typography>
          <Typography sx={{ color: "white" }}>Contact Us</Typography>
        </Stack>
      </Grid>
      <Grid item xs={2}>
        <Typography sx={{ color: "white" }}>LEGAL</Typography>
        <Stack pt={2}>
          <Typography sx={{ color: "white" }}>Terms & Conditions</Typography>
          <Typography sx={{ color: "white" }}>Privacy Policy</Typography>
        </Stack>
      </Grid>
      <Grid item xs={2}>
        <Typography sx={{ color: "white" }}>NEWSLETTER</Typography>
        <Stack spacing={1} pt={2}>
          <StyledTextField variant='empty' value='Name'></StyledTextField>
          <StyledTextField variant='empty' value='Email'></StyledTextField>
          <StyledButton variant='pinkBtn' text='Subscribe'/>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Footer;
