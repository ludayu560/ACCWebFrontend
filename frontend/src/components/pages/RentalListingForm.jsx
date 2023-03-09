import { Box, Stack } from "@mui/system";
import {
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  Paper,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import StyledButton from "../components/StyledButton";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import Mainbar from "../components/MainBar";
import ECard from "../components/ECard";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Tags from "../components/Tags";
import ListingFilterPanel from "../components/ListingFilterPanel";
import React, { useState, useRef, useEffect } from "react";

const CustomToggleButtonStyles = {
  "&.MuiToggleButtonGroup-grouped.Mui-selected+.MuiToggleButtonGroup-grouped.Mui-selected": {
    border: "3px solid #0045F1",
    borderRadius: "100vmax",
  },
  "&.MuiButtonBase-root": {
    border: "3px solid #0045F1",
    borderColor: "#D9D9D9",
    borderRadius: "100vmax",
    marginRight: "10px",
    minWidth: "3.5rem",
    ":first-of-type": {
      border: "3px solid #0045F1",
      borderColor: "#D9D9D9",
      borderRadius: "100vmax",
    },
    ":not(:first-of-type)": {
      border: "3px solid #0045F1",
      borderColor: "#D9D9D9",
      borderRadius: "100vmax",
    },
  },
  "&.Mui-selected.MuiButtonBase-root": {
    border: "3px solid #0045F1",
    borderRadius: "100vmax",
    bgcolor: "white",
  },
};

const CustomCheckboxStyles = {
  // the box color when unchecked
  color: "#B9B9B9",
  // the color when checked
  "&.Mui-checked": {
    color: "#F83E7D",
  },
  // the size of the underlying svg icon
  "& .MuiSvgIcon-root": {
    fontSize: 32,
  },
};

function RentalListingForm(props) {
  const { returnHook } = props;

  const [open, setOpen] = useState(false);
  const [unitType, setUnitType] = useState();
  const [liveIn, setLiveIn] = useState("no preference");
  const [NOBedrooms, setNOBedrooms] = useState("no preference"); // number of bedrooms
  const [NOBathrooms, setNOBathrooms] = useState("no preference"); // number of bathrooms
  const [utilities, setUtilities] = useState("no preference");
  const [NOHousemates, setNOHousemates] = useState("no preference");
  const [furnished, setFurnished] = useState("no preference");
  const [pets, setPets] = useState("no preference");
  const [parking, setParking] = useState("no preference");
  const [airCon, setAirCon] = useState("no preference");
  const [smoking, setSmoking] = useState("no preference");
  const [priceRange, setPrice] = useState([700, 1500]);

  // Handle the final submitting of the form to filter things
  const handleSubmit = () => {
    const returnedJSON = {};

    // return the submitted data
    // returnHook(returnedJSON)

    // close the menu
    setOpen(false);
  };

  // Check if the user clicks out of the menu, close the menu if so.
  const sideMenuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sideMenuRef]);

  const [filterParams, setFilterParams] = useState();
  const data = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  return (
    <>
      <Typography variant="h2" sx={{ fontWeight: "bold", color: "#0045F1", p: 8 }}>
        Rental Listing Form
      </Typography>

      <Divider sx={{ p: 0.1, mx: 10 }} />

      <Grid container p={4} px={10} mt={5} pb={10}>
        <Grid item xs={6}>
          <Stack>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Add Images of Your Rental
            </Typography>
            <Divider sx={{ p: 0.1, mr: "70%" }} />
            <Typography variant="h6" sx={{ color: "#0045F1", mt: 4 }}>
              *Mandatory
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Please include pictures of the following:
            </Typography>

            <Typography variant="h6">Bedroom(s)</Typography>
            <Typography variant="h6">Bathroom(s)</Typography>
            <Typography variant="h6">Kitchen</Typography>
            <Typography variant="h6">Living Room</Typography>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box bgcolor="gray" height="30vw" />
            </Grid>
            <Grid item xs={4}>
              <Box bgcolor="gray" height="10vw" />
            </Grid>
            <Grid item xs={4}>
              <Box bgcolor="gray" height="10vw" />
            </Grid>
            <Grid item xs={4}>
              <Box bgcolor="gray" height="10vw" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/*Add details container */}
      <Grid container p={4} px={10} spacing={2}>
        <Grid item xs={12}>
          <Stack>
            <Stack>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                Add Details About Your Rental
              </Typography>
              <Divider sx={{ p: 0.1, mr: "70%" }} />
              <Typography variant="h6" sx={{ mt: 4, fontWeight: "bold" }}>
                ADDRESS
              </Typography>
              <Typography variant="h5">*Address will not be visible in the public listing.</Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <TextField variant="filled" label="Name" style={{ backgroundColor: "white" }} required fullWidth />
        </Grid>
        <Grid item xs={4}>
          <TextField variant="filled" label="Name" style={{ backgroundColor: "white" }} required fullWidth />
        </Grid>
        <Grid item xs={4}>
          <TextField variant="filled" label="Name" style={{ backgroundColor: "white" }} required fullWidth />
        </Grid>
        <Grid item xs={5}>
          <Stack spacing={2}>
            <TextField variant="filled" label="Name" style={{ backgroundColor: "white" }} required fullWidth />
            <TextField variant="filled" label="Name" style={{ backgroundColor: "white" }} required fullWidth />
            <TextField variant="filled" label="Name" style={{ backgroundColor: "white" }} required fullWidth />
            <TextField variant="filled" label="Name" style={{ backgroundColor: "white" }} required fullWidth />
            <TextField variant="filled" label="Name" style={{ backgroundColor: "white" }} required fullWidth />
            <TextField variant="filled" label="Name" style={{ backgroundColor: "white" }} required fullWidth />
          </Stack>
        </Grid>

        <Grid item xs={7}>
          <Grid container>
            <Grid item xs={6}>
              {/* Furnished */}
              <Container>
                <Typography marginTop={"3vh"} gutterBottom fontWeight={700}>
                  Furnished
                </Typography>
                <ToggleButtonGroup
                  exclusive
                  value={furnished}
                  onChange={(event, value) => {
                    setFurnished(value);
                  }}
                  sx={{ flexWrap: "wrap" }}>
                  <ToggleButton value={"no preference"} sx={CustomToggleButtonStyles}>
                    No Preference
                  </ToggleButton>
                  <ToggleButton value={"yes"} sx={CustomToggleButtonStyles}>
                    Yes
                  </ToggleButton>
                  <ToggleButton value={"no"} sx={CustomToggleButtonStyles}>
                    No
                  </ToggleButton>
                </ToggleButtonGroup>
              </Container>
            </Grid>
            <Grid item xs={6}>
              {/* Smoking */}
              <Container>
                <Typography marginTop={"3vh"} gutterBottom fontWeight={700}>
                  Smoking
                </Typography>
                <ToggleButtonGroup
                  exclusive
                  value={smoking}
                  onChange={(event, value) => {
                    setSmoking(value);
                  }}
                  sx={{ flexWrap: "wrap" }}>
                  <ToggleButton value={"no preference"} sx={CustomToggleButtonStyles}>
                    No Preference
                  </ToggleButton>
                  <ToggleButton value={"yes"} sx={CustomToggleButtonStyles}>
                    Yes
                  </ToggleButton>
                  <ToggleButton value={"no"} sx={CustomToggleButtonStyles}>
                    No
                  </ToggleButton>
                </ToggleButtonGroup>
              </Container>
            </Grid>
            <Grid item xs={6}>
              {/* Pets */}
              <Container>
                <Typography marginTop={"3vh"} gutterBottom fontWeight={700}>
                  Pets
                </Typography>
                <ToggleButtonGroup
                  exclusive
                  value={pets}
                  onChange={(event, value) => {
                    setPets(value);
                  }}
                  sx={{ flexWrap: "wrap" }}>
                  <ToggleButton value={"no preference"} sx={CustomToggleButtonStyles}>
                    No Preference
                  </ToggleButton>
                  <ToggleButton value={"yes"} sx={CustomToggleButtonStyles}>
                    Yes
                  </ToggleButton>
                  <ToggleButton value={"no"} sx={CustomToggleButtonStyles}>
                    No
                  </ToggleButton>
                </ToggleButtonGroup>
              </Container>
            </Grid>
            <Grid item xs={6}>
              {/* Air Conditioned */}
              <Container>
                <Typography marginTop={"3vh"} gutterBottom fontWeight={700}>
                  Air Conditioned
                </Typography>
                <ToggleButtonGroup
                  exclusive
                  value={airCon}
                  onChange={(event, value) => {
                    setAirCon(value);
                  }}
                  sx={{ flexWrap: "wrap" }}>
                  <ToggleButton value={"no preference"} sx={CustomToggleButtonStyles}>
                    No Preference
                  </ToggleButton>
                  <ToggleButton value={"yes"} sx={CustomToggleButtonStyles}>
                    Yes
                  </ToggleButton>
                  <ToggleButton value={"no"} sx={CustomToggleButtonStyles}>
                    No
                  </ToggleButton>
                </ToggleButtonGroup>
              </Container>
            </Grid>
            <Grid item xs={12}>
              <Container>
                <Typography marginTop={"3vh"} gutterBottom fontWeight={700}>
                  Utilities Included
                </Typography>
                <ToggleButtonGroup
                  exclusive
                  value={utilities}
                  onChange={(event, value) => {
                    setUtilities(value);
                  }}
                  sx={{ flexWrap: "wrap" }}>
                  <ToggleButton value={"no preference"} sx={CustomToggleButtonStyles}>
                    No Preference
                  </ToggleButton>
                  <ToggleButton value={"none"} sx={CustomToggleButtonStyles}>
                    None
                  </ToggleButton>
                  <ToggleButton value={"all"} sx={CustomToggleButtonStyles}>
                    All
                  </ToggleButton>
                  <ToggleButton value={"hydro"} sx={CustomToggleButtonStyles}>
                    Hydro
                  </ToggleButton>
                  <ToggleButton value={"water"} sx={CustomToggleButtonStyles}>
                    Water
                  </ToggleButton>
                  <ToggleButton value={"electricity"} sx={CustomToggleButtonStyles}>
                    Electricity
                  </ToggleButton>
                </ToggleButtonGroup>
              </Container>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container p={4} px={10} pb={20}>
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ mt: 4, fontWeight: "bold" }}>
            DESCRIPTION
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="filled-multiline-static"
            label="Provide a brief description about the listing..."
            multiline
            rows={11}
            defaultValue=""
            variant="filled"
            sx={{ width: "100%", mt: 4 }}
          />
        </Grid>
        <Grid item xs={12}>
          <Stack alignItems="center" mt={10} spacing={5}>
            <FormControlLabel
              control={<Checkbox defaultChecked sx={CustomCheckboxStyles} />}
              label="I agree to Aisha Comfortable Coliving Terms & Conditions"
            />

            <StyledButton variant="pinkBtn" text="Preview Listing" width="20vw" />
            <StyledButton variant="pinkBtn" text="Submit" bgcolor="#0045F1" width="20vw" />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default RentalListingForm;
