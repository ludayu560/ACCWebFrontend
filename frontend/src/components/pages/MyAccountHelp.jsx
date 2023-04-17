import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import SideNav from "../components/SideNav";
import SearchBar from "../components/SearchBar";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import FAQ from "../components/FAQ";

function MyAccountHelp(props) {
  return (
    <>
      {/* <Mainbar></Mainbar> */}
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Typography variant="h2" padding={"3vw"} fontWeight={700}>
            <b>My Account</b>
            <Divider variant="middle" sx={{ width: "15vw", border: "2px solid", color: "primary.main", opacity: 100 }} />
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <SideNav></SideNav>
        </Grid>
        <Grid item xs={9} p={6}>
          <Grid container xs={12} p={4} align="center">
            <Grid item xs={12}>
              <Typography variant="h3" color="#000" fontWeight={700}>
                Help & Support
                <Divider
                  variant="fullWidth"
                  sx={{
                    m: 2,
                    width: "18vw",
                    border: "2px solid",
                    color: "primary.main",
                    opacity: 100,
                  }}
                />
              </Typography>
            </Grid>
          </Grid>

          <Grid container xs={12} align="center" p={5} spacing={2} mr={4}>
            <Grid item xs={8}>
              <Stack spacing={2}>
                <Card raised="true" sx={{ borderRadius: 4 }}>
                  <CardActionArea>
                    <Stack direction="row">
                      <HeadsetMicIcon style={{ fontSize: 150 }} sx={{ color: "primary.main", mr: "10vw", p: 4 }} />
                      <Box display="flex" style={{ alignContent: "center", alignItems: "center" }}>
                        <Typography variant="h5" align="right">
                          Call: +1-647-777-7777
                        </Typography>
                      </Box>
                    </Stack>
                  </CardActionArea>
                </Card>
                <Card raised="true" sx={{ borderRadius: 4 }}>
                  <CardActionArea>
                    <Stack direction="row">
                      <AlternateEmailIcon style={{ fontSize: 150 }} sx={{ color: "primary.main", mr: "5vw", p: 4 }} />
                      <Box display="flex" style={{ alignContent: "center", alignItems: "center" }}>
                        <Typography variant="h5" align="right">
                          aisha@comfortablecoliving.com
                        </Typography>
                      </Box>
                    </Stack>
                  </CardActionArea>
                </Card>
              </Stack>
            </Grid>

            <Grid item xs={4}>
              <Card raised="true" sx={{ borderRadius: 4 }}>
                <CardActionArea>
                  <LocalActivityIcon style={{ fontSize: 220 }} sx={{ color: "primary.main", p: 8 }} />
                  <Typography variant="h5" sx={{ pb: 9.5 }}>
                    Support Ticket
                  </Typography>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>

          <Grid container xs={12} p={2} spacing={2} my={4}>
            <Grid item xs={12}>
              <Typography variant="h4" color="#000" fontWeight={700}>
                We're here to Help!
              </Typography>
            </Grid>
            <Grid item xs={10} ml={10} mt={4}>
              <SearchBar></SearchBar>
            </Grid>
          </Grid>

          <Grid container xs={12} p={2} spacing={2} mt={10}>
            <Grid item xs={12}>
              <Typography variant="h4" color="#000" fontWeight={700}>
                FAQ
              </Typography>
            </Grid>

            <Grid item xs={12} ml={0} mt={4}>
              <FAQ></FAQ>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default MyAccountHelp;
