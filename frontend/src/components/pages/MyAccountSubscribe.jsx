import {
  Container,
  Button,
  IconButton,
  Grid,
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  MenuItem,
  Typography,
  Stack,
  Paper,
  TextField,
  ImageListItem,
  Divider,
  Switch,
  Card,
  CardActionArea,
  CardContent,
  Avatar,
  CardMedia,
  ToggleButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import RectangleOne from "../../assets/Rectangle1.svg";
import AccountContent from "../../assets/AccountContent.svg";
import NavBar from "../components/NavBar";
import axios from "axios";
import { borderRadius } from "@mui/system";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Mainbar from "../components/MainBar";
import ECard from "../components/ECard";
import { styled } from "@mui/material/styles";
import SideNav from "../components/SideNav";
import MasterCardLogo from "../../assets/MasterCardLogo.png";
import PayPalLogo from "../../assets/PayPalLogo.png";
import VisaLogo from "../../assets/VisaLogo.png";
import StyledButton from "../components/StyledButton";
import AddIcon from "../components/AddIcon";
import flameIcon from "../../assets/Icons/Group 4.svg";
import { connect } from "react-redux";

function MyAccountSubscribe({
  variant,
  isAuthenticated,
  listingAccount,
  propertyListingCreated,
  load_propertylistings_created,
}) {
  const [basicSelected, setBasicSelected] = useState(false);
  const [premiumSelected, setPremiumSelected] = useState(false);
  const [ultSelected, setUltSelected] = useState(false);

  const handleLink = () => {
    if (basicSelected) {
      return "price_1MqKV9IbS9zGmxyRdliovSvC";
    } else if (premiumSelected) {
      return "price_1MqKW5IbS9zGmxyRRceRY2Vt";
    } else if (ultSelected) {
      return "price_1MqKWrIbS9zGmxyRKEx7Vmah";
    }
    return;
  };

  return listingAccount !== null ? (
    <div>loading</div>
  ) : (
    <>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Typography variant="h2" padding={"3vw"} fontWeight={700}>
            <b>My Account</b>
            <Divider
              variant="middle"
              sx={{ width: "15vw", border: "2px solid", borderColor: "primary.main", opacity: 100 }}
            />
          </Typography>
        </Grid>

        <Grid item xs={3}>
          <SideNav></SideNav>
        </Grid>

        {/*Subscriptions Container */}
        <Grid container xs={9} px={6} spacing={2}>
          <Grid item xs={12} align="center">
            <Typography variant="h3" fontWeight={700} mb={5}>
              Subscriptions
              <Divider
                variant="fullWidth"
                sx={{
                  m: 2,
                  width: "10vw",
                  border: "2px solid",
                  borderColor: "primary.main",
                  opacity: 100,
                }}
              />
            </Typography>
          </Grid>

          {/*Homeonwer service package*/}
          {(listingAccount.account_type === "homeowner" || listingAccount.account_type === "propertyowner") && (
            <>
              <Grid item xs={12} mb={3}>
                <Stack spacing={2}>
                  <Typography variant="h3" align="center" fontWeight="bold" color="primary.main">
                    Homeowner Service Package
                  </Typography>
                  <Typography variant="h4" align="center">
                    What’s Included?
                  </Typography>
                </Stack>
                <Stack px={15} pt={5}>
                  <AddIcon variant="start" text="Background check" />
                  <AddIcon variant="start" text="Credit Check" />
                  <AddIcon
                    variant="start"
                    text="Dedicated Coliving Expert to support you during the entire rental process"
                  />
                  <AddIcon variant="start" text="Custom advertisements featured on our social media platforms" />
                  <AddIcon variant="start" text="Video reels highlighting the property" />
                  <AddIcon variant="start" text="Personalized outreach initiatives to showcase your unit." />
                  <AddIcon variant="start" text="Matching Housemates" />
                  <AddIcon variant="start" text="Working with you to schedule viewings " />
                  <AddIcon variant="start" text="Self-Mediation Plan" />
                </Stack>
                <Stack alignItems="center" pt={10}>
                  <Divider width="30%" />
                </Stack>
              </Grid>

              <Grid item xs={12} mb={3}>
                <Stack spacing={2}>
                  <Typography variant="h4" align="center" fontWeight="bold" color="primary.main" pb={5}>
                    Ready to get started?
                  </Typography>
                  <Typography variant="h5" align="center" fontWeight="bold">
                    One time fee of half of the first month rent paid by the homeowner
                  </Typography>
                  <Typography variant="h3" align="center" fontWeight="bold" color="primary.main">
                    +
                  </Typography>
                  <Typography variant="h5" align="center" fontWeight="bold">
                    5% markup of the monthly rent paid by the tenant
                  </Typography>
                  <Typography variant="h5" align="center">
                    *Don’t worry our services are completely free until a match is made.
                  </Typography>
                </Stack>

                <Stack alignItems="center" py={10} spacing={10}>
                  <StyledButton variant="pinkBtn" text="Proceed"></StyledButton>
                  <Divider width="30%" />
                </Stack>
              </Grid>
            </>
          )}

          {/*Community Events package */}
          {listingAccount.account_type !== "propertyowner" && (
            <>
              <Grid item xs={12} mb={3}>
                <Stack alignItems="center" spacing={4}>
                  <Typography variant="h3" fontWeight="bold" color="primary.main">
                    Community Events Package
                  </Typography>

                  <Typography variant="h5" align="center">
                    Community means everything to us at Aisha Comfortable Coliving. Currently all women are welcome to
                    enjoy our virtual events free of charge! Stay tuned for in-person events!
                  </Typography>
                </Stack>
              </Grid>

              <Grid item xs={12} sm={12} md={4} mt="35px">
                <Card
                  raised="true"
                  sx={{
                    borderRadius: 3,
                    border: 5,
                    borderColor: basicSelected ? "primary.main" : "transparent",
                  }}>
                  <CardContent bgcolor="red">
                    <Stack spacing={3} pb={4}>
                      <Box display="flex" alignContent="center" justifyContent="center" px={4}>
                        <Typography variant="h4">BASIC</Typography>
                      </Box>
                      <Box display="flex" alignContent="center" justifyContent="center" alignItems="center" px={4}>
                        <Typography variant="h2">$35</Typography>
                        <Typography variant="h5">/month</Typography>
                      </Box>
                    </Stack>
                    <Divider></Divider>

                    <Box display="flex" alignContent="center" justifyContent="center" alignItems="center" pt={4}>
                      <Checkbox
                        sx={{
                          "&.Mui-checked": {
                            color: "primary.main",
                          },
                          "& .MuiSvgIcon-root": { fontSize: 68 },
                        }}
                        checked={basicSelected}
                        onClick={() => {
                          setBasicSelected(!basicSelected);
                          setPremiumSelected(false);
                          setUltSelected(false);
                        }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={12} md={4}>
                <Stack bgcolor="primary.main" height="35px" sx={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                  <Typography color="white" align="center" fontWeight="bold" p={1}>
                    MOST POPULAR
                  </Typography>
                </Stack>
                <Card
                  raised="true"
                  sx={{
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    border: 5,
                    borderColor: premiumSelected ? "primary.main" : "transparent",
                  }}>
                  <CardContent>
                    <Stack spacing={3} pb={4}>
                      <Box display="flex" alignContent="center" justifyContent="center" px={4}>
                        <Typography variant="h4" fontWeight="bold">
                          PREMIUM
                        </Typography>
                      </Box>
                      <Box display="flex" alignContent="center" justifyContent="center" alignItems="center" px={4}>
                        <Typography variant="h2">$100</Typography>
                        <Typography variant="h5">/quarter</Typography>
                      </Box>
                    </Stack>

                    <Divider></Divider>

                    <Box display="flex" alignContent="center" justifyContent="center" alignItems="center" pt={4}>
                      <Checkbox
                        sx={{
                          "&.Mui-checked": {
                            color: "primary.main",
                          },
                          "& .MuiSvgIcon-root": { fontSize: 68 },
                        }}
                        checked={premiumSelected}
                        onClick={() => {
                          setBasicSelected(false);
                          setPremiumSelected(!premiumSelected);
                          setUltSelected(false);
                        }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={12} md={4}>
                <Stack bgcolor="primary.main" height="35px" sx={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                  <Typography color="white" align="center" fontWeight="bold" p={1}>
                    BEST VALUE
                  </Typography>
                </Stack>
                <Card
                  raised="true"
                  sx={{
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    border: 5,
                    borderColor: ultSelected ? "primary.main" : "transparent",
                  }}>
                  <CardContent bgcolor="red">
                    <Stack spacing={3} pb={4}>
                      <Box display="flex" alignContent="center" justifyContent="center" px={4}>
                        <Typography variant="h4" fontWeight="bold">
                          ULTIMATE
                        </Typography>
                      </Box>
                      <Box display="flex" alignContent="center" justifyContent="center" alignItems="center" px={4}>
                        <Typography variant="h2">$275</Typography>
                        <Typography variant="h5">/year</Typography>
                      </Box>
                    </Stack>

                    <Divider></Divider>

                    <Box display="flex" alignContent="center" justifyContent="center" alignItems="center" pt={4}>
                      <Checkbox
                        sx={{
                          "&.Mui-checked": {
                            color: "primary.main",
                          },
                          "& .MuiSvgIcon-root": { fontSize: 68 },
                        }}
                        checked={ultSelected}
                        onClick={() => {
                          setBasicSelected(false);
                          setPremiumSelected(false);
                          setUltSelected(!ultSelected);
                        }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} my={3}>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Typography variant="h6">Cancel Anytime</Typography>
                </Box>
              </Grid>

              <Grid item xs={12} mb={4} pb={20}>
                <form action={`${process.env.REACT_APP_API_URL}/subscription/create-subscription/`} method="POST">
                  <input type="hidden" name="price_id" value={handleLink()} />
                  <Box display="flex" justifyContent="center" alignItems="center">
                    <StyledButton variant="pinkBtn" text="Proceed" type="submit" />
                  </Box>
                </form>
              </Grid>
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  listingAccount: state.auth.listingAccount,
  propertyListingCreated: state.auth.propertyListingCreated,
});

export default connect(mapStateToProps)(MyAccountSubscribe);
