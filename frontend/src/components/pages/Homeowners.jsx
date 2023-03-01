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

function Homeowners(props) {
  return (
    <>
      <Mainbar />
      <Stack>
        {/*First Title Section*/}
        <Box component="img" src={homeownersbg}></Box>
        <Stack sx={{ mt: -90 }}>
          <Stack pl={15} spr={"50vw"} pt={10}>
            <Typography variant="h1" sx={{ fontWeight: "bold", color: "white", fontSize: 120 }}>
              Find Your
            </Typography>
            <Typography variant="h1" sx={{ fontWeight: "bold", color: "white", fontSize: 120 }}>
              Perfect
            </Typography>
            <Typography variant="h1" sx={{ fontWeight: "bold", color: "white", fontSize: 120 }}>
              Tenant
            </Typography>
          </Stack>
          <Box display="flex" justifyContent="center" p={15}>
            <Typography variant="h3" sx={{ color: "white" }}>
              Are you a Homeowner looking to rent your Income Property?
            </Typography>
          </Box>
        </Stack>

        {/*For Property Owners Div*/}
        <Stack alignItems="left" sx={{ p: 10 }}>
          <Typography variant="h2" sx={{ color: "#113170", fontWeight: "bold" }}>
            For Property Owners
          </Typography>
          <Divider sx={{ width: "40vw" }} />
        </Stack>
        <Grid container pb={10}>
          <Grid item xs={6}>
            <Stack sx={{ width: "40vw", p: 7, px: 10 }} spacing={4}>
              <Typography variant="h4" sx={{ color: "#113170", fontWeight: "bold" }}>
                Leave the hard work to us
              </Typography>
              <Typography variant="h5" sx={{}}>
                Let us help you grow your real estate equity by finding the right tenants for your home. Our team will
                take care of the entire renting process from finding the right tenants to rent collection. Equity
                building is made easy with Aisha Comfortable Coliving.
              </Typography>

              <StyledButton variant="pinkBtn" text="List Rental" bgcolor="#113170" />
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ width: "697px", height: "517px", m: 6 }} bgcolor="gray">
              Photo
            </Box>
          </Grid>
        </Grid>

        {/*Wealth Building Through Real Estate*/}
        <Stack style={{ background: "white" }} p={6} pb={10} spacing={3} alignItems="center">
          <Typography variant="h2" color="primary" sx={{ textAlign: "center", fontWeight: "bold", color: "#113170" }}>
            Wealth Building Through Real Estate
          </Typography>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Watch this short video to learn more about how Aisha Comfortable Coliving can best serve you and your rental
            home.
          </Typography>
          <Box sx={{ width: "739px", height: "418px", bgcolor: "gray" }}>video</Box>
        </Stack>

        {/*Matching You With Reliable Women Tenants*/}
        <Stack alignItems="left" bgcolor="#11317040" sx={{ p: 10 }}>
          <Typography variant="h2" align="center" sx={{ color: "#113170", fontWeight: "bold" }}>
            Matching You With Reliable Women Tenants
          </Typography>
        </Stack>
        {/*Matching You With Reliable Women Tenants Content */}
        <Grid container pb={10}>
          <Grid item xs={6}>
            <Stack sx={{ width: "40vw", p: 7, px: 10 }} spacing={4}>
              <Typography variant="h4" sx={{ color: "#113170", fontWeight: "bold" }}>
                Long-Term Rentals
              </Typography>
              <Typography variant="h5" sx={{}}>
                We select the right women to rent your home. Renting your house to tenants who take care of your
                property as you would do, is the top reason why property owners partner with Aisha Comfortable Coliving.
                Women have proven to be the best renters a property owner can have. They take great care of the space
                they live in. In addition, professional women are reliable rental payers.
              </Typography>
              <Typography variant="h5" sx={{}}>
                If you are currently renting out your property to a single renter, we can provide multiple tenants to
                generate a higher income for your rental property. We will take care of the whole renting process from
                the start to rent collection.
              </Typography>
              <StyledButton variant="pinkBtn" text="List Rental" bgcolor="#113170" />
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ width: "697px", height: "517px", m: 6 }} bgcolor="gray">
              Photo
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ width: "697px", height: "517px", m: 6 }} bgcolor="gray">
              Photo
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Stack sx={{ width: "40vw", p: 7, px: 10 }} spacing={4}>
              <Typography variant="h4" sx={{ color: "#113170", fontWeight: "bold" }}>
                Short-Term Rentals
              </Typography>
              <Typography variant="h5" sx={{}}>
                There is always the right renter for a stay in your town or city, even if you’re looking to rent it out
                for a short period. Let Aisha Comfortable Coliving find her for you. With protected financial
                transactions, rent stress-free to local or international women looking for a short-term or temporary
                stay.Even if you are in a smaller town or rural area where visitors are less common, there is still a
                rental opportunity for you. Help women from across the globe experience a new culture and community
                while making an income and fun memories.
              </Typography>
              <StyledButton variant="pinkBtn" text="List Rental" bgcolor="#113170" />
            </Stack>
          </Grid>
        </Grid>

        {/*For Women Homeowners Title*/}
        <Stack
          style={{ background: "#0045F1" }}
          sx={{ borderTopRightRadius: 200, borderTopLeftRadius: 200 }}
          p={10}
          spacing={3}></Stack>
        <Stack
          style={{ background: "white" }}
          sx={{ borderTopRightRadius: 150, borderTopLeftRadius: 150 }}
          p={10}
          spacing={3}
          mt={-18}>
          <Typography variant="h2" sx={{ color: "#0045F1", fontWeight: "bold" }}>
            For Women Homeowners
          </Typography>
          <Divider sx={{ width: "40vw" }} />
        </Stack>

        {/*Women Homeowner content*/}
        <Grid container pb={10}>
          <Grid item xs={6}>
            <Stack sx={{ width: "40vw", p: 7, px: 10 }} spacing={4}>
              <Typography variant="h4" sx={{ color: "#113170", fontWeight: "bold" }}>
                Leave the hard work to us
              </Typography>
              <Typography variant="h5" sx={{}}>
                Let us help you grow your real estate equity by finding the right tenants for your home. Our team will
                take care of the entire renting process from finding the right tenants to rent collection. Equity
                building is made easy with Aisha Comfortable Coliving.
              </Typography>

              <StyledButton variant="pinkBtn" text="List Rental" bgcolor="#0045F1" />
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ width: "697px", height: "517px", m: 6 }} bgcolor="gray">
              Photo
            </Box>
          </Grid>
        </Grid>

        {/*Homeownership Made Enjoyable and Easy Video*/}
        <Stack style={{ background: "white" }} p={6} pb={10} spacing={3} alignItems="center">
          <Typography variant="h2" color="primary" sx={{ textAlign: "center", fontWeight: "bold", color: "#0045F1" }}>
            Homeownership Made Enjoyable and Easy
          </Typography>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Watch this short video to learn how we can serve you as a woman homeowner.
          </Typography>
          <Box sx={{ width: "739px", height: "418px", bgcolor: "gray" }}>video</Box>
        </Stack>

        {/*Why should you join title*/}
        <Stack
          style={{ background: "#0045F1" }}
          sx={{ borderTopRightRadius: 200, borderTopLeftRadius: 200 }}
          p={10}
          spacing={3}
          alignItems="center">
          <Typography variant="h3" color="primary" sx={{ textAlign: "center", color: "white", fontWeight: "bold" }}>
            Why Should You Join?
          </Typography>
        </Stack>
        {/*Why should you join content*/}
        <Stack pb={20}>
          <Grid container>
            <Grid item xs={6} p={10} pb={0}>
              <Stack alignItems="center" spacing={4}>
                <Typography variant="h4" sx={{ fontWeight: "bold", color: "#0045F1" }}>
                  1. Starting A New Semester
                </Typography>
                <Box bgcolor="gray" sx={{ width: "532px", height: "370px" }}>
                  Leaving home for the first time? Worried about making new friends?
                </Box>
                <Typography sx={{ px: 15 }}>
                  At Aisha Comfortable Coliving, we understand the stress and difficulties of starting school. We are
                  here to help you find the best rental experience away from home. Join our community and embark on a
                  new journey of wellness living.
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} p={10} pb={0}>
              <Stack alignItems="center" spacing={4}>
                <Typography variant="h4" sx={{ fontWeight: "bold", color: "#0045F1" }}>
                  1. Starting A New Semester
                </Typography>
                <Box bgcolor="gray" sx={{ width: "532px", height: "370px" }}>
                  Leaving home for the first time? Worried about making new friends?
                </Box>
                <Typography sx={{ px: 15 }}>
                  At Aisha Comfortable Coliving, we understand the stress and difficulties of starting school. We are
                  here to help you find the best rental experience away from home. Join our community and embark on a
                  new journey of wellness living.
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack alignItems="center" p={4}>
                <StyledButton variant="pinkBtn" text="Search Rentals" bgcolor="#0045F1" />
              </Stack>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={6} p={10} pb={0}>
              <Stack alignItems="center" spacing={4}>
                <Typography variant="h4" sx={{ fontWeight: "bold", color: "#0045F1" }}>
                  1. Starting A New Semester
                </Typography>
                <Box bgcolor="gray" sx={{ width: "532px", height: "370px" }}>
                  Leaving home for the first time? Worried about making new friends?
                </Box>
                <Typography sx={{ px: 15 }}>
                  At Aisha Comfortable Coliving, we understand the stress and difficulties of starting school. We are
                  here to help you find the best rental experience away from home. Join our community and embark on a
                  new journey of wellness living.
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} p={10} pb={0}>
              <Stack alignItems="center" spacing={4}>
                <Typography variant="h4" sx={{ fontWeight: "bold", color: "#0045F1" }}>
                  1. Starting A New Semester
                </Typography>
                <Box bgcolor="gray" sx={{ width: "532px", height: "370px" }}>
                  Leaving home for the first time? Worried about making new friends?
                </Box>
                <Typography sx={{ px: 15 }}>
                  At Aisha Comfortable Coliving, we understand the stress and difficulties of starting school. We are
                  here to help you find the best rental experience away from home. Join our community and embark on a
                  new journey of wellness living.
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack alignItems="center" p={4}>
                <StyledButton variant="pinkBtn" text="Search Rentals" bgcolor="#0045F1" />
              </Stack>
            </Grid>
          </Grid>
        </Stack>

        {/*Are you a Homeowner looking for a Coliving Tenant? Title*/}
        <Stack alignItems="left" bgcolor="#0045F1" sx={{ p: 10 }}>
          <Typography variant="h3" align="center" sx={{ color: "white", fontWeight: "bold" }}>
            Are you a Homeowner looking for a Coliving Tenant?
          </Typography>
        </Stack>
        {/*Are you a Homeowner looking for a Coliving Tenant? Content*/}
        <Stack alignItems="center" spacing={4} py={15} px={30}>
          <Box bgcolor="gray" sx={{ width: "950px", height: "598px" }}>
            Leaving home for the first time? Worried about making new friends?
          </Box>
          <Typography sx={{ px: 15 }}>
            Sharing your home for shorter terms offer flexibility that suits your needs and lifestyle, while still
            giving you the opportunity to reach financial independence. In addition to the extra income, you will make
            new friends and connections.
          </Typography>
          <Typography sx={{ px: 15 }}>
            Coliving can be a suitable option for those wanting to experience new destinations while avoiding higher
            costs. This also makes your place an attractive option to both local and international women visitors. It
            will be a secure environment for both yourself and the woman traveller as our platform will match you with
            the right renter.
          </Typography>
          <Typography sx={{ px: 15 }}>
            Short-term rental is a great fit for smaller towns and rural areas where people come to experience culture
            and local community first-hand, especially in places where reliable short-term accommodations are harder to
            find.
          </Typography>
          <StyledButton variant="pinkBtn" text="List A Rental" bgcolor="#0045F1" />
        </Stack>

        {/*Are you a Homeowner looking for a Coliving Tenant? Title2*/}
        <Stack alignItems="left" bgcolor="#0045F140" sx={{ p: 10 }}>
          <Typography variant="h3" align="center" sx={{ color: "#0045F1", fontWeight: "bold" }}>
            Are you a Homeowner looking for a Coliving Tenant?
          </Typography>
        </Stack>
        {/*Are you a Homeowner looking for a Coliving Tenant? Content2*/}
        <Grid container p={15}>
          <Grid item xs={12}>
            <Typography variant="h3" align="center" sx={{ color: "#0045F1", fontWeight: "bold" }}>
              Make rental management a breeze
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Stack alignItems="center" spacing={4} py={15} px={30}>
              <Box bgcolor="gray" sx={{ width: "466px", height: "310px" }}>
                Leaving home for the first time? Worried about making new friends?
              </Box>
              <Typography variant="h5" sx={{ color: "#0045F1", fontWeight: "bold" }}>
                Selecting Tenants
              </Typography>
              <Typography>
                Save yourself the hassle of advertising and showing your home countless times until it’s rented. At
                Aisha Comfortable Coliving, we organize virtual meetings between housemates to ensure we select the most
                compatible tentants. Our matching process will help create and maintain a peaceful living environment.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack alignItems="center" spacing={4} py={15} px={30}>
              <Box bgcolor="gray" sx={{ width: "466px", height: "310px" }}>
                Leaving home for the first time? Worried about making new friends?
              </Box>
              <Typography variant="h5" sx={{ color: "#0045F1", fontWeight: "bold" }}>
                Background Check
              </Typography>
              <Typography>
                Security for women is our number one priority. That’s why at Aisha Comfortable Coliving, we perform
                quality and detailed background checks to ensure that only reliable women tenants can rent your
                property. You will have peace of mind in renting your home to women you can trust.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack alignItems="center" spacing={4} py={15} px={30}>
              <Box bgcolor="gray" sx={{ width: "466px", height: "310px" }}>
                Leaving home for the first time? Worried about making new friends?
              </Box>
              <Typography variant="h5" sx={{ color: "#0045F1", fontWeight: "bold" }}>
                Credit Check
              </Typography>
              <Typography>
                We provide credit checks to verify that the tenants are financially reliable. By doing so, you can
                receive peace of mind knowing that your investment is secure and well taken care of.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack alignItems="center" spacing={4} py={15} px={30}>
              <Box bgcolor="gray" sx={{ width: "466px", height: "310px" }}>
                Leaving home for the first time? Worried about making new friends?
              </Box>
              <Typography variant="h5" sx={{ color: "#0045F1", fontWeight: "bold" }}>
                Mediation
              </Typography>
              <Typography>
                Even with the best intentions, at times, differences can happen. When a disagreement is not easily
                solved, we provide mediation services where we work together to find the best arrangement for both
                parties.
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        {/*Here’s What It’s Going to Cost You title*/}
        <Stack direction="row" style={{ background: "#42ACF980" }} py={10} pb={15} alignItems="center">
          <AttachMoneyIcon style={{ fontSize: 300 }} sx={{ color: "#0045F1", ml: 20 }} />
          <Stack spacing={3} ml={-40} alignItems="center">
            <Typography variant="h3" color="primary" sx={{ textAlign: "center", color: "white", fontWeight: "bold" }}>
              Here's What It's Going to Cost You
            </Typography>
            <Typography
              variant="h4"
              color="primary"
              sx={{ textAlign: "center", color: "white", fontWeight: "bold", px: "25vw" }}>
              To learn about our coliving service packages and prices, visit our packages page.
            </Typography>
            <StyledButton variant="pinkBtn" text="Service Packages" bgcolor="#0045F1" />
          </Stack>
        </Stack>

        {/*Rent Guarantee Program Title*/}
        <Stack alignItems="left" sx={{ p: 10 }}>
          <Typography variant="h3" align="center" sx={{ color: "#0045F1", fontWeight: "bold" }}>
            Rent Guarantee Program
          </Typography>
        </Stack>
        {/*Rent Guarantee Program Content*/}
        <Grid container pb={10}>
          <Grid item xs={6}>
            <Stack sx={{ width: "40vw", p: 7, px: 10 }} spacing={4}>
              <Typography variant="h5" sx={{}}>
                We offer a Rent Guarantee Program underwritten by one of North America’s best Rent Guarantee Insurance
                Companies. This protects you if a tenant cannot make a payment on time in the event of unforeseen
                circumstances, ensuring you peace of mind. Lean on us to assist you with risk-free renting! The Rent
                Guarantee Program includes the following: Guaranteed rental income for up to 12 months & $60,000 Lease
                break protection for up to 60 days until you find a new tenant Property damage protection up to $10,000
                $1,500 coverage of legal eviction fees incurred Paralegal team hired to handle eviction process if
                necessary Automatic rent collection via pre-authorized debit
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ width: "697px", height: "517px", m: 6 }} bgcolor="gray">
              Photo
            </Box>
          </Grid>
        </Grid>
        <Stack alignItems="center" sx={{ pb: 30, px: 40 }}>
          <Typography variant="h5" align="center">
            If you are interested in the Rent Guarantee program or would like to know more details, please contact us
            and we will be happy to speak with you.
          </Typography>
        </Stack>
        <Footer></Footer>
      </Stack>
    </>
  );
}

export default Homeowners;
