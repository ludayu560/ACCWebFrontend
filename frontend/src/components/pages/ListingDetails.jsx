import Mainbar from "../components/MainBar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Checkbox } from "@mui/material";
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

function ListingDetails({ create_favorite, currentPropertyListing, listingAccount }) {
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
    listing_image_five: "",
    listing_image_six: "",
    listing_image_seven: "",
    listing_image_eight: "",
    listing_image_nine: "",
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
      if (currentPropertyListing.listing_image_five) {
        tempCarouselImages.push(currentPropertyListing.listing_image_five);
      }
      if (currentPropertyListing.listing_image_six) {
        tempCarouselImages.push(currentPropertyListing.listing_image_six);
      }
      if (currentPropertyListing.listing_image_seven) {
        tempCarouselImages.push(currentPropertyListing.listing_image_seven);
      }
      if (currentPropertyListing.listing_image_eight) {
        tempCarouselImages.push(currentPropertyListing.listing_image_eight);
      }
      if (currentPropertyListing.listing_image_nine) {
        tempCarouselImages.push(currentPropertyListing.listing_image_nine);
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

  useEffect(() => {
    if(isFavourited) {
        create_favorite(currentPropertyListing.id, listingAccount.id)
    }
  },[isFavourited])

  // POST:
  // favorite the listing for this account
  // write a review for the listing
  // report listing
  return (
    <>
      {/* <Mainbar></Mainbar> */}
      <Stack>
        {/* Title Component */}
        <Box marginLeft={"5vw"} marginBottom={"10vh"}>
          <Divider width="20%"></Divider>
          <Typography
            fontWeight={600}
            fontSize={16}
            color={"#737373FA"}
            marginTop={"4vh"}
          >
            Listed {listingAge} days ago
          </Typography>
          <Typography fontWeight={700} fontSize={64} color={"#0045F1"}>
            ${listingPrice}
            <Typography
              display="inline"
              variant="h4"
              fontSize={32}
              fontWeight={700}
            >
              /Month
            </Typography>
          </Typography>

          <Typography fontSize={48} fontWeight={700}>
            listingName
          </Typography>

          <Checkbox
            onClick={(event) => {
              setIsFavourited(event.target.checked);
            }}
            icon={
              <FavoriteBorderIcon
                style={{ fontSize: 60 }}
                sx={{ color: "gray" }}
              />
            }
            checkedIcon={
              <FavoriteIcon
                style={{ fontSize: 60 }}
                sx={{ color: "#F83E7D" }}
              />
            }
          />
        </Box>
        <ImageCarousel images={carouselImages} />
        <Box marginLeft={"5vw"}>
          <Typography fontWeight={600} fontSize={40}>
            {" "}
            Description{" "}
          </Typography>
          <Divider width="20%"></Divider>
          <Typography
            width={"40%"}
            fontWeight={600}
            fontSize={20}
            marginTop={"4vh"}
          >
            {listingDescription}
          </Typography>
        </Box>
        {/* Housemates */}
        <Box marginLeft={"5vw"} marginTop={"15vh"}>
          <Typography fontWeight={600} fontSize={40}>
            {" "}
            Housemates (TBD V2)
          </Typography>
          <Divider width="20%"></Divider>
          <Stack direction={"row"} justifyContent={"center"} width={"90vw"}>
            {/* {housemateArray.map((name, index) => {
              return (
                <HousemateComponent
                  profileLink=""
                  username={housemateArray[index].name}
                  description={housemateArray[index].role}
                  age={housemateArray[index].age}
                  occupation={housemateArray[index].occupation}
                />
              );
            })} */}
          </Stack>
        </Box>
        {/* Reviews */}
        <Box marginLeft={"5vw"}>
          <Typography fontWeight={600} fontSize={40}>
            {" "}
            Reviews (TBD V2)
          </Typography>
          <Divider width="20%"></Divider>
          <Stack
            justifyContent={"center"}
            width={"90vw"}
            marginY={"10vh"}
            spacing={8}
          >
            {/* {reviewArray.map((name, index) => {
              return (
                <ReviewComponent
                  username={reviewArray[index].name}
                  comment={reviewArray[index].comment}
                  age={reviewArray[index].commentAge}
                  rating={reviewArray[index].rating}
                />
              );
            })} */}
          </Stack>
        </Box>
      </Stack>
    </>
  );
}

const mapStateToProps = (state) => ({
  currentPropertyListing: state.auth.currentPropertyListing,
  listingAccount: state.auth.listingAccount,
});

export default connect(mapStateToProps, {create_favorite})(ListingDetails);
