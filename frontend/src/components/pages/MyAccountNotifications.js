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

function MyAccountNotifications(props) {
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
              sx={{ color: "black", padding: 3}}
            >
              Events
            </Button>
            <Button
              variant="text"
              to={`/account-${props.name}`}
              size="large"
              sx={{ color: "#F83E7D", padding: 3 }}
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
              sx={{ color: "black", padding: 3 }}
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
        <Grid item xs={9} align="center">
          <Grid item xs={9}>
            <Typography variant="h3" color="#000" fontWeight={700}>
              Notifications
              <Divider
                variant="fullWidth"
                sx={{
                  width: "15vw",
                  border: "2px solid #F83E7D",
                  opacity: 100,
                }}
              />
            </Typography>
            <Stack spacing={4} mt={4}>
              <Box
                bgcolor="white"
                p={3}
                sx={{
                  border: 1,
                  borderRadius: 5,
                  textAlign: "left",
                  boxShadow: 3,
                }}
              >
                {" "}
                Testing{" "}
              </Box>
              <Box
                bgcolor="white"
                p={3}
                sx={{
                  border: 1,
                  borderRadius: 5,
                  textAlign: "left",
                  boxShadow: 3,
                }}
              >
                {" "}
                Testing{" "}
              </Box>
              <Box
                bgcolor="white"
                p={3}
                sx={{
                  border: 1,
                  borderRadius: 5,
                  textAlign: "left",
                  boxShadow: 3,
                }}
              >
                {" "}
                Testing{" "}
              </Box>
              <Box
                bgcolor="white"
                p={3}
                sx={{
                  border: 1,
                  borderRadius: 5,
                  textAlign: "left",
                  boxShadow: 3,
                }}
              >
                {" "}
                Testing{" "}
              </Box>
              <Box
                bgcolor="white"
                p={3}
                sx={{
                  border: 1,
                  borderRadius: 5,
                  textAlign: "left",
                  boxShadow: 3,
                }}
              >
                {" "}
                Testing{" "}
              </Box>
              <Box
                bgcolor="white"
                p={3}
                sx={{
                  border: 1,
                  borderRadius: 5,
                  textAlign: "left",
                  boxShadow: 3,
                }}
              >
                {" "}
                Testing{" "}
              </Box>
              <Box
                bgcolor="white"
                p={3}
                sx={{
                  border: 1,
                  borderRadius: 5,
                  textAlign: "left",
                  boxShadow: 3,
                }}
              >
                {" "}
                Testing{" "}
              </Box>
              <Box
                bgcolor="white"
                p={3}
                sx={{
                  border: 1,
                  borderRadius: 5,
                  textAlign: "left",
                  boxShadow: 3,
                }}
              >
                {" "}
                Testing{" "}
              </Box>
              <Box
                bgcolor="white"
                p={3}
                sx={{
                  border: 1,
                  borderRadius: 5,
                  textAlign: "left",
                  boxShadow: 3,
                }}
              >
                {" "}
                Testing{" "}
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default MyAccountNotifications;
