import { Box, Stack } from "@mui/system";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Icon,
  IconButton,
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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router";

function BlogsCategory() {
  const navigate = useNavigate();
  
  const data = ["1", "2", "3", "4", "5", "6"];

  const handleOnClick = (id) => {
    navigate("/blogs");
  };
  return (
    <div style={{ overflowX: "hidden" }}>
      {/*Our Latest Blogs */}
      <Box pt={10} px={10} spacing={3} display="flex" alignItems="center">
        <IconButton onClick={handleOnClick}>
          <ArrowBackIcon style={{ fontSize: 60 }} sx={{ m: 5 }} />
        </IconButton>

        <Typography variant="h3" sx={{ color: "#F83E7D", fontWeight: "bold" }}>
          placeholder
        </Typography>
      </Box>

      {/*Blogs Grid */}
      <Grid container spacing={10} alignContent="center" justifyContent="center" pt={10} px={10} pb={20}>
        {data.map((id) => (
          <Grid item xs="auto">
            <ECard variant="blog" />
          </Grid>
        ))}
      </Grid>
      <Footer></Footer>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(BlogsCategory);
