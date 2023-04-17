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
  Divider,
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
import blogsDefault from "../../assets/image 69.png";

function capitalizeFirstLetter(str) {
  if (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

function ECard(props) {
  const {
    variant,
    blog,
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
    commentCount = 0,
    author,
    category="LIFESTYLE & WELLNESS"
  } = props;

  return (
    <>
      {variant === "blog" && blog && (
        <Card raised sx={{ borderRadius: 4, width: "350px" }}>
          <CardActionArea>
            <Box sx={{ width: "100%", height: "250px", overflow: "hidden" }}>
              <CardMedia
                component="img"
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                src={blog.background_image ? "http://127.0.0.1:8000/" + blog.background_image : blogsDefault}
              />
            </Box>
            <CardContent>
              {/*Category Tag */}
              <Box mt={-9} pb={5}>
                <StyledButton variant="tag" text={blog.category_type.toUpperCase().replace('_', ' ')}></StyledButton>
              </Box>
              {/*Rest of Card Content */}
              <Grid container spacing={3} px={2}>
                <Grid item xs={12}>
                  <Typography variant="h5" align="center" pb={2}>
                    {blog.title}
                  </Typography>
                  <Divider />
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="h6">{blog.created ? blog.created.substring(0, 10) : "Date: N/A"}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h6" align="right">
                    By {author ? author : "ACC"}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6">{blog.commentCount ? blog.commentCount : 0} comments</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      )}

      {variant === "event" && (
        <Card raised sx={{ borderRadius: 4, width: "350px" }}>
          <CardActionArea>
            <CardMedia component="img" height="250px" src={image ? "http://127.0.0.1:8000/" + image : bbq} />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {time ? time.substring(0, 10) : "Date: N/A"}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">{name ? name : "Name: N/A"}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    display="flex"
                    style={{
                      alignItems: "center",
                    }}>
                    <LocationOnIcon style={{ fontSize: 60 }} sx={{ mr: 6, color: "blue" }} />
                    <Typography variant="h6" sx={{ fontSize: 15 }}>
                      {location ? location : "Location: N/A"}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    display="flex"
                    style={{
                      alignItems: "center",
                    }}>
                    <Diversity3Icon style={{ fontSize: 60 }} sx={{ mr: 6, color: "#F83E7D" }} />
                    <Typography variant="h6" sx={{ fontSize: 15 }}>
                      | {interested ? interested : "N/A"} Interested | {going ? going : "N/A"} Going
                    </Typography>
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

      {variant === "eventSchedule" && (
        <Card raised sx={{ borderRadius: 4, width: "80vw", height: "15vw" }}>
          <CardActionArea>
            <Grid container>
              <Grid item xs={2} bgcolor="#F83E7D">
                <Stack alignItems="center" pt="2.2vw">
                  <Typography variant="h2" sx={{ fontWeight: "bold", color: "white", fontSize: "4vw" }}>
                    25
                  </Typography>
                  <Typography variant="h2" sx={{ fontWeight: "bold", color: "white", fontSize: "4vw" }}>
                    JAN
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={3}>
                <Box component="img" width="100%" src={bbq} />
              </Grid>
              <Grid item xs={4.5}>
                <Stack p="2vw">
                  <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: "1.7vw" }} mb="1vw">
                    Monthly Community BBQ
                  </Typography>
                  <Box
                    display="flex"
                    style={{
                      alignItems: "center",
                    }}>
                    <LocationOnIcon style={{ fontSize: "2.3vw" }} sx={{ mr: "1vw", color: "#F83E7D" }} />
                    <Stack>
                      <Typography variant="h6" sx={{ fontSize: "1vw" }}>
                        | {interested ? interested : "N/A"} Interested
                      </Typography>
                    </Stack>
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "1.3vw" }} mt="2vw">
                    Sunday, September 3 @ 6:00pm
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={2}>
                <Box
                  display="flex"
                  style={{
                    alignItems: "center",
                  }}
                  py="2vw">
                  <Diversity3Icon style={{ fontSize: "3vw" }} sx={{ mr: "1vw", color: "#F83E7D" }} />
                  <Stack>
                    <Typography variant="h6" sx={{ fontSize: "1vw" }}>
                      | {interested ? interested : "N/A"} Interested
                    </Typography>
                    <Typography variant="h6" sx={{ fontSize: "1vw" }}>
                      | {going ? going : "N/A"} Going
                    </Typography>
                  </Stack>
                </Box>
                <Checkbox
                  icon={<FavoriteBorderIcon style={{ fontSize: "4.5vw" }} sx={{ color: "gray" }} />}
                  checkedIcon={<FavoriteIcon style={{ fontSize: "4.5vw" }} sx={{ color: "#F83E7D" }} />}
                  sx={{ ml: "8vw" }}
                />
              </Grid>
            </Grid>
          </CardActionArea>
        </Card>
      )}

      {variant === "favourite" && (
        <Card raised sx={{ borderRadius: 5, width: 470 }}>
          <CardActionArea>
            <Grid container>
              <Grid item xs={8.5}></Grid>
              <Grid item xs={3.5}>
                <Button
                  color="inherit"
                  size="large"
                  sx={{
                    color: "white",
                    background: "#F9568D",
                    mt: 4,
                    borderRadius: 2,
                  }}>
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
        <Card raised sx={{ borderRadius: 5, width: "367px" }}>
          <CardMedia component="img" height="172px" image={image ? image : livingSpace} />
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
                    {name}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h6" align="center">
                    {capitalizeFirstLetter(role)}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h6" align="center">
                    {capitalizeFirstLetter(occupation)}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h6" align="center">
                    {capitalizeFirstLetter(location)}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6" align="center">
                    {"Age Group: " + age}
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

      {variant === "housemate2" && (
        <Card raised sx={{ borderRadius: 15, width: "367px", border: 4, borderColor: "#F83E7D" }}>
          <CardActionArea>
            <CardContent>
              <Grid container spacing={2} py={2}>
                <Grid item xs={12}>
                  <GppGoodIcon style={{ fontSize: 40 }} sx={{ color: "#F83E7D", mr: 1 }} />
                </Grid>
                <Grid item xs={12}>
                  <Stack alignItems="center" mt={-5}>
                    <Avatar sx={{ width: 175, height: 175 }}></Avatar>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }} align="center">
                    {name}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5" sx={{ color: "#F83E7D", mt: -2 }} align="center">
                    {name}
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography variant="h6" align="center">
                    {capitalizeFirstLetter(role)}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="h6" align="center">
                    |
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography variant="h6" align="center">
                    {capitalizeFirstLetter(occupation)}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Stack alignItems="center">
                    <StyledButton variant="pinkBtn" text="See Profile" />
                  </Stack>
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      )}

      {variant === "listing" && (
        <Card raised sx={{ borderRadius: 5, width: "367px" }}>
          <CardMedia component="img" height="277px" image={image ? image : livingSpace} />
          <Stack alignItems="right" alignContent="right" justifyContent="right">
            <Box display="flex" justifyContent="flex-end" mt={-4}>
              <StyledButton variant="pinkBtn" text={"$" + price} bgcolor="#0045F1" />
            </Box>
          </Stack>

          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Box display="flex" alignItems="center">
                  <LocationOnIcon sx={{ color: "#0045F1" }} />
                  <Typography variant="h6" sx={{ fontWeight: "bold", color: "#0045F1" }}>
                    {location}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {/* Brand new house. Two rooms available for students. */}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h6" align="center" sx={{ fontSize: 10 }}>
                  {bedrooms} Bedroom
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h6" align="center" sx={{ fontSize: 10 }}>
                  {bathrooms} Bathroom
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h6" align="center" sx={{ fontSize: 10 }}>
                  {roomsAvailable} Rooms Available
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
        <Card raised sx={{ borderRadius: 5, width: "60vw" }}>
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
              <StyledButton variant="signup" text="Events" bgcolor={themeColor} />
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
