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
import MainLogo from "../../assets/Icons/IconHouseLogoWhite.svg";
import "../pageStyles/styles.css";

function Contact(props) {
  return (
    <>
      <div className="acc-section">
        <div className="acc-container">
          {/*First Title Section*/}
          <Box component="img" src={AboutBG} width="100%"></Box>
          <Stack sx={{ mt: -60, pb: "22rem" }} alignItems="center">
            <Box component="img" src={MainLogo} width="10vw" />
            <Typography variant="h1" align="center" sx={{ fontWeight: "bold", color: "white" }}>
              Contact Us
            </Typography>
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
          <Grid container p={10} justifyContent="center">
            <Grid item xs={6}>
              <Stack sx={{ width: "40vw", p: 7, pr: 10 }} spacing={4}>
                <Typography variant="h4" sx={{ color: "#0045F1", fontWeight: "bold" }}>
                  Here’s how you can reach us
                </Typography>
                <Typography variant="h6">
                  Fill out this contact form with your name, email, and questions or feedback. New ideas for community
                  events or services you wish us to provide are highly appreciated. We will get back to you as soon as
                  possible. Join us on social media and sign up for our email list, and we will keep you updated on
                  upcoming events and more.
                </Typography>
                <Typography variant="h6" sx={{ color: "#F83E7D" }}>
                  Give us a call at 1-888-AISHA11 info@comfortablecoliving.com
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs="auto" mt={10}>
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
          <Stack
            style={{ background: "linear-gradient(#D7F3FF, white)" }}
            p={10}
            spacing={3}
            alignItems="center"
            sx={{ borderTopRightRadius: 200, borderTopLeftRadius: 200 }}>
            <Typography variant="h3" color="primary" sx={{ textAlign: "center", color: "#0045F1", fontWeight: "bold" }}>
              Learn More About Aisha Comfortable Coliving
            </Typography>
            <Typography className="accTextcolor" variant="h5" align="center" px={20}>
              Discover how Aisha Comfortable Coliving can best serve you individually. Have all your questions answered
              and let us help you live your dream.
            </Typography>
          </Stack>

          <Stack alignItems="center" spacing={10} mb={20}>
            <Stack direction="row" spacing={20}>
              <VideocamOutlinedIcon style={{ fontSize: 150 }} sx={{ color: "#0045F1" }} />
              <PhoneInTalkIcon style={{ fontSize: 150 }} sx={{ color: "#0045F1" }} />
            </Stack>
            <Typography className="accTextcolor" variant="h5" px={20} align="center" fontWeight="bold">
              Let's chat! Whether you're looking for your next tenant or searching for a new housemate, we're here to
              help!
            </Typography>
            <StyledButton variant="pinkBtn" text="Schedule a Call" bgcolor="#0094FF" />
          </Stack>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Contact;
