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
import AboutBG from "../../assets/AboutBG.png";

function Contact(props) {
  return (
    <>
      <Mainbar />
      <Stack>
        {/*First Title Section*/}
        <Box component="img" src={AboutBG} height="666px"></Box>
        <Stack sx={{ mt: -75, pb: 33 }} alignItems="center">
          <Stack pt={10} spacing={5}>
            <Typography variant="h1" align="center" sx={{ fontWeight: "bold", color: "white" }}>
              Contact Us
            </Typography>
          </Stack>
        </Stack>

        {/*Our Story*/}
        <Stack
          style={{ background: "#F83E7D" }}
          sx={{ borderTopRightRadius: 200, borderTopLeftRadius: 200 }}
          p={6}
          spacing={3}
          alignItems="center">
          <Typography variant="h3" color="primary" sx={{ textAlign: "center", color: "white", fontWeight: "bold" }}>
            Let the Conversation Start
          </Typography>
        </Stack>

        {/*our mission + vision + value portion */}
        <Grid container p={10}>
          <Grid item xs={6}>
            <Stack sx={{ width: "40vw", p: 7, px: 10 }} spacing={4}>
              <Typography variant="h4" sx={{ color: "#0045F1", fontWeight: "bold" }}>
                Here’s how you can reach us
              </Typography>
              <Typography variant="h5" sx={{}}>
                Fill out this contact form with your name, email, and questions or feedback. New ideas for community
                events or services you wish us to provide are highly appreciated. We will get back to you as soon as
                possible. Join us on social media and sign up for our email list, and we will keep you updated on
                upcoming events and more.
              </Typography>
              <Typography variant="h5" sx={{ color: "#F83E7D" }}>
                Give us a call at 1-888-AISHA11 info@comfortablecoliving.com
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} mt={10}>
            <Stack spacing={5}>
              <TextField
                required
                id="standard-required"
                label="Required"
                defaultValue="Name"
                variant="standard"
                sx={{ width: "40vw", mt: 4 }}
              />
              <TextField
                required
                id="standard-required"
                label="Required"
                defaultValue="Email"
                variant="standard"
                sx={{ width: "40vw", mt: 4 }}
              />
              <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={11}
                defaultValue=""
                sx={{ width: "40vw", mt: 4 }}
              />
            </Stack>
          </Grid>
        </Grid>

        {/*Learn More About Aisha Comfortable Coliving*/}
        <Stack style={{ background: "#CFEAFD" }} p={10} spacing={3} alignItems="center">
          <Typography variant="h3" color="primary" sx={{ textAlign: "center", color: "#0045F1", fontWeight: "bold" }}>
            Learn More About Aisha Comfortable Coliving
          </Typography>
        </Stack>

        {/*Learn More*/}
        <Stack alignItems="center" p={10} spacing={10} mb={20} px={20}>
          <Typography variant="h5" align="center">
            Discover how Aisha Comfortable Coliving can best serve you individually. Have all your questions answered
            and let us help you live your dream.
          </Typography>
          <Stack direction="row" spacing={20}>
            <PhoneInTalkIcon style={{ fontSize: 300 }} sx={{ color: "#0094FF" }} />
            <VideocamOutlinedIcon style={{ fontSize: 300 }} sx={{ color: "#0094FF" }} />
          </Stack>
          <Typography variant="h5" align="center">
            Let's chat! Whether you're looking for your next tenant or searching for a new housemate, we're here to
            help!
          </Typography>
          <StyledButton variant="pinkBtn" text="Schedule a Call" bgcolor="#0094FF"></StyledButton>
        </Stack>

        <Footer></Footer>
      </Stack>
    </>
  );
}

export default Contact;
