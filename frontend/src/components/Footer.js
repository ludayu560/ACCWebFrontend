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
  Grid
} from "@mui/material";

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import "./Footer.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Footer() {
  return (
  <Grid container spacing={2}>
    <Grid xs={8}>
      <Item>xs=8</Item>
    </Grid>
    <Grid xs={4}>
      <Item>xs=4</Item>
    </Grid>
    <Grid xs={4}>
      <Item>xs=4</Item>
    </Grid>
    <Grid xs={8}>
      <Item>xs=8</Item>
    </Grid>
  </Grid>
  );
}

export default Footer;