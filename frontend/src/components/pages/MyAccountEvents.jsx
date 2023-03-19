import { Grid, Typography, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import ECard from "../components/ECard";
import SideNav from "../components/SideNav";
import { connect } from "react-redux";
import { load_property_listing } from "../../AuthComponents/actions/auth";

function MyAccountEvents({
  eventCreated,
  attending_events,
  interested_events,
  load_property_listing,
}) {
  console.log("interested events:", interested_events);
  console.log("interested events:", typeof interested_events);

  const tempValues = [
    {
      id: 1,
      event_name: "test event",
      event_location: "test island",
      event_description: "proctored exam",
      event_date_time: "2023-03-13T09:21:00Z",
      event_image:
        "https://cdn-cjhkj.nitrocdn.com/krXSsXVqwzhduXLVuGLToUwHLNnSxUxO/assets/images/optimized/rev-e8927aa/wp-content/uploads/2020/07/Hero-1.jpg",
    },
    {
      id: 2,
      event_name: "test event2",
      event_location: "test island",
      event_description: "proctored exam",
      event_date_time: "2023-03-13T09:21:00Z",
    },
  ];

  var attendingEvents = []
  var createdEvents = []
  var interestedEvents = []
  // useEffect(() => {
  //   console.log('useeffect')
  //   attendingEvents = attending_events
  //   createdEvents = eventCreated
  //   interestedEvents = interested_events
  // }
  // , [eventCreated,attending_events,interested_events])

  attendingEvents = attending_events
  createdEvents = eventCreated
  interestedEvents = interested_events

  const handleEventClick = (id) => {
    load_property_listing(id);
    window.location.href = "http://localhost:3000/events";

    // console.log(load_property_listing(id))
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
  eventCreated: state.auth.eventsCreated,
  attending_events: state.auth.attending_events,
  interested_events: state.auth.interested_events,
});

export default connect(mapStateToProps, { load_property_listing })(
  MyAccountEvents
);
