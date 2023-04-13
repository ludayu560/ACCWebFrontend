import Mainbar from "../components/MainBar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Checkbox, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ReviewComponent from "../components/PropDetailReviewComponent";
import HousemateComponent from "../components/PropDetailHousemateComponent";
import ImageCarousel from "../components/ImageCarousel";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { create_favorite } from "../../Redux/actions/favorites";
import homeownersbg from "../../assets/homeownerbg.png";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ECard from "../components/ECard";
import StyledButton from "../components/StyledButton";

function EventDetails({ create_favorite, currentPropertyListing, listingAccount }, props) {
  const {
    variant,
    themeColor,
    date,
    time,
    name = "N/A",
    role = "N/A",
    occupation = "N/A",
    age = "N/A",
    location = "N/A",
    interested,
    going,
    image,
    bedrooms = "N/A",
    bathrooms = "N/A",
    roomsAvailable = "N/A",
    price = "N/A",
  } = props;

  const [listing, setListing] = useState({
    id: null,
    listing_city: "",
    listing_postal: "",
    listing_province: "",
    listing_availability_date: "",
    listing_type: "",
    listing_total_bedrooms: null,
    listing_den: false,
    listing_rate: "",
    listing_women_homeowner: false,
    listing_available_bedrooms: null,
    listing_bathrooms: null,
    listing_housemates: null,
    listing_parking: false,
    listing_furnished: false,
    listing_smoking: false,
    listing_pets: false,
    listing_ac: false,
    listing_description: "",
    listing_image_one: "",
    listing_image_two: "",
    listing_image_three: "",
    listing_image_four: "",
    creator_listing_account: null,
  });
  const [carouselImages, setCarouselImages] = useState([]);

  useEffect(() => {
    if (currentPropertyListing) {
      setListing(currentPropertyListing);

      let tempCarouselImages = [];

      if (currentPropertyListing.listing_image_one) {
        tempCarouselImages.push(currentPropertyListing.listing_image_one);
      }
      if (currentPropertyListing.listing_image_two) {
        tempCarouselImages.push(currentPropertyListing.listing_image_two);
      }
      if (currentPropertyListing.listing_image_three) {
        tempCarouselImages.push(currentPropertyListing.listing_image_three);
      }
      if (currentPropertyListing.listing_image_four) {
        tempCarouselImages.push(currentPropertyListing.listing_image_four);
      }

      setCarouselImages(tempCarouselImages);
    }
  }, [currentPropertyListing]);

  // API Calls:
  // GET:
  // Header section
  let listingAge = "N/A"; // => type int
  let listingPrice = listing.listing_rate;
  let listingName = "N/A"; // => type string
  let favorited = false;
  let listingBedrooms = listing.listing_total_bedrooms;
  let listingBathrooms = listing.listing_bathrooms;
  // infographic description section
  let dateAvailable = listing.listing_availability_date;
  let numberOfHousemates = listing.listing_housemates;
  let numberOfParking = listing.listing_parking;
  let boolUtilities = true;
  let boolFurnished = listing.listing_furnished;
  let boolWifi = true;
  let boolHomeowner = true;
  let boolPets = false;
  let boolSmoking = false;
  let boolAC = true;
  // Description section
  let listingDescription = listing.listing_description;

  // Housemates section
  let housemateArray = [];
  // example item of the housemate section
  let exampleHousemate1 = {
    image: "", // datatype of image here?
    name: "Jill Baldwin",
    role: "Homeowner",
    age: 32,
    occupation: "Nurse",
  };
  let exampleHousemate2 = {
    image: "", // datatype of image here?
    name: "GoodTenant_3",
    role: "Tenant",
    age: 32,
    occupation: "Nurse",
  };
  let exampleHousemate3 = {
    image: "", // datatype of image here?
    name: "Michelle Smith",
    role: "Tenant",
    age: 32,
    occupation: "Nurse",
  };
  housemateArray.push(exampleHousemate1, exampleHousemate2, exampleHousemate3);

  // Reviews Section
  let reviewArray = [];
  // example review
  let exampleReview = {
    image: "", // datatype of image here?
    name: "Angela230",
    rating: 5,
    comment:
      "Rented this apartment for 6 months and it was amazing. Had the best housemates and the landlord Jill is so nice!",
    commentAge: 10,
  };
  reviewArray.push(exampleReview, exampleReview, exampleReview);

  const [isFavourited, setIsFavourited] = useState(false);

  /* uncomment later since it breaks front end when clicking heart atm!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  useEffect(() => {
    if (isFavourited) {
      create_favorite(currentPropertyListing.id, listingAccount.id);
    }
  }, [isFavourited]);
*/

  // POST:
  // favorite the listing for this account
  // write a review for the listing
  // report listing
  return (
    <div style={{ overflowX: "hidden" }}>
      {/* Event Picture */}
      <Box component="img" src={homeownersbg} width="100vw" maxHeight="470px" />
      <Stack p={"5vw"}>
        {/* Title Component */}
        <Grid container mb={10}>
          <Grid item xs={10.5}>
            <Typography fontSize="5vw" fontWeight="bold">
              Trivia Night
            </Typography>
          </Grid>
          <Grid item xs={1.5}>
            <Checkbox
              onClick={(event) => {
                setIsFavourited(event.target.checked);
              }}
              icon={<FavoriteBorderIcon style={{ fontSize: 120 }} sx={{ color: "gray" }} />}
              checkedIcon={<FavoriteIcon style={{ fontSize: 120 }} sx={{ color: "#F83E7D" }} />}
            />
          </Grid>
          <Grid item xs={5}>
            <Typography fontWeight="bold" fontSize="4vw" color={"#F83E7D"}>
              {date ? date : "N/A"} {time ? time : "N/A"}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Box
              display="flex"
              style={{
                alignItems: "center",
              }}>
              <LocationOnIcon style={{ fontSize: 60 }} sx={{ mr: 6, color: "blue" }} />
              <Typography variant="h6" fontWeight="bold">
                {location ? location : "Location: N/A"}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              display="flex"
              style={{
                alignItems: "center",
              }}>
              <Diversity3Icon style={{ fontSize: 60 }} sx={{ mr: 6, color: "#F83E7D" }} />
              <Typography variant="h6" fontWeight="bold">
                | {interested ? interested : "N/A"} Interested | {going ? going : "N/A"} Going
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid container pb={20} spacing={10}>
          <Grid item xs="auto">
            <Stack width="60vw" spacing={10}>
              <Typography variant="h4">
                Come join us at Balzac's coffee for an evening of coffee and chatting!
              </Typography>
              <Typography variant="h4">
                <Typography variant="h4" fontWeight="bold">
                  Cost:
                </Typography>
                Free with an Aisha Comfortable Coliving community events membership. Learn more.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs="auto">
            <Stack spacing={5}>
              <StyledButton variant="pinkBtn" text="Interested" bgcolor="#0045F1" width="20vw" />
              <StyledButton variant="pinkBtn" text="See you there!" width="20vw" />
            </Stack>
          </Grid>
        </Grid>

        <Box>
          <Typography fontSize="4vw">Who’s Going?</Typography>
          <Divider width="30%"></Divider>
        </Box>

        <Grid container justifyContent="center" spacing={5} mt={5}>
          <Grid item>
            <ECard variant="housemate2"></ECard>
          </Grid>
          <Grid item>
            <ECard variant="housemate2"></ECard>
          </Grid>
          <Grid item>
            <ECard variant="housemate2"></ECard>
          </Grid>
        </Grid>
      </Stack>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentPropertyListing: state.auth.currentPropertyListing,
  listingAccount: state.auth.listingAccount,
});

export default connect(mapStateToProps, { create_favorite })(EventDetails);
