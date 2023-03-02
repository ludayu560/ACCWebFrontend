import { Box, Stack } from "@mui/system";
import { Button, Card, Divider, Grid, Paper, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
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
import SearchBar from "../components/SearchBar";
import homeownersbg from "../../assets/homeownerbg.png";
import Mainbar from "../components/MainBar";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";

function HowItWorks(props) {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <>
      <Stack>
        {/*For Property Owners Div*/}
        <Stack alignItems="left" sx={{ p: 10 }}>
          <Typography variant="h1" sx={{ color: "#113170", fontWeight: "bold" }}>
            How it Works
          </Typography>
        </Stack>

        {/*Our unique coliving experience in detail.*/}
        <Stack style={{ background: "white" }} p={6} pb={10} spacing={3} alignItems="center">
          <Box bgcolor="gray" width="370px" height="200px">
            Logo placeholder
          </Box>
          <Typography variant="h4" color="primary" sx={{ textAlign: "center", fontWeight: "bold", color: "#F83E7D" }}>
            Our unique coliving experience in detail.
          </Typography>
          <Divider sx={{ width: "40vw" }} />
        </Stack>

        {/*1 to 15 grid items*/}
        <Grid container px={15} pb={20} spacing={10}>
          {data.map((id) => (
            <Grid item xs={6}>
              <Typography variant="h1" sx={{ fontWeight: "bold", color: "#F83E7D" }}>
                {id}.
              </Typography>
              <Stack alignItems="center" align="center" mt={-15} pb={15}>
                <AccountCircleOutlinedIcon sx={{ fontSize: 200, color: "#F83E7D" }} />
                <Typography variant="h4" sx={{ fontWeight: "bold", color: "#F83E7D" }}>
                  Create an Account
                </Typography>
                <Typography variant="h6">
                  All users can navigate to the Sign-in page to register and set up their account.
                </Typography>
              </Stack>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Typography variant="h1" sx={{ fontWeight: "bold", color: "#F83E7D" }}>
              15.
            </Typography>
            <Stack alignItems="center" align="center" mt={-15} pb={15}>
              <AccountCircleOutlinedIcon sx={{ fontSize: 200, color: "#F83E7D" }} />
              <Typography variant="h4" sx={{ fontWeight: "bold", color: "#F83E7D" }}>
                Create an Account
              </Typography>
              <Typography variant="h6">
                All users can navigate to the Sign-in page to register and set up their account.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack alignItems="center" align="center" mt={-15} py={15}>
              <FlagOutlinedIcon sx={{ fontSize: 200, color: "#F83E7D" }} />
              <Typography variant="h2" sx={{ fontWeight: "bold", color: "#F83E7D" }}>
                FINISH!
              </Typography>
              <Typography variant="h6 " sx={{ color: "#F83E7D" }}>
                All users can navigate to the Sign-in page to register and set up their account.
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Footer></Footer>
      </Stack>
    </>
  );
}

export default HowItWorks;
