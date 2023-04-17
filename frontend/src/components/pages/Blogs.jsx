import { Box, Stack } from "@mui/system";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Icon,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import HomePhoto from "../../assets/HomePhoto.png";
import NavBar from "../components/NavBar";
import StyledButton from "../components/StyledButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import ForestOutlinedIcon from "@mui/icons-material/ForestOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HouseIcon from "@mui/icons-material/House";
import PeopleIcon from "@mui/icons-material/People";
import GppGoodIcon from "@mui/icons-material/GppGood";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import Footer from "../components/Footer";
import Mainbar from "../components/MainBar";
import KathleenLaura from "../../assets/KathleenLaura.png";
import Kathryn from "../../assets/Kathryn.png";
import Partner from "../../assets/Partner.png";
import AishaSignaturePink from "../../assets/AishaSignaturePink.svg";
import Hands from "../../assets/Hands.png";
import quote1 from "../../assets/Quote 1.svg";
import quote2 from "../../assets/quote2.png";
import img20 from "../../assets/image 20.png";
import img13 from "../../assets/image 13.png";
import img12 from "../../assets/image 12.png";
import img11 from "../../assets/image 11.png";
import LogoVariant2 from "../../assets/LogoVariant2.svg";
import { connect } from "react-redux";
import SearchBar from "../components/SearchBar";
import ECard from "../components/ECard";
import React, { useState, useEffect } from "react";

function Blogs({ props, isAuthenticated }) {
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [usernames, setUsernames] = useState({});

  useEffect(() => {
    const fetchRecentBlogs = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/Blogs/recent/");
        const data = await response.json();
        setRecentBlogs(data);
      } catch (error) {
        console.error("Error fetching recent blogs:", error);
      }
    };

    fetchRecentBlogs();
  }, []);

  const fetchUsernameById = async (authorId) => {
    const response = await fetch(
      `http://127.0.0.1:8000/ListingAccount/${authorId}/`
    );
    const userData = await response.json();
    return userData.username;
  };

  useEffect(() => {
    const fetchAndSetUsernames = async () => {
      const uniqueAuthorIds = Array.from(
        new Set(recentBlogs.map((blog) => blog.author))
      );
      const fetchedUsernames = await Promise.all(
        uniqueAuthorIds.map(fetchUsernameById)
      );
      const authorIdToUsername = uniqueAuthorIds.reduce((acc, id, index) => {
        acc[id] = fetchedUsernames[index];
        return acc;
      }, {});

      setUsernames(authorIdToUsername);
    };

    fetchAndSetUsernames();
  }, [recentBlogs]);

  return (
    <div style={{ overflowX: "hidden" }}>
      <Stack>
        {/*Check Out Our Blog*/}
        <Box component="img" src={require("../../assets/image 58.png")} />
        <Grid container sx={{ p: 10, pb: 30, mt: -80 }}>
          <Grid item xs={5.5} pb={5}>
            <Typography
              variant="h3"
              sx={{ color: "#C5265C", fontWeight: "bold" }}
            >
              Blog Corner
            </Typography>
          </Grid>
          <Grid item xs={5.5}></Grid>
          <Grid item xs={1}>
            <Box component="img" src={LogoVariant2} width="140px" pr={6} />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h3" sx={{ color: "white" }} pb={5}>
              See what’s happening in the Aisha Community by checking our Blog
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#C5265C", fontWeight: "bold" }}
            >
              Click the box below to see a category of blog.
            </Typography>
          </Grid>
          <Grid item xs={9} />
          <Grid item xs={3} mt={-5}>
            <StyledButton
              variant="pinkBtn"
              text="Create new blog"
              bgcolor="#0045F1"
              href="/blogscreate"
            />
          </Grid>
        </Grid>
        {/*Blog Grid*/}
        <Grid
          container
          spacing={10}
          alignContent="center"
          justifyContent="center"
          mt={-30}
          pb={20}
        >
          <Grid item xs="auto">
            <Card
              sx={{ width: "377px", height: "348px", borderRadius: 5 }}
              raised
            >
              <CardActionArea href="/blogsCategory">
                <CardMedia
                  component="img"
                  image={require("../../assets/image 14.png")}
                ></CardMedia>
                <CardContent>
                  <Stack alignItems="center">
                    <Typography variant="h4" mt={-10} sx={{ color: "white" }}>
                      Lifestyle & Wellness
                    </Typography>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs="auto">
            <Card
              sx={{ width: "377px", height: "348px", borderRadius: 5 }}
              raised
            >
              <CardActionArea href="/blogsCategory">
                <CardMedia
                  component="img"
                  image={require("../../assets/image 15.png")}
                ></CardMedia>
                <CardContent>
                  <Stack alignItems="center">
                    <Typography variant="h4" mt={-12} sx={{ color: "white" }}>
                      Inspiring Women
                    </Typography>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs="auto">
            <Card
              sx={{ width: "377px", height: "348px", borderRadius: 5 }}
              raised
            >
              <CardActionArea href="/blogsCategory">
                <CardMedia
                  component="img"
                  image={require("../../assets/image 16.png")}
                ></CardMedia>
                <CardContent>
                  <Stack alignItems="center">
                    <Typography variant="h4" mt={-10} sx={{ color: "white" }}>
                      Real Estate
                    </Typography>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs="auto">
            <Card
              sx={{ width: "377px", height: "348px", borderRadius: 5 }}
              raised
            >
              <CardActionArea href="/blogsCategory">
                <CardMedia
                  component="img"
                  image={require("../../assets/image 17.png")}
                ></CardMedia>
                <CardContent>
                  <Stack alignItems="center">
                    <Typography variant="h4" mt={-10} sx={{ color: "white" }}>
                      Food
                    </Typography>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs="auto">
            <Card
              sx={{ width: "377px", height: "348px", borderRadius: 5 }}
              raised
            >
              <CardActionArea href="/blogsCategory">
                <CardMedia
                  component="img"
                  image={require("../../assets/image 18.png")}
                ></CardMedia>
                <CardContent>
                  <Stack alignItems="center">
                    <Typography variant="h4" mt={-10} sx={{ color: "white" }}>
                      Entertainment
                    </Typography>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs="auto">
            <Card
              sx={{ width: "377px", height: "348px", borderRadius: 5 }}
              raised
            >
              <CardActionArea href="/blogsCategory">
                <CardMedia
                  component="img"
                  image={require("../../assets/image 19 (1).png")}
                ></CardMedia>
                <CardContent>
                  <Stack alignItems="center">
                    <Typography variant="h4" mt={-10} sx={{ color: "white" }}>
                      Coliving
                    </Typography>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>

        {/*Our Latest Blogs */}
        <Stack
          style={{ background: "#F293B4B0" }}
          p={10}
          spacing={3}
          alignItems="center"
        >
          <Typography
            variant="h3"
            sx={{ textAlign: "center", color: "#F83E7D", fontWeight: "bold" }}
          >
            Our Latest Blogs
          </Typography>
        </Stack>
        <Grid
          container
          spacing={10}
          alignContent="center"
          justifyContent="center"
          pt={10}
          px={10}
          pb={20}
        >
          {recentBlogs.map((blog) => (
            <Grid item xs="auto" key={blog.id}>
              <ECard
                variant="blog"
                author={usernames[blog.author]}
                blog={blog}
              />
            </Grid>
          ))}

        
        </Grid>
        <Footer></Footer>
      </Stack>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Blogs);
