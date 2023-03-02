import { Box, Stack } from "@mui/system";
import { Button, Card, Grid, Paper, Typography } from "@mui/material";
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

function TenantHome(props) {
  return (
    <>
      <Mainbar />
      <Stack>
        {/*First Title Section*/}
        <Box component="img" src={require("../../assets/image 2 (1).png")}/>
        <Stack sx={{ mt: -72 }} pb={10}>
          <Stack pl={15} spr={"50vw"} pt={10}>
            <Typography variant="h1" sx={{ fontWeight: "bold", color: "white" }}>
              Enjoy
            </Typography>
            <Typography variant="h1" sx={{ fontWeight: "bold", color: "white" }}>
              Safe
            </Typography>
            <Typography variant="h1" sx={{ fontWeight: "bold", color: "white" }}>
              Comfortable
            </Typography>
            <Typography variant="h1" sx={{ fontWeight: "bold", color: "white" }}>
              Living
            </Typography>
          </Stack>
        </Stack>

        {/*Let’s Match You! title*/}
        <Stack style={{ background: "white" }} spacing={3} alignItems="center" mt={10}>
          <Box component="img" src={require("../../assets/Property 1=Default.png")} sx={{ width: "10vw" }} />
          <Typography variant="h3" color="primary" sx={{ textAlign: "center", color: "#113170", fontWeight: "bold" }}>
            Let’s Match You!
          </Typography>
          <Typography variant="h6" align="center" px={20}>
            Our matching system is designed to allow you to search for a coliving experience based on your priorities.
            Find your perfect match by either browsing by place to find your next coliving space or browsing by people
            to get matched with your housemates.
          </Typography>
          <Grid container spacing={2} p={10} justifyContent="center">
            <Grid item xs="auto">
              <Stack
                sx={{ width: "582px" }}
                p={5}
                align="center"
                spacing={4}
                alignItems="center"
                style={{ background: "#0045F10F" }}>
                <Typography variant="h5" sx={{ color: "#0045F1", fontWeight: "bold" }}>
                  Are you looking to get matched by listings?
                </Typography>
                <HouseIcon style={{ fontSize: 200 }} sx={{ color: "#0045F1" }} />
                <StyledButton variant="pinkBtn" text="Listings" bgcolor="#0045F1" />
              </Stack>
            </Grid>

            <Grid item xs="auto">
              <Stack
                sx={{ width: "582px" }}
                p={5}
                align="center"
                spacing={4}
                alignItems="center"
                style={{ background: "#F83E7D0F" }}>
                <Typography variant="h5" sx={{ color: "#F83E7D", fontWeight: "bold" }}>
                  Are you looking to get matched by housemates?
                </Typography>
                <PeopleIcon style={{ fontSize: 200 }} sx={{ color: "#F83E7D" }} />
                <StyledButton variant="pinkBtn" text="Housemates"></StyledButton>
              </Stack>
            </Grid>
          </Grid>
        </Stack>

        {/*Pink Area*/}
        <Stack style={{ background: "white" }} p={8} pb={20} spacing={3} alignItems="center">
          <Typography variant="h3" sx={{ textAlign: "center", fontWeight: "bold", color: "#F83E7D" }}>
            For all Women Tenants,
          </Typography>
          <Typography variant="h3" sx={{ textAlign: "center", fontWeight: "bold", color: "#F83E7D" }}>
            Coliving is the New Way of Wellness Living
          </Typography>
          <Typography variant="h5" sx={{ textAlign: "center", px: 25, pt: 10 }}>
            Watch the short video below to learn about the benefits of coliving.
          </Typography>
          <Box sx={{ width: "985px", height: "555px" }} bgcolor="gray">
            {" "}
            video
          </Box>
        </Stack>

        {/*Why should you join title*/}
        <Stack
          style={{ background: "#C5265C" }}
          sx={{ borderTopRightRadius: 200, borderTopLeftRadius: 200 }}
          p={10}
          spacing={3}
          alignItems="center">
          <Typography variant="h3" color="primary" sx={{ textAlign: "center", color: "white", fontWeight: "bold" }}>
            Why Should You Join?
          </Typography>
        </Stack>

        {/*Why should you join content*/}
        <Stack pb={20}>
          <Grid container>
            <Grid item xs={6} p={10} pb={0}>
              <Stack alignItems="center" spacing={4}>
                <Typography variant="h4" sx={{ fontWeight: "bold", color: "#C5265C" }}>
                  1. Starting A New Semester
                </Typography>
                <Box component="img" src={require("../../assets/image 4.png")} bgcolor="gray" />
                <Typography sx={{ px: 15 }}>
                  At Aisha Comfortable Coliving, we understand the stress and difficulties of starting school. We are
                  here to help you find the best rental experience away from home. Join our community and embark on a
                  new journey of wellness living.
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} p={10} pb={0}>
              <Stack alignItems="center" spacing={4}>
                <Typography variant="h4" sx={{ fontWeight: "bold", color: "#C5265C" }}>
                  1. Starting A New Semester
                </Typography>
                <Box component="img" src={require("../../assets/image 5.png")} bgcolor="gray" />
                <Typography sx={{ px: 15 }}>
                  At Aisha Comfortable Coliving, we understand the stress and difficulties of starting school. We are
                  here to help you find the best rental experience away from home. Join our community and embark on a
                  new journey of wellness living.
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack alignItems="center" p={4}>
                <StyledButton variant="pinkBtn" text="Search Rentals" />
              </Stack>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={6} p={10} pb={0}>
              <Stack alignItems="center" spacing={4}>
                <Typography variant="h4" sx={{ fontWeight: "bold", color: "#C5265C" }}>
                  1. Starting A New Semester
                </Typography>
                <Box component="img" src={require("../../assets/image 8.png")} bgcolor="gray" />
                <Typography sx={{ px: 15 }}>
                  At Aisha Comfortable Coliving, we understand the stress and difficulties of starting school. We are
                  here to help you find the best rental experience away from home. Join our community and embark on a
                  new journey of wellness living.
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} p={10} pb={0}>
              <Stack alignItems="center" spacing={4}>
                <Typography variant="h4" sx={{ fontWeight: "bold", color: "#C5265C" }}>
                  1. Starting A New Semester
                </Typography>
                <Box component="img" src={require("../../assets/image 9.png")} bgcolor="gray" />
                <Typography sx={{ px: 15 }}>
                  At Aisha Comfortable Coliving, we understand the stress and difficulties of starting school. We are
                  here to help you find the best rental experience away from home. Join our community and embark on a
                  new journey of wellness living.
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack alignItems="center" p={4}>
                <StyledButton variant="pinkBtn" text="Search Rentals" />
              </Stack>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={6} p={10} pb={0}>
              <Stack alignItems="center" spacing={4}>
                <Typography variant="h4" sx={{ fontWeight: "bold", color: "#C5265C" }}>
                  1. Starting A New Semester
                </Typography>
                <Box component="img" src={require("../../assets/image 19.png")} bgcolor="gray" />
                <Typography sx={{ px: 15 }}>
                  At Aisha Comfortable Coliving, we understand the stress and difficulties of starting school. We are
                  here to help you find the best rental experience away from home. Join our community and embark on a
                  new journey of wellness living.
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} p={10} pb={0}>
              <Stack alignItems="center" spacing={4}>
                <Typography variant="h4" sx={{ fontWeight: "bold", color: "#C5265C" }}>
                  1. Starting A New Semester
                </Typography>
                <Box component="img" src={require("../../assets/image 20 (1).png")} bgcolor="gray" />
                <Typography sx={{ px: 15 }}>
                  At Aisha Comfortable Coliving, we understand the stress and difficulties of starting school. We are
                  here to help you find the best rental experience away from home. Join our community and embark on a
                  new journey of wellness living.
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack alignItems="center" p={4}>
                <StyledButton variant="pinkBtn" text="Search Rentals" />
              </Stack>
            </Grid>
          </Grid>
        </Stack>

        {/*Services We Offer Our Tenants title*/}
        <Stack
          style={{ background: "#0045F1" }}
          sx={{ borderTopRightRadius: 200, borderTopLeftRadius: 200 }}
          p={10}
          pb={20}
          spacing={3}
          alignItems="center">
          <Typography variant="h3" color="primary" sx={{ textAlign: "center", color: "white", fontWeight: "bold" }}>
            Services We Offer Our Tenants
          </Typography>
        </Stack>

        {/*Blog Grid*/}
        <Grid container spacing={10} alignContent="center" justifyContent="center" mt={-25} pb={20}>
          <Grid item xs="auto">
            <Card sx={{ width: "377px", height: "500px" }}></Card>
          </Grid>
          <Grid item xs="auto">
            <Card sx={{ width: "377px", height: "500px" }}></Card>
          </Grid>
          <Grid item xs="auto">
            <Card sx={{ width: "377px", height: "500px" }}></Card>
          </Grid>
        </Grid>

        {/*Here’s What It’s Going to Cost You title*/}
        <Stack direction="row" style={{ background: "#42ACF980" }} py={10} pb={20} alignItems="center">
          <AttachMoneyIcon style={{ fontSize: 300 }} sx={{ color: "#0045F1", ml: 20 }} />
          <Stack spacing={3} ml={-40}>
            <Typography variant="h3" color="primary" sx={{ textAlign: "center", color: "white", fontWeight: "bold" }}>
              Here's What It's Going to Cost You
            </Typography>
            <Typography
              variant="h4"
              color="primary"
              sx={{ textAlign: "center", color: "white", fontWeight: "bold", px: "25vw" }}>
              All tenants will be charged a fee of one week of rent and 3% of the monthly rent.
            </Typography>
          </Stack>
        </Stack>

        <Footer></Footer>
      </Stack>
    </>
  );
}

export default TenantHome;
