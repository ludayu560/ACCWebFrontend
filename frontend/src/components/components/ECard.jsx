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
import GppGoodIcon from "@mui/icons-material/GppGood";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function ECard(props) {
  const { variant, themeColor} = props;

  return (
    <>
      {variant === "event" && (
        <Card raised="true" sx={{ borderRadius: 4, width: '350px' }}>
          <CardActionArea>
            <CardMedia component="img" height="250px" src={bbq} />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
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
                    <Typography variant="h6" sx={{fontSize: 15}}>The Time’s Grill and Bar</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    display="flex"
                    style={{
                      alignItems: "center",
                    }}>
                    <Diversity3Icon style={{ fontSize: 60 }} sx={{ mr: 6, color: "#F83E7D" }} />
                    <Typography variant="h6" sx={{fontSize: 15}}>| 15 Interested | 8 Going</Typography>
                  </Box>
                </Grid>
                <Grid item xs={8}></Grid>
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

      {variant === "housemate" && (
        <Card raised="true" sx={{ borderRadius: 5, width: "367px" }}>
          <CardMedia component="img" height="172px" image={livingSpace} />
          <Stack alignItems="right" alignContent="right" justifyContent="right">
            <Box display="flex" justifyContent="flex-end" mt={-20}>
              <IconButton type="button" sx={{ m: "10px", bgcolor: "white" }} aria-label="search">
                <ArrowForwardIcon sx={{ fontSize: 30 }} />
              </IconButton>
            </Box>
          </Stack>
          <CardActionArea>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }} align="center">
                    OliveTree12
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h6" align="center">
                    Tenant
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h6" align="center">
                    Nurse
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h6" align="center">
                    Toronto
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6" align="center">
                    25-30 Age Group
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Stack direction="row">
                    <Box display="flex" m="auto">
                      <GppGoodIcon sx={{ color: "#F83E7D", mr: 1 }} />
                      <Typography sx={{ color: "#A3A3A3" }}>Verified</Typography>
                    </Box>
                    <Box flexGrow="1"></Box>
                    <Checkbox
                      icon={<FavoriteBorderIcon style={{ fontSize: 40 }} sx={{ color: "gray" }} />}
                      checkedIcon={<FavoriteIcon style={{ fontSize: 40 }} sx={{ color: "#F83E7D" }} />}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      )}

      {variant === "listing" && (
        <Card raised="true" sx={{ borderRadius: 5, width: "367px" }}>
          <CardMedia component="img" height="277px" image={livingSpace} />
          <Stack alignItems="right" alignContent="right" justifyContent="right">
            <Box display="flex" justifyContent="flex-end" mt={-4}>
              <StyledButton variant="pinkBtn" text="$850/month" bgcolor="#0045F1" />
            </Box>
          </Stack>

          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Box display="flex" alignItems="center">
                  <LocationOnIcon sx={{ color: "#0045F1" }} />
                  <Typography variant="h6" sx={{ fontWeight: "bold", color: "#0045F1" }}>
                    TORONTO, ON
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Brand new house. Two rooms available for students.
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h6" align="center" sx={{ fontSize: 10 }}>
                  3 Bedroom
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h6" align="center" sx={{ fontSize: 10 }}>
                  3 Bathroom
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h6" align="center" sx={{ fontSize: 10 }}>
                  2 Rooms Available
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Stack direction="row">
                  <Box display="flex" m="auto">
                    <GppGoodIcon sx={{ color: "#0045F1", mr: 1 }} />
                    <Typography sx={{ color: "#A3A3A3" }}>Verified</Typography>
                  </Box>
                  <Box flexGrow="1"></Box>
                  <IconButton type="button" sx={{ m: "10px", bgcolor: "white" }} aria-label="search">
                    <ArrowForwardIcon sx={{ fontSize: 30 }} />
                  </IconButton>
                </Stack>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}

      {variant === "long" && (
        <Card raised="true" sx={{ borderRadius: 5, width: "60vw" }}>
          <Stack direction="row">
            <Stack p={4}>
              <Typography variant="h6" sx={{ color: themeColor, fontSize: 15 }}>
                Your Upcoming Events
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold" }} mb={2}>
                Monthly Community BBQ
              </Typography>
              <Typography variant="h6" sx={{ fontSize: 15 }} mb={10}>
                Sunday, September 3 @ 6:00pm
              </Typography>
              <StyledButton variant="signup" text="Events" bgcolor={themeColor}/>
            </Stack>
            <Box sx={{ flexGrow: 1 }} />
            <Box component="img" width="582px" height="312px" src={bbq} sx={{ mr: -20 }} />

            <Button sx={{ color: "white", background: "#32323299", width: "113px" }}>
              <ArrowForwardIosIcon />
            </Button>
          </Stack>
        </Card>
      )}
    </>
  );
}

export default ECard;
