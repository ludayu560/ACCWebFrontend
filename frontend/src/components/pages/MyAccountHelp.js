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
} from "@mui/material";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import RectangleOne from "../../assets/Rectangle1.svg";
import AccountContent from "../../assets/AccountContent.svg";
import NavBar from "../NavBar";
import axios from "axios";
import { borderRadius } from "@mui/system";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Mainbar from "../MainBar";
import ECard from "../ECard";
import { styled } from "@mui/material/styles";
import SideNav from "../SideNav";
import SearchBar from "../SearchBar";

function MyAccountHelp(props) {
  return (
    <>
      <Mainbar></Mainbar>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Typography variant="h2" padding={"3vw"} fontWeight={700}>
            <b>My Account</b>
            <Divider
              variant="middle"
              sx={{ width: "15vw", border: "2px solid #F83E7D", opacity: 100 }}
            />
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

          <Grid container xs={12} align="center" p={4} spacing={2}>
            <Grid item xs={7}>
              <Stack spacing={2}>
                <Card raised="true" sx={{ p: 4, borderRadius: 4}}>
                  Call: +1-647-777-7777
                </Card>
                <Card raised="true" sx={{ p: 4, borderRadius: 4}}>
                  aisha@comfortablecoliving.com
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={5}>
              <Card raised="true" sx={{ p: 10.5, borderRadius: 4}}>
                Support Ticket
              </Card>
            </Grid>
          </Grid>
          <Grid container xs={12} p={2} spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4" color="#000" fontWeight={700}>
                We're here to Help!
              </Typography>
            </Grid>
            <Grid item xs={10} ml={10}>
              <SearchBar></SearchBar>
            </Grid>
          </Grid>
          <Grid container xs={12} p={2} spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4" color="#000" fontWeight={700}>
                FAQ
              </Typography>
            </Grid>
            <Grid item xs={10} ml={10}>
              <Stack>
                <Typography>Things</Typography>
                <Typography>Things</Typography>
                <Typography>Things</Typography>
                <Typography>Things</Typography>
                <Typography>Things</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default MyAccountHelp;
