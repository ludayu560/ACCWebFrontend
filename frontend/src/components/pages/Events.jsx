import { Box, Stack } from "@mui/system";
import { Button, Card, Checkbox, Divider, FormControlLabel, Grid, Paper, Typography } from "@mui/material";
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
import React, { useEffect, useState } from "react";
import axios from "axios";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { create_event } from "../../Redux/actions/event";
import { connect } from "react-redux";
import ImageUpload from "../components/ImageUploadComponent";
import Listing from "./Listing";
import { useNavigate } from "react-router";
import EventConfirm from "./EventConfirm";
const CustomCheckboxStyles = {
  // the box color when unchecked
  color: "#B9B9B9",
  // the color when checked
  "&.Mui-checked": {
    color: "#F83E7D",
  },
  // the size of the underlying svg icon
  "& .MuiSvgIcon-root": {
    fontSize: 32,
  },
};

function Events({ create_event, listingAccount }) {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [form, setForm] = useState({
    event_name: "",
    event_date_time: "",
    event_location: "",
    event_description: "",
    event_interested: 0,
    event_going: 0,
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (event) => {
    const eventobject = {
      event_image: image,
      event_name: form.event_name,
      event_date_time: form.event_date_time + ":00Z",
      event_location: form.event_location,
      event_description: form.event_description,
      event_interested: 0,
      event_going: 0,
      create_listing_account: listingAccount.id,
    };
    create_event(eventobject);
    navigate("/events");
  };

  const data = ["1", "2", "3", "4", "5", "6"];
  const [onlineSelected, setOnlineSelected] = useState(true);
  const [inpersonSelected, setInpersonSelected] = useState(false);

  return listingAccount !== null ? (
    <div style={{ overflowX: "hidden" }}>
      
      <Box component="img" src={require("../../assets/image 31.png")} />
      <Stack direction="row" pl={10} bgcolor="#FFE7EF" width="100vw" mt={-80}>
        <Stack pr={20} pt={10} pb={10}>
          <Typography variant="h3" sx={{ color: "white", pb: 3, fontWeight: "bold" }}>
            Events
          </Typography>
          <Typography variant="h1" sx={{ fontWeight: "bold", color: "white" }}>
            Behind Coliving,
          </Typography>
          <Typography variant="h1" sx={{ color: "#F83E7D", fontWeight: "bold" }}>
            Lives Community.
          </Typography>
          <Grid container spacing={10} pt={5}>
            <Grid item>
              <StyledButton variant="pinkBtn" text="Browse Events" width="15vw" bgcolor="white" textColor="#F83E7D" />
            </Grid>
            <Grid item>
              <StyledButton variant="pinkBtn" text="+ Host Event" width="15vw" />
            </Grid>
          </Grid>
        </Stack>
      </Stack>

      {/*Events Grid */}
      <Grid container spacing={10} alignContent="center" justifyContent="center" pt={10} px={10} pb={20}>
        <Grid item xs={12}>
          <Typography variant="h3" sx={{ color: "#F83E7D", fontWeight: "bold", pt: 5 }}>
            Your Upcoming Events
          </Typography>
        </Grid>
        {data.map((id) => (
          <Grid item xs="auto">
            <ECard variant="event" />
          </Grid>
        ))}
      </Grid>

      {/* Host Event div*/}
      <Box component="img" src={require("../../assets/image 32.png")} />
      <Stack pl={10} mt={-50} pr={20} pt={10} pb={40} alignItems="center" spacing={10}>
        <Typography variant="h3" sx={{ fontWeight: "bold", color: "white" }}>
          Interested in hosting your own event? Let us help!
        </Typography>

        <StyledButton variant="pinkBtn" text="Host Event" width="20vw" />
      </Stack>
      <Footer />
    </div>
  ) : (
    <div style={{ overflowX: "hidden" }}>
      <Stack direction="row" pl={10} bgcolor="#FFE7EF" width="100vw">
        <Stack pr={20} pt={10} pb={10}>
          <Typography variant="h4" sx={{ color: "#F83E7D", pb: 3, fontWeight: "bold" }}>
            Events
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: "bold", color: "#0045F1" }}>
            Behind Coliving,
          </Typography>
          <Typography variant="h2" sx={{ color: "#F83E7D", fontWeight: "bold" }}>
            Lives Community.
          </Typography>

          <Typography variant="h6" sx={{ color: "#323232", fontWeight: "bold" }} pb={10} pt={4}>
            Join the Aisha Comfortable Coliving Community
          </Typography>
          <Grid container spacing={10} justifyContent="center">
            <Grid item>
              <StyledButton variant="pinkBtn" text="Login" width="15vw" bgcolor="white" textColor="#F83E7D" />
            </Grid>
            <Grid item>
              <StyledButton variant="pinkBtn" text="Sign Up" width="15vw" />
            </Grid>
          </Grid>
        </Stack>
        <Box sx={{ flexGrow: 1 }} />
        <Box component="img" src={require("../../assets/unsplash_gYdjZzXNWlg.png")} sx={{ width: "45vw" }} />
      </Stack>

      {/*Pink Area*/}
      <Stack p={8} pb={15} spacing={3} alignItems="center">
        <Divider sx={{ width: "40%", color: "#323232" }} />
        <Typography variant="h3" sx={{ textAlign: "center", fontWeight: "bold", color: "#0045F1", pt: 3 }}>
          Welcome to Our Community
        </Typography>

        <Typography variant="h5" sx={{ textAlign: "center", px: 25 }}>
          We organize events so that you can meet women in your community. Our community is open to all women and those
          who identify as woman, whether you colive or not.
        </Typography>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            color: "#F83E7D",
            pt: 10,
            fontWeight: "bold",
          }}>
          Why Join the Aisha Community?
        </Typography>
        <Grid container spacing={4} pt={10} justifyContent="center">
          <Grid item>
            <Card
              sx={{
                width: "294px",
                height: "511px",
                borderRadius: 5,
                border: 5,
                borderColor: "#F83E7D",
              }}
              raised="true">
              <Stack p={5} align="center" spacing={4} alignItems="center">
                <PeopleOutlineIcon style={{ fontSize: 100 }} sx={{ color: "#F83E7D" }} />
                <Typography variant="h5" sx={{ color: "#F83E7D", height: "60px" }}>
                  Make Friends
                </Typography>
                <Typography variant="p">
                  By joining the Aisha Community, you will meet other local women and make new firends. Your best friend
                  could be just a block away!
                </Typography>
              </Stack>
            </Card>
          </Grid>

          <Grid item>
            <Card
              sx={{
                width: "294px",
                height: "511px",
                borderRadius: 5,
                border: 5,
                borderColor: "#F83E7D",
              }}
              raised="true">
              <Stack p={5} align="center" spacing={4} alignItems="center">
                <ShareOutlinedIcon style={{ fontSize: 100 }} sx={{ color: "#F83E7D" }} />
                <Typography variant="h5" sx={{ color: "#F83E7D", height: "60px" }}>
                  Grow Your Network
                </Typography>
                <Typography variant="p">
                  As a member of the Aisha Community, you will get the opportunity to build connections and plant roots
                  in your community. No one should feel lonely.
                </Typography>
              </Stack>
            </Card>
          </Grid>

          <Grid item>
            <Card
              sx={{
                width: "294px",
                height: "511px",
                borderRadius: 5,
                border: 5,
                borderColor: "#F83E7D",
              }}
              raised="true">
              <Stack p={5} align="center" spacing={4} alignItems="center">
                <PsychologyOutlinedIcon style={{ fontSize: 100 }} sx={{ color: "#F83E7D" }} />
                <Typography variant="h5" sx={{ color: "#F83E7D", height: "60px" }}>
                  Reduce Stress
                </Typography>
                <Typography variant="p">
                  Through our community, you will be in a supportive environment, surrounded by women who can understand
                  and relate to you. Sharing with those who care is a great stress reliver.
                </Typography>
              </Stack>
            </Card>
          </Grid>

          <Grid item>
            <Card
              sx={{
                width: "294px",
                height: "511px",
                borderRadius: 5,
                border: 5,
                borderColor: "#F83E7D",
              }}
              raised="true">
              <Stack p={5} align="center" spacing={4} alignItems="center">
                <WbTwilightIcon style={{ fontSize: 100 }} sx={{ color: "#F83E7D" }} />
                <Typography variant="h5" sx={{ color: "#F83E7D", height: "60px" }}>
                  Expand Your Horizons
                </Typography>
                <Typography variant="p">
                  Finally through Aisha Community, you will meet a variety of women, with different skills, experiences,
                  and personalities that can contribute to your personal growth.
                </Typography>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Stack>

      {/*Events Square thingy*/}
      <Stack style={{ background: "#FFF6F6" }} sx={{ p: 10, pb: 20 }}>
        <Typography variant="h2" sx={{ color: "#F83E7D", fontWeight: "bold" }} p={2} mr="30vw">
          See what our event attendees have to say!
        </Typography>
        <Grid container justifyContent="center">
          <Grid item xs={7} mt={15}>
            <Box component="img" src={require("../../assets/Component 2.png")} />
          </Grid>
          <Grid item xs={5} mt={10}>
            <Box component="img" src={require("../../assets/image 32 (1).png")} />
          </Grid>
        </Grid>
      </Stack>

      {/*Blue Stack */}
      <Stack style={{ background: "#0045F1" }} sx={{ px: 15, py: 10 }} alignItems="center">
        <Typography variant="h4" color="white" pb={10}>
          Interested in planning a private event for you and your friends? Aisha Comfortable Coliving makes organizing
          an event quick and easy, so you can just focus on having fun.
        </Typography>
        <StyledButton
          variant="pinkBtn"
          text="Host your private event"
          width="15vw"
          bgcolor="white"
          textColor="#0045F1"
        />
      </Stack>

      {/*Upcoming Events*/}
      <Stack style={{ background: " white" }} sx={{ pt: 10, pb: 40 }} alignItems="center" width="100vw">
        <Typography variant="h1" align="center" sx={{ color: "#0045F1", fontWeight: "bold" }} p={2}>
          Upcoming Events
        </Typography>
        <Stack direction="row" spacing={25} mt={15}>
          <Button
            variant="contained"
            style={{
              width: "430px",
              height: "116px",
              textTransform: "none",
              backgroundColor: onlineSelected ? "#0045F1" : "white",
            }}
            sx={{ borderRadius: 5, border: 3, borderColor: "#0045F1" }}
            onClick={() => {
              setInpersonSelected(false);
              setOnlineSelected(true);
            }}>
            <Typography variant="h4" sx={{ color: onlineSelected ? "white" : "#0045F1" }}>
              Online Events
            </Typography>
          </Button>
          <Button
            variant="contained"
            style={{
              width: "430px",
              height: "116px",
              textTransform: "none",
              backgroundColor: inpersonSelected ? "#0045F1" : "white",
            }}
            sx={{ borderRadius: 5, border: 3, borderColor: "#0045F1" }}
            onClick={() => {
              setInpersonSelected(true);
              setOnlineSelected(false);
            }}>
            <Typography variant="h4" sx={{ color: inpersonSelected ? "white" : "#0045F1" }}>
              In-Person Events
            </Typography>
          </Button>
        </Stack>
      </Stack>

      {/*Events Grid */}
      {onlineSelected && (
        <>
          <Box component="img" src={require("../../assets/image 31 (1).png")} width="100%" mt={-45} />
          <Typography variant="h1" align="center" fontWeight="bold" sx={{ color: "white" }} mt={-30}>
            Coming Soon!
          </Typography>

          <Grid container spacing={10} alignContent="center" justifyContent="center" pt={10} bgcolor="#DEECF5" px={10}>
            <Grid item xs={12}>
              <Typography variant="h4" align="center" fontWeight="bold" sx={{ color: "#0045F1" }} pt={25}>
                New things are coming… check out our in-person events.
              </Typography>
            </Grid>
            {data.map((id) => (
              <Grid item xs="auto">
                <ECard variant="event" />
              </Grid>
            ))}
          </Grid>
        </>
      )}
      {inpersonSelected && (
        <Grid
          container
          spacing={10}
          alignContent="center"
          justifyContent="center"
          mt={-45}
          pt={10}
          bgcolor="#DEECF5"
          px={10}>
          {data.map((id) => (
            <Grid item xs="auto">
              <ECard variant="event" />
            </Grid>
          ))}
        </Grid>
      )}

      {/*Don’t see what you’re looking for? Create your own event!*/}
      <Stack style={{ background: "linear-gradient(#DEECF5, white)" }} sx={{ p: 15, pb: 40 }} alignItems="center">
        <StyledButton variant="pinkBtn" text="Find More" bgcolor="#0045F1" width="20vw" />
        <Typography variant="h3" align="center" sx={{ color: "#0045F1", fontWeight: "bold" }} p={2} pt={20}>
          Interested in hosting your own event?
        </Typography>
        <Typography variant="h3" align="center" sx={{ color: "#0045F1", fontWeight: "bold" }} p={2} pb={10}>
          Login to get started
        </Typography>
        <StyledButton variant="pinkBtn" text="Login" bgcolor="#0045F1" width="20vw" />
      </Stack>

      {/*Events Schedule
      <Typography variant="h1" align="center" sx={{ color: "#F83E7D", fontWeight: "bold", mt: -15, pb: 10 }}>
        Events Schedule
      </Typography>
    
      <Stack
        alignItems="left"
        style={{
          background: "linear-gradient(#FFE7EF, white)",
          overflowY: "auto",
        }}
        sx={{ p: 10 }}
        maxHeight="80vw">
        <Grid container justifyContent="center" spacing={10}>
          {data.map((id) => (
            <Grid item xs="auto">
              <ECard variant="eventSchedule" />
            </Grid>
          ))}
        </Grid>
      </Stack>
      <Stack
        alignItems="left"
        style={{
          background: "linear-gradient(#FFE7EF, white)",
          overflowY: "auto",
        }}
        sx={{ p: 10 }}
        maxHeight="100vw">
        <Typography variant="h2" align="center" sx={{ color: "#C5265C", fontWeight: "bold", pt: 20 }}>
          Interested in Hosting Your Own Event?
        </Typography>

        <Typography variant="h1" align="center" sx={{ color: "#F83E7D", fontWeight: "bold" }}>
          Host Your Event
        </Typography>
      </Stack>
      */}
      {/*Events Creation 
      <Grid container pb={20} px={20} spacing={5} justifyContent="center">
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Thumbnail</Typography>
        </Grid>
        <Grid item xs={6}>
          <ImageUpload width="580px" returnSelected={setImage} />
        </Grid>
        <Grid item xs={6}>
          <Stack spacing={10}>
            <TextField
              value={form.event_name}
              onChange={onChange}
              name={"event_name"}
              variant="filled"
              label="Event Title"
              style={{ backgroundColor: "white" }}
              required
              fullWidth
            />
            <TextField
              value={form.event_date_time}
              onChange={onChange}
              name={"event_date_time"}
              variant="filled"
              label="Time & Date"
              style={{ backgroundColor: "white" }}
              type="datetime-local"
              required
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
            <TextField
              value={form.event_location}
              onChange={onChange}
              name={"event_location"}
              variant="filled"
              label="Location"
              style={{ backgroundColor: "white" }}
              required
              fullWidth
            />
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack spacing={10}>
            <TextField variant="filled" label="First Name" style={{ backgroundColor: "white" }} required fullWidth />
            <TextField variant="filled" label="Last Name" style={{ backgroundColor: "white" }} required fullWidth />
            <TextField variant="filled" label="Email" style={{ backgroundColor: "white" }} required fullWidth />
          </Stack>
        </Grid>
        <Grid item xs={8}>
          <TextField
            value={form.event_description}
            name={"event_description"}
            onChange={onChange}
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
          <Stack alignItems="center" mt={10}>
            <FormControlLabel
              control={<Checkbox defaultChecked sx={CustomCheckboxStyles} />}
              label="Make this a reoccurring event"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked sx={CustomCheckboxStyles} />}
              label="I agree to the Aisha Community Terms & Conditions"
              sx={{ mb: "2vw" }}
            />
            <StyledButton variant="pinkBtn" text="Submit" onClick={handleSubmit} />
          </Stack>
        </Grid>
        
      </Grid>
    */}
      <Footer></Footer>
    </div>
  );
}

const mapStateToProps = (state) => ({
  listingAccount: state.auth.listingAccount,
});

export default connect(mapStateToProps, { create_event })(Events);
