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

function MyAccountMySubscriptions(props) {
  const [ultSelected, setUltSelected] = useState(true);
  return (
    <>
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
              My Subscriptions
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

          <Grid item xs={12}>
            <Box p={2}>
              <Typography variant="h4">My current plan is:</Typography>
            </Box>
            <Box p={2} mb={6}>
              <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                Aisha Community Events Basic Membership
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={4}></Grid>
          <Grid item xs={4} mb={6}>
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
                      setUltSelected(!ultSelected);
                    }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}></Grid>

          <Grid item xs={12} mb={4}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <StyledButton variant="pinkBtn" text="Change" link={`/account-subscribe`} />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default MyAccountMySubscriptions;
