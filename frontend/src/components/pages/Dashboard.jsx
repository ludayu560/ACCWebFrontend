import { Box, Stack } from "@mui/system";
import { Button, Card, Grid, IconButton, Paper, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HomePhoto from "../../assets/HomePhoto.png";
import NavBar from "../components/NavBar";
import StyledButton from "../components/StyledButton";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import ECard from "../components/ECard";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DashboardTenantBG from "../../assets/DashboardTenantBG.png";
import DashboardWHBG from "../../assets/DashboardWHBG.png";
import DashboardPOBG from "../../assets/DashboardPOBG.png";
import DashboardOtherBG from "../../assets/DashboardOtherBG.png";

import { connect } from 'react-redux';

function Dashboard({variant, isAuthenticated, listingAccount}) {
  
  const data = ["1", "2", "3", "4"];

  function renderBGImage() {
    {/*listingAccount.account_type*/}
    // console.log(listingAccount)
    // console.log(listingAccount[0])
    // console.log(listingAccount[0].account_type)
    // variant = listingAccount[0].account_type
    switch (listingAccount.account_type) {
      case "tenant":
        return DashboardTenantBG;
      case "homeowner":
        return DashboardWHBG;
      case "propertyowner":
        return DashboardPOBG;
      default:
        return DashboardOtherBG;
    }
  }

  function colorTheme() {
    // variant = listingAccount[0].account_type
    {/*listingAccount.account_type*/}
    switch (listingAccount.account_type) {
      case "tenant":
        return "#F83E7D";
      case "homeowner":
        return "#0045F1";
      case "propertyowner":
        return "#113170";
      default:
        return "#C5265C";
    }
  }

  return (
    <>
      {/* <Mainbar /> */}
      <Stack>
        <Box component="img" src={renderBGImage()}></Box>
        <Stack sx={{ mt: -72 }}>
          <Stack pl={15} spr={"50vw"} pt={10}>
            <Typography variant="h1" sx={{ fontWeight: "bold", color: "white" }}>
              Match
            </Typography>
            <Typography variant="h1" sx={{ fontWeight: "bold", color: "white" }}>
              Colive
            </Typography>
            <Typography variant="h1" sx={{ fontWeight: "bold", color: "white" }}>
              Enjoy
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" p={6} spacing={10} mx={8}>
          <SearchBar variant="small" />
          <SearchBar variant="small" />
        </Stack>

        {/*Welcome Back*/}
        <Stack style={{ background: "white" }} p={8} pb={10} spacing={3} alignItems="center">
          <Typography variant="h1" sx={{ textAlign: "center", color: colorTheme() }}>
            Welcome Back!
          </Typography>
          <Typography variant="h3" sx={{ textAlign: "center" }}>
            Your latest matches, events, blogs, news, and announcements.
          </Typography>
        </Stack>

        {/*Welcome Back*/}
        <Stack style={{ background: "white" }} pb={20} spacing={5} alignItems="center">
          <ECard variant="long" themeColor={colorTheme()}></ECard>
          <ECard variant="long" themeColor={colorTheme()}></ECard>
        </Stack>

        {/*Saved Matches*/}
        {(variant === "tenant" || variant === "womenHomeOwner") && (
          <Stack style={{ background: "#113170" }} pt={10} spacing={3} alignItems="center">
            <Typography variant="h3" color="primary" sx={{ textAlign: "center", color: "white", fontWeight: "bold" }}>
              Saved Matches
            </Typography>
            <Typography variant="h5" color="primary" sx={{ textAlign: "center", color: "white" }}>
              Browse through your saved matches and connect with them.
            </Typography>
            <Stack direction="row" spacing={20} py={5}>
              <StyledButton variant="pinkBtn" text="Housemates" />
              {variant === "tenant" && <StyledButton variant="pinkBtn" text="Listings" bgcolor="#0094FF" />}
            </Stack>
          </Stack>
        )}

        {/*Listing*/}
        {variant === "tenant" && (
          <Stack direction="row" alignItems="center" p={10} spacing={5}>
            <Stack spacing={2}>
              <Typography variant="h2" sx={{ fontWeight: "bold" }}>
                Recent Listings
              </Typography>
              <Typography variant="h5" sx={{}}>
                Discover new listings and connect with them.
              </Typography>
            </Stack>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton type="button" sx={{ m: "10px", bgcolor: "white" }} aria-label="search">
              <ArrowBackIosNewIcon sx={{ fontSize: 60 }} />
            </IconButton>
            <IconButton type="button" sx={{ m: "10px", bgcolor: "white" }} aria-label="search">
              <ArrowForwardIosIcon sx={{ fontSize: 60 }} />
            </IconButton>
          </Stack>
        )}
        {(variant === "womenHomeOwner" || variant === "propertyOwner") && (
          <Stack direction="row" alignItems="center" p={10} spacing={5}>
            <Stack spacing={2}>
              <Typography variant="h2" sx={{ fontWeight: "bold" }}>
                Recent Interests
              </Typography>
              <Typography variant="h5" sx={{}}>
                Discover interested tenants and connect with them.
              </Typography>
            </Stack>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton type="button" sx={{ m: "10px", bgcolor: "white" }} aria-label="search">
              <ArrowBackIosNewIcon sx={{ fontSize: 60 }} />
            </IconButton>
            <IconButton type="button" sx={{ m: "10px", bgcolor: "white" }} aria-label="search">
              <ArrowForwardIosIcon sx={{ fontSize: 60 }} />
            </IconButton>
          </Stack>
        )}

        {/*Housemate Card Area*/}
        {variant === "tenant" && (
          <Grid container px={10} py={2} spacing={10} mb={20}>
            {data.map((id) => (
              <Grid item xs="auto">
                <ECard variant="listing" />
              </Grid>
            ))}
          </Grid>
        )}
        {(variant === "womenHomeOwner" || variant === "propertyOwner") && (
          <Grid container px={10} py={2} spacing={10} mb={20}>
            {data.map((id) => (
              <Grid item xs="auto">
                <ECard variant="housemate" />
              </Grid>
            ))}
          </Grid>
        )}
        {variant !== "tenant" && variant !== "womenHomeOwner" && variant !== "propertyOwner" && (
          <Stack spacing={4} my={4} px={20} pb={20}>
            <Typography variant="h2" sx={{ fontWeight: "bold" }}>
              Recent Notifcations
            </Typography>

            {data.map((id) => (
              <Box bgcolor="white" p={3} sx={{ border: 1, borderRadius: 5, textAlign: "left", boxShadow: 3 }}>
                {id}
              </Box>
            ))}
          </Stack>
        )}

        <Footer></Footer>
      </Stack>
    </>
  );
}


const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  listingAccount: state.auth.listingAccount
});

export default connect(mapStateToProps)(Dashboard);
