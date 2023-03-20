import {
  Grid,
  Typography,
  Divider,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ECard from "../components/ECard";
import SideNav from "../components/SideNav";
import { connect } from "react-redux";

function MyAccountFavourites({ favorites }) {
  const [favoritesArray, setFavoritesArray] = useState([]);
  useEffect(() => {
    if (favorites) {
      setFavoritesArray(favorites);
    }
  }, [favorites]);

  const handleOnClick = (id) => {

  }
  return (
    <>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Typography variant="h2" padding={"3vw"} fontWeight={700}>
            <b>My Account</b>
            <Divider
              variant="middle"
              sx={{ width: "15vw", border: "2px solid #F83E7D", opacity: 100 }}
            />
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <SideNav></SideNav>
        </Grid>
        <Grid container xs={9} px={6}>
          <Grid item spacing="auto" xs={12}>
            <Grid item xs={12} align="center">
              <Typography variant="h3" color="#000" fontWeight={700}>
                My Favourites
                <Divider
                  variant="fullWidth"
                  sx={{
                    m: 2,
                    width: "18vw",
                    border: "2px solid #F83E7D",
                    opacity: 100,
                  }}
                />
              </Typography>
            </Grid>
            <Grid container spacing={8} p={10}>
              {favoritesArray.map((item) => (
                <Grid item xs="auto" onClick={() => handleOnClick(item.id)}>
                  <ECard
                    onClick={handleOnClick(item.id)}
                    variant="listing"
                    location={item.listing_city + ", " + item.listing_province}
                    bedrooms={item.listing_total_bedrooms}
                    bathrooms={item.listing_bathrooms}
                    roomsAvailable={item.listing_available_bedrooms}
                    price={item.listing_rate}
                    image={item.listing_image_one}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
const mapStateToProps = (state) => ({
  favorites: state.auth.favorites,
});

export default connect(mapStateToProps)(MyAccountFavourites);

// export default MyAccountFavourites;
