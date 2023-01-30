import { Box, Stack } from "@mui/system";
import { Button, Card, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HomePhoto from "../../assets/HomePhoto.png";
import NavBar from "../components/NavBar";

function Home(props) {
	
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
              Aisha Comfortable Coliving is a platform that works to empower
              women by matching like-minded women to colive in a safe and
              enjoyable space. We strive to build an inclusive, supportive, and
              fun community for all women.
            </Typography>
            <Box ml={20}>
              <Button
                variant="contained"
                bgcolor="#F83E7D"
                sx={{ background: "#F83E7D" }}
                style={{ maxWidth: "210px", maxHeight: "68px" }}
                endIcon={<ArrowForwardIcon />}
              >
                Learn More
              </Button>
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
            src={HomePhoto}
          ></Box>
        </Stack>
        {/*Blue Bar*/}
        <Stack bgcolor="#EAF5FD" p={6}>
          <Typography variant="h3" color="primary" sx={{ textAlign: "center" }}>
            WHY COLIVING?
          </Typography>
          <Typography variant="h5" color="primary" sx={{ textAlign: "center" }}>
            Coliving is the new way of wellness living
          </Typography>
        </Stack>
        {/*Cards Stack Section*/}
        <Stack direction="row" spacing={14} p={14} justifyContent="center">
          <Card sx={{ width: "294px", height: "344px" }} raised="true">
            Test?
          </Card>
          <Card sx={{ width: "294px", height: "344px" }} raised="true">
            Test?
          </Card>
          <Card sx={{ width: "294px", height: "344px" }} raised="true">
            Test?
          </Card>
          <Card sx={{ width: "294px", height: "344px" }} raised="true">
            Test?
          </Card>
        </Stack>
        <Stack m={4}>
          <Typography variant="h1">To be Added for the Future...</Typography>
        </Stack>

        <Typography variant="h1">PlaceHolder</Typography>
        <Typography variant="h1">PlaceHolder</Typography>
        <Typography variant="h1">PlaceHolder</Typography>
        <Typography variant="h1">PlaceHolder</Typography>
      </Stack>
    </>
  );
}

export default Home;
