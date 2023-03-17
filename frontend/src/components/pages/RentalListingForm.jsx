import {
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import StyledButton from "../components/StyledButton";
import { ReactComponent as MissingImage } from "../../assets/Icons/missingImage.svg";
import React, { useState } from "react";
import axios from "axios";
import { LOGIN_SUCCESS } from "../../AuthComponents/actions/types";
import ImageUpload from "../components/ImageUploadComponent";
import CustomTextField from "../components/CustomTextField";

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


  const [listing_city, setListing_city] = useState("");
  const [listing_postal, setListing_postal] = useState("");
  const [listing_province, setListing_province] = useState("");
  const [listing_availability_date, setListing_availability_date] = useState(null);
  const [listing_type, setListing_type] = useState("");
  const [listing_total_bedrooms, setListing_total_bedrooms] = useState(null);
  const [listing_den, setListing_den] = useState(false);
  const [listing_rate, setListing_rate] = useState(null);
  const [listing_women_homeowner, setListing_women_homeowner] = useState(false);
  const [listing_available_bedrooms, setListing_available_bedrooms] = useState(null);
  const [listing_bathrooms, setListing_bathrooms] = useState(null);
  const [listing_housemates, setListing_housemates] = useState(null);
  const [utilities, setUtilities] = useState([]);
  const [furnished, setFurnished] = useState(false);
  const [pets, setPets] = useState(false);
  const [airCon, setAirCon] = useState(false);
  const [smoking, setSmoking] = useState(false);
  const [parking, setParking] = useState(false);

  //////////////////////////////////////////////////////////////
  const [image_1, setimage_1] = useState(null);
  const [image_2, setimage_2] = useState(null);
  const [image_3, setimage_3] = useState(null);
  const [image_4, setimage_4] = useState(null);

  const HandleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("listing_city", listing_city);
    formData.append("listing_postal", listing_postal);
    formData.append("listing_province", listing_province);
    formData.append("listing_availability_date", listing_availability_date);
    formData.append("listing_type", listing_type);
    formData.append("listing_total_bedrooms", listing_total_bedrooms);
    formData.append("listing_den", listing_den);
    formData.append("listing_rate", listing_rate);
    formData.append("listing_women_homeowner", listing_women_homeowner);
    formData.append("listing_available_bedrooms", listing_available_bedrooms);
    formData.append("listing_bathrooms", listing_bathrooms);
    formData.append("listing_housemates", listing_housemates);
    formData.append("listing_parking", parking);
    formData.append("listing_furnished", furnished);
    formData.append("listing_smoking", smoking);
    formData.append("listing_pets", pets);
    formData.append("listing_ac", airCon);
    formData.append("listing_description", "");
    formData.append("listing_image_one", image_1);
    formData.append("listing_image_two", image_2);
    formData.append("listing_image_three", image_3);
    formData.append("listing_image_four", image_4);
    formData.append("listing_utilities", utilities);
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
  };
  ///////////////////////////////////////////////////////////////////

  return (
    <>
      <Typography
        variant="h2"
        sx={{ fontWeight: "bold", color: "#0045F1", p: 8 }}
      >
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
              <ImageUpload height="30vw" width="45vw" returnSelected={setimage_1}/>
            </Grid>
            <Grid item xs={4}>
              <ImageUpload height="10vw" width="13vw" returnSelected={setimage_2}/>
            </Grid>
            <Grid item xs={4}>
              <ImageUpload height="10vw" width="13vw" returnSelected={setimage_3}/>
            </Grid>
            <Grid item xs={4}>
              <ImageUpload height="10vw" width="13vw" returnSelected={setimage_4}/>
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
              <Typography variant="h5">
                *Address will not be visible in the public listing.
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <CustomTextField
            variant="rlf"
            label="City"
            onChange={(e) => setListing_city(e.target.value)}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <CustomTextField
            variant="rlf"
            label="Postal Code"
            onChange={(e) => setListing_postal(e.target.value)}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <CustomTextField
            variant="rlf"
            label="Province"
            onChange={(e) => setListing_province(e.target.value)}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={5}>
          <Stack spacing={2}>
            <CustomTextField
              variant="rlf"
              label="Date Available"
              onChange={(e) => setListing_availability_date(e.target.value)}
              required
              fullWidth
            />
            <CustomTextField
              variant="rlf"
              label="Unit Type"
              onChange={(e) => setListing_type(e.target.value)}
              required
              fullWidth
            />
            <CustomTextField
              variant="rlf"
              label="Total # of Bedrooms in Property"
              onChange={(e) => setListing_total_bedrooms(e.target.value)}
              required
              fullWidth
            />
            <CustomTextField
              variant="rlf"
              label="Rent Per Room"
              onChange={(e) => setListing_rate(e.target.value)}
              required
              fullWidth
            />
            <CustomTextField
              variant="rlf"
              label="# of Bedrooms for Rent"
              onChange={(e) => setListing_available_bedrooms(e.target.value)}
              required
              fullWidth
            />
            <CustomTextField
              variant="rlf"
              label="Total # of Bathrooms"
              onChange={(e) => setListing_bathrooms(e.target.value)}
              required
              fullWidth
            />
            <CustomTextField
              variant="rlf"
              label="Total Anticipated Housemates"
              onChange={(e) => setListing_housemates(e.target.value)}
              required
              fullWidth
            />
          </Stack>
        </Grid>

        <Grid item xs={7}>
          <Grid container>
            <Grid item xs={6}>
              {/* Parking */}
              <Container>
                <Typography marginTop={"3vh"} gutterBottom fontWeight={700}>
                  Parking Included
                </Typography>
                <ToggleButtonGroup
                  exclusive
                  value={parking}
                  onChange={(event, value) => {
                    setParking(value);
                  }}
                  sx={{ flexWrap: "wrap" }}
                >
                  <ToggleButton value={true} sx={CustomToggleButtonStyles}>
                    Yes
                  </ToggleButton>
                  <ToggleButton value={false} sx={CustomToggleButtonStyles}>
                    No
                  </ToggleButton>
                </ToggleButtonGroup>
              </Container>
            </Grid>
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
                  sx={{ flexWrap: "wrap" }}
                >
                  <ToggleButton value={true} sx={CustomToggleButtonStyles}>
                    Yes
                  </ToggleButton>
                  <ToggleButton value={false} sx={CustomToggleButtonStyles}>
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
                  sx={{ flexWrap: "wrap" }}
                >
                  <ToggleButton value={true} sx={CustomToggleButtonStyles}>
                    Yes
                  </ToggleButton>
                  <ToggleButton value={false} sx={CustomToggleButtonStyles}>
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
                  sx={{ flexWrap: "wrap" }}
                >
                  <ToggleButton value={true} sx={CustomToggleButtonStyles}>
                    Yes
                  </ToggleButton>
                  <ToggleButton value={false} sx={CustomToggleButtonStyles}>
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
                  sx={{ flexWrap: "wrap" }}
                >
                  <ToggleButton value={true} sx={CustomToggleButtonStyles}>
                    Yes
                  </ToggleButton>
                  <ToggleButton value={false} sx={CustomToggleButtonStyles}>
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
                  sx={{ flexWrap: "wrap" }}
                >
                  <ToggleButton
                    value={"no preference"}
                    sx={CustomToggleButtonStyles}
                  >
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
                  <ToggleButton
                    value={"electricity"}
                    sx={CustomToggleButtonStyles}
                  >
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
          <CustomTextField
            id="filled-multiline-static"
            label="Provide a brief description about the listing..."
            multiline
            rows={11}
            defaultValue=""
            variant="rlf"
            sx={{ width: "100%", mt: 4 }}
          />
        </Grid>
        <Grid item xs={12}>
          <Stack alignItems="center" mt={10} spacing={5}>
            <FormControlLabel
              control={<Checkbox defaultChecked sx={CustomCheckboxStyles} />}
              label="I agree to Aisha Comfortable Coliving Terms & Conditions"
            />

            <StyledButton
              variant="pinkBtn"
              text="Preview Listing"
              width="20vw"
            />
            <StyledButton
              variant="pinkBtn"
              text="Submit"
              bgcolor="#0045F1"
              width="20vw"
              onClick={HandleSubmit}
            />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default RentalListingForm;
