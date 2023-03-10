import { Box, Stack } from "@mui/system";
import { Divider, Grid, IconButton, Paper, Typography } from "@mui/material";
import StyledButton from "../components/StyledButton";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import ECard from "../components/ECard";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Tags from "../components/Tags";
import ListingFilterPanel from "../components/ListingFilterPanel";
import { useState } from "react";
import axios from "axios";

function Listing(props) {
  const [newQuery, setNewQuery] = useState(true)
  // If number of bedrooms, bathrooms, or housemates === 0 => no preference
  // If number of bedrooms === 5, bathrooms === 4, housemates === 4 => that number or more.
  const [filterParams, setFilterParams] = useState({
      listing_city: "unknown",
      listing_province: "unknown",
      listing_type: "unknown",
      listing_rate__gte: 700,
      listing_rate__lte: 1500,
      listing_women_homeowner: "unknown",
      listing_total_bedrooms: 0,   // int
      listing_den: "unknown",
      listing_bathrooms: 0,       // int
      listing_housemates: 0,     // int
      listing_furnished: "unknown",
      listing_pets: "unknown",
      listing_parking: "unknown",
      listing_ac: "unknown",
      listing_smoking: "unknown",
      utilities: "unknown",
    });
  const data = [filterParams.listing_city,
                filterParams.listing_province,
                filterParams.listing_type,
                '$'+filterParams.listing_rate__gte+' - $'+filterParams.listing_rate__lte,
                filterParams.listing_women_homeowner,
                filterParams.listing_total_bedrooms+' bedrooms',
                filterParams.listing_bathrooms+' bathrooms',
                filterParams.listing_housemates+' housemates',
                (filterParams.listing_furnished === 'yes')? "furnished" : "",
                (filterParams.listing_pets === 'yes')? "pets" : "",
                (filterParams.listing_parking === 'yes')? "parking" : "",
                (filterParams.listing_ac === 'yes')? "AC" : "",
                (filterParams.listing_smoking === 'yes')? "smoking" : "",
                filterParams.utilities]

  // Query section
  if (newQuery) {
    const query = 
      'listing_city=' + filterParams.listing_city +
      '&listing_province=' + filterParams.listing_province +
      '&listing_type=' + filterParams.listing_type +
      '&listing_rate__gte=' + filterParams.listing_rate__gte +
      '&listing_rate__lte=' + filterParams.listing_rate__lte +
      '&listing_women_homeowner=' + filterParams.listing_women_homeowner +
      '&listing_total_bedrooms=' + filterParams.listing_total_bedrooms +
      '&listing_bathrooms=' + filterParams.listing_bathrooms +
      '&listing_housemates=' + filterParams.listing_housemates +
      '&listing_furnished=' + filterParams.listing_furnished +
      '&listing_pets=' + filterParams.listing_pets +
      '&listing_parking=' + filterParams.listing_parking +
      '&listing_ac=' + filterParams.listing_ac +
      '&listing_smoking=' + filterParams.listing_smoking +
      '&utilities=' + filterParams.utilities
    const response = axios.get('http://127.0.0.1:8000/PropertyListing/filter?' + query)
    console.log(response)
    setNewQuery(false)
  }
  return (
    <>
      <Stack>
        <Stack direction="row" alignItems="center" p={10} spacing={5}>
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            Listings
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <SearchBar variant="listings" />
        </Stack>

        <Divider sx={{ p: 0.1, mx: 20 }} />
        <Grid container p={4} px={10}>
          <Grid item xs={9}>
            <Grid container spacing={4}>
              <Grid item>
                <ListingFilterPanel returnHook={setFilterParams} query={setNewQuery}/>
              </Grid>
              {data.map((id) =>
                (id === "" || id === "unknown") ? null : (
                  <Grid item xs="auto">
                    <Tags variant="filter" text={id} color='#0045F1'></Tags>
                  </Grid>
                )
              )}
            </Grid>
          </Grid>
          <Grid item xs={3} px={10}>
            <Stack spacing={10} alignItems="center">
              <Typography align="center">Showing 1 - 21of 242 results </Typography>
              <StyledButton variant="pinkBtn" text="Newest First" bgcolor="gray" textColor="black" width="20vw" />
            </Stack>
          </Grid>
        </Grid>

        {/*Housemate Card Area*/}
        <Grid container px={10} pb={2} spacing={10}>
          {data.map((id) => (
            <Grid item xs="auto">
              <ECard variant="listing" />
            </Grid>
          ))}
        </Grid>

        {/*Pink Area*/}
        <Stack style={{ background: "white" }} p={8} pb={20} spacing={3} alignItems="center">
          <Box display="flex" m="auto" style={{ alignItems: "center" }}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              PAGE 1
            </Typography>
            <IconButton type="button" sx={{ m: "10px" }} aria-label="search">
              <KeyboardArrowRightIcon sx={{ fontSize: 40 }} />
            </IconButton>
          </Box>
        </Stack>

        <Footer></Footer>
      </Stack>
    </>
  );
}

export default Listing;
