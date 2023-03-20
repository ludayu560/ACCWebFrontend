import {
  Button,
  Grid,
  Box,
  Typography,
  Stack,
  Avatar,
  Slider,
} from "@mui/material";
import React, { useState } from "react";
import background from "../../assets/background1.png";
import GppGoodIcon from "@mui/icons-material/GppGood";
import Tags from "../components/Tags";
import { connect } from "react-redux";

function MyAccountProfile({currentListingAccount}) {
  const [ultSelected, setUltSelected] = useState(true);
  return ( (currentListingAccount)? 
    <>
      {/* <Mainbar></Mainbar> */}
      <Grid container>
        <Grid item xs={12}>
          <Box sx={{ width: "100vw" }} component="img" src={background} />
        </Grid>
      </Grid>

      {/*profile info */}
      <Stack alignItems="center" mt={-45}>
        <Box display="flex" justifyContent="center" alignContent="center">
          <Avatar style={{ border: "8px solid #F83E7D" }} sx={{ width: 200, height: 200 }}></Avatar>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignContent="center"
          sx={{ width: "80vw", height: "15vh", bgcolor: "#FFFFFFDE", borderRadius: 5 }}
          mt={-15}>
          <Grid container p={2}>
            <Grid item xs={4}>
              <Typography variant="h5">{currentListingAccount.age_range} Age Group</Typography>
            </Grid>
            <Grid item xs={5}></Grid>

            <Grid item xs={3}>
              <Stack direction="row">
                <GppGoodIcon sx={{ color: "#F83E7D", mr: 2 }} />
                <Typography>Verified Tenant</Typography>
              </Stack>
            </Grid>

            <Grid item xs={12}>
              <Box display="flex" justifyContent="center" alignItems="center" pt={10}>
                <Typography variant="h5" sx={{ color: "#F83E7D", fontWeight: "bold" }}>
                  {currentListingAccount.username}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Stack>

      <Grid container justifyContent="center" mt={10} px="10vw" spacing={10}>
        <Grid item xs={6}>
          <Stack spacing={4}>
            <Typography variant="h2">About Me</Typography>
            <Typography>
              {currentListingAccount.tell_use_about_yourself}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Grid container bgcolor="gray" p={2}>
            <Grid item xs={12} p={2}>
              <Box width="100%" height="25vh" bgcolor="white" />
            </Grid>
            <Grid item xs={4} p={2}>
              <Box width="100%" height="10vh" bgcolor="white" />
            </Grid>
            <Grid item xs={4} p={2}>
              <Box width="100%" height="10vh" bgcolor="white" />
            </Grid>
            <Grid item xs={4} p={2}>
              <Box width="100%" height="10vh" bgcolor="white" />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" size="large" sx={{ bgcolor: "#F83E7D", p: 3, width: "100%" }}>
                Match Now
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Stack spacing={4}>
            <Typography variant="h2">What I’m Looking For</Typography>
            <Typography>
              TBD, needs input for acocunt
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h3">I Prefer a Rental Price of</Typography>
          <Stack alignItems="center">
            <Stack width="60vw">
              <Slider getAriaLabel={() => "Temperature range"} valueLabelDisplay="auto" />
            </Stack>
          </Stack>
        </Grid>

        <Grid item xs={5} p={4}>
          <Box sx={{ minHeight: "60vh" }}>
            <Typography variant="h4">Personality</Typography>
            <Grid container mt={4}>
              <Grid item xs="auto" m={1}>
                <Tags variant="pink" text="Introverted"></Tags>
              </Grid>
              <Grid item xs="auto" m={1}>
                <Tags variant="pink" text="Creative"></Tags>
              </Grid>
              <Grid item xs="auto" m={1}>
                <Tags variant="pink" text="PLACEHOLDER"></Tags>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={5} p={4}>
          <Box sx={{ minHeight: "60vh" }}>
            <Typography variant="h4">Interests</Typography>
            <Grid container mt={4}>
              <Grid item xs="auto" m={1}>
                <Tags variant="blue" text="Hiking"></Tags>
              </Grid>
              <Grid item xs="auto" m={1}>
                <Tags variant="blue" text="Cars"></Tags>
              </Grid>
              <Grid item xs="auto" m={1}>
                <Tags variant="blue" text="Sports"></Tags>
              </Grid>

              <Grid item xs="auto" m={1}>
                <Tags variant="blue" text="PLACEHOLDER"></Tags>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </> : null
  );
}

// export default connect(MyAccountProfile);

const mapStateToProps = (state) => ({
  currentListingAccount: state.auth.currentListingAccount,
});

export default connect(mapStateToProps)(MyAccountProfile);