import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Footer from "../components/Footer";
import MainLogo from "../../assets/Icons/IconHouseLogoWhite.svg";

import "../pageStyles/aboutStyles.css";


function About(props) {
  return (
    <>
      <div className="acc-section hero">
        <div className="hero-content">
          <Box component="img" src={MainLogo} width="10vw" />
          <Typography variant="h1" align="center" sx={{ fontWeight: "bold", color: "white" }}>
            Together is Better
          </Typography>
          <Typography variant="h4" align="center" sx={{ color: "white" }}>
            “Life is beautiful because of the people we meet”
          </Typography>
          <Typography variant="h6" align="center" sx={{ fontWeight: "bold", color: "white" }}>
            Simon Sinek
          </Typography>
        </div>
      </div>

      {/*Our Story*/}
      <div className="acc-section">
        <div className="acc-container">
          <Stack
            style={{ background: "#0045F1" }}
            sx={{ borderTopRightRadius: 200, borderTopLeftRadius: 200 }}
            p={10}
            spacing={3}
            alignItems="center">
            <Typography variant="h3" color="primary" sx={{ textAlign: "center", color: "white", fontWeight: "bold" }}>
              Our Story
            </Typography>
          </Stack>
          {/* An Impactful Way to Live*/}
          <Stack alignItems="center" px={20} spacing={5} py={10}>
            <Typography variant="h3" sx={{ color: "#0045F1", fontWeight: "bold" }}>
              An Impactful Way to Live
            </Typography>
            <Typography variant="h6">
              Our founder and CEO, Aisha ElSherbiny first encountered coliving as she rented a room in a house owned by a
              recent divorcee with a 3-year-old daughter. Through this coliving experience, Aisha found the two of them to
              be wonderful companions. A special bond formed between them, which made coliving both financially beneficial
              and left the housemates with fond memories.
            </Typography>
            <Typography variant="h6">
              This journey led Aisha to build a digital platform that provides women with all the benefits of shared
              accommodation. She believes that women can empower and add value to each other’s lives. She hopes through
              Aisha Comfortable Coliving, women can support, comfort, and inspire one another while navigating the stress
              and expectations placed upon them by society. Aisha believes coliving is an opportunity to change wellness
              living in a way that can benefit all. But done wrong, coliving can have adverse outcomes.
            </Typography>
          </Stack>
          {/*our mission + vision + value portion */}
          <Grid container pb={10} justifyContent="center" spacing={10} px={20}>
            <Grid item xs={6}>
              <Stack spacing={4}>
                <Typography variant="h4" sx={{ color: "#0045F1", fontWeight: "bold" }}>
                  Our Mission
                </Typography>
                <Typography variant="h5" sx={{ color: "#0045F1" }}>
                  To provide coliving services to women tenants and homeowners
                </Typography>
                <Typography variant="h5" sx={{}}>
                  Aisha Comfortable Coliving is the first company to provide inclusive coliving services to women
                  homeowners and tenants, of all ages, from students leaving home for the first time to seniors, across
                  Canada, with a pioneering spirit. We provide access to safe coliving rentals and engaging
                  community-oriented events for all women. We offer the opportunity for property investors to expand their
                  residential portfolio to encompass the growing coliving trend across Canada.
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Box component="img" src={require("../../assets/image 48.png")} width="100%" />
            </Grid>
            <Grid item xs={6}>
              <Box component="img" src={require("../../assets/image 49.png")} width="100%" />
            </Grid>
            <Grid item xs={6}>
              <Stack spacing={4}>
                <Typography variant="h4" sx={{ color: "#0045F1", fontWeight: "bold" }}>
                  Our Vision
                </Typography>
                <Typography variant="h5" sx={{ color: "#0045F1" }}>
                  Changing wellness living for all women!
                </Typography>
                <Typography variant="h5" sx={{}}>
                  We are a digital platform that empowers women through new and innovative housing solutions and
                  community-building events. We work to provide a coliving experience and community that is safe, fun, and
                  supportive! Through Aisha Comfortable Coliving, women can choose how they want to live while surrounded
                  by other like-minded women who will support them along the way. Engage in a secure, comfortable, and
                  sustainable way of living while creating memories that will last a lifetime.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </div>
      </div>

      <div className="acc-section">
        <div className="acc-container">
          <Stack style={{ background: "white" }} p={8} pb={20} spacing={3} alignItems="center">
            <Typography variant="h2" sx={{ textAlign: "center", fontWeight: "bold", color: "#0045F1" }}>
              Our Values
            </Typography>
            <Typography variant="h3" sx={{ textAlign: "center", color: "#0045F1" }}>
              We live by our values
            </Typography>
            <Typography variant="h5" sx={{ textAlign: "center", px: 25 }}>
              We listen intently, seek to understand deeply, support where and how we can, do not judge, and strive to add
              value where possible
            </Typography>
          </Stack>

          {/*Our Team*/}
          <Stack
            style={{ background: "#C5265C" }}
            sx={{ borderTopRightRadius: 200, borderTopLeftRadius: 200 }}
            p={10}
            spacing={3}
            alignItems="center">
            <Typography variant="h3" color="primary" sx={{ textAlign: "center", color: "white", fontWeight: "bold" }}>
              Our Team
            </Typography>
          </Stack>

          {/*our mission + vision + value portion */}
          <Grid container p={10} justifyContent="center">
            <Grid item xs={6}>
              <Box component="img" src={require("../../assets/image 50.png")} width="100%" />
            </Grid>
            <Grid item xs={6}>
              <div className="txt-wrapper">
                <Typography variant="h4" sx={{ color: "#F83E7D", fontWeight: "bold" }}>
                  Meet the Founder & CEO of Aisha Comfortable Coliving
                </Typography>
                <Typography variant="h5" sx={{}}>
                  Aisha came to Canada as a graduate student where she attended the Memorial University of Newfoundland,
                  completing a Masters in Computational Science and a Ph.D. in Quantum Chemistry. With a background
                  focused primarily on Quantum Chemistry and Computer Science, Aisha unexpectedly discovered her passion
                  for helping others through her own personal coliving experience. Aisha is now dedicated to creating a
                  community for women of all ages to experience the same joys and benefits of coliving through her very
                  own platform, Aisha Comfortable Coliving.
                </Typography>
                <Typography variant="h5" sx={{ color: "#F83E7D", fontWeight: "bold" }}>
                  Aisha ElSherbiny
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  aisha@comfortablecoliving.com
                </Typography>
              </div>
            </Grid>
          </Grid>

          {/*Communications Team*/}
          <Stack pt={10} spacing={3} alignItems="center">
            <Typography variant="h4" color="primary" sx={{ textAlign: "center", color: "#F83E7D", fontWeight: "bold" }}>
              Communications Team
            </Typography>
          </Stack>
          {/*Communications Team content*/}
          <Grid container justifyContent="center" px={20} pb={20}>
            <Grid item xs="auto" p={10} pb={0}>
              <Stack alignItems="center" spacing={4} width="345px">
                <Box component="img" src={require("../../assets/image 51.png")} width="100%" />
                <Typography variant="h5" sx={{ fontWeight: "bold", color: "#C5265C" }}>
                  Elena Stone
                </Typography>
                <Typography variant="h5" sx={{ px: 15 }}>
                  elena@comfortablecoliving.com
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs="auto" p={10} pb={0}>
              <Stack alignItems="center" spacing={4} width="345px">
                <Box component="img" src={require("../../assets/image 53.png")} width="100%" />
                <Typography variant="h5" sx={{ fontWeight: "bold", color: "#C5265C" }}>
                  Max
                </Typography>
                <Typography variant="h5" sx={{ px: 15 }}>
                  max@comfortablecoliving.com
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </div>
      </div>
      {/*Pink Area*/}
      <Footer></Footer>


    </>
  );
}

export default About;
