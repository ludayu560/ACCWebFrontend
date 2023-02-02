import React from "react";
import {
  Card,
  CardMedia,
  Box,
  CardContent,
  Typography,
  Avatar,
  Stack,
  IconButton,
  Grid,
  Checkbox,
  Button,
  CardActionArea,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import bbq from "../../assets/bbq.png";
import livingSpace from "../../assets/livingspace.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StyledButton from "./StyledButton";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

function ECard(props) {
  const { variant } = props;

  return (
    <>
      {variant === "event" && (
        <Card raised="true" sx={{ borderRadius: 4, width: 470 }}>
          <CardActionArea>
            <CardMedia component="img" height="500" src={bbq} />
            <CardContent>
              <Grid container spacing={3} m={1}>
                <Grid item xs={12}>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    Sunday, September 3 @ 6:00pm
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">Monthly Community BBQ</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    display="flex"
                    style={{
                      alignItems: "center",
                    }}>
                    <LocationOnIcon style={{ fontSize: 60 }} sx={{ mr: 6, color: "blue" }} />
                    <Typography variant="h6">The Time’s Grill and Bar</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    display="flex"
                    style={{
                      alignItems: "center",
                    }}>
                    <Diversity3Icon style={{ fontSize: 60 }} sx={{ mr: 6, color: "#F83E7D" }} />
                    <Typography variant="h6">| 15 Interested | 8 Going</Typography>
                  </Box>
                </Grid>
                <Grid item xs={8}></Grid>
                <Grid item xs={4}>
                  <Checkbox
                    sx={{ mt: 5 }}
                    icon={<FavoriteBorderIcon style={{ fontSize: 60 }} sx={{ color: "gray" }} />}
                    checkedIcon={<FavoriteIcon style={{ fontSize: 60 }} sx={{ color: "#F83E7D" }} />}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      )}

      {variant === "favourite" && (
        <Card raised="true" sx={{ borderRadius: 5, width: 470 }}>
          <CardActionArea>
            <Grid container>
              <Grid item xs={8.5}></Grid>
              <Grid item xs={3.5}>
                <Button
                  color="inherit"
                  size="large"
                  sx={{ color: "white", background: "#F9568D", mt: 4, borderRadius: 2 }}>
                  $850/month
                </Button>
              </Grid>
            </Grid>

            <Box component="img" height="540" src={livingSpace} sx={{ mt: -10 }} />
            <CardContent>
              <Grid container spacing={3} m={1}>
                <Grid item xs={12}>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    Spacious 1 Bedroom Apartment Available for Rent
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    display="flex"
                    style={{
                      alignItems: "center",
                    }}>
                    <LocationOnIcon style={{ fontSize: 60 }} sx={{ mr: 6, color: "blue" }} />
                    <Typography variant="h6">Kingston, Ontario</Typography>
                  </Box>
                </Grid>
                <Grid item xs={8}>
                  <Box
                    display="flex"
                    style={{
                      alignItems: "center",
                    }}>
                    <BusinessCenterIcon style={{ fontSize: 60 }} sx={{ mr: 6, color: "#F83E7D" }} />
                    <Typography variant="h6">Available: September 1, 2022</Typography>
                  </Box>
                </Grid>

                <Grid item xs={4}>
                  <Checkbox
                    icon={<FavoriteBorderIcon style={{ fontSize: 60 }} sx={{ color: "gray" }} />}
                    checkedIcon={<FavoriteIcon style={{ fontSize: 60 }} sx={{ color: "#F83E7D" }} />}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </>
  );
}

export default ECard;
