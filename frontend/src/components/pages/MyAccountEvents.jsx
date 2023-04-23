import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { load_property_listing } from "../../Redux/actions/propertyListing";
import ECard from "../components/ECard";
import SideNav from "../components/SideNav";

function MyAccountEvents({
  eventsCreated,
  attending_events,
  interested_events,
  load_property_listing,
}) {
  const [attendingEvents, setAttendingEvents] = useState([]);
  const [createdEvents, setCreatedEvents] = useState([]);
  const [interestedEvents, setInterestedEvents] = useState([]);

  useEffect(() => {
    if (eventCreated && attendingEvents && interestedEvents) {
      setAttendingEvents(attending_events);
      setCreatedEvents(eventCreated);
      setInterestedEvents(interested_events);
    }
  }, [eventCreated, attending_events, interested_events]);

  const handleEventClick = (id) => {

  };

  return (
    <>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Typography variant="h2" padding={"3vw"} fontWeight={700}>
            <b>My Account</b>
            <Divider
              variant="middle"
              sx={{ width: "15vw", border: "2px solid #F83E7D", opacity: 100 }}
            />
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <SideNav></SideNav>
        </Grid>
        <Grid container xs={9} px={6}>
          <Grid item spacing={5} xs={12}>
            <Grid item xs={12} align="center">
              <Typography variant="h3" color="#000" fontWeight={700}>
                Events I’m Attending
                <Divider
                  variant="fullWidth"
                  sx={{
                    m: 2,
                    width: "18vw",
                    border: "2px solid #F83E7D",
                    opacity: 100,
                  }}
                />
              </Typography>
            </Grid>
            <Grid container spacing={8} p={10}>
              {attendingEvents.map((item) => (
                <Grid item onClick={() => handleEventClick(item.id)}>
                  <ECard
                    variant="event"
                    name={item.event_name}
                    location={item.event_location}
                    description={item.event_description}
                    time={item.event_date_time}
                    image={item.event_image}
                  ></ECard>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item spacing={5} xs={12}>
            <Grid item xs={12} align="center">
              <Typography variant="h3" color="#000" fontWeight={700}>
                Events I’m Interested In
                <Divider
                  variant="fullWidth"
                  sx={{
                    m: 2,
                    width: "18vw",
                    border: "2px solid #F83E7D",
                    opacity: 100,
                  }}
                />
              </Typography>
            </Grid>
            <Grid container spacing={8} p={10}>
              {interestedEvents.map((item) => (
                <Grid item onClick={() => handleEventClick(item.id)}>
                  <ECard
                    variant="event"
                    name={item.event_name}
                    location={item.event_location}
                    description={item.event_description}
                    time={item.event_date_time}
                    image={item.event_image}
                  ></ECard>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item spacing={5} xs={12}>
            <Grid item xs={12} align="center">
              <Typography variant="h3" color="#000" fontWeight={700}>
                Events I’m Creating
                <Divider
                  variant="fullWidth"
                  sx={{
                    m: 2,
                    width: "18vw",
                    border: "2px solid #F83E7D",
                    opacity: 100,
                  }}
                />
              </Typography>
            </Grid>
            <Grid container spacing={8} p={10}>
              {createdEvents.map((item) => (
                <Grid item onClick={() => handleEventClick(item.id)}>
                  <ECard
                    variant="event"
                    name={item.event_name}
                    location={item.event_location}
                    description={item.event_description}
                    time={item.event_date_time}
                    image={item.event_image}
                  ></ECard>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

const mapStateToProps = (state) => ({
  eventsCreated: state.auth.eventsCreated,
  attending_events: state.auth.attending_events,
  interested_events: state.auth.interested_events,
});

export default connect(mapStateToProps, { load_property_listing })(
  MyAccountEvents
);
