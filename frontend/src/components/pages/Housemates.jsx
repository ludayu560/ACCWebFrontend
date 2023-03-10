import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
 
import React, {useState} from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import HousemateFilterPanel from "../components/HousemateFilterPanel";
import StyledButton from "../components/StyledButton";
import SearchBar from "../components/SearchBar";
import Mainbar from "../components/MainBar";
import Footer from "../components/Footer";
import ECard from "../components/ECard";
import Tags from "../components/Tags";

import axios from "axios";

const traitList = [
  'Extroverted',
  'Introverted',
  'Outgoing',
  'Open',
  'Creative',
  'Analytical',
  'Private',
  'Laid-back',
  'Quiet',
  'Adventurous',
]
const interestList = [
  'Gardening',
  'Cooking',
  'Hiking',
  'Music',
  'Reading',
  'Art',
  'Puzzles',
  'Sports',
  'Yoga',
  'Cars'
]

function Housemates(props) {
  const [newQuery, setNewQuery] = useState(true)
  const [filterParams, setFilterParams] = useState({
    traits: [],
    interests: [],
    ageRange: [16,100],
    priceRange: [400,4000],
    housemateType: '',
  })
  const data = ['$'+filterParams.priceRange[0]+' - $'+filterParams.priceRange[1],
                    filterParams.ageRange[0]+' - '+filterParams.ageRange[1],
                    filterParams.housemateType,
                 ...filterParams.traits, 
                 ...filterParams.interests];

  // Query section
  if (newQuery) {
    const query = 'account_type='+filterParams.housemateType.toLowerCase()+
                  '&age_min='+filterParams.ageRange[0]+
                  '&age_max='+filterParams.ageRange[1]+
                  '&personal_traits='+filterParams.traits.map(word => word.toLowerCase()).join('%2C')+
                  '&interests='+filterParams.interests.map(word => word.toLowerCase()).join('%2C')
    const response = axios.get('http://127.0.0.1:8000/ListingAccount/filter?' + query)
    console.log(response)
    setNewQuery(false)
  }
  
  return (
    <>
      <Stack>
        <Stack alignItems="center" p={6} spacing={5} mt={15}>
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            Matching By Housemates
          </Typography>
          <SearchBar variant="location" />
        </Stack>

        <Divider sx={{ p: 0.1, mx: 20 }} />
        <Grid container p={4} px={10}>
          <Grid item xs={9}>
            <Grid container spacing={2}>
              <Grid item>
                <HousemateFilterPanel returnHook={setFilterParams} query={setNewQuery} traitList={traitList} interestList={interestList}/>
              </Grid>
              {data.map((id) => (
                (id === '')? null :
                <Grid item xs="auto">
                  <Tags variant="filter" text={id}></Tags>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={3} px={10}>
            <Stack spacing={15} alignItems='center'>
              <Typography align='center'>Showing 1 - 21of 242 results </Typography>
              <StyledButton variant="pinkBtn" text="Newest First" width='15vw'/>
            </Stack>
          </Grid>
        </Grid>

        {/*Housemate Card Area*/}
        <Grid container px={10} py={2} spacing={10}>
          {data.map((id) => (
            <Grid item xs="auto">
              <ECard variant="housemate" />
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

export default Housemates;
