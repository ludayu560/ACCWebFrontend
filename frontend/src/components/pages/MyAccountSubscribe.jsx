import {
  Container,
  Button,
  IconButton,
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
  CardContent,
  Avatar,
  CardMedia,
  ToggleButton,
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
import MasterCardLogo from "../../assets/MasterCardLogo.png";
import PayPalLogo from "../../assets/PayPalLogo.png";
import VisaLogo from "../../assets/VisaLogo.png";
import StyledButton from "../components/StyledButton";
import AddIcon from "../components/AddIcon";

function MyAccountSubscribe(props) {
  const [basicSelected, setBasicSelected] = useState(false);
  const [premiumSelected, setPremiumSelected] = useState(false);
  const [ultSelected, setUltSelected] = useState(false);
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

        <Grid container xs={9} px={6} spacing={2}>
          <Grid item xs={12} align="center">
            <Typography variant="h3" color="#000" fontWeight={700} mb={5}>
              Subscriptions
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

          <Grid item xs={12} mb={3}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Typography variant="h4">Get Unlimited Access to Aisha Community Events</Typography>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Typography variant="h6">Choose a subscription package to get started!</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <Card
              raised="true"
              sx={{ borderRadius: 5, border: 5, borderColor: basicSelected ? "#F83E7D" : "transparent" }}>
              <CardContent bgcolor="red">
                <Box display="flex" alignContent="center" justifyContent="center" p={4}>
                  <Typography variant="h3">Basic</Typography>
                </Box>
                <Box display="flex" alignContent="center" justifyContent="center" alignItems="center" p={4}>
                  <Typography variant="h2">$35</Typography>
                  <Typography variant="h5">/month</Typography>
                </Box>
                <Divider></Divider>
                <Stack ml={4} p={3} sx={{ minHeight: "35vh" }}>
                  <AddIcon variant="start" text="test"></AddIcon>
                  <AddIcon variant="start" text="test"></AddIcon>
                </Stack>
                <Box display="flex" alignContent="center" justifyContent="center" alignItems="center">
                  <Checkbox
                    sx={{
                      "&.Mui-checked": {
                        color: "#F83E7D",
                      },
                      "& .MuiSvgIcon-root": { fontSize: 68 },
                    }}
                    checked={basicSelected}
                    onClick={() => {
                      setBasicSelected(!basicSelected);
                      setPremiumSelected(false);
                      setUltSelected(false);
                    }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <Card
              raised="true"
              sx={{ borderRadius: 5, border: 5, borderColor: premiumSelected ? "#F83E7D" : "transparent" }}>
              <CardContent bgcolor="red">
                <Box display="flex" alignContent="center" justifyContent="center" p={4}>
                  <Typography variant="h3">Premium</Typography>
                </Box>
                <Box display="flex" alignContent="center" justifyContent="center" alignItems="center" p={4}>
                  <Typography variant="h2">$100</Typography>
                  <Typography variant="h5">/quarter</Typography>
                </Box>
                <Divider></Divider>
                <Stack ml={4} p={3} sx={{ minHeight: "35vh" }}>
                  <AddIcon variant="start" text="test"></AddIcon>
                  <AddIcon variant="start" text="test"></AddIcon>
                  <AddIcon variant="start" text="test"></AddIcon>
                  <AddIcon variant="start" text="test"></AddIcon>
                </Stack>
                <Box display="flex" alignContent="center" justifyContent="center" alignItems="center">
                  <Checkbox
                    sx={{
                      "&.Mui-checked": {
                        color: "#F83E7D",
                      },
                      "& .MuiSvgIcon-root": { fontSize: 68 },
                    }}
                    checked={premiumSelected}
                    onClick={() => {
                      setBasicSelected(false);
                      setPremiumSelected(!premiumSelected);
                      setUltSelected(false);
                    }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <Card
              raised="true"
              sx={{ borderRadius: 5, border: 5, borderColor: ultSelected ? "#F83E7D" : "transparent" }}>
              <CardContent bgcolor="red">
                <Box display="flex" alignContent="center" justifyContent="center" p={4}>
                  <Typography variant="h3">ULTIMATE</Typography>
                </Box>
                <Box display="flex" alignContent="center" justifyContent="center" alignItems="center" p={4}>
                  <Typography variant="h2">$275</Typography>
                  <Typography variant="h5">/year</Typography>
                </Box>
                <Divider></Divider>
                <Stack ml={4} p={3} sx={{ minHeight: "35vh" }}>
                  <AddIcon variant="start" text="test"></AddIcon>
                  <AddIcon variant="start" text="test"></AddIcon>
                  <AddIcon variant="start" text="test"></AddIcon>
                  <AddIcon variant="start" text="test"></AddIcon>
                  <AddIcon variant="start" text="test"></AddIcon>
                  <AddIcon variant="start" text="test"></AddIcon>
                </Stack>
                <Box display="flex" alignContent="center" justifyContent="center" alignItems="center">
                  <Checkbox
                    sx={{
                      "&.Mui-checked": {
                        color: "#F83E7D",
                      },
                      "& .MuiSvgIcon-root": { fontSize: 68 },
                    }}
                    checked={ultSelected}
                    onClick={() => {
                      setBasicSelected(false);
                      setPremiumSelected(false);
                      setUltSelected(!ultSelected);
                    }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} my={3}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Typography variant="h6">Cancel Anytime</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} mb={4}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <StyledButton variant="signup" text="Proceed" link={`/account-billing`}/>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default MyAccountSubscribe;
