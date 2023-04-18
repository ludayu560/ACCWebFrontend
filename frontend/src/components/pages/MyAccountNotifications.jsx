import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import SideNav from "../components/SideNav";

function MyAccountNotifications(props) {
  const data = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  return (
    <>
      {/* <Mainbar></Mainbar> */}
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Typography variant="h2" padding={"3vw"} fontWeight={700}>
            <b>My Account</b>
            <Divider variant="middle" sx={{ width: "15vw", border: "2px solid #F83E7D", opacity: 100 }} />
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <SideNav></SideNav>
        </Grid>
        <Grid item xs={9} align="center">
          <Grid item xs={9}>
            <Typography variant="h3" color="#000" fontWeight={700}>
              Notifications
              <Divider
                variant="fullWidth"
                sx={{
                  width: "15vw",
                  border: "2px solid #F83E7D",
                  opacity: 100,
                }}
              />
            </Typography>
            <Stack spacing={4} mt={4}>
              {data.map((id) => (
                <Box bgcolor="white" p={3} sx={{ border: 1, borderRadius: 5, textAlign: "left", boxShadow: 3 }}>
                  {id}
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default MyAccountNotifications;
