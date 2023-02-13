import { Box, Stack } from "@mui/system";
import { Button, Card, Grid, IconButton, Paper, Typography } from "@mui/material";
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
import StyledPhoto from "../components/StyledPhoto";
import SearchBar from "../components/SearchBar";
import MyCalendar from "../components/Calendar";
import StyledTextField from "../components/StyledTextField";
import { TextField } from "@mui/material";
import Mainbar from "../components/MainBar";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";
import ECard from "../components/ECard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TenantHomePageBG from "../../assets/TenantHomePageBG.png";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Dashboard(props) {
  const data = ["1", "2", "3", "4" ];
  return (
    <>
      <Mainbar />
      <Stack>
        <Box component="img" src={TenantHomePageBG}></Box>
        <Stack sx={{ mt: -100 }}>
          <Stack pl={15} spr={"50vw"} pt={10}>
            <Typography variant="h1" sx={{ fontWeight: "bold", color: "white", fontSize: 120 }}>
              Match
            </Typography>
            <Typography variant="h1" sx={{ fontWeight: "bold", color: "white", fontSize: 120 }}>
              Colive
            </Typography>
            <Typography variant="h1" sx={{ fontWeight: "bold", color: "white", fontSize: 120 }}>
              Enjoy
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" p={6} spacing={10} mx={8}>
          <SearchBar variant="small" />
          <SearchBar variant="small" />
        </Stack>

        {/*Welcome Back*/}
        <Stack style={{ background: "white" }} p={8} pb={10} spacing={3} alignItems="center">
          <Typography variant="h1" sx={{ textAlign: "center", color: "#F83E7D" }}>
            Welcome Back!
          </Typography>
          <Typography variant="h3" sx={{ textAlign: "center" }}>
            Your latest matches, events, blogs, news, and announcements.
          </Typography>
        </Stack>

        {/*Welcome Back*/}
        <Stack style={{ background: "white" }} pb={20} spacing={5} alignItems="center">
          <ECard variant='long' themeColor='#0045F1'></ECard>
          <ECard variant='long'></ECard>
        </Stack>

        {/*Saved Matches*/}
        <Stack style={{ background: "#113170" }} pt={10} spacing={3} alignItems="center">
          <Typography variant="h3" color="primary" sx={{ textAlign: "center", color: "white", fontWeight: "bold" }}>
            Saved Matches
          </Typography>
          <Typography variant="h5" color="primary" sx={{ textAlign: "center", color: "white" }}>
            Browse through your saved matches and connect with them.
          </Typography>
          <Stack direction="row" spacing={20} py={5}>
            <StyledButton variant="pinkBtn" text="Housemates" />
            <StyledButton variant="pinkBtn" text="Listings" bgcolor="#0094FF" />
          </Stack>
        </Stack>

        {/*Listing*/}
        <Stack direction="row" alignItems="center" p={10} spacing={5}>
          <Stack spacing={2}>
            <Typography variant="h2" sx={{ fontWeight: "bold" }}>
              Listings
            </Typography>
            <Typography variant="h5" sx={{}}>
              Recent Listings Discover new listings and connect with them.
            </Typography>
          </Stack>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton type="button" sx={{ m: "10px", bgcolor: "white" }} aria-label="search">
            <ArrowBackIosNewIcon sx={{ fontSize: 60 }} />
          </IconButton>
          <IconButton type="button" sx={{ m: "10px", bgcolor: "white" }} aria-label="search">
            <ArrowForwardIosIcon sx={{ fontSize: 60 }} />
          </IconButton>
        </Stack>

        {/*Housemate Card Area*/}
        <Grid container px={10} py={2} spacing={10} mb={20}>
          {data.map((id) => (
            <Grid item xs="auto">
              <ECard variant="listing" />
            </Grid>
          ))}
        </Grid>

        <Footer></Footer>
      </Stack>
    </>
  );
}

export default Dashboard;
