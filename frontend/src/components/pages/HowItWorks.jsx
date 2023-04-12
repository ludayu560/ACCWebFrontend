import { Box, Stack } from "@mui/system";
import { Button, Card, Divider, Grid, Paper, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HomePhoto from "../../assets/HomePhoto.png";
import NavBar from "../components/NavBar";
import StyledButton from "../components/StyledButton";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import homeownersbg from "../../assets/homeownerbg.png";
import Mainbar from "../components/MainBar";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import icon1 from "../../assets/Icons/Vector.svg";
import icon2 from "../../assets/Icons/Vector (1).svg";
import icon3 from "../../assets/Icons/akar-icons_pointer-hand.svg";
import icon4 from "../../assets/Icons/Group.svg";
import icon5 from "../../assets/Icons/grommet-icons_zoom.svg";
import icon6 from "../../assets/Icons/mdi_puzzle-check.svg";
import icon7 from "../../assets/Icons/akar-icons_thumbs-up.svg";
import icon8 from "../../assets/Icons/octicon_checklist-16.svg";
import icon9 from "../../assets/Icons/bi_house-door.svg";
import icon10 from "../../assets/Icons/material-symbols_check-circle-outline-rounded.svg";
import icon11 from "../../assets/Icons/ion_book-outline.svg";
import icon12 from "../../assets/Icons/icon-park-outline_thinking-problem.svg";
import icon13 from "../../assets/Icons/Vector (2).svg";
import icon14 from "../../assets/Icons/material-symbols_exit-to-app-rounded.svg";
import icon15 from "../../assets/Icons/iconoir_community.svg";
import MainLogo from "../../assets/Icons/MainLogo.svg";

function HowItWorks(props) {
  const data = [
    {
      count: 1,
      text: "Create an Account",
      info: "All users can navigate to the Sign-in page to register and set up their account.",
      color: "#F83E7D",
      icon: icon1,
    },
    {
      count: 2,
      text: "Submit Rental Listings",
      info: "Homeowners can list their property details with all necessary information and photos.",
      color: "#113170",
      icon: icon2,
    },
    {
      count: 3,
      text: "Browse & Select",
      info: "By Property: Tenants can search through available properties and choose a property that suits their needs and lifestyle.",
      color: "#0094FF",
      icon: icon3,
    },
    {
      count: 4,
      text: "Match Found",
      info: "Homeowners and tenants will be notified when a tenant or user is interested in their rental listing or profile.",
      color: "#0045F1",
      icon: icon4,
    },
    {
      count: 5,
      text: "Zoom Meeting",
      info: "A team member will arrange and attend a Zoom call where all parties can meet, ask questions, and get to know each other.",
      color: "#F83E7D",
      icon: icon5,
    },
    {
      count: 6,
      text: "Compatibility",
      info: "During the call, the team member will guide the conversation through a detailed set of questions that are designed to help all parties involved recognize if they are a great fit.",
      color: "#113170",
      icon: icon6,
    },
    {
      count: 7,
      text: "Follow-Up",
      info: "After the call, our team will reach out to all parties to get feedback about their thoughts on the match. If satisfied, we can move on to the next steps.",
      color: "#0094FF",
      icon: icon7,
    },
    {
      count: 8,
      text: "Fees, Background & Credit Check",
      info: "Housemates will undergo background/credit checks and matching fees will be collected.",
      color: "#0045F1",
      icon: icon8,
    },
    {
      count: 9,
      text: "Property Visits",
      info: "Once all checks are complete, the tenant will have the opportunity to visit the property.",
      color: "#F83E7D",
      icon: icon9,
    },
    {
      count: 10,
      text: "After the Visit...",
      info: "If satisfied: Tenants and homeowners will sign the lease agreement. If not satisfied: The match will be cancelled and the steps can be repeated until successful.",
      color: "#113170",
      icon: icon10,
    },
    {
      count: 11,
      text: "Moving In",
      info: "Upon moving in, tenants will receive our Housemate Handbook which outlines coliving etiquette. The handbook contains communication tips, a self-mediation plan for conflict resolution, and more.",
      color: "#0094FF",
      icon: icon11,
    },
    {
      count: 12,
      text: "Conflict",
      info: "If conflict arises, housemates can refer to the Household Mediation Plan for self-mediation.",
      color: "#0045F1",
      icon: icon12,
    },
    {
      count: 13,
      text: "Community",
      info: "We provide a variety of opportunities to build a sense of community for women. Regular online events are hosted that housemates can enjoy while connecting with other women in the community.",
      color: "#0094FF",
      icon: icon15,
    },
  ];

  return (
    <>
      {/* <Mainbar /> */}
      <Stack>
        {/*For Property Owners Div*/}
        <Stack alignItems="left" sx={{ p: 10 }}>
          <Typography variant="h1" sx={{ color: "#113170", fontWeight: "bold" }}>
            How it Works
          </Typography>
        </Stack>

        {/*Our unique coliving experience in detail.*/}
        <Stack style={{ background: "white" }} p={6} pb={10} spacing={3} alignItems="center">
          <Box component="img" src={MainLogo} width="10vw" />

          <Typography variant="h4" color="primary" sx={{ textAlign: "center", fontWeight: "bold", color: "#F83E7D" }}>
            Our unique coliving experience in detail.
          </Typography>
          <Divider sx={{ width: "40vw" }} />
        </Stack>

        {/*1 to 15 grid items*/}
        <Grid container px={15} pb={20} spacing={10} justifyContent="center">
          {data.map((data) => (
            <Grid item xs={6}>
              <Typography variant="h1" sx={{ fontWeight: "bold", color: data.color, fontSize: "6vw" }}>
                {data.count}.
              </Typography>
              <Stack alignItems="center" align="center" mt={-15} pb={15}>
                <Box component="img" src={data.icon} height="168px" maxWidth="15vw" />
                <Typography variant="h4" sx={{ fontWeight: "bold", color: data.color }}>
                  {data.text}
                </Typography>
                <Typography variant="h6">{data.info}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Footer></Footer>
      </Stack>
    </>
  );
}

export default HowItWorks;
