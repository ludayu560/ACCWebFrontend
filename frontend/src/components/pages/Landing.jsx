import { Box, Stack } from "@mui/system";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
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
import "../pageStyles/styles.css";

function Landing({ isAuthenticated }) {
  return (
    <div style={{ overflowX: "hidden" }}>
      <div className="acc-section">
        <div className="acc-container">
          <Grid container py={10} px={15}>
            <Grid item xs={8}>
              <div className="header-txt-wrapper">
                <h1 className="headerBlue">
                  Want To <span className="h1 headerPink">Colive</span>
                </h1>
                <h1 className="headerBlue">With Other</h1>
                <h1 className="headerPink">
                  Women?
                </h1>
                <Divider style={{ marginBottom: '2rem' }} width="50%" />
                <div>
                  <Typography className="accTextcolor" variant="h5">
                    Aisha Comfortable Coliving is a platform that works to empower women by matching like-minded women to
                    colive in a safe and enjoyable space. We strive to build an inclusive, supportive, and fun community for
                    all women.
                  </Typography>
                </div>
                <div className="btn-wrapper">
                  <Stack direction="row" spacing={10} alignItems="center">
                    {isAuthenticated ? (
                      <>
                        <StyledButton variant="pinkBtn" text="Find Rental" bgcolor="#F83E7D" link="/listings" />
                        <StyledButton variant="pinkBtn" text="List Property" bgcolor="#0045F1" link="/RLF" />
                      </>
                    ) : (
                      <>
                        <StyledButton variant="pinkBtn" text="Find Rental" bgcolor="#F83E7D" link="/" />
                        <StyledButton variant="pinkBtn" text="List Property" bgcolor="#0045F1" link="/" />
                      </>
                    )}
                  </Stack>
                </div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="img-wrapper">
                <img alt="Lady on hompage" src={require("../../assets/HomePhoto2.png")} />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>


      {/*Blue Bar*/}
      <div className="acc-section blue-grad-bg">
        <div className="acc-container ">
          <Stack p={6} pb={20} spacing={3} alignItems="center">
            <Typography variant="h2" sx={{ textAlign: "center", color: "#0045F1", fontWeight: "bold" }}>
              Why Coliving?
            </Typography>
            <Typography className="accTextcolor" variant="h5" sx={{ textAlign: "center" }}>
              Coliving is the new way of wellness living
            </Typography>
            <Grid container spacing={6} justifyContent="center">
              <Grid item>
                <Card sx={{ width: "320px", borderRadius: 5, height: '420px' }} raised>
                  <Box bgcolor="#F83E7D" sx={{ width: "320px", height: "20px" }} />
                  <Stack p={5} align="center" spacing={4} alignItems="center">
                    <FavoriteBorderIcon style={{ fontSize: 100 }} sx={{ color: "#F83E7DCC" }} />
                    <Typography variant="h5" sx={{ color: "#F83E7DCC", fontWeight: "bold" }}>
                      Social Support
                    </Typography>
                    <Typography className="accTextcolor" variant="p" fontSize={'1rem'}>
                      Living in a safe and inclusive community enables you to enjoy a higher standard of living with
                      mental and emotional support.
                    </Typography>
                  </Stack>
                </Card>
              </Grid>
              <Grid item>
                <Card sx={{ width: "320px", borderRadius: 5, height: '420px' }} raised>
                  <Box bgcolor="#113170" sx={{ width: "320px", height: "20px" }} />
                  <Stack p={5} align="center" spacing={4} alignItems="center">
                    <PaidOutlinedIcon style={{ fontSize: 100 }} sx={{ color: "#113170" }} />
                    <Typography variant="h5" sx={{ color: "#113170", fontWeight: "bold" }}>
                      Money Saving
                    </Typography>
                    <Typography className="accTextcolor" variant="p" fontSize={'1rem'}>
                      Coliving enables you to have more economic security, time, and freedom to enjoy all the good things
                      that life has to offer.
                    </Typography>
                  </Stack>
                </Card>
              </Grid>
              <Grid item>
                <Card sx={{ width: "320px", borderRadius: 5, height: '420px' }} raised>
                  <Box bgcolor="#0045F1" sx={{ width: "320px", height: "20px" }} />
                  <Stack p={5} align="center" spacing={4} alignItems="center">
                    <ForestOutlinedIcon style={{ fontSize: 100 }} sx={{ color: "#0045F1" }} />
                    <Typography variant="h5" sx={{ color: "#0045F1", fontWeight: 'bold' }}>
                      Sustainable Living
                    </Typography>
                    <Typography className="accTextcolor" variant="p" fontSize={'1rem'}>
                      Sharing resources reduces consumption and carbon emissions. Coliving provides socially responsible
                      and sustainable development.
                    </Typography>
                  </Stack>
                </Card>
              </Grid>
              <Grid item>
                <Card sx={{ width: "320px", borderRadius: 5, height: '420px' }} raised>
                  <Box bgcolor="#0094FF" sx={{ width: "320px", height: "20px" }} />
                  <Stack p={5} align="center" spacing={4} alignItems="center">
                    <AccountCircleOutlinedIcon style={{ fontSize: 100 }} sx={{ color: "#0094FF" }} />
                    <Typography variant="h5" sx={{ color: "#0094FF", fontWeight: "bold" }}>
                      Network Building
                    </Typography>
                    <Typography className="accTextcolor" variant="p" fontSize={'1rem'}>
                      Community is at the heart of coliving. Coliving helps you make new friends, network, and establish
                      connections that help you grow.
                    </Typography>
                  </Stack>
                </Card>
              </Grid>
            </Grid>
            <Typography className="accTextcolor" variant="h5" align="center" py={10} px={35}>
              Watch this short video to hear Wendy and Innes talk about how they began coliving and how their lives have
              changed since.
            </Typography>
            <Box sx={{ width: "739px", height: "418px", bgcolor: "gray", borderRadius: 5, p: 4 }}>video</Box>
          </Stack>
        </div>
      </div>



      {/*Testimonials*/}
      <div className="acc-section">
        <div className="acc-container">
          <Stack sx={{ p: 15, pb: 30 }}>
            <Typography variant="h3" align="center" sx={{ color: "#F83E7D", fontWeight: "bold" }} p={2}>
              Testimonials
            </Typography>
            <Typography variant="h5" align="center">
              See what women have shared about their coliving experiences.
            </Typography>
            <Grid container pt={10}>
              <Grid item xs={6}>
                <Stack alignItems="center" spacing={2}>
                  <Typography variant="h4" sx={{ color: "#F83E7D", fontWeight: "bold" }}>
                    Kathleen & Laura
                  </Typography>
                  <Box component="img" src={KathleenLaura} sx={{ width: "35rem", height: "35rem" }} />
                  <Typography variant="h4" sx={{ color: "#F83E7D", fontWeight: "bold" }}>
                    Calgary, AB
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} mt={15}>
                <Box component="img" src={quote1} sx={{ width: "45rem" }} />
              </Grid>
              <Grid item xs={6} mt={15}>
                <Box component="img" src={quote2} sx={{ width: "45vw" }} />
                <Stack alignItems="center">
                  <StyledButton variant="pinkBtn" text="Learn More" bgcolor="#F83E7D" />
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Stack alignItems="center" spacing={2}>
                  <Typography variant="h4" sx={{ color: "#F83E7D", fontWeight: "bold" }}>
                    Kathryn
                  </Typography>
                  <Box component="img" src={Kathryn} sx={{ width: "417px", height: "517.55px" }} />
                  <Typography variant="h4" sx={{ color: "#F83E7D", fontWeight: "bold" }}>
                    Toronto, ON
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </div>
      </div>


      {/*Why Aisha Comfortable Coliving?*/}
      <Stack style={{ background: "linear-gradient(#D7F3FF, white)" }} sx={{ p: 15 }} alignItems="center">
        <Typography variant="h3" align="center" sx={{ color: "#0045F1", fontWeight: "bold" }} p={2}>
          Why Aisha Comfortable Coliving?
        </Typography>
        <Typography variant="h5" align="center">
          Our services & priorities.
        </Typography>
        <Grid container spacing={6} mt={5} pb={10} justifyContent="center">
          <Grid item>
            <Card sx={{ width: "294px", height: "501px", borderRadius: 5 }} raised>
              <Box bgcolor="#0045F1" sx={{ width: "294px", height: "20px" }} />
              <Stack p={5} align="center" spacing={4} alignItems="center">
                <HouseIcon style={{ fontSize: 100 }} sx={{ color: "#0045F1" }} />
                <Typography variant="h6" sx={{ color: "#0045F1", height: "60px", fontWeight: "bold" }}>
                  Personalized Housing Service
                </Typography>
                <Typography variant="p" fontSize={13}>
                  We are a digital platform that matches tenants and women homeowners, based on shared lifestyles and
                  needs. Our platform allows compatible women to connect in a comfortable, shared living space.
                  Property owners are also welcome to use our services to find women tenants.
                </Typography>
              </Stack>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ width: "294px", height: "501px", borderRadius: 5 }} raised>
              <Box bgcolor="#F83E7D" sx={{ width: "294px", height: "20px" }} />
              <Stack p={5} align="center" spacing={4} alignItems="center">
                <PeopleIcon style={{ fontSize: 100 }} sx={{ color: "#F83E7DCC" }} />
                <Typography variant="h6" sx={{ color: "#F83E7DCC", height: "60px", fontWeight: "bold" }}>
                  Community Driven
                </Typography>
                <Typography variant="p" fontSize={13}>
                  We host regular online community-building events designed around health, fitness, culture, and fun.
                  By joining our platform, you can enjoy positive bonding experiences with Aisha Community members. We
                  believe every woman should feel included and welcome.
                </Typography>
              </Stack>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ width: "294px", height: "501px", borderRadius: 5 }} raised>
              <Box bgcolor="#113170" sx={{ width: "294px", height: "20px" }} />
              <Stack p={5} align="center" spacing={4} alignItems="center">
                <GppGoodIcon style={{ fontSize: 100 }} sx={{ color: "#113170" }} />
                <Typography variant="h6" sx={{ color: "#113170", height: "60px", fontWeight: "bold" }}>
                  Your Safety is Our Top Priority
                </Typography>
                <Typography variant="p" fontSize={13}>
                  We perform thorough background checks on all housemates to ensure a safe living environment. We also
                  aim to increase community spirit and belongingness through events, activities, and meetups. While
                  doing so, we prioritize safety in the homes and community.
                </Typography>
              </Stack>
            </Card>
          </Grid>
        </Grid>
        <StyledButton variant="pinkBtn" text="Get Started" bgcolor="#0045F1" />
      </Stack>


      {/*How it Works*/}
      <Stack style={{ background: "white" }} alignItems="center" pb={5}>
        <Typography variant="h3" align="center" sx={{ color: "#0045F1", fontWeight: "bold" }} p={2}>
          How it Works
        </Typography>
        <Typography variant="h5" align="center">
          Just a few steps to get started.
        </Typography>
      </Stack>
      <Grid container justifyContent="center" spacing={15} pb={15}>
        <Grid item xs="auto">
          <Stack sx={{ width: "294px" }} p={5} align="center" spacing={4} alignItems="center">
            <Typography variant="h5" sx={{ color: "#0045F1", fontWeight: "bold" }}>
              1. Find a Property
            </Typography>
            <HouseIcon style={{ fontSize: 100 }} sx={{ color: "#0045F1" }} />
            <Typography variant="p">
              Browse through available listings to find a property that fits your lifestyle.
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs="auto">
          <Stack sx={{ width: "294px" }} p={5} align="center" spacing={4} alignItems="center">
            <Typography variant="h5" sx={{ color: "#F83E7DCC", fontWeight: "bold" }}>
              2. Meet Housemates
            </Typography>
            <PeopleIcon style={{ fontSize: 100 }} sx={{ color: "#F83E7DCC" }} />
            <Typography variant="p">Attend a Zoom meeting with all housemates to get to know one another.</Typography>
          </Stack>
        </Grid>
        <Grid item xs="auto">
          <Stack sx={{ width: "294px" }} p={5} align="center" spacing={4} alignItems="center">
            <Typography variant="h5" sx={{ color: "#113170", fontWeight: "bold" }}>
              3. Finalize the Details
            </Typography>
            <ClassOutlinedIcon style={{ fontSize: 100 }} sx={{ color: "#113170" }} />
            <Typography variant="p">Sign the lease agreement once all parties are satisfied.</Typography>
          </Stack>
        </Grid>
      </Grid>

      <Stack alignItems="center">
        <Typography variant="h5" align="center" sx={{ fontWeight: "bold" }} p={2} pb={6} px={10}>
          For a more in-depth explanation of how Aisha Comfortable Coliving works as a tenant, woman homeowner, or
          property owner:
        </Typography>
        <StyledButton variant="pinkBtn" text="Learn More" bgcolor="#F83E7D" />
      </Stack>


      {/*Partner with Us*/}
      <Stack>
        <Box component="img" src={Partner} mt={15} />
        <Typography variant="h2" align="center" sx={{ color: "white", fontWeight: "bold" }} mt={-25}>
          Partner with Us
        </Typography>
        <Typography variant="h5" align="center" sx={{ color: "white" }}>
          Become an Aisha partner to take advantage of our unique rental services.
        </Typography>
      </Stack>
      <Grid container mt={20} p={4} justifyContent="center">
        <Grid item xs={6}>
          <Stack spacing={3} px={10}>
            <Typography variant="h6">
              Are you a management company of a multi-unit property or commercial building? At Aisha Comfortable
              Coliving, we know how stressful the process of finding the right tenants for your space can be. Partner
              with us today to take full advantage of the services we offer our clients, to make the rental journey
              much smoother for everyone involved.
            </Typography>
            <Typography variant="h6" fontWeight="bold">
              If you would like to know more, have questions about our partnership process, or are ready to become a
              partner:
            </Typography>
            <Typography variant="h6" fontWeight="bold">
              Contact us at aisha@comfortablecoliving.com
            </Typography>
            <Box component="img" src={AishaSignaturePink} sx={{ width: "15vw" }} />
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Box component="img" src={Hands} maxWidth="45vw" />
        </Grid>
      </Grid>


      {/*Signature */}
      <Stack alignItems="center" p={6}>
        <Icon src={AishaSignaturePink} />
      </Stack>


      {/*Tenants Content*/}
      <Grid container pb={10} px={5} justifyContent="center">
        <Grid item xs={6}>
          <Box component="img" src={img20} sx={{ width: "40vw", m: 6 }} />
        </Grid>
        <Grid item xs={6}>
          <Stack sx={{ width: "50vw", p: 7, px: 10 }} spacing={4}>
            <Typography variant="h3" sx={{ color: "#F83E7D", fontWeight: "bold" }} mb={-4}>
              Tenants
            </Typography>
            <Typography variant="h5">Independence with companionship</Typography>
            <Typography variant="h6" sx={{}}>
              To all women looking for safe and affordable living, we have you covered! Share a modern coliving space
              with a compatible individual matched to you.
            </Typography>
            <Typography variant="h6" sx={{}}>
              Coliving provides the ideal wellness living opportunity to enjoy life in the company of like-minded
              women in addition to the benefits of a peer group that takes you places.
            </Typography>
            <Typography variant="h6" sx={{ align: "leftm" }}>
              Being independent does not mean being alone.
            </Typography>
            <Stack alignItems="center">
              <StyledButton variant="pinkBtn" text="Learn More" bgcolor="#F83E7D" />
            </Stack>
          </Stack>
        </Grid>


        <Grid item xs={6}>
          <Stack sx={{ width: "50vw", p: 7, px: 10 }} spacing={4}>
            <Typography variant="h3" sx={{ color: "#0045F1", fontWeight: "bold" }} mb={-4}>
              Woman Homeowner
            </Typography>
            <Typography variant="h5" sx={{}}>
              Are you a woman homeowner interested in coliving?
            </Typography>
            <Typography variant="h6" sx={{}}>
              Women have proven to be the best renters. They ensure reliable payments and take care of your residence
              as if you were living there.
            </Typography>
            <Typography variant="h6" sx={{ align: "leftm" }}>
              We are here to help your investment grow by providing carefully selected renters that you can count on
              to maintain your property.
            </Typography>
            <Stack alignItems="center">
              <StyledButton variant="pinkBtn" text="Learn More" bgcolor="#0045F1" />
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Box component="img" src={img12} sx={{ width: "40vw" }} />
        </Grid>

        <Grid item xs={6}>
          <Box component="img" src={img11} sx={{ width: "40vw", m: 6 }} />
        </Grid>
        <Grid item xs={6}>
          <Stack sx={{ width: "50vw", p: 7, px: 10 }} spacing={4}>
            <Typography variant="h3" sx={{ color: "#113170", fontWeight: "bold" }} mb={-4}>
              Property Owner
            </Typography>
            <Typography variant="h5" sx={{}}>
              Are you looking to rent an income property to women?
            </Typography>
            <Typography variant="h6" sx={{}}>
              Sharing your dream home with a like-minded woman can become your best investment into an affordable and
              enjoyable life.
            </Typography>
            <Typography variant="h6" sx={{ align: "leftm" }}>
              More women are investing in real estate and making ‘dream homes’ a reality. Coliving has encouraged this
              step forward
            </Typography>
            <Stack alignItems="center">
              <StyledButton variant="pinkBtn" text="Learn More" bgcolor="#113170" />
            </Stack>
          </Stack>
        </Grid>
      </Grid>

      {/*Community Events*/}
      <Stack
        alignItems="left"
        style={{ background: "linear-gradient(#D7F3FF, white)" }}
        sx={{ p: 10, borderTopRightRadius: 200, borderTopLeftRadius: 200 }}>
        <Typography variant="h2" align="center" sx={{ color: "#0045F1", fontWeight: "bold" }}>
          Community Events
        </Typography>
      </Stack>
      {/*Community Events Content*/}
      <Grid container pb={10} px={15} justifyContent="center" spacing={10}>
        <Grid item xs={6}>
          <Stack spacing={4} pt={5}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Welcome to our community.
            </Typography>
            <Typography variant="h6" sx={{}}>
              We provide engaging and fun events where friendship can grow and lifelong memories can be made.
            </Typography>
            <Typography variant="h6" sx={{}}>
              Being a member of the Aisha Community provides supportive and inclusive networking opportunities.
            </Typography>
            <Typography variant="h6" sx={{}}>
              At Aisha Comfortable Coliving, community, friendship, care, and support form part of our values. We
              organize activities and provide a space to foster friendships and enjoy life together.
            </Typography>
            <Stack alignItems="center">
              <StyledButton variant="pinkBtn" text="Learn More" bgcolor="#0094FF" />
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Box component="img" src={img13} sx={{ width: "40vw", pt: 5 }} />
        </Grid>
      </Grid>

      {/*Check Out Our Blog*/}
      <Grid container bgcolor="#FF87B0" sx={{ p: 10, pb: 30 }}>
        <Grid item xs={5.5}>
          <Typography variant="h4" sx={{ color: "#F83E7D", fontWeight: "bold" }}>
            Aisha Community Blog
          </Typography>
        </Grid>
        <Grid item xs={5.5}></Grid>
        <Grid item xs={1}>
          <Box component="img" src={LogoVariant2} />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h3" sx={{ color: "white" }}>
            See what’s happening in the Aisha Community
          </Typography>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={5}>
          <Stack mt={10}>
            <Typography variant="h6" sx={{ color: "white" }}>
              Sign up for the Aisha community weekly newsletter.
            </Typography>
            <TextField variant="filled" label="Email" style={{ backgroundColor: "white" }} required />
          </Stack>
        </Grid>
      </Grid>

      {/*Blog Grid*/}
      <Grid container spacing={10} alignContent="center" justifyContent="center" mt={-30} pb={20}>
        <Grid item xs="auto">
          <Card sx={{ width: "377px", height: "348px", borderRadius: 5 }} raised>
            <CardActionArea>
              <CardMedia component="img" image={require("../../assets/image 14.png")}></CardMedia>
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
          <Card sx={{ width: "377px", height: "348px", borderRadius: 5 }} raised>
            <CardActionArea>
              <CardMedia component="img" image={require("../../assets/image 15.png")}></CardMedia>
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
          <Card sx={{ width: "377px", height: "348px", borderRadius: 5 }} raised>
            <CardActionArea>
              <CardMedia component="img" image={require("../../assets/image 16.png")}></CardMedia>
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
          <Card sx={{ width: "377px", height: "348px", borderRadius: 5 }} raised>
            <CardActionArea>
              <CardMedia component="img" image={require("../../assets/image 17.png")}></CardMedia>
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
          <Card sx={{ width: "377px", height: "348px", borderRadius: 5 }} raised>
            <CardActionArea>
              <CardMedia component="img" image={require("../../assets/image 18.png")}></CardMedia>
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
          <Card sx={{ width: "377px", height: "348px", borderRadius: 5 }} raised>
            <CardActionArea>
              <CardMedia component="img" image={require("../../assets/image 19 (1).png")}></CardMedia>
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

      {/*Learn More*/}
      <Stack
        alignItems="left"
        style={{ background: "linear-gradient(#D7F3FF, white)" }}
        sx={{ p: 10, px: 40 }}
        spacing={10}>
        <Typography variant="h2" align="center" sx={{ color: "#0045F1", fontWeight: "bold" }}>
          Learn More About Aisha Comfortable Coliving
        </Typography>
        <Typography variant="h5" align="center">
          Discover how Aisha Comfortable Coliving can best serve you individually. Have all your questions answered
          and let us help you live your dream.
        </Typography>
      </Stack>
      <Stack alignItems="center" spacing={10} mb={20}>
        <Stack direction="row" spacing={20}>
          <VideocamOutlinedIcon style={{ fontSize: 200 }} sx={{ color: "#0094FF" }} />
          <PhoneInTalkIcon style={{ fontSize: 200 }} sx={{ color: "#0094FF" }} />
        </Stack>
        <Typography variant="h5" px={20} align="center" fontWeight="bold">
          Let's chat! Whether you're looking for your next tenant or searching for a new housemate, we're here to
          help!
        </Typography>
        <StyledButton variant="pinkBtn" text="Schedule a Call" bgcolor="#0094FF" />
      </Stack>
      <Footer></Footer>

    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
