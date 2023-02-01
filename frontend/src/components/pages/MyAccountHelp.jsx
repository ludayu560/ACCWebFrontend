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

function MyAccountHelp(props) {
  return (
    <>
      <Mainbar></Mainbar>
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
        <Grid item xs={9} p={6}>
          <Grid container xs={12} p={4} align="center">
            <Grid item xs={12}>
              <Typography variant="h3" color="#000" fontWeight={700}>
                Help & Support
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
          </Grid>

          <Grid container xs={12} align="center" p={5} spacing={2} mr={4}>
            <Grid item xs={8}>
              <Stack spacing={2}>
                <Card raised="true" sx={{ p: 4, borderRadius: 4 }}>
                  <CardActionArea>
                    <Box
                      display="flex"
                      alignContent="center"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                      }}>
                      <HeadsetMicIcon style={{ fontSize: 100 }} sx={{ color: "#F83E7D", mr: "10vw" }} />
                      <Typography variant="h5">Call: +1-647-777-7777</Typography>
                    </Box>
                  </CardActionArea>
                </Card>
                <Card raised="true" sx={{ p: 4, borderRadius: 4 }}>
                  <CardActionArea>
                    <Box
                      display="flex"
                      alignContent="center"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                      }}>
                      <AlternateEmailIcon style={{ fontSize: 100 }} sx={{ color: "#F83E7D", mr: "10vw" }} />
                      <Typography variant="h5">aisha@comfortablecoliving.com</Typography>
                    </Box>
                  </CardActionArea>
                </Card>
              </Stack>
            </Grid>

            <Grid item xs={4}>
              <Card raised="true" sx={{ p: 10.5, borderRadius: 4, minHeight: '35vh' }}>
                <CardActionArea>
                  <Grid container>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                      <LocalActivityIcon style={{ fontSize: 100 }} sx={{color: "#F83E7D"}} />
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={12}>
                      <Typography variant="h5">Support Ticket</Typography>
                    </Grid>
                  </Grid>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>

          <Grid container xs={12} p={2} spacing={2} my={4}>
            <Grid item xs={12}>
              <Typography variant="h4" color="#000" fontWeight={700}>
                We're here to Help!
              </Typography>
            </Grid>
            <Grid item xs={10} ml={10} mt={4}>
              <SearchBar></SearchBar>
            </Grid>
          </Grid>

          <Grid container xs={12} p={2} spacing={2} mt={10}>
            <Grid item xs={12}>
              <Typography variant="h4" color="#000" fontWeight={700}>
                FAQ
              </Typography>
            </Grid>
            
            <Grid item xs={12} ml={0} mt={4}>
              <FAQ></FAQ>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default MyAccountHelp;
