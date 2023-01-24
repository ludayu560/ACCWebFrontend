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
import NavBar from "../NavBar";
import axios from "axios";
import { borderRadius } from "@mui/system";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Mainbar from "../MainBar";
import ECard from "../ECard";
import { styled } from "@mui/material/styles";

function MyAccountBilling(props) {
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
          <Stack
            marginLeft={10}
            sx={{
              padding: "1vw",
              border: 1,
              borderRadius: "25px",
              boxShadow: 3,
            }}
          >
            <Button
              variant="text"
              to={`/account-${props.name}`}
              size="large"
              sx={{ color: "black", padding: 3 }}
            >
              My Profile
            </Button>
            <Button
              variant="text"
              to={`/account-${props.name}`}
              size="large"
              sx={{ color: "black", padding: 3 }}
            >
              Events
            </Button>
            <Button
              variant="text"
              to={`/account-${props.name}`}
              size="large"
              sx={{ color: "black", padding: 3 }}
              endIcon={<NotificationsActiveIcon />}
            >
              Notifications
            </Button>
            <Button
              variant="text"
              to={`/account-${props.name}`}
              size="large"
              sx={{ color: "black", padding: 3 }}
            >
              Favourites
            </Button>
            <Button
              variant="text"
              to={`/account-${props.name}`}
              size="large"
              sx={{ color: "#F83E7D", padding: 3 }}
            >
              Settings
            </Button>
            <Button
              variant="text"
              to={`/account-${props.name}`}
              size="large"
              sx={{ color: "black", padding: 3 }}
            >
              Payment
            </Button>
            <Button
              variant="text"
              to={`/account-${props.name}`}
              size="large"
              sx={{ color: "black", padding: 3 }}
            >
              Help
            </Button>
            <Button
              variant="text"
              to={`/account-${props.name}`}
              size="large"
              sx={{ color: "black", padding: 3 }}
            >
              Logout
            </Button>
          </Stack>
        </Grid>
        <Grid container xs={9} px={6}>
          <Grid item spacing={5} xs={12}>
            <Grid item xs={12} align="center">
              <Typography variant="h3" color="#000" fontWeight={700} mb={10}>
                Billing Info
                <Divider
                  variant="fullWidth"
                  sx={{
                    m: 2,
                    width: "10vw",
                    border: "2px solid #F83E7D",
                    opacity: 100,
                  }}
                />
              </Typography>
            </Grid>
            <Grid container spacing={3} pb={5}>
              <Grid item xs={12}>
                <Typography variant="h5" color="#000" fontWeight={700}>
                  Billing Address
                </Typography>
                <Grid container spacing={4} py={5} pl={4}>
                  <Grid item xs={8}>
                    <TextField
                      id="filled-basic"
                      label="Full Name"
                      variant="filled"
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid item xs={2}></Grid>
                  <Grid item xs={5}>
                    <TextField
                      id="filled-basic"
                      label="Address 1"
                      variant="filled"
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      id="filled-basic"
                      label="Address 2 (Optional)"
                      variant="filled"
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid item xs={2}></Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="filled-basic"
                      label="City"
                      variant="filled"
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="filled-basic"
                      label="Province"
                      variant="filled"
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="filled-basic"
                      label="Zip Code"
                      variant="filled"
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid item xs={3}></Grid>
                  <Grid item xs={5}>
                    <TextField
                      id="filled-basic"
                      label="Email"
                      variant="filled"
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      id="filled-basic"
                      label="Comfirm Email"
                      variant="filled"
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid item xs={2}></Grid>
                  <Grid item xs={10}>
                    <TextField
                      id="filled-basic"
                      label="Phone Number"
                      variant="filled"
                      fullWidth={true}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} align="center">
              <Typography variant="h3" color="#000" fontWeight={700} mb={10}>
                Payment Method
                <Divider
                  variant="fullWidth"
                  sx={{
                    m: 2,
                    width: "10vw",
                    border: "2px solid #F83E7D",
                    opacity: 100,
                  }}
                />
              </Typography>
            </Grid>

            <Grid container spacing={3} pb={5}>
              <Grid item xs={12}>
                <Typography variant="h5" color="#000" fontWeight={700}>
                  Card Details
                </Typography>
                <Grid container spacing={4} py={5} pl={4}>
                  <Grid item xs={6}>
                    <TextField
                      id="filled-basic"
                      label="Name on Card"
                      variant="filled"
                      fullWidth={true}
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <TextField
                      id="filled-basic"
                      label="Expiration Date (MM/YY)"
                      variant="filled"
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid item xs={2}></Grid>
                  <Grid item xs={8}>
                    <TextField
                      id="filled-basic"
                      label="Credit Card Number"
                      variant="filled"
                      fullWidth={true}
                    />
                  </Grid>

                  <Grid item xs={2}>
                    <TextField
                      id="filled-basic"
                      label="CVV"
                      variant="filled"
                      fullWidth={true}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default MyAccountBilling;
