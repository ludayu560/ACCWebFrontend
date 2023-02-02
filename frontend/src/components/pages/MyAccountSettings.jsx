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

function MyAccountSettings(props) {
  const IOSSwitch = styled((props) => <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />)(
    ({ theme }) => ({
      width: 42,
      height: 26,
      padding: 0,
      "& .MuiSwitch-switchBase": {
        padding: 0,
        margin: 2,
        transitionDuration: "300ms",
        "&.Mui-checked": {
          transform: "translateX(16px)",
          color: "#fff",
          "& + .MuiSwitch-track": {
            backgroundColor: theme.palette.mode === "dark" ? "#F83E7D" : "#F83E7D",
            opacity: 1,
            border: 0,
          },
          "&.Mui-disabled + .MuiSwitch-track": {
            opacity: 0.5,
          },
        },
        "&.Mui-focusVisible .MuiSwitch-thumb": {
          color: "#33cf4d",
          border: "6px solid #fff",
        },
        "&.Mui-disabled .MuiSwitch-thumb": {
          color: theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[600],
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
        },
      },
      "& .MuiSwitch-thumb": {
        boxSizing: "border-box",
        width: 22,
        height: 22,
      },
      "& .MuiSwitch-track": {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
        opacity: 1,
        transition: theme.transitions.create(["background-color"], {
          duration: 500,
        }),
      },
    })
  );

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
        <Grid container xs={9} px={6}>
          <Grid item spacing={5} xs={12}>
            <Grid item xs={12} align="center">
              <Typography variant="h3" color="#000" fontWeight={700} mb={10}>
                Account Settings
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
            <Grid container spacing={2} pb={5}>
              <Grid item xs={12}>
                <Typography variant="h4" color="#000" fontWeight={700}>
                  Push Notifications
                </Typography>
                <Grid container spacing={2} py={5} pl={4}>
                  <>
                    <Grid item xs={10}>
                      <Typography variant="h5">Property has been favourited</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />} />
                    </Grid>
                  </>
                  <>
                    <Grid item xs={10}>
                      <Typography variant="h5">Event registration</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />} />
                    </Grid>
                  </>
                  <>
                    <Grid item xs={10}>
                      <Typography variant="h5">New blog has been posted</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />} />
                    </Grid>
                  </>
                  <>
                    <Grid item xs={10}>
                      <Typography variant="h5">New event has been posted</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />} />
                    </Grid>
                  </>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h4" color="#000" fontWeight={700}>
                  Privacy and Security
                </Typography>
              </Grid>
              <Grid container spacing={2} py={5} pl={6}>
                <>
                  <Grid item xs={10}>
                    <Typography variant="h5">Visibility</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />} />
                  </Grid>
                </>
                <>
                  <Grid item xs={10}>
                    <Typography variant="h5">Save login info</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />} />
                  </Grid>
                </>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default MyAccountSettings;
