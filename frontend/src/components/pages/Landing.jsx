import { Box, Stack } from "@mui/system";
import { Button, Card, Grid, Paper, Typography } from "@mui/material";
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

function Landing(props) {
  return (
    <>
      <NavBar></NavBar>
      <Stack>
        <Stack direction="row" m={10} spacing={1}>
          <Stack pr={20}>
            <Typography variant="h1" color="primary" sx={{ fontSize: 120 }}>
              Want To Colive
            </Typography>
            <Typography variant="h1" color="primary" sx={{ fontSize: 120 }}>
              With Other
            </Typography>
            <Typography variant="h1" color="#F83E7D" sx={{ fontSize: 120 }}>
              Women?
            </Typography>
            <Typography variant="h5" py={10} color="#113170">
              Aisha Comfortable Coliving is a platform that works to empower women by matching like-minded women to
              colive in a safe and enjoyable space. We strive to build an inclusive, supportive, and fun community for
              all women.
            </Typography>
            <Box display="flex" ml={15}>
              <StyledButton variant="signup" text="Find Rental" />
              <Box sx={{ flexGrow: 0.5 }} />
              <StyledButton variant="signup" text="List Property" />
            </Box>
          </Stack>
          <Box
            component="img"
            bgcolor="gray"
            sx={{
              width: 687,
              height: 753,
              textAlign: "center",
              borderRadius: 5,
            }}
            src={HomePhoto}></Box>
        </Stack>

        {/*Blue Bar*/}
        <Stack style={{ background: "linear-gradient(white, #D7F3FF)" }} p={6} pb={20} spacing={3} alignItems="center">
          <Typography variant="h3" color="primary" sx={{ textAlign: "center" }}>
            WHY COLIVING?
          </Typography>
          <Typography variant="h5" color="primary" sx={{ textAlign: "center", color: "#F83E7D" }}>
            Coliving is the new way of wellness living
          </Typography>
          <Stack direction="row" spacing={14} p={14} maxWidth={'100vw'} justifyContent="center">
            <Card sx={{ width: "294px" }} raised="true">
              <Box bgcolor="#F83E7D" sx={{ width: "294px", height: "20px" }} />
              <Stack p={5} align="center" spacing={4} alignItems="center">
                <FavoriteBorderIcon style={{ fontSize: 100 }} sx={{ color: "#F83E7DCC" }} />
                <Typography variant="h5" sx={{ color: "#F83E7DCC" }}>
                  Social Support
                </Typography>
                <Typography variant="p">
                  Living in a safe and inclusive community enables you to enjoy a higher standard of living with mental
                  and emotional support.
                </Typography>
              </Stack>
            </Card>

            <Card sx={{ width: "294px" }} raised="true">
              <Box bgcolor="#113170" sx={{ width: "294px", height: "20px" }} />
              <Stack p={5} align="center" spacing={4} alignItems="center">
                <PaidOutlinedIcon style={{ fontSize: 100 }} sx={{ color: "#113170" }} />
                <Typography variant="h5" sx={{ color: "#113170" }}>
                  Money Saving
                </Typography>
                <Typography variant="p">
                  Coliving enables you to have more economic security, time, and freedom to enjoy all the good things
                  that life has to offer.
                </Typography>
              </Stack>
            </Card>

            <Card sx={{ width: "294px" }} raised="true">
              <Box bgcolor="#0045F1" sx={{ width: "294px", height: "20px" }} />
              <Stack p={5} align="center" spacing={4} alignItems="center">
                <ForestOutlinedIcon style={{ fontSize: 100 }} sx={{ color: "#0045F1" }} />
                <Typography variant="h5" sx={{ color: "#0045F1" }}>
                  Sustainable Living
                </Typography>
                <Typography variant="p">
                  Sharing resources reduces consumption and carbon emissions. Coliving provides socially responsible and
                  sustainable development.
                </Typography>
              </Stack>
            </Card>

            <Card sx={{ width: "294px" }} raised="true">
              <Box bgcolor="#0094FF" sx={{ width: "294px", height: "20px" }} />
              <Stack p={5} align="center" spacing={4} alignItems="center">
                <AccountCircleOutlinedIcon style={{ fontSize: 100 }} sx={{ color: "#0094FF" }} />
                <Typography variant="h5" sx={{ color: "#0094FF" }}>
                  Network Building
                </Typography>
                <Typography variant="p">
                  Community is at the heart of coliving. Coliving helps you make new friends, network, and establish
                  connections that help you grow.
                </Typography>
              </Stack>
            </Card>
          </Stack>
          <Typography variant="h5" align="center" pb={10}>
            Watch this short video to hear Wendy and Innes talk about how they began coliving and how their lives have
            changed since.
          </Typography>
          <Box sx={{ width: "739px", height: "418px", bgcolor: "gray" }}>video</Box>
        </Stack>

        {/*Testimonials*/}
        <Stack style={{ background: "linear-gradient(#FFC7DA, white)" }} sx={{ p: 15, pb: 30 }}>
          <Typography variant="h3" align="right" sx={{ color: "#C5265C", fontWeight: "bold" }} p={2}>
            Testimonials
          </Typography>
          <Typography variant="h5" align="right" sx={{ color: "#C5265C" }}>
            See what women have shared about their coliving experiences.
          </Typography>
          <Grid container pt={5}>
            <Grid item xs={6}>
              <Stack alignItems="center" spacing={2}>
                <Typography variant="h4" sx={{ color: "#C5265C", fontWeight: "bold" }}>
                  Kathleen & Laura
                </Typography>
                <Box sx={{ width: "417px", height: "517.55px", bgcolor: "gray" }}>Photo</Box>
                <Typography variant="h4" sx={{ color: "#C5265C", fontWeight: "bold" }}>
                  Calgary, AB
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} mt={15}>
              <Paper elevation={3} sx={{ width: "658px", height: "370px" }}>
                Test
              </Paper>
            </Grid>
            <Grid item xs={4} mt={15}>
              <Paper elevation={3} sx={{ width: "658px", height: "370px" }}>
                Test
              </Paper>
            </Grid>
            <Grid item xs={8}>
              <Stack alignItems="center" spacing={2}>
                <Typography variant="h4" sx={{ color: "#C5265C", fontWeight: "bold" }}>
                  Kathleen & Laura
                </Typography>
                <Box sx={{ width: "417px", height: "517.55px", bgcolor: "gray" }}>Photo</Box>
                <Typography variant="h4" sx={{ color: "#C5265C", fontWeight: "bold" }}>
                  Calgary, AB
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Stack>

        {/*Why Aisha Comfortable Coliving?*/}
        <Stack style={{ background: "linear-gradient(#D7F3FF, white)" }} sx={{ p: 15 }} alignItems="center">
          <Typography variant="h3" align="center" sx={{ color: "#0045F1", fontWeight: "bold" }} p={2}>
            Why Aisha Comfortable Coliving?
          </Typography>
          <Typography variant="h5" align="center" sx={{ color: "#0094FF" }}>
            Our services & priorities.
          </Typography>
          <Stack direction="row" spacing={10} p={14} justifyContent="center">
            <Card sx={{ width: "294px" }} raised="true">
              <Box bgcolor="#0045F1" sx={{ width: "294px", height: "20px" }} />
              <Stack p={5} align="center" spacing={4} alignItems="center">
                <HouseIcon style={{ fontSize: 100 }} sx={{ color: "#0045F1" }} />
                <Typography variant="h5" sx={{ color: "#0045F1" }}>
                  Personalized Housing Service
                </Typography>
                <Typography variant="p">
                  We are a digital platform that matches tenants and women homeowners, based on shared lifestyles and
                  needs. Our platform allows compatible women to connect in a comfortable, shared living space. Property
                  owners are also welcome to use our services to find women tenants.
                </Typography>
              </Stack>
            </Card>

            <Card sx={{ width: "294px" }} raised="true">
              <Box bgcolor="#F83E7D" sx={{ width: "294px", height: "20px" }} />
              <Stack p={5} align="center" spacing={4} alignItems="center">
                <PeopleIcon style={{ fontSize: 100 }} sx={{ color: "#F83E7DCC" }} />
                <Typography variant="h5" sx={{ color: "#F83E7DCC" }}>
                  Community Driven
                </Typography>
                <Typography variant="p">
                  We host regular online community-building events designed around health, fitness, culture, and fun. By
                  joining our platform, you can enjoy positive bonding experiences with Aisha Community members. We
                  believe every woman should feel included and welcome.
                </Typography>
              </Stack>
            </Card>

            <Card sx={{ width: "294px" }} raised="true">
              <Box bgcolor="#113170" sx={{ width: "294px", height: "20px" }} />
              <Stack p={5} align="center" spacing={4} alignItems="center">
                <GppGoodIcon style={{ fontSize: 100 }} sx={{ color: "#113170" }} />
                <Typography variant="h5" sx={{ color: "#113170" }}>
                  Your Safety is Our Top Priority
                </Typography>
                <Typography variant="p">
                  We perform thorough background checks on all housemates to ensure a safe living environment. We also
                  aim to increase community spirit and belongingness through events, activities, and meetups. While
                  doing so, we prioritize safety in the homes and community.
                </Typography>
              </Stack>
            </Card>
          </Stack>
          <Typography variant="h3" align="center" sx={{ color: "#0045F1", fontWeight: "bold" }} p={2} pb={4}>
            Sign up Now!
          </Typography>
          <StyledButton variant="pinkBtn" text="Register" />
        </Stack>

        {/*How it Works*/}
        <Stack style={{ background: "white" }} sx={{ p: 15 }} alignItems="center">
          <Typography variant="h3" align="center" sx={{ color: "#0045F1", fontWeight: "bold" }} p={2}>
            How it Works
          </Typography>
          <Typography variant="h5" align="center" sx={{ color: "#0094FF" }}>
            Just a few steps to get started.
          </Typography>

          <Stack direction="row" spacing={20} p={14} justifyContent="center">
            <Stack sx={{ width: "294px" }} p={5} align="center" spacing={4} alignItems="center">
              <Typography variant="h5" sx={{ color: "#0045F1", fontWeight: "bold" }}>
                1. Find a Property
              </Typography>
              <HouseIcon style={{ fontSize: 100 }} sx={{ color: "#0045F1" }} />
              <Typography variant="p">
                Browse through available listings to find a property that fits your lifestyle.
              </Typography>
            </Stack>

            <Stack sx={{ width: "294px" }} p={5} align="center" spacing={4} alignItems="center">
              <Typography variant="h5" sx={{ color: "#F83E7DCC", fontWeight: "bold" }}>
                2. Meet Housemates
              </Typography>
              <PeopleIcon style={{ fontSize: 100 }} sx={{ color: "#F83E7DCC" }} />
              <Typography variant="p">Attend a Zoom meeting with all housemates to get to know one another.</Typography>
            </Stack>

            <Stack sx={{ width: "294px" }} p={5} align="center" spacing={4} alignItems="center">
              <Typography variant="h5" sx={{ color: "#113170", fontWeight: "bold" }}>
                3. Finalize the Details
              </Typography>
              <ClassOutlinedIcon style={{ fontSize: 100 }} sx={{ color: "#113170" }} />
              <Typography variant="p">Sign the lease agreement once all parties are satisfied.</Typography>
            </Stack>
          </Stack>
          <Typography variant="h4" align="center" sx={{ fontWeight: "bold" }} p={2} pb={6} px={10}>
            For a more in-depth explanation of how Aisha Comfortable Coliving works as a tenant, woman homeowner, or
            property owner:
          </Typography>
          <StyledButton variant="pinkBtn" text="Learn More" />
        </Stack>

        {/*Partner with Us*/}
        <Box bgcolor="#C5265C" sx={{ width: "99vw", p: 7 }}>
          <Typography variant="h2" sx={{ color: "white" }}>
            Partner with Us
          </Typography>
        </Box>
        <Stack alignItems="center" p={6}>
          <Typography variant="h4" sx={{ fontWeight: "bold", color: "#C5265C" }}>
            Become an Aisha partner to take advantage of our unique rental services.
          </Typography>
          <Stack direction="row" mt={10} p={4} spacing={8}>
            <Stack spacing={3} sx={{ width: "35vw" }}>
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
            </Stack>
            <Box bgcolor="gray" sx={{ width: "586px", height: "325px" }}>
              photo
            </Box>
          </Stack>
        </Stack>

        {/*Signature */}
        <Stack alignItems="center" p={6}>
          <Typography>Signature</Typography>
        </Stack>
        {/*Tenants*/}
        <Stack alignItems="left" bgcolor="#FF438366" sx={{ width: "99vw", p: 7, pr: 30, pt: 20 }}>
          <Typography variant="h2" align="right" sx={{ color: "#F83E7D", fontWeight: "bold" }}>
            Tenants
          </Typography>
        </Stack>
        {/*Tenants Content*/}
        <Grid container pb={10}>
          <Grid item xs={6}>
            <Box sx={{ width: "697px", height: "517px", m: 6 }} bgcolor="gray">
              Photo
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Stack sx={{ width: "40vw", p: 7, px: 10 }} spacing={4}>
              <Typography variant="h4" sx={{ color: "#C5265C", fontWeight: "bold" }}>
                Independence with companionship
              </Typography>
              <Typography variant="h5" sx={{}}>
                To all women looking for safe and affordable living, we have you covered! Share a modern coliving space
                with a compatible individual matched to you.
              </Typography>
              <Typography variant="h5" sx={{}}>
                Coliving provides the ideal wellness living opportunity to enjoy life in the company of like-minded
                women in addition to the benefits of a peer group that takes you places.
              </Typography>
              <Typography variant="h5" sx={{ align: "leftm" }}>
                Being independent does not mean being alone.
              </Typography>
              <StyledButton variant="pinkBtn" text="Learn More" />
            </Stack>
          </Grid>
        </Grid>

        {/*Property Owner + Woman Homeowner*/}
        <Grid container>
          <Grid item xs={6}>
            <Stack alignItems="left" bgcolor="#113170" sx={{ p: 7, pt: 20 }}>
              <Typography variant="h2" align="center" sx={{ color: "white", fontWeight: "bold" }}>
                Property Owner
              </Typography>
            </Stack>
            <Stack alignItems="center" p={3} pb={20}>
              <Typography variant="h3" sx={{ color: "#1E84CE", pb: 4 }} align="center">
                Are you looking to rent an income property to women?
              </Typography>
              <Box sx={{ width: "710px", height: "482px" }} bgcolor="gray">
                Photo
              </Box>
              <Typography variant="h6" pt={6} px={10}>
                Women have proven to be the best renters. They ensure reliable payments and take care of your residence
                as if you were living there.
              </Typography>
              <Typography variant="h6" py={6} px={10}>
                We are here to help your investment grow by providing carefully selected renters that you can count on
                to maintain your property.
              </Typography>
              <StyledButton variant="pinkBtn" text="Learn More" />
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack alignItems="left" bgcolor="#0045F1" sx={{ p: 7, pt: 20 }}>
              <Typography variant="h2" align="center" sx={{ color: "white", fontWeight: "bold" }}>
                Woman Homeowner
              </Typography>
            </Stack>
            <Stack alignItems="center" p={3} pb={20}>
              <Typography variant="h3" sx={{ color: "#1E84CE", pb: 4 }} align="center">
                Are you a woman homeowner interested in coliving?
              </Typography>
              <Box sx={{ width: "710px", height: "482px" }} bgcolor="gray">
                Photo
              </Box>
              <Typography variant="h6" pt={6} px={10}>
                Women have proven to be the best renters. They ensure reliable payments and take care of your residence
                as if you were living there.
              </Typography>
              <Typography variant="h6" py={6} px={10}>
                We are here to help your investment grow by providing carefully selected renters that you can count on
                to maintain your property.
              </Typography>
              <StyledButton variant="pinkBtn" text="Learn More" />
            </Stack>
          </Grid>
        </Grid>

        {/*Community Events*/}
        <Stack alignItems="left" bgcolor="#EAF5FD" sx={{ width: "100vw", p: 10 }}>
          <Typography variant="h2" align="center" sx={{ color: "#0045F1", fontWeight: "bold" }}>
            Community Events
          </Typography>
          <Typography variant="h3" align="center" sx={{ color: "#0094FF" }}>
            Welcome to our community.
          </Typography>
        </Stack>
        {/*Community Events Content*/}
        <Grid container pb={10}>
          <Grid item xs={6}>
            <Stack sx={{ width: "40vw", p: 7, pl: 20 }} spacing={4}>
              <Typography variant="h5" sx={{}}>
                We provide engaging and fun events where friendship can grow and lifelong memories can be made.
              </Typography>
              <Typography variant="h5" sx={{}}>
                Being a member of the Aisha Community provides supportive and inclusive networking opportunities.
              </Typography>
              <Typography variant="h5" sx={{ align: "left" }}>
                At Aisha Comfortable Coliving, community, friendship, care, and support form part of our values. We
                organize activities and provide a space to foster friendships and enjoy life together.
              </Typography>
              <StyledButton variant="pinkBtn" text="Learn More" />
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ width: "500px", height: "517px", m: 6 }} bgcolor="gray">
              Photo
            </Box>
          </Grid>
        </Grid>

        {/*Check Out Our Blog*/}
        <Stack alignItems="left" bgcolor="#FF87B0" sx={{ width: "100vw", p: 10, pb: 30 }} spacing={6}>
          <Typography variant="h4" sx={{ color: "#C5265C", fontWeight: "bold" }}>
            Check Out our Blog
          </Typography>
          <Typography variant="h4" sx={{ color: "white" }}>
            See what’s happening in the Aisha Community by checking our Blog
          </Typography>
        </Stack>

        {/*Blog Grid*/}
        <Grid container spacing={20} alignContent="center" justifyContent="center" mt={-40} pb={20}>
          <Grid item xs="auto">
            <Card sx={{ width: "377px", height: "500px" }} raised></Card>
          </Grid>
          <Grid item xs="auto">
            <Card sx={{ width: "377px", height: "500px" }} raised></Card>
          </Grid>
          <Grid item xs="auto">
            <Card sx={{ width: "377px", height: "500px" }} raised></Card>
          </Grid>
          <Grid item xs="auto">
            <Card sx={{ width: "377px", height: "500px" }} raised></Card>
          </Grid>
          <Grid item xs="auto">
            <Card sx={{ width: "377px", height: "500px" }} raised></Card>
          </Grid>
          <Grid item xs="auto">
            <Card sx={{ width: "377px", height: "500px" }} raised></Card>
          </Grid>
        </Grid>

        {/*Learn More*/}
        <Stack alignItems="left" bgcolor="#EAF5FD" sx={{ p: 10 }}>
          <Typography variant="h2" align="center" sx={{ color: "#0045F1", fontWeight: "bold" }}>
            Learn More Aisha Comfortable Coliving
          </Typography>
        </Stack>
        <Stack alignItems="center" p={10} spacing={10} mb={20}>
          <Typography variant="h5">
            Discover how Aisha Comfortable Coliving can best serve you individually. Have all your questions answered
            and let us help you live your dream.
          </Typography>
          <Stack direction="row" spacing={20}>
            <PhoneInTalkIcon style={{ fontSize: 300 }} sx={{ color: "#0094FF" }} />
            <VideocamOutlinedIcon style={{ fontSize: 300 }} sx={{ color: "#0094FF" }} />
          </Stack>
          <Typography variant="h5">
            Let's chat! Whether you're looking for your next tenant or searching for a new housemate, we're here to
            help!
          </Typography>
          <StyledButton variant="pinkBtn" text="Schedule a Call"></StyledButton>
        </Stack>
        <Footer></Footer>
      </Stack>
    </>
  );
}

export default Landing;
