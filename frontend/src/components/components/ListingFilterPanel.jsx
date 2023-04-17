import React, { useState, useRef, useEffect } from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Slider from "@mui/material/Slider";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import StyledButton from "./StyledButton";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

const CustomToggleButtonStyles = {
  "&.MuiToggleButtonGroup-grouped.Mui-selected+.MuiToggleButtonGroup-grouped.Mui-selected":
    {
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

const CustomSliderStyles = {
  // the entire range of possible values
  "& .MuiSlider-rail": {
    color: "#D9D9D9",
  },
  // the line between the two ends
  "& .MuiSlider-track": {
    color: "#0045F1",
  },
  // the endpoints
  "& .MuiSlider-thumb": {
    color: "#0045F1",
  },
  // the label displaying the current value
  "& .MuiSlider-valueLabel": {
    background: "transparent",
    color: "#000",
    padding: "0",
  },
};

function ListingFilterPanel(props) {
  const { returnHook, query } = props;

  const [open, setOpen] = useState(false);
  const [unitType, setUnitType] = useState("unknown");
  const [liveIn, setLiveIn] = useState("unknown");
  const [NOBedrooms, setNOBedrooms] = useState(0); // number of bedrooms
  const [NOBathrooms, setNOBathrooms] = useState(0); // number of bathrooms
  const [utilities, setUtilities] = useState("unknown");
  const [NOHousemates, setNOHousemates] = useState(0);
  const [furnished, setFurnished] = useState("unknown");
  const [pets, setPets] = useState("unknown");
  const [parking, setParking] = useState("unknown");
  const [airCon, setAirCon] = useState("unknown");
  const [smoking, setSmoking] = useState("unknown");
  const [priceRange, setPrice] = useState([700, 1500]);

  // Handle the final submitting of the form to filter things
  const handleSubmit = () => {
    const returnedJSON = {
      listing_city: "",
      listing_province: "",
      listing_type: unitType,
      listing_rate__gte: priceRange[0],
      listing_rate__lte: priceRange[1],
      listing_women_homeowner: liveIn,
      listing_total_bedrooms: NOBedrooms,   // int
      listing_den: "unknown",
      listing_bathrooms: NOBathrooms,       // int
      listing_housemates: NOHousemates,     // int
      listing_furnished: furnished,
      listing_pets: pets,
      listing_parking: parking,
      listing_ac: airCon,
      listing_smoking: smoking,
      utilities: utilities,
    };

    // return the submitted data
    returnHook(returnedJSON)
    query(true)

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

  return (
    <div>
      <IconButton onClick={() => setOpen(!open)}>
        <StyledButton variant="pinkBtn" bgcolor="#0045F1">
          Filters
        </StyledButton>
      </IconButton>
      <Drawer variant="persistent" anchor="left" open={open} ref={sideMenuRef}>
        <Stack marginX={"2vw"} alignItems={"center"} maxWidth={"25vw"}>
          <Typography color={"#0045F1"} fontWeight={700} fontSize={24} marginTop={"5vh"} textAlign={"center"}>
            Add Filters
          </Typography>
          {/* These sections could be done more efficiently.*/}

          {/* Unit Type */}
          <Container>
            <Typography marginTop={"3vh"} gutterBottom fontWeight={700}>
              Unit Type
            </Typography>
            <ToggleButtonGroup
              exclusive
              value={unitType}
              onChange={(event, newUnitType) => {
                setUnitType(newUnitType);
              }}
              sx={{ flexWrap: "wrap" }}>
              <ToggleButton value={"unknown"} sx={CustomToggleButtonStyles}>
                No Preference
              </ToggleButton>
              <ToggleButton value={"apartment"} sx={CustomToggleButtonStyles}>
                Apartment
              </ToggleButton>
              <ToggleButton value={"condo"} sx={CustomToggleButtonStyles}>
                Condo
              </ToggleButton>
              <ToggleButton value={"basement"} sx={CustomToggleButtonStyles}>
                Basement
              </ToggleButton>
              <ToggleButton value={"house"} sx={CustomToggleButtonStyles}>
                House
              </ToggleButton>
              <ToggleButton value={"townhouse"} sx={CustomToggleButtonStyles}>
                Townhouse
              </ToggleButton>
            </ToggleButtonGroup>
          </Container>

          {/* Price Range */}
          <Container>
            <Typography marginY={"3vh"} gutterBottom fontWeight={700}>
              Price Range
            </Typography>
            <Slider
              value={priceRange}
              onChange={(event, price) => {
                setPrice(price);
              }}
              valueLabelDisplay="on"
              max={4000}
              min={400}
              sx={CustomSliderStyles}
            />
          </Container>

          {/* Female Homeowner Live In */}
          <Container>
            <Typography marginTop={"3vh"} gutterBottom fontWeight={700}>
              Female Homeowner Live In
            </Typography>
            <ToggleButtonGroup
              exclusive
              value={liveIn}
              onChange={(event, value) => {
                setLiveIn(value);
              }}
              sx={{ flexWrap: "wrap" }}>
              <ToggleButton value={"unknown"} sx={CustomToggleButtonStyles}>
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

          {/* Bedrooms */}
          <Container>
            <Typography marginTop={"3vh"} gutterBottom fontWeight={700}>
              Bedrooms
            </Typography>
            <ToggleButtonGroup
              exclusive
              value={NOBedrooms}
              onChange={(event, value) => {
                setNOBedrooms(value);
              }}
              sx={{ flexWrap: "wrap" }}>
              <ToggleButton value={0} sx={CustomToggleButtonStyles}>
                No Preference
              </ToggleButton>
              <ToggleButton value={1} sx={CustomToggleButtonStyles}>
                1
              </ToggleButton>
              <ToggleButton value={2} sx={CustomToggleButtonStyles}>
                2
              </ToggleButton>
              <ToggleButton value={3} sx={CustomToggleButtonStyles}>
                3
              </ToggleButton>
              <ToggleButton value={4} sx={CustomToggleButtonStyles}>
                4
              </ToggleButton>
              <ToggleButton value={5} sx={CustomToggleButtonStyles}>
                5+
              </ToggleButton>
            </ToggleButtonGroup>
          </Container>

          {/* Bathrooms */}
          <Container>
            <Typography marginTop={"3vh"} gutterBottom fontWeight={700}>
              Bathrooms
            </Typography>
            <ToggleButtonGroup
              exclusive
              value={NOBathrooms}
              onChange={(event, value) => {
                setNOBathrooms(value);
              }}
              sx={{ flexWrap: "wrap" }}>
              <ToggleButton value={0} sx={CustomToggleButtonStyles}>
                No Preference
              </ToggleButton>
              <ToggleButton value={1} sx={CustomToggleButtonStyles}>
                1
              </ToggleButton>
              <ToggleButton value={2} sx={CustomToggleButtonStyles}>
                2
              </ToggleButton>
              <ToggleButton value={3} sx={CustomToggleButtonStyles}>
                3
              </ToggleButton>
              <ToggleButton value={4} sx={CustomToggleButtonStyles}>
                4+
              </ToggleButton>
            </ToggleButtonGroup>
          </Container>

          {/* Utilities Included */}
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
              <ToggleButton value={"unknown"} sx={CustomToggleButtonStyles}>
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

          {/* Number of Housemates */}
          <Container>
            <Typography marginTop={"3vh"} gutterBottom fontWeight={700}>
              Number of Housemates
            </Typography>
            <ToggleButtonGroup
              exclusive
              value={NOHousemates}
              onChange={(event, value) => {
                setNOHousemates(value);
              }}
              sx={{ flexWrap: "wrap" }}>
              <ToggleButton value={0} sx={CustomToggleButtonStyles}>
                No Preference
              </ToggleButton>
              <ToggleButton value={1} sx={CustomToggleButtonStyles}>
                1
              </ToggleButton>
              <ToggleButton value={2} sx={CustomToggleButtonStyles}>
                2
              </ToggleButton>
              <ToggleButton value={3} sx={CustomToggleButtonStyles}>
                3
              </ToggleButton>
              <ToggleButton value={4} sx={CustomToggleButtonStyles}>
                4+
              </ToggleButton>
            </ToggleButtonGroup>
          </Container>

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
              <ToggleButton value={"unknown"} sx={CustomToggleButtonStyles}>
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
              <ToggleButton value={"unknown"} sx={CustomToggleButtonStyles}>
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

          {/* Parking */}
          <Container>
            <Typography marginTop={"3vh"} gutterBottom fontWeight={700}>
              Parking
            </Typography>
            <ToggleButtonGroup
              exclusive
              value={parking}
              onChange={(event, value) => {
                setParking(value);
              }}
              sx={{ flexWrap: "wrap" }}>
              <ToggleButton value={"unknown"} sx={CustomToggleButtonStyles}>
                No Preference
              </ToggleButton>
              <ToggleButton value={"0"} sx={CustomToggleButtonStyles}>
                0
              </ToggleButton>
              <ToggleButton value={"1"} sx={CustomToggleButtonStyles}>
                1
              </ToggleButton>
              <ToggleButton value={"2"} sx={CustomToggleButtonStyles}>
                2
              </ToggleButton>
              <ToggleButton value={"3+"} sx={CustomToggleButtonStyles}>
                3+
              </ToggleButton>
            </ToggleButtonGroup>
          </Container>

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
              <ToggleButton value={"unknown"} sx={CustomToggleButtonStyles}>
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
              <ToggleButton value={"unknown"} sx={CustomToggleButtonStyles}>
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

          <Box marginY={"5vh"}>
            <StyledButton variant="pinkBtn" width="15vw" bgcolor="#0045F1" onClick={handleSubmit}>
              {" "}
              Filter{" "}
            </StyledButton>
          </Box>
        </Stack>
      </Drawer>
    </div>
  );
}

export default ListingFilterPanel;
