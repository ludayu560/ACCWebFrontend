import Box from "@mui/system/Box";
import Stack from "@mui/system/Stack";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import StyledButton from "../components/StyledButton";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import ECard from "../components/ECard";
import React, { useEffect, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DashboardTenantBG from "../../assets/DashboardTenantBG.png";
import DashboardWHBG from "../../assets/DashboardWHBG.png";
import DashboardPOBG from "../../assets/DashboardPOBG.png";
import DashboardOtherBG from "../../assets/DashboardOtherBG.png";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { load_propertylistings_created, load_propertylistings_recent } from "../../Redux/actions/propertyListing";
import { handleOnClick } from "./MyAccountFavourites";


function Dashboard({ variant, isAuthenticated, listingAccount, propertyListingCreated, propertyListingRecent, load_propertylistings_created, load_propertylistings_recent }) {
  const data = ["1", "2", "3", "4"];
  const navigate = useNavigate();
  const [createdPropertyArray, setPropertyArray] = useState([]);
  const [propertyRecentArray, setPropertyRecent] = useState([]);
  useEffect(() => {
    load_propertylistings_recent()
    if (propertyListingCreated) {
      setPropertyArray(propertyListingCreated);
      console.log(propertyListingCreated)
    }
    if (propertyListingRecent) {
      setPropertyRecent(propertyListingRecent);
      console.log(propertyListingRecent)
    }
  }, [propertyListingCreated]);

  function renderBGImage() {
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

  return listingAccount === null ? (
    <div>loading</div>
  ) : (
    <>
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
          <Typography variant="h1" sx={{ textAlign: "center", color: "primary.main" }}>
            Welcome Back!
          </Typography>
          <Typography variant="h3" sx={{ textAlign: "center" }}>
            Your latest matches, events, blogs, news, and announcements.
          </Typography>
        </Stack>

        {/*Welcome Back*/}
        <Stack style={{ background: "white" }} pb={20} spacing={5} alignItems="center">
          <ECard variant="long" themeColor={"primary.main"}/>
          <ECard variant="long" themeColor={"primary.main"}/>
        </Stack>

        {/*Saved Matches*/}
        {(listingAccount.account_type === "tenant" || listingAccount.account_type === "homeowner") && (
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
        {listingAccount.account_type === "tenant" && (
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
        {listingAccount.account_type === "homeowner" && (
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
        {listingAccount.account_type === "propertyowner" && (
          <Stack direction="row" alignItems="center" p={10} spacing={5}>
            <Stack spacing={2}>
              <Typography variant="h2" sx={{ fontWeight: "bold" }}>
                Your Listings
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
        {listingAccount.account_type === "tenant" && (
          <Grid container px={10} py={2} spacing={10} mb={20}>
            {propertyRecentArray.map((item) => (
                <Grid item xs="auto" onClick={() => handleOnClick(item.id)}>
                  <ECard
                    variant="listing"
                    location={item.listing_city + ", " + item.listing_province}
                    bedrooms={item.listing_total_bedrooms}
                    bathrooms={item.listing_bathrooms}
                    roomsAvailable={item.listing_available_bedrooms}
                    price={item.listing_rate}
                    image={'http://127.0.0.1:8000'+ item.listing_image_one}
                  />
                </Grid>
              ))}
          </Grid>
        )}
        {listingAccount.account_type === "homeowner" && (
          <Grid container px={10} py={2} spacing={10} mb={20}>
            {data.map((id) => (
              <Grid item xs="auto">
                <ECard variant="housemate" />
              </Grid>
            ))}
          </Grid>
        )}
        {listingAccount.account_type === "propertyowner" && (
          <Grid container px={10} py={2} spacing={10} mb={20}>
            {createdPropertyArray.map((item) => (
                <Grid item xs="auto" onClick={() => handleOnClick(item.id)}>
                  <ECard
                    variant="listing"
                    location={item.listing_city + ", " + item.listing_province}
                    bedrooms={item.listing_total_bedrooms}
                    bathrooms={item.listing_bathrooms}
                    roomsAvailable={item.listing_available_bedrooms}
                    price={item.listing_rate}
                    image={'http://127.0.0.1:8000'+ item.listing_image_one}
                  />
                </Grid>
              ))}
            {/* {data.map((id) => (
              <Grid item xs="auto">
                <ECard variant="listing" />
              </Grid>
            ))} */}
          </Grid>
        )}

        {/* Notifications */}
        {listingAccount.account_type !== "tenant" &&
          listingAccount.account_type !== "homeowner" &&
          listingAccount.account_type !== "propertyowner" && (
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

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  listingAccount: state.auth.listingAccount,
  propertyListingCreated: state.auth.propertyListingCreated,
  propertyListingRecent: state.auth.propertyListingRecent
});

export default connect(mapStateToProps, {load_propertylistings_created, load_propertylistings_recent})(Dashboard);

// const [curImage, setCurImage] = useState(DashboardOtherBG);
// const [curColor, setColor] = useState("#C5265C");
// if (listingAccount) {
//   switch (listingAccount.account_type) {
//     case "tenant":
//       setCurImage(DashboardTenantBG);
//     case "homeowner":
//       setCurImage(DashboardWHBG);
//       // return DashboardWHBG;
//     case "propertyowner":
//       setCurImage(DashboardPOBG);
//       // return DashboardPOBG;
//     default:
//       setCurImage(DashboardOtherBG);
//       // return DashboardOtherBG;
//   }
//   switch (listingAccount.account_type) {
//     case "tenant":
//       setColor("#F83E7D");
//     case "homeowner":
//       setColor("#0045F1");
//     case "propertyowner":
//       setColor("#113170");
//       // return "#113170";
//     default:
//       setColor("#C5265C");
//       return "#C5265C";
//   }

// }
// function renderBGImage() {
//   {/*listingAccount.account_type*/}
// }

// function "primary.main" {
//   {/*listingAccount.account_type*/}
//   switch (variant) {
//     case "tenant":
//       return "#F83E7D";
//     case "homeowner":
//       return "#0045F1";
//     case "propertyowner":
//       return "#113170";
//     default:
//       return "#C5265C";
//   }
// }
