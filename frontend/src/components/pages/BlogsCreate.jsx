import React, { useState, useRef, useEffect } from "react";
import { Box, Stack } from "@mui/system";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Icon,
  IconButton,
  Paper,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import HomePhoto from "../../assets/HomePhoto.png";
import NavBar from "../components/NavBar";
import StyledButton from "../components/StyledButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import ForestOutlinedIcon from "@mui/icons-material/ForestOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HouseIcon from "@mui/icons-material/House";
import PeopleIcon from "@mui/icons-material/People";
import GppGoodIcon from "@mui/icons-material/GppGood";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import Footer from "../components/Footer";
import Mainbar from "../components/MainBar";
import KathleenLaura from "../../assets/KathleenLaura.png";
import Kathryn from "../../assets/Kathryn.png";
import Partner from "../../assets/Partner.png";
import AishaSignaturePink from "../../assets/AishaSignaturePink.svg";
import Hands from "../../assets/Hands.png";
import quote1 from "../../assets/Quote 1.svg";
import quote2 from "../../assets/quote2.png";
import img20 from "../../assets/image 20.png";
import img13 from "../../assets/image 13.png";
import img12 from "../../assets/image 12.png";
import img11 from "../../assets/image 11.png";
import LogoVariant2 from "../../assets/LogoVariant2.svg";
import { connect } from "react-redux";
import SearchBar from "../components/SearchBar";
import ECard from "../components/ECard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router";

function BlogsCreate() {
  const CustomToggleButtonStyles = {
    "&.MuiToggleButtonGroup-grouped.Mui-selected+.MuiToggleButtonGroup-grouped.Mui-selected": {
      border: "3px solid #0045F1",
      borderRadius: "100vmax",
    },
    "&.MuiButtonBase-root": {
      border: "3px solid #0045F1",
      borderColor: "#D9D9D9",
      borderRadius: "100vmax",
      marginRight: "10px",
      minWidth: "3.5rem",
      ":first-of-type": {
        border: "3px solid #0045F1",
        borderColor: "#D9D9D9",
        borderRadius: "100vmax",
      },
      ":not(:first-of-type)": {
        border: "3px solid #0045F1",
        borderColor: "#D9D9D9",
        borderRadius: "100vmax",
      },
    },
    "&.Mui-selected.MuiButtonBase-root": {
      border: "3px solid #0045F1",
      borderRadius: "100vmax",
      bgcolor: "white",
    },
  };

  const [utilities, setUtilities] = useState("unknown");

  const navigate = useNavigate();

  const data = ["1"];

  const handleOnClick = (id) => {
    navigate("/blogs");
  };
  return (
    <div style={{ overflowX: "hidden" }}>
      {/*Our Latest Blogs */}
      <Box pt={10} px={10} spacing={3} display="flex" alignItems="center">
        <IconButton onClick={handleOnClick}>
          <ArrowBackIcon style={{ fontSize: 60 }} sx={{ m: 5 }} />
        </IconButton>

        <Typography variant="h3" sx={{ color: "#F83E7D", fontWeight: "bold" }}>
          Add new blog
        </Typography>
      </Box>
      <Stack alignItems="center">
        <Divider width="90%" />
      </Stack>
      {/*Blogs Grid */}
      <Grid container spacing={10} alignContent="center" justifyContent="center" pt={10} px={10} pb={20}>
        <Grid item xs={12}>
          <Stack spacing={5}>
            <TextField label="Blog Header" variant="outlined" fullWidth />
            <TextField label="Subtitle" variant="outlined" fullWidth />
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <TextField
            name={"event_date_time"}
            variant="filled"
            label="Time & Date"
            style={{ backgroundColor: "white" }}
            type="datetime-local"
            required
            InputLabelProps={{ shrink: true }}
            width="50%"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} />
        <Grid item xs={12}>
          {/* Utilities Included */}
          <Container>
            <Typography variant="h4" marginTop={"3vh"} gutterBottom fontWeight={700}>
              Categories
            </Typography>
            <ToggleButtonGroup
              exclusive
              value={utilities}
              onChange={(event, value) => {
                setUtilities(value);
              }}
              sx={{ flexWrap: "wrap" }}>
              <ToggleButton value={"unknown"} sx={CustomToggleButtonStyles}>
                <Typography variant="h6">LIFESTYLE & WELLNESS</Typography>
              </ToggleButton>
              <ToggleButton value={"none"} sx={CustomToggleButtonStyles}>
                <Typography variant="h6">INSPIRING WOMEN</Typography>
              </ToggleButton>
              <ToggleButton value={"all"} sx={CustomToggleButtonStyles}>
                <Typography variant="h6">REAL ESTATE</Typography>
              </ToggleButton>
              <ToggleButton value={"hydro"} sx={CustomToggleButtonStyles}>
                <Typography variant="h6">FOOD</Typography>
              </ToggleButton>
              <ToggleButton value={"water"} sx={CustomToggleButtonStyles}>
                <Typography variant="h6">ENTERTAINMENT</Typography>
              </ToggleButton>
              <ToggleButton value={"electricity"} sx={CustomToggleButtonStyles}>
                <Typography variant="h6">COLIVING</Typography>
              </ToggleButton>
            </ToggleButtonGroup>
          </Container>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={10}>
            <TextField
              name={"event_description"}
              id="filled-multiline-static"
              label="MARKDOWN"
              multiline
              rows={11}
              defaultValue=""
              variant="filled"
              sx={{ width: "100%", mt: 4 }}
            />
            <TextField label="PREVIEW" variant="outlined" fullWidth disabled />
          </Stack>
        </Grid>
        {data.map((id) => (
          <Grid item xs="auto">
            <ECard variant="blog" />
          </Grid>
        ))}
      </Grid>
      <Footer></Footer>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(BlogsCreate);
