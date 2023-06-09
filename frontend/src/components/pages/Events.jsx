import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { create_event } from "../../Redux/actions/event";
import { get_events_attending } from "../../Redux/actions/events";

import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import Stack from "@mui/system/Stack";
import ECard from "../components/ECard";
import Footer from "../components/Footer";
import StyledButton from "../components/StyledButton";
import "../pageStyles/styles.css";
import Login from "./Login";
import SignupManager from "./SignupManager";

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

function Events({ create_event, listingAccount, attending_events, get_events_attending }) {
  const navigate = useNavigate();
  const [upcomingEventsArray, setUpcomingEventsArray] = useState([]);
  console.log("upcomingeventsarray: ", upcomingEventsArray);
  console.log("attending_events: ", attending_events);

  useEffect(() => {
    if (attending_events) {
      setUpcomingEventsArray(attending_events);
      console.log(attending_events);
    }
  }, [attending_events]);

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
  const [onlineEvents, setOnlineEvents] = useState([]);
  const [inpersonSelected, setInpersonSelected] = useState(false);
  const [inPersonEvents, setInPersonEvents] = useState([]);

  useEffect(() => {
    const fetchOnlineEvents = async () => {
      const response = await fetch('http://127.0.0.1:8000/Events/upcoming/online');
      const data = await response.json();
      setOnlineEvents(data);
    };

    const fetchInPersonEvents = async () => {
      const response = await fetch('http://127.0.0.1:8000/Events/upcoming/inperson');
      const data = await response.json();
      setInPersonEvents(data);
    };

    if (onlineSelected) {
      fetchOnlineEvents();
    } else{
      fetchInPersonEvents();
    }
  }, [onlineSelected]);

  return listingAccount !== null ? (
    <div style={{ overflowX: "hidden" }}>
      <div className="acc-section">
        <div className="acc-container">
          <Box component="img" src={require("../../assets/image 31.png")} />
          <Stack direction="row" pl={10} bgcolor="#FFE7EF" width="100vw" mt={-80}>
            <Stack pr={20} pt={10} pb={10}>
              <Typography variant="h3" sx={{ color: "white", pb: 3, fontWeight: "bold" }}>
                Events
              </Typography>
              <Typography variant="h1" sx={{ fontWeight: "bold", color: "white" }}>
                Behind <span className="h1 headerPink">Coliving,</span>
              </Typography>
              <Typography variant="h1" sx={{ fontWeight: "bold", color: "white" }}>
                Lives <span className="h1 headerPink">Community.</span>
              </Typography>

              <Grid container spacing={5} pt={5}>
                <Grid item>
                  <StyledButton
                    variant="pinkBtn"
                    text="Browse Events"
                    width="15vw"
                    bgcolor="white"
                    textColor="#F83E7D"
                    link="/browseevents"
                  />
                </Grid>
                <Grid item>
                  <StyledButton
                    variant="pinkBtn"
                    text="Organize a community event"
                    width="15vw"
                    bgcolor="white"
                    textColor="#F83E7D"
                    link="/communityEventPage"
                  />
                </Grid>
                <Grid item>
                  <StyledButton
                    variant="pinkBtn"
                    text="Host your private event"
                    width="15vw"
                    bgcolor="white"
                    textColor="#F83E7D"
                    link="/privateEventPage"
                  />
                </Grid>
              </Grid>
            </Stack>
          </Stack>
        </div>
      </div>

      {/*Events Grid */}
      <Grid container spacing={10} alignContent="center" justifyContent="center" pt={10} px={10} pb={20}>
        <Grid item xs={12}>
          <Typography variant="h3" sx={{ color: "#F83E7D", fontWeight: "bold", pt: 5 }}>
            Your Upcoming Events
          </Typography>
        </Grid>
        {upcomingEventsArray.map((item) => (
          <Grid item xs="auto">
            <ECard
              variant="event"
              name={item.event_name}
              location={item.event_location}
              description={item.event_description}
              time={item.event_date_time}
              image={item.event_image}
            />
          </Grid>
        ))}
      </Grid>

      {/* Host Event div*/}
      <Box component="img" src={require("../../assets/image 32.png")} />
      <Stack pl={10} mt={-55} pr={20} pt={10} pb={40} alignItems="center" spacing={10}>
        <Typography variant="h4" align="center" sx={{ fontWeight: "bold", color: "white" }} px="5rem">
          Interested in organizing a community event or hosting your private event? Let's help
        </Typography>

        <Grid container>
          <Grid item xs={6}>
            <Stack alignItems="center" px="3rem" spacing={2}>
              <Typography variant="h6" align="center" sx={{ color: "white" }}>
                Create event listing available for public browsing.
              </Typography>
              <StyledButton
                variant="pinkBtn"
                text="Organize a community event"
                width="20vw"
                link="/communityEventPage"
              />
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack alignItems="center" px="3rem" spacing={2}>
              <Typography variant="h6" align="center" sx={{ color: "white" }}>
                Create private event
              </Typography>
              <StyledButton variant="pinkBtn" text="Host your private event" width="20vw" link="/privateEventPage" />
            </Stack>
          </Grid>
        </Grid>
      </Stack>
      <Footer />
    </div>
  ) : (
    <div style={{ overflowX: "hidden" }}>
      <div className="acc-section pink-light-bg">
        <div className="acc-container">
          <Grid container>
            <Grid item xs={7}>
              <Stack py={10}>
                <Typography variant="h4" sx={{ color: "#F83E7D", pb: 3, fontWeight: "bold" }}>
                  Events
                </Typography>

                <Typography className="headerBlue" variant="h2" fontWeight="bold">
                  Behind <span className="mui-h2 headerPink">Coliving,</span>
                </Typography>
                <Typography className="headerBlue" variant="h2" fontWeight="bold">
                  Lives <span className="mui-h2 headerPink">Community.</span>
                </Typography>

                <Typography variant="h6" className="accTextcolor" fontWeight="bold" pt={4}>
                  Join the Aisha Comfortable Coliving Community now!
                </Typography>

                <Grid container spacing={10} pt={5}>
                  <Grid item xs="auto">
                    <Login>
                      <StyledButton variant="pinkBtn" text="Login" width="15rem" bgcolor="white" textColor="#F83E7D" />
                    </Login>
                  </Grid>
                  <Grid item xs="auto">
                    <SignupManager>
                      <StyledButton variant="pinkBtn" text="Sign Up" width="15rem" bgcolor="#F83E7D" />
                    </SignupManager>
                  </Grid>
                </Grid>
              </Stack>
            </Grid>
            <Grid item xs={5}>
              <Box component="img" src={require("../../assets/unsplash_gYdjZzXNWlg.png")} height="558px" />
            </Grid>
          </Grid>
        </div>
      </div>

      {/*Pink Area*/}
      <div className="acc-section">
        <div className="acc-container">
          <Stack p={8} pb={15} spacing={3} alignItems="center">
            <Divider sx={{ width: "40%", color: "#323232" }} />
            <Typography variant="h3" sx={{ textAlign: "center", fontWeight: "bold", color: "#0045F1", pt: 3 }}>
              Welcome to Our Community
            </Typography>

            <Typography variant="h5" sx={{ textAlign: "center", px: 25 }}>
              We organize events so that you can meet women in your community. Our community is open to all women and
              those who identify as woman, whether you colive or not.
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
                      By joining the Aisha Community, you will meet other local women and make new firends. Your best
                      friend could be just a block away!
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
                      As a member of the Aisha Community, you will get the opportunity to build connections and plant
                      roots in your community. No one should feel lonely.
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
                      Through our community, you will be in a supportive environment, surrounded by women who can
                      understand and relate to you. Sharing with those who care is a great stress reliver.
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
                      Finally through Aisha Community, you will meet a variety of women, with different skills,
                      experiences, and personalities that can contribute to your personal growth.
                    </Typography>
                  </Stack>
                </Card>
              </Grid>
            </Grid>
          </Stack>
        </div>
      </div>

      {/*Pink Stack */}
      <div className="acc-section pink-bg">
        <div className="acc-container">
          <Stack sx={{ px: 15, py: 10 }} alignItems="center">
            <Typography variant="h4" color="white" pb={10}>
              At Aisha Comfortable Coliving, we believe a great place to nurture community is in your own neighbourhood.
              Become an Aisha Comfortable Coliving event organizer and plan a virtual or in-person event in your
              community.
            </Typography>
            <StyledButton
              variant="pinkBtn"
              text="Organize a community event"
              width="15vw"
              bgcolor="white"
              textColor="#F83E7D"
              link="/communityEventPage"
            />
          </Stack>
        </div>
      </div>

      {/*Events Square thingy*/}
      <div className="acc-section pink-light-bg">
        <div className="acc-container">
          <Stack sx={{ p: 10, pb: 20 }}>
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
        </div>
      </div>

      {/*Blue Stack */}
      <div className="acc-section blue-bg">
        <div className="acc-container">
          <Stack sx={{ px: 15, py: 10 }} alignItems="center">
            <Typography variant="h4" color="white" pb={10}>
              Interested in planning a private event for you and your friends? Aisha Comfortable Coliving makes
              organizing an event quick and easy, so you can just focus on having fun.
            </Typography>
            <StyledButton
              variant="pinkBtn"
              text="Host your private event"
              width="15vw"
              bgcolor="white"
              textColor="#0045F1"
              link="/privateEventPage"
            />
          </Stack>
        </div>
      </div>

      {/*Upcoming Events*/}
      <Stack style={{ background: " white" }} sx={{ pt: 10 }} alignItems="center" width="100vw">
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
          <Box component="img" src={require("../../assets/image 31 (1).png")} width="100%" mt={-5} />
          <Typography variant="h1" align="center" fontWeight="bold" sx={{ color: "white" }} mt={-30}>
            Coming Soon!
          </Typography>
          <div className="acc-section gray-bg">
            <div className="acc-container">
              <Grid container spacing={10} alignContent="center" justifyContent="center" pt={10} px={10}>
                <Grid item xs={12}>
                  <Typography variant="h4" align="center" fontWeight="bold" sx={{ color: "#0045F1" }} pt={25}>
                    New things are coming… check out our in-person events.
                  </Typography>
                </Grid>
                {onlineEvents.map((event) => (
                  <Grid item xs="auto">
                    <ECard variant="event" event={event}/>
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
        </>
      )}
      {inpersonSelected && (
        <div className="acc-section gray-bg">
          <div className="acc-container">
            <Grid container spacing={10} alignContent="center" justifyContent="center" pt={10} px={10}>
              {inPersonEvents.map((event) => (
                <Grid item xs="auto">
                  <ECard variant="event" event={event}/>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      )}

      {/*Don’t see what you’re looking for? Create your own event!*/}
      <Stack style={{ background: "white" }} sx={{ p: 15, pb: 40 }} alignItems="center">
        <StyledButton variant="pinkBtn" text="Find More" bgcolor="#0045F1" width="20rem" link="/browseevents" />
        <Typography variant="h3" align="center" sx={{ color: "#0045F1", fontWeight: "bold" }} p={2} pt={20}>
          Interested in hosting your own event?
        </Typography>
        <Typography variant="h3" align="center" sx={{ color: "#0045F1", fontWeight: "bold" }} p={2} pb={10}>
          Login to get started
        </Typography>
        <Login>
          <StyledButton variant="pinkBtn" text="Login" bgcolor="#0045F1" width="20rem" />
        </Login>
      </Stack>
      <Footer></Footer>
    </div>
  );
}

const mapStateToProps = (state) => ({
  listingAccount: state.auth.listingAccount,
  attending_events: state.auth.attending_events,
});

export default connect(mapStateToProps, { create_event, get_events_attending })(Events);
