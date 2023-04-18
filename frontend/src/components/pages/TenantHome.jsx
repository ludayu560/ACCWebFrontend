import { Box, Stack } from "@mui/system";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import StyledButton from "../components/StyledButton";
import HouseIcon from "@mui/icons-material/House";
import PeopleIcon from "@mui/icons-material/People";
import Footer from "../components/Footer";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MainLogo from "../../assets/Icons/MainLogo.svg";

function TenantHome(props) {
  return (
    <>
      <div style={{ overflowX: "hidden" }} className="acc-section">
        {/*First Title Section*/}
        <Box component="img" src={require("../../assets/image 2 (1).png")} />
        <div className="acc-container">
          <Stack sx={{ mt: -72 }} pb={10}>
            <Stack pl={15} spr={"50vw"} pt={10}>
              <Typography variant="h1" sx={{ fontWeight: "bold", color: "white" }}>
                Enjoy
              </Typography>
              <Typography variant="h1" sx={{ fontWeight: "bold", color: "white" }}>
                Safe
              </Typography>
              <Typography variant="h1" sx={{ fontWeight: "bold", color: "white" }}>
                Comfortable
              </Typography>
              <Typography variant="h1" sx={{ fontWeight: "bold", color: "white" }}>
                Living
              </Typography>
            </Stack>
          </Stack>

          {/*Let’s Match You! title*/}
          <Stack style={{ background: "white" }} spacing={3} alignItems="center" mt={10}>
            <Box component="img" src={MainLogo} width="10vw" />
            <Typography variant="h3" color="primary" sx={{ textAlign: "center", color: "#113170", fontWeight: "bold" }}>
              Let’s Match You!
            </Typography>
            <Typography variant="h6" align="center" px={20}>
              Our matching system is designed to allow you to search for a coliving experience based on your priorities.
              Find your perfect match by either browsing by place to find your next coliving space or browsing by people
              to get matched with your housemates.
            </Typography>
            <Grid container spacing={2} p={10} justifyContent="center">
              <Grid item xs="auto">
                <Card raised>
                  <Stack
                    sx={{ width: "582px" }}
                    p={5}
                    align="center"
                    spacing={4}
                    alignItems="center"
                    style={{ background: "#0045F10F" }}>
                    <Typography variant="h5" sx={{ color: "#0045F1", fontWeight: "bold" }}>
                      Are you looking to get matched by listings?
                    </Typography>
                    <HouseIcon style={{ fontSize: 200 }} sx={{ color: "#0045F1" }} />
                    <StyledButton variant="pinkBtn" text="Listings" bgcolor="#0045F1" link="/listings" />
                  </Stack>
                </Card>
              </Grid>

              <Grid item xs="auto">
                <Card raised>
                  <Stack
                    sx={{ width: "582px" }}
                    p={5}
                    align="center"
                    spacing={4}
                    alignItems="center"
                    style={{ background: "#F83E7D0F" }}>
                    <Typography variant="h5" sx={{ color: "#F83E7D", fontWeight: "bold" }}>
                      Are you looking to get matched by housemates?
                    </Typography>
                    <PeopleIcon style={{ fontSize: 200 }} sx={{ color: "#F83E7D" }} />
                    <StyledButton variant="pinkBtn" text="Housemates" link="housemates" />
                  </Stack>
                </Card>
              </Grid>
            </Grid>
          </Stack>

          {/*Pink Area*/}
          <Stack style={{ background: "white" }} p={8} pb={20} spacing={3} alignItems="center">
            <Typography variant="h3" sx={{ textAlign: "center", fontWeight: "bold", color: "#F83E7D" }}>
              For all Women Tenants,
            </Typography>
            <Typography variant="h3" sx={{ textAlign: "center", fontWeight: "bold", color: "#F83E7D" }}>
              Coliving is the New Way of Wellness Living
            </Typography>
            <Typography variant="h5" sx={{ textAlign: "center", px: 25, pt: 10 }}>
              Watch the short video below to learn about the benefits of coliving.
            </Typography>
            <Box sx={{ width: "985px", height: "555px" }} bgcolor="gray">
              {" "}
              video
            </Box>
          </Stack>

          {/*Why should you join title*/}
          <Stack
            style={{ background: "#C5265C" }}
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
                  <Typography variant="h4" sx={{ fontWeight: "bold", color: "#C5265C" }}>
                    Starting A New Semester
                  </Typography>
                  <Box component="img" src={require("../../assets/image 4.png")} bgcolor="gray" width="100%" />
                  <Typography sx={{ px: "2vw" }}>
                    At Aisha Comfortable Coliving, we understand the stress and difficulties of starting school. We are
                    here to help you find the best rental experience away from home. Join our community and embark on a
                    new journey of wellness living.
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} p={10} pb={0}>
                <Stack alignItems="center" spacing={4}>
                  <Typography variant="h4" sx={{ fontWeight: "bold", color: "#C5265C" }}>
                    Starting A New Job
                  </Typography>
                  <Box component="img" src={require("../../assets/image 5.png")} bgcolor="gray" width="100%" />
                  <Typography sx={{ px: "2vw" }}>
                    The growing demand for affordable housing makes it even more challenging to find a comfortable place
                    to live nowadays. Let Aisha Comfortable Coliving take care of finding a financially affordable,
                    enjoyable, and safe space for you.
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack alignItems="center" p={4}>
                  <StyledButton variant="pinkBtn" text="Search Rentals" link="listings"/>
                </Stack>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={6} p={10} pb={0}>
                <Stack alignItems="center" spacing={4}>
                  <Typography variant="h4" sx={{ fontWeight: "bold", color: "#C5265C" }}>
                    It Takes a Village
                  </Typography>
                  <Box component="img" src={require("../../assets/image 8.png")} bgcolor="gray" width="100%" />
                  <Typography sx={{ px: "2vw" }}>
                    We understand that as a mother you have a lot on your plate. Let us lend an extra hand and help
                    create a safe space for you and your child. Through coliving, you can receive extra support from
                    another woman while also exploring the community and generating friendships that will last a
                    lifetime.
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} p={10} pb={0}>
                <Stack alignItems="center" spacing={4}>
                  <Typography variant="h4" sx={{ fontWeight: "bold", color: "#C5265C" }}>
                    Fun Senior Years
                  </Typography>
                  <Box component="img" src={require("../../assets/image 9.png")} bgcolor="gray" width="100%" />
                  <Typography sx={{ px: "2vw" }}>
                    The fun doesn’t stop as you get older. Reduce expenses and enjoy having a new friend at home.
                    Coliving ensures a safe and secure space, with someone by your side that you can rely on. We work to
                    foster a strong community spirit through fun events organized for our community members.
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack alignItems="center" p={4}>
                  <StyledButton variant="pinkBtn" text="Search Rentals" link="listings"/>
                </Stack>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={6} p={10} pb={0}>
                <Stack alignItems="center" spacing={4}>
                  <Typography variant="h4" sx={{ fontWeight: "bold", color: "#C5265C" }}>
                    School Abroad
                  </Typography>
                  <Box component="img" src={require("../../assets/image 19.png")} bgcolor="gray" width="100%" />
                  <Typography sx={{ px: "2vw" }}>
                    We understand the challenge of moving to a new country to start school and trying to find safe and
                    affordable accommodation. At Aisha Comfortable Coliving, we will match you with secure rental homes
                    near your school. Through coliving, your transition into a new culture will be much easier. As a
                    parent, it can be worrisome to see your child not just leaving home, but leaving to study overseas.
                    Let us make the transition less overwhelming. Our community welcomes your child!
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} p={10} pb={0}>
                <Stack alignItems="center" spacing={4}>
                  <Typography variant="h4" sx={{ fontWeight: "bold", color: "#C5265C" }}>
                    Short Stays
                  </Typography>
                  <Box component="img" src={require("../../assets/image 20 (1).png")} bgcolor="gray" width="100%" />
                  <Typography sx={{ px: "2vw" }}>
                    Whether for a short-term vacation or temporary relocation, we have got you covered. With coliving,
                    you get the opportunity to explore different parts across Canada. Experience the country’s
                    subcultures through the comfort of staying with a like-minded woman. You get to experience local
                    communities first-hand and new places, while avoiding higher costs. Coliving with another woman can
                    ensure your safety while travelling, so you can enjoy your trip worry-free.
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack alignItems="center" p={4}>
                  <StyledButton variant="pinkBtn" text="Search Rentals" link="listings"/>
                </Stack>
              </Grid>
            </Grid>
          </Stack>

          {/*Services We Offer Our Tenants title*/}
          <Stack
            style={{ background: "#0045F1" }}
            sx={{ borderTopRightRadius: 200, borderTopLeftRadius: 200 }}
            p={10}
            pb={20}
            spacing={3}
            alignItems="center">
            <Typography variant="h3" color="primary" sx={{ textAlign: "center", color: "white", fontWeight: "bold" }}>
              Services We Offer Our Tenants
            </Typography>
          </Stack>

          {/*Blog Grid*/}
          <Grid container spacing={10} alignContent="center" justifyContent="center" mt={-25} pb={20}>
            <Grid item xs="auto">
              <Stack alignItems="center" spacing={4} sx={{ width: "377px" }}>
                <Box component="img" src={require("../../assets/image 11 (1).png")} bgcolor="gray" width="100%" />
                <Typography variant="h4" sx={{ fontWeight: "bold", color: "#113170" }}>
                  Matching Services
                </Typography>
                <Typography sx={{ px: "2vw" }}>
                  Our matching service brings together women of similar values and interests. We will arrange a virtual
                  meeting to connect potential housemates to see if it is a good fit. We will keep looking until you are
                  satisfied and comfortable.
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs="auto">
              <Stack alignItems="center" spacing={4} sx={{ width: "377px" }}>
                <Box component="img" src={require("../../assets/image 11 (1).png")} bgcolor="gray" width="100%" />
                <Typography variant="h4" sx={{ fontWeight: "bold", color: "#113170" }}>
                  Background Check
                </Typography>
                <Typography sx={{ px: "2vw" }}>
                  Your safety is our priority. That is why we perform thorough background checks on each woman who
                  shares a coliving space to ensure an environment where you can relax and enjoy each other’s company.
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs="auto">
              <Stack alignItems="center" spacing={4} sx={{ width: "377px" }}>
                <Box component="img" src={require("../../assets/image 11 (1).png")} bgcolor="gray" width="100%" />
                <Typography variant="h4" sx={{ fontWeight: "bold", color: "#113170" }}>
                  Mediation
                </Typography>
                <Typography sx={{ px: "2vw" }}>
                  In life, differences can happen. We are here to support you. If your situation is not easily resolved,
                  we will provide mediation to help support all parties involved, through our comprehensive mediation
                  plan.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </div>
        {/*Here’s What It’s Going to Cost You title*/}
        <Stack direction="row" style={{ background: "#42ACF980" }} py={10} pb={20} alignItems="center">
          <AttachMoneyIcon style={{ fontSize: 300 }} sx={{ color: "#0045F1", ml: 20 }} />
          <Stack spacing={3} ml={-30}>
            <Typography variant="h3" color="primary" sx={{ textAlign: "center", color: "white", fontWeight: "bold" }}>
              Here's What It's Going to Cost You
            </Typography>
            <Typography
              variant="h4"
              color="primary"
              sx={{ textAlign: "center", color: "white", fontWeight: "bold", px: "25vw" }}>
              All tenants will be charged a fee of one week of rent and 3% of the monthly rent.
            </Typography>
          </Stack>
        </Stack>
      </div>
      <Footer></Footer>
    </>
  );
}

export default TenantHome;
