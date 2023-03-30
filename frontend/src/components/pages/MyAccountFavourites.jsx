import {
  Grid,
  Typography,
  Divider,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ECard from "../components/ECard";
import SideNav from "../components/SideNav";
import { connect } from "react-redux";
import { load_property_listing, get_housemates } from "../../AuthComponents/actions/auth";
import { useNavigate } from "react-router";

export const handleOnClick = (id, load_property_listing, get_housemates, navigate) => {
  load_property_listing(id);
  get_housemates(id);
  navigate("/ListingDetails");
};

function MyAccountFavourites({ favorites, load_property_listing, get_housemates }) {
  const navigate = useNavigate();
  const [favoritesArray, setFavoritesArray] = useState([]);
  useEffect(() => {
    if (favorites) {
      setFavoritesArray(favorites);
      console.log(favorites)
    }
  }, [favorites]);

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
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
const mapStateToProps = (state) => ({
  favorites: state.auth.favorites,
});

export default connect(mapStateToProps, {load_property_listing, get_housemates})(MyAccountFavourites);
