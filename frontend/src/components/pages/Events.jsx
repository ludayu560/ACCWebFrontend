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

function Events(props) {
  return (
    <>
      {/* <Mainbar /> */}
      <Stack>
        <Stack direction="row" pl={10} bgcolor="#FFE7EF" width="100vw">
          <Stack pr={20} pt={10} pb={20}>
            <Typography variant="h4" color="primary" sx={{ color: "#F83E7D", pb: 3, fontWeight: "bold" }}>
              Events
            </Typography>
            <Typography variant="h2" color="primary" sx={{ fontWeight: "bold" }}>
              Behind Coliving,
            </Typography>
            <Typography variant="h2" color="primary" sx={{ color: "#F83E7D", fontWeight: "bold" }}>
              Lives Community.
            </Typography>

            <Typography variant="h4" pb={10} pt={4}>
              Join the Aisha Comfortable Coliving Community
            </Typography>
          </Stack>
          <Box sx={{ flexGrow: 1 }} />
          <Box component="img" src={require("../../assets/unsplash_gYdjZzXNWlg.png")} sx={{ width: "45vw" }} />
        </Stack>
        <Stack alignItems="center" p={6} mt={-20}>
          <SearchBar />
        </Stack>

        {/*Pink Area*/}
        <Stack style={{ background: "linear-gradient(white, #FFE7EF)" }} p={8} pb={20} spacing={3} alignItems="center">
          <Typography variant="h3" color="primary" sx={{ textAlign: "center", fontWeight: "bold" }}>
            Welcome to Our Community
          </Typography>
          <Typography variant="h5" sx={{ textAlign: "center", px: 25 }}>
            We organize events so that you can meet women in your community. Our community is open to all women and
            those who identify as woman, whether you colive or not.
          </Typography>
          <Typography
            variant="h3"
            color="primary"
            sx={{ textAlign: "center", color: "#C5265C", pt: 20, fontWeight: "bold" }}>
            Why Join the Aisha Community?
          </Typography>
          <Grid container spacing={4} pt={10} justifyContent="center">
            <Grid item>
              <Card sx={{ width: "294px", borderRadius: 5, border: 5, borderColor: "#C5265C" }} raised="true">
                <Stack p={5} align="center" spacing={4} alignItems="center">
                  <PeopleOutlineIcon style={{ fontSize: 100 }} sx={{ color: "#C5265C" }} />
                  <Typography variant="h5" sx={{ color: "#C5265C" }}>
                    Make Friends
                  </Typography>
                  <Typography variant="p">
                    By joining the Aisha Community, you will meet other local women and make new firends. Your best
                    friend could be just a block away!
                  </Typography>
                </Stack>
              </Card>
            </Grid>

            <Grid item>
              <Card sx={{ width: "294px", borderRadius: 5, border: 5, borderColor: "#C5265C" }} raised="true">
                <Stack p={5} align="center" spacing={4} alignItems="center">
                  <ShareOutlinedIcon style={{ fontSize: 100 }} sx={{ color: "#C5265C" }} />
                  <Typography variant="h5" sx={{ color: "#C5265C" }}>
                    Grow Your Network
                  </Typography>
                  <Typography variant="p">
                    As a member of the Aisha Community, you will get the opportunity to build connections and plant
                    roots in your community. No one should feel lonely.
                  </Typography>
                </Stack>
              </Card>
            </Grid>

            <Grid item>
              <Card sx={{ width: "294px", borderRadius: 5, border: 5, borderColor: "#C5265C" }} raised="true">
                <Stack p={5} align="center" spacing={4} alignItems="center">
                  <PsychologyOutlinedIcon style={{ fontSize: 100 }} sx={{ color: "#C5265C" }} />
                  <Typography variant="h5" sx={{ color: "#C5265C" }}>
                    Reduce Stress
                  </Typography>
                  <Typography variant="p">
                    Through our community, you will be in a supportive environment, surrounded by women who can
                    understand and relate to you. Sharing with those who care is a great stress reliver.
                  </Typography>
                </Stack>
              </Card>
            </Grid>

            <Grid item>
              <Card sx={{ width: "294px", borderRadius: 5, border: 5, borderColor: "#C5265C" }} raised="true">
                <Stack p={5} align="center" spacing={4} alignItems="center">
                  <WbTwilightIcon style={{ fontSize: 100 }} sx={{ color: "#C5265C" }} />
                  <Typography variant="h5" sx={{ color: "#C5265C" }}>
                    Expand Your Horizons
                  </Typography>
                  <Typography variant="p">
                    Finally through Aisha Community, you will meet a variety of women, with different skills,
                    experiences, and personalities that can contribute to your personal growth.
                  </Typography>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Stack>

        <Stack style={{ background: "linear-gradient(#FFE7EF, white)" }} p={6} pb={30} spacing={3} alignItems="center">
          <Typography variant="h3" color="primary" sx={{ textAlign: "center", color: "#F83E7D", fontWeight: "bold" }}>
            And Most Importantly,
          </Typography>
          <Typography variant="h3" color="primary" sx={{ textAlign: "center", color: "#F83E7D", fontWeight: "bold" }}>
            To Have Fun!
          </Typography>
          <SentimentVerySatisfiedOutlinedIcon style={{ fontSize: 100 }} sx={{ color: "#F83E7D" }} />
        </Stack>

        {/*Events Square thingy*/}
        <Stack style={{ background: "linear-gradient(#FFE7EF, white)" }} sx={{ p: 5, pb: 20 }}>
          <Typography variant="h1" sx={{ color: "#F83E7D", fontWeight: "bold" }} p={2} mr='30vw'>
            Our Event Attendes Enjoy their Experience.
          </Typography>
          <Grid container pt={5} justifyContent="center">
            <Grid item xs={7} mt={15}>
              <Box component="img" src={require("../../assets/Event Quote.png")} />
            </Grid>
            <Grid item xs={5} mt={10}>
              <Box component="img" src={require("../../assets/image 2.png")} />
            </Grid>
          </Grid>
        </Stack>

        {/*Upcoming Events*/}
        <Stack style={{ background: " white" }} sx={{ pt: 10, pb: 40 }} alignItems="center" width="100vw">
          <Typography variant="h1" align="center" sx={{ color: "#0045F1", fontWeight: "bold" }} p={2}>
            Upcoming Events
          </Typography>
          <Stack direction="row" spacing={25} mt={15}>
            <Button
              variant="outlined"
              style={{ width: "430px", height: "116px", textTransform: "none", backgroundColor: "#0045F1" }}
              sx={{ borderRadius: 5 }}>
              <Typography variant="h4" sx={{ color: "white" }}>
                Online Events
              </Typography>
            </Button>
            <Button
              variant="outlined"
              style={{ width: "430px", height: "116px", textTransform: "none", backgroundColor: "white" }}
              sx={{ borderRadius: 5, border: 3 }}>
              <Typography variant="h4" sx={{ color: "#0045F1" }}>
                In-Person Events
              </Typography>
            </Button>
          </Stack>
        </Stack>

        {/*Events Grid */}
        <Grid container spacing={20} alignContent="center" justifyContent="center" pb={20} mt={-45} bgcolor="#DEECF5">
          <Grid item xs="auto">
            <ECard variant="favourite" />
          </Grid>
          <Grid item xs="auto">
            <ECard variant="favourite" />
          </Grid>
          <Grid item xs="auto">
            <ECard variant="favourite" />
          </Grid>
          <Grid item xs="auto">
            <ECard variant="favourite" />
          </Grid>
          <Grid item xs="auto">
            <ECard variant="favourite" />
          </Grid>
          <Grid item xs="auto">
            <ECard variant="favourite" />
          </Grid>
        </Grid>

        {/*Don’t see what you’re looking for? Create your own event!*/}
        <Stack style={{ background: "linear-gradient(#DEECF5, white)" }} sx={{ p: 15, pb: 40 }} alignItems="center">
          <Typography variant="h3" align="center" sx={{ color: "#0045F1", fontWeight: "bold" }} p={2}>
            Don’t see what you’re looking for?
          </Typography>
          <Typography variant="h3" align="center" sx={{ color: "#0045F1", fontWeight: "bold" }} p={2} pb={15}>
            Create your own event!
          </Typography>
          <StyledButton variant="pinkBtn" text="Create Event" />
        </Stack>

        {/*Community Events*/}
        <Stack alignItems="left" style={{ background: "linear-gradient(#FFE7EF, white)" }} sx={{ p: 10 }}>
          <Typography variant="h2" align="center" sx={{ color: "#F83E7D", fontWeight: "bold", mt: -15, pb: 20 }}>
            Events Calendar
          </Typography>
          <Card sx={{ width: "40vw" }} raised>
            <MyCalendar></MyCalendar>
          </Card>
          <Typography variant="h2" align="center" sx={{ color: "#C5265C", fontWeight: "bold", pt: 20 }}>
            Interested in Hosting Your Own Event?
          </Typography>

          <Typography variant="h1" align="center" sx={{ color: "#F83E7D", fontWeight: "bold" }}>
            Create Your Event
          </Typography>
        </Stack>

        {/*Events Creation */}
        <Grid container pb={20} px={20} spacing={5} justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="h6">Thumbnail</Typography>
          </Grid>
          <Grid item xs={6}>
            <Box bgcolor="gray" sx={{ height: "319px" }}>
              Photo place here
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Stack spacing={10}>
              <TextField />
              <TextField />
              <TextField />
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack spacing={10}>
              <TextField />
              <TextField />
              <TextField />
            </Stack>
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="filled-multiline-static"
              label="Description"
              multiline
              rows={11}
              defaultValue=""
              variant="filled"
              sx={{ width: "50vw", mt: 4 }}
            />
          </Grid>

          <Grid item xs={12}>
            <Stack alignItems="center" spacing={4} mt={10}>
              <Box>
                <Typography>Make this a reoccurring event</Typography>
                <Typography>I agree to the Aisha Community Terms & Conditions</Typography>
              </Box>

              <StyledButton variant="pinkBtn" text="Submit" />
            </Stack>
          </Grid>
        </Grid>

        <Footer></Footer>
      </Stack>
    </>
  );
}

export default Events;
