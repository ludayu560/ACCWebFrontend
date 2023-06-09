import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import React, { useState } from "react";
import SideNav from "../components/SideNav";
import StyledButton from "../components/StyledButton";

function MyAccountBillSummary(props) {
  const [ultSelected, setUltSelected] = useState(true);
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

        <Grid container xs={9} px={6} spacing={2}>
          <Grid item xs={12} align="center">
            <Typography variant="h3" color="#000" fontWeight={700} mb={5}>
              Purchase Summary
              <Divider
                variant="fullWidth"
                sx={{
                  m: 2,
                  width: "10vw",
                  border: "2px solid #F83E7D",
                  opacity: 100,
                }}
              />
            </Typography>
          </Grid>

          <Grid item xs={4}>
            <Card
              raised="true"
              sx={{ borderRadius: 5, border: 5, borderColor: ultSelected ? "#F83E7D" : "transparent" }}>
              <CardContent bgcolor="red">
                <Box display="flex" alignContent="center" justifyContent="center" p={4}>
                  <Typography variant="h3">ULTIMATE</Typography>
                </Box>
                <Box display="flex" alignContent="center" justifyContent="center" alignItems="center" p={4}>
                  <Typography variant="h2">$275</Typography>
                  <Typography variant="h5">/year</Typography>
                </Box>
                <Divider></Divider>

                <Box display="flex" alignContent="center" justifyContent="center" alignItems="center">
                  <Checkbox
                    sx={{
                      "&.Mui-checked": {
                        color: "#F83E7D",
                      },
                      "& .MuiSvgIcon-root": { fontSize: 68 },
                    }}
                    checked={ultSelected}
                    onClick={() => {
                      setUltSelected(!ultSelected);
                    }}
                  />
                </Box>
              </CardContent>
            </Card>
            <Box display="flex" alignItems="center" justifyContent="center" py={4}>
              <Typography variant="h5">Billed Monthly</Typography>
            </Box>
          </Grid>

          <Grid item xs={8}>
            <Stack spacing={10} mx={4} mt={4}>
              <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                Aisha Community Events Basic Membership
              </Typography>
              <Typography variant="h4">Unlimited Access to all Aisha Community Events</Typography>
              <Typography variant="h4">Cancel Anytime</Typography>
            </Stack>
          </Grid>

          <Grid item xs={9}></Grid>

          <Grid item xs={3}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              py={4}
              bgcolor="#ECECEC"
              sx={{ borderRadius: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: "bold", mr: 2 }}>
                Total:
              </Typography>

              <Typography variant="h5" sx={{ color: "#F9568D", fontWeight: "bold" }}>
                $30.00 CAD
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box display="flex" alignItems="center" justifyContent="left" sx={{ py: 4 }}>
              <Checkbox
                sx={{
                  "&.Mui-checked": {
                    color: "#F83E7D",
                  },
                  "& .MuiSvgIcon-root": { fontSize: 68 },
                }}
              />
              <Typography variant="h4">
                I understand that a successfully completed background check is necessary for me to take part in any
                Aisha Community Events
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box display="flex" alignItems="center" justifyContent="left" sx={{ py: 4 }}>
              <Checkbox
                sx={{
                  "&.Mui-checked": {
                    color: "#F83E7D",
                  },
                  "& .MuiSvgIcon-root": { fontSize: 68 },
                }}
              />
              <Typography variant="h4">I agree to the Aisha Community Terms & Conditions</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} mb={4}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <StyledButton variant="pinkBtn" text="Confirm" link={`/account-mysubscriptions`} />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default MyAccountBillSummary;
