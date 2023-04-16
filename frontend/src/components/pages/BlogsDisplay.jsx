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
import blogStyles from "../pageStyles/blogStyles.css";

function BlogsDisplay({ props, isAuthenticated }) {

  return (
    <div>
      <div className="acc-blog-section blog-hero ">
        <div className="blog-header-txt" >
          <a className="btn link-btn">Inspiring Women</a>
          <Typography variant="h2" fontWeight={"500"}>Stacy Abrams</Typography>
          <p>DECEMBER 13, 2022 - BY AISHA COMFORTABLE COLIVING - NO COMMENTS</p>
        </div>
      </div>

      <div className="acc-section">
        <div className="acc-blog-container">
          <div className="md-wrapper">
            <textarea style={{ width: "80ch", height: "auto" }}>
            </textarea>
          </div>
          <div className="enjoy-read">
            <h3>Enjoy Your Read?</h3>
            <h4>Check our some of our other blogs!</h4>
            <a className="btn link-btn">LET'S GO</a>
          </div>
          <div className="references">
            <Typography variant="p" fontWeight={"medium"}>References</Typography>
            <div className="md-wrapper">
              <textarea style={{ width: "80ch", height: "auto", paddingTop: "1rem" }}>
              </textarea>
            </div>
          </div>
          <div className="socials-wrapper">
            <Typography variant="p" fontWeight={"medium"}>Share this:</Typography>
            <div className="socials">
              <a className="btn tag-btn">Twitter</a>
              <a className="btn tag-btn">Facebook</a>
              <a className="btn tag-btn">Linkedin</a>
              <a className="btn tag-btn">Email</a>
            </div>
          </div>
          <div className="likes">
            <Typography variant="p" fontWeight={"medium"}>Like this:</Typography>
            <p>Be the first to like this.</p>
          </div>
          <div className="tags">
            <Typography variant="p" fontWeight={"medium"}> Tags:</Typography>
            <div className="tags-wrapper">
              <a className="btn tag-btn">COLIVING</a>
              <a className="btn tag-btn">WOMAN HOMEOWNER</a>
              <a className="btn tag-btn">SHORT STAYS</a>
              <a className="btn tag-btn">WOMAN EMPOWERMENT</a >
              <a className="btn tag-btn">SHORT-TERM ACCOMODATION</a>
              <a className="btn tag-btn">FINANCIALS</a>
              <a className="btn tag-btn">RURAL AREAS</a>
            </div>
          </div>
          <div className="prev-next-blog">
            <a> The Need for Women 50+</a>
            <a> The Need for Women 50+</a>
          </div>
          <div>
            <h3>Comments</h3>
            <div>
              <h3>Leave a Reply</h3>
              <textarea></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(BlogsDisplay);
