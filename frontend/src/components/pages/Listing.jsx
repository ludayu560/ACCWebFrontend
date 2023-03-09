import { Box, Stack } from "@mui/system";
import { Divider, Grid, IconButton, Paper, Typography } from "@mui/material";
import StyledButton from "../components/StyledButton";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import Mainbar from "../components/MainBar";
import ECard from "../components/ECard";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Tags from "../components/Tags";
import ListingFilterPanel from "../components/ListingFilterPanel";
import { useState } from "react";

function Listing(props) {
  const [filterParams, setFilterParams] = useState();
  const data = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
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
                <ListingFilterPanel returnHook={setFilterParams} />
              </Grid>
              {data.map((id) =>
                id === "" ? null : (
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
