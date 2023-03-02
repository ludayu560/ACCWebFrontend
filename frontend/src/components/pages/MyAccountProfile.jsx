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
import background from "../../assets/background1.png";
import GppGoodIcon from "@mui/icons-material/GppGood";
import Tags from "../components/Tags";

function MyAccountProfile(props) {
  const [ultSelected, setUltSelected] = useState(true);
  return (
    <>
      <Mainbar></Mainbar>
      <Grid container bgcolor="gray">
        <Grid item xs={12}>
          <Box sx={{ maxHeight: "90vh", width: "100vw" }} component="img" src={background} />
        </Grid>
        <Grid item xs={3} mt={-90}>
          <SideNav></SideNav>
        </Grid>
        <Grid item xs={9}></Grid>
      </Grid>
      <Grid item xs={12}>
        <Box
          display="flex"
          justifyContent="center"
          alignContent="center"
          style={{ position: "absolute", top: "70vh", left: "30vw" }}
          sx={{ width: "40vw", height: "20vh", bgcolor: "#FFFFFFDE", borderRadius: 5 }}>
          <Grid container p={2}>
            <Grid item xs={4}>
              <Typography variant="h5">18-25 Age Group</Typography>
            </Grid>
            <Grid item xs={5}></Grid>

            <Grid item xs={3}>
              <Stack direction="row">
                <GppGoodIcon sx={{ color: "#F83E7D", mr: 2 }} />
                <Typography>Verified Tenant</Typography>
              </Stack>
            </Grid>

            <Grid item xs={12}>
              <Box display="flex" justifyContent="center" alignItems="center" pt={10}>
                <Typography variant="h5" sx={{ color: "#F83E7D", fontWeight: "bold" }}>
                  User Name
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignContent="center"
          style={{ position: "absolute", top: "60vh", left: "45vw" }}>
          <Avatar style={{ border: "8px solid #F83E7D" }} sx={{ width: 200, height: 200 }}></Avatar>
        </Box>
      </Grid>

      <Grid container>
        <Grid item xs={6}>
          <Stack pl={40} pr={10} pt={20} spacing={4}>
            <Typography variant="h2">About Me</Typography>
            <Typography>
              Lectus a, mi, vulputate cursus. At faucibus vulputate lacus ultricies sit quisque. Condimentum amet
              euismod dapibus eros, arcu. Porttitor aliquam, etiam eu, felis quis nibh convallis. Elementum, placerat
              donec eros, sit. Nunc cras dignissim nibh nunc facilisis curabitur eget tellus. Diam quis scelerisque eget
              pretium, morbi tincidunt. Amet bibendum vulputate sollicitudin vel quis ac arcu quam eu. Tortor, venenatis
              accumsan ornare adipiscing mauris viverra etiam eget. Lectus duis nulla nibh varius eget velit egestas.
              Tellus cras sit natoque suspendisse sed ultrices sit. Morbi odio semper eget pellentesque elit odio at
              pharetra tellus. Diam sit at est purus a nisl. Quam luctus at sapien tempor vitae. Condimentum nunc nisl
              erat ipsum. Sodales turpis diam at sit lacus elementum massa tempus aenean. Elementum aliquet nisi lacus,
              gravida porttitor purus mi.
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Card raised sx={{ m: 20, mr: 45, bgcolor: "gray" }}>
            <img src={AccountContent} alt="grid" />
            <Box display="flex" justifyContent="center">
              <Button variant="contained" size="large" sx={{ bgcolor: "#F83E7D", p: 3, width: "100vw" }}>
                Match Now
              </Button>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={3} mt={-10} ml={40} p={4}>
          <Box sx={{ minHeight: "60vh", borderRight: 1, borderColor: 'lightgray' }}>
            <Typography variant="h4">Personality</Typography>
            <Grid container mt={4}>
              <Grid item xs="auto" m={1}>
                <Tags variant="pink" text="Introverted"></Tags>
              </Grid>
              <Grid item xs="auto" m={1}>
                <Tags variant="pink" text="Creative"></Tags>
              </Grid>
              <Grid item xs="auto" m={1}>
                <Tags variant="pink" text="PLACEHOLDER"></Tags>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={5} mt={-10} p={4}>
          <Box sx={{ minHeight: "60vh" }}>
            <Typography variant="h4">Interests</Typography>
            <Grid container mt={4}>
              <Grid item xs="auto" m={1}>
                <Tags variant="blue" text="Hiking"></Tags>
              </Grid>
              <Grid item xs="auto" m={1}>
                <Tags variant="blue" text="Cars"></Tags>
              </Grid>
              <Grid item xs="auto" m={1}>
                <Tags variant="blue" text="Sports"></Tags>
              </Grid>
              
              <Grid item xs="auto" m={1}>
                <Tags variant="blue" text="PLACEHOLDER"></Tags>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default MyAccountProfile;
