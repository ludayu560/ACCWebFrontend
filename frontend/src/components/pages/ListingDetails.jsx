import Mainbar from "../components/MainBar"
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import ReviewComponent from "../components/PropDetailReviewComponent";
import HousemateComponent from "../components/PropDetailHousemateComponent";
import ImageCarousel from "../components/ImageCarousel";


function ListingDetails(props) {

// API Calls:

// Header section
let listingAge = 10;
let listingPrice = 850;
let listingName = "Master Bedroom in a 3 Bedroom Unit";
let favorited = false;
let listingBedrooms = 3;
let listingBathrooms = 2;
let carouselImages = []; // => array of what?

// inforgraphic description section
let dateAvailable = "";
let numberOfHousemates = 3;
let numberOfParking = 3;
let boolUtilities = true;
let boolFurnished = true;
let boolWifi = true;
let boolHomeowner = true;
let boolPets = false;
let boolSmoking = false;
let boolAC = true;

// Description section
let listingDescription = "Looking for a young professional female. The unit is a townhouse style condo with 3 floors. It has HVAC, in-house laundry, dishwasher and the building is fully managed by a condominium. It is situated at Chapman Mills Drive, Barrhaven. 5 mins walk to the Barrhaven Marketplace that features Walmart, Loblaws, Winners, Sportchek, Staples, Structube, Scotia, TD bank, etc. The house and room is fully furnished. The bus stop (99 hurdman) is directly in front of the building of the house. Available Immediately"

// Carousel Section 

const exampleImageArray = [
    {
      src: require(
        './../../assets/images/image25.png'
    ),},
    {
      src: require(
        './../../assets/images/image26.png'
    ),},
    {
      src: require(
        './../../assets/images/image27.png'
    ),},
    {
      src: require(
        './../../assets/images/image25.png'
    ),},
    {
      src: require(
        './../../assets/images/image26.png'
    ),},
    {
      src: require(
        './../../assets/images/image27.png'
    ),},
  ]

// Housemates section
let housemateArray = []
    // example item of the housemate section
let exampleHousemate1 = {
    image: "",              // datatype of image here? 
    name: "Jill Baldwin",
    role: "Homeowner",
    age: 32,
    occupation: "Nurse",
}
let exampleHousemate2 = {
    image: "",              // datatype of image here? 
    name: "GoodTenant_3",
    role: "Tenant",
    age: 32,
    occupation: "Nurse",
}
let exampleHousemate3 = {
    image: "",              // datatype of image here? 
    name: "Michelle Smith",
    role: "Tenant",
    age: 32,
    occupation: "Nurse",
}
housemateArray.push(exampleHousemate1, exampleHousemate2, exampleHousemate3)

// Reviews Section
let reviewArray = []
    // example review
let exampleReview = {
    image: "",              // datatype of image here? 
    name: "Angela230",
    rating: 5,
    comment: "Rented this apartment for 6 months and it was amazing. Had the best housemates and the landlord Jill is so nice!",
    commentAge: 10,   
}
reviewArray.push(exampleReview, exampleReview, exampleReview)

    return (
        <>
        <Mainbar></Mainbar>
        <Stack>
            {/* Title Component */}
            <Box marginLeft={'5vw'} marginBottom={'10vh'}>
                <Divider width="20%"></Divider>
                <Typography fontWeight={600} fontSize={16} color={'#737373FA'} marginTop={"4vh"}>
                    Listed {listingAge} days ago
                </Typography>
                <Typography fontWeight={700} fontSize={64} color={"#0045F1"}>
                    ${listingPrice}<Typography display="inline" variant="h4" fontSize={32} fontWeight={700}>/Month</Typography>
                </Typography>
                <Typography fontSize={48} fontWeight={700}>
                    {listingName}
                </Typography>
            </Box>
            {/* Image Carousel */}
            <ImageCarousel images={exampleImageArray}/>
            {/* Infographics */}
            {/* Map */}
            {/* Description */}
            <Box marginLeft={'5vw'}>
                <Typography fontWeight={600} fontSize={40}> Description </Typography>
                <Divider width="20%"></Divider>
                <Typography width={'40%'} fontWeight={600} fontSize={20} marginTop={'4vh'}> 
                    {listingDescription}
                </Typography>

            </Box>
            {/* Housemates */}
            <Box marginLeft={'5vw'} marginTop={'15vh'}>
                <Typography fontWeight={600} fontSize={40}> Housemates </Typography>
                <Divider width="20%"></Divider>
                <Stack direction={'row'} justifyContent={'center'} width={'90vw'}>
                    { housemateArray.map((name, index) => { return (
                        <HousemateComponent profileLink="" 
                                            username={housemateArray[index].name}
                                            description={housemateArray[index].role}
                                            age={housemateArray[index].age}
                                            occupation={housemateArray[index].occupation}/>
                    )})}
                </Stack>
            </Box>
            {/* Reviews */}
            <Box marginLeft={'5vw'}>
                <Typography fontWeight={600} fontSize={40}> Reviews </Typography>
                <Divider width="20%"></Divider>
                <Stack justifyContent={'center'} width={'90vw'} marginY={'10vh'} spacing={8}>
                { reviewArray.map((name, index) => { return (
                    <ReviewComponent    username={reviewArray[index].name}
                                        comment={reviewArray[index].comment}
                                        age={reviewArray[index].commentAge}
                                        rating={reviewArray[index].rating}/>
                )})}
                </Stack>
            </Box>
        </Stack>

        </>
    )
}

export default ListingDetails