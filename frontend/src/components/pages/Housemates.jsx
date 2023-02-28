import { Box, Stack } from "@mui/system";
import { Button, Card, Divider, Grid, IconButton, Paper, Typography } from "@mui/material";
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
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Tags from "../components/Tags";

function Housemates(props) {
  const data = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  return (
    <>
      <Stack>
        <Stack alignItems="center" p={6} spacing={5} mt={15}>
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            Matching By Housemates
          </Typography>
          <SearchBar variant="location" />
        </Stack>

        <Divider sx={{ p: 0.1, mx: 20 }} />
        <Grid container p={4} px={10}>
          <Grid item xs={9}>
            <Grid container spacing={4}>
              <Grid item>
                <StyledButton variant="pinkBtn" text="Filters" />
              </Grid>
              {data.map((id) => (
                <Grid item xs="auto">
                  <Tags variant="filter" text={id}></Tags>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={3} px={10}>
            <Stack spacing={15} alignItems='center'>
              <Typography align='center'>Showing 1 - 21of 242 results </Typography>
              <StyledButton variant="pinkBtn" text="Newest First" />
            </Stack>
          </Grid>
        </Grid>

        {/*Housemate Card Area*/}
        <Grid container px={10} py={2} spacing={10}>
          {data.map((id) => (
            <Grid item xs="auto">
              <ECard variant="housemate" />
            </Grid>
          ))}
        </Grid>

        {/*Pink Area*/}
        <Stack style={{ background: "white" }} p={8} pb={20} spacing={3} alignItems="center">
          <Box display="flex" m="auto" style={{ alignItems: "center" }}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              PAGE 1
            </Typography>
            <IconButton type="button" sx={{ m: "10px" }} aria-label="search">
              <KeyboardArrowRightIcon sx={{ fontSize: 40 }} />
            </IconButton>
          </Box>
        </Stack>

        <Footer></Footer>
      </Stack>
    </>
  );
}

export default Housemates;
