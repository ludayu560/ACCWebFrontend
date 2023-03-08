import {
  Container,
  Button,
  Grid,
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  MenuItem,
  Typography,
  Stack,
  Paper,
  TextField,
  ImageListItem,
  Divider,
  Switch,
  Card,
  CardActionArea,
} from "@mui/material";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import RectangleOne from "../../assets/Rectangle1.svg";
import AccountContent from "../../assets/AccountContent.svg";
import NavBar from "../components/NavBar";
import axios from "axios";
import { borderRadius } from "@mui/system";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Mainbar from "../components/MainBar";
import ECard from "../components/ECard";
import { styled } from "@mui/material/styles";
import SideNav from "../components/SideNav";
import SearchBar from "../components/SearchBar";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import FAQ from "../components/FAQ";

function MyAccountFavourites(props) {
  return (
    <>
      {/* <Mainbar></Mainbar> */}
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Typography variant="h2" padding={"3vw"} fontWeight={700}>
            <b>My Account</b>
            <Divider variant="middle" sx={{ width: "15vw", border: "2px solid #F83E7D", opacity: 100 }} />
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <SideNav></SideNav>
        </Grid>
        <Grid container xs={9} px={6}>
          <Grid item spacing='auto' xs={12}>
            <Grid item xs={12} align="center">
              <Typography variant="h3" color="#000" fontWeight={700}>
                My Favourites
                <Divider
                  variant="fullWidth"
                  sx={{
                    m: 2,
                    width: "18vw",
                    border: "2px solid #F83E7D",
                    opacity: 100,
                  }}
                />
              </Typography>
            </Grid>
            <Grid container spacing={8} p={10}>
              <Grid item xs='auto'>
                <ECard variant='listing'></ECard>
              </Grid>
              <Grid item xs='auto'>
                <ECard variant='listing'></ECard>
              </Grid>
              <Grid item xs='auto'>
                <ECard variant='listing'></ECard>
              </Grid>
              <Grid item xs='auto'>
                <ECard variant='listing'></ECard>
              </Grid>
            </Grid>
          </Grid>

          
        </Grid>
      </Grid>
    </>
  );
}

export default MyAccountFavourites;
