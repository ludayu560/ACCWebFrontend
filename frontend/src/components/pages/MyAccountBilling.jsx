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

function MyAccountBilling(props) {
  const [masterSelected, setMasterSelected] = useState();
  const [palSelected, setPalSelected] = useState();
  const [visaSelected, setVisaSelected] = useState();

  return (
    <>
      <Grid container spacing={8} className="acc-container">
        <Grid item xs={12}>
          <Typography className="header" variant="h2" padding={"3vw"} fontWeight="bold">
            My Account
            <Divider variant="middle" sx={{ width: "15vw", border: "2px solid", borderColor: "primary.main", opacity: 100 }} />
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <SideNav></SideNav>
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
                    border: "2px solid",
                    borderColor: "primary.main",
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
                    <TextField id="filled-basic" label="Full Name" variant="filled" fullWidth={true} />
                  </Grid>
                  <Grid item xs={2}></Grid>
                  <Grid item xs={5}>
                    <TextField id="filled-basic" label="Address 1" variant="filled" fullWidth={true} />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField id="filled-basic" label="Address 2 (Optional)" variant="filled" fullWidth={true} />
                  </Grid>
                  <Grid item xs={2}></Grid>
                  <Grid item xs={3}>
                    <TextField id="filled-basic" label="City" variant="filled" fullWidth={true} />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField id="filled-basic" label="Province" variant="filled" fullWidth={true} />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField id="filled-basic" label="Zip Code" variant="filled" fullWidth={true} />
                  </Grid>
                  <Grid item xs={3}></Grid>
                  <Grid item xs={5}>
                    <TextField id="filled-basic" label="Email" variant="filled" fullWidth={true} />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField id="filled-basic" label="Comfirm Email" variant="filled" fullWidth={true} />
                  </Grid>
                  <Grid item xs={2}></Grid>
                  <Grid item xs={10}>
                    <TextField id="filled-basic" label="Phone Number" variant="filled" fullWidth={true} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} align="center">
              <Typography variant="h3" color="#000" fontWeight={700}>
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

            <Stack direction="row" spacing={4} m={4}>
              <Button
                variant="outlined"
                style={{ width: "20vw", height: "18vh" }}
                startIcon={<Avatar src={MasterCardLogo} style={{ width: "auto", height: "17vh" }} />}
                sx={{
                  "&:hover": { backgroundColor: "transparent", borderWidth: masterSelected ? 5 : 1 },
                  borderColor: "#F9568D",
                  borderRadius: 5,
                  borderWidth: masterSelected ? 5 : 1,
                }}
                onClick={() => {
                  setMasterSelected(!masterSelected);
                  setPalSelected(false);
                  setVisaSelected(false);
                }}
              />
              <Button
                variant="outlined"
                style={{ width: "20vw", height: "18vh" }}
                startIcon={<Avatar src={PayPalLogo} style={{ width: "auto", height: "6vh" }} variant="square" />}
                sx={{
                  "&:hover": { backgroundColor: "transparent", borderWidth: palSelected ? 5 : 1 },
                  borderColor: "#F9568D",
                  borderRadius: 5,
                  borderWidth: palSelected ? 5 : 1,
                }}
                onClick={() => {
                  setPalSelected(!palSelected);
                  setMasterSelected(false);
                  setVisaSelected(false);
                }}
              />
              <Button
                variant="outlined"
                style={{ width: "20vw", height: "18vh" }}
                startIcon={<Avatar src={VisaLogo} style={{ width: "auto", height: "6vh" }} variant="square" />}
                sx={{
                  "&:hover": { backgroundColor: "transparent", borderWidth: visaSelected ? 5 : 1 },
                  borderColor: "#F9568D",
                  borderRadius: 5,
                  borderWidth: visaSelected ? 5 : 1,
                }}
                onClick={() => {
                  setVisaSelected(!visaSelected);
                  setMasterSelected(false);
                  setPalSelected(false);
                }}
              />
            </Stack>

            <Grid container spacing={3} pb={5}>
              <Grid item xs={12}>
                <Typography variant="h5" color="#000" fontWeight={700}>
                  Card Details
                </Typography>
                <Grid container spacing={4} py={5} pl={4}>
                  <Grid item xs={6}>
                    <TextField id="filled-basic" label="Name on Card" variant="filled" fullWidth={true} />
                  </Grid>

                  <Grid item xs={4}>
                    <TextField id="filled-basic" label="Expiration Date (MM/YY)" variant="filled" fullWidth={true} />
                  </Grid>
                  <Grid item xs={2}></Grid>
                  <Grid item xs={8}>
                    <TextField id="filled-basic" label="Credit Card Number" variant="filled" fullWidth={true} />
                  </Grid>

                  <Grid item xs={2}>
                    <TextField id="filled-basic" label="CVV" variant="filled" fullWidth={true} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item pb={10}>
              <Box textAlign="center">
                <StyledButton variant="signup" text="Next" link={`/account-billsummary`} />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default MyAccountBilling;
