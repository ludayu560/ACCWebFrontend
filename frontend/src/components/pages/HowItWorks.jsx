import { Box, Stack } from "@mui/system";
import { Button, Card, Divider, Grid, Paper, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
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
import SearchBar from "../components/SearchBar";
import homeownersbg from "../../assets/homeownerbg.png";
import Mainbar from "../components/MainBar";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";

function HowItWorks(props) {
  const data = [
    {
      count: 1,
      text: "Create an Account",
      info: "All users can navigate to the Sign-in page to register and set up their account.",
      color: "#F83E7D",
    },
    {
      count: 2,
      text: "Submit Rental Listings",
      info: "Homeowners can list their property details with all necessary information and photos.",
      color: "#113170",
    },
    {
      count: 3,
      text: "Browse & Select",
      info: "By Property: Tenants can search through available properties and choose a property that suits their needs and lifestyle.",
      color: "#0094FF",
    },
    {
      count: 4,
      text: "Match Found",
      info: "Homeowners and tenants will be notified when a tenant or user is interested in their rental listing or profile.",
      color: "#0045F1",
    },
    {
      count: 5,
      text: "Zoom Meeting",
      info: "A team member will arrange and attend a Zoom call where all parties can meet, ask questions, and get to know each other.",
      color: "#F83E7D",
    },
    {
      count: 6,
      text: "WIP",
      info: "WIP",
      color: "#113170",
    },
    {
      count: 7,
      text: "WIP",
      info: "WIP",
      color: "#0094FF",
    },
    {
      count: 8,
      text: "WIP",
      info: "WIP",
      color: "#0045F1",
    },
    {
      count: 9,
      text: "WIP",
      info: "WIP",
      color: "#F83E7D",
    },
    {
      count: 10,
      text: "WIP",
      info: "WIP",
      color: "#113170",
    },
    {
      count: 11,
      text: "WIP",
      info: "WIP",
      color: "#0094FF",
    },
    {
      count: 12,
      text: "WIP",
      info: "WIP",
      color: "#0045F1",
    },
    {
      count: 13,
      text: "WIP",
      info: "WIP",
      color: "#F83E7D",
    },
    {
      count: 14,
      text: "WIP",
      info: "WIP",
      color: "#113170",
    },
    {
      count: 15,
      text: "WIP",
      info: "WIP",
      color: "#113170",
    },
  ];

  return (
    <>
      {/* <Mainbar /> */}
      <Stack>
        {/*For Property Owners Div*/}
        <Stack alignItems="left" sx={{ p: 10 }}>
          <Typography variant="h1" sx={{ color: "#113170", fontWeight: "bold" }}>
            How it Works
          </Typography>
        </Stack>

        {/*Our unique coliving experience in detail.*/}
        <Stack style={{ background: "white" }} p={6} pb={10} spacing={3} alignItems="center">
          <Box component="img" src={require("../../assets/Property 1=Default.png")} width="10vw" />

          <Typography variant="h4" color="primary" sx={{ textAlign: "center", fontWeight: "bold", color: "#F83E7D" }}>
            Our unique coliving experience in detail.
          </Typography>
          <Divider sx={{ width: "40vw" }} />
        </Stack>

        {/*1 to 15 grid items*/}
        <Grid container px={15} pb={20} spacing={10} justifyContent="center">
          {data.map((data) => (
            <Grid item xs={6}>
              <Typography variant="h1" sx={{ fontWeight: "bold", color: data.color, fontSize: '6vw' }}>
                {data.count}.
              </Typography>
              <Stack alignItems="center" align="center" mt={-15} pb={15}>
                <AccountCircleOutlinedIcon sx={{ fontSize: 200, color: data.color }} />
                <Typography variant="h4" sx={{ fontWeight: "bold", color: data.color }}>
                  {data.text}
                </Typography>
                <Typography variant="h6">{data.info}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Footer></Footer>
      </Stack>
    </>
  );
}

export default HowItWorks;
