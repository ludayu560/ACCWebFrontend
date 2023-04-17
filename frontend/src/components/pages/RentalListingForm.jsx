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
  Snackbar,
  Alert,
} from "@mui/material";
import StyledButton from "../components/StyledButton";

import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { create_property_listing } from "../../Redux/actions/propertyListing";
import { LOGIN_SUCCESS } from "../../Redux/actions/types";
import ImageUpload from "../components/ImageUploadComponent";
import CustomTextField from "../components/CustomTextField";
import { connect } from "react-redux";
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

function RentalListingForm({ create_property_listing }) {
  const [listing_city, setListing_city] = useState("");
  const [listing_postal, setListing_postal] = useState("");
  const [listing_province, setListing_province] = useState("");
  const [listing_availability_date, setListing_availability_date] =
    useState(null);
  const [listing_type, setListing_type] = useState("");
  const [listing_total_bedrooms, setListing_total_bedrooms] = useState(null);
  const [listing_den, setListing_den] = useState(false);
  const [listing_rate, setListing_rate] = useState(null);
  const [listing_women_homeowner, setListing_women_homeowner] = useState(false);
  const [listing_available_bedrooms, setListing_available_bedrooms] =
    useState(1);
  const [listing_bathrooms, setListing_bathrooms] = useState(null);
  const [listing_housemates, setListing_housemates] = useState(null);
  const [listing_description, setListing_description] = useState("");
  const [utilities, setUtilities] = useState("no");
  const [furnished, setFurnished] = useState("no preference");
  const [pets, setPets] = useState("no preference");
  const [airCon, setAirCon] = useState("no preference");
  const [smoking, setSmoking] = useState("no preference");
  const [parking, setParking] = useState("no preference");

  //////////////////////////////////////////////////////////////
  const [imageArray, setImageArray] = useState([]);

  const HandleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    const PropertyListing = {
      listing_city: listing_city,
      listing_postal: listing_postal,
      listing_province: listing_province,
      listing_availability_date: listing_availability_date,
      listing_type: listing_type,
      listing_total_bedrooms: listing_total_bedrooms,
      listing_den: listing_den,
      listing_rate: listing_rate,
      listing_women_homeowner: listing_women_homeowner,
      listing_available_bedrooms: listing_available_bedrooms,
      listing_bathrooms: listing_bathrooms,
      listing_housemates: listing_housemates,
      listing_parking: parking,
      listing_furnished: furnished,
      listing_smoking: smoking,
      listing_pets: pets,
      listing_ac: airCon,
      listing_description: listing_description,
      listing_image_one: imageArray[0],
      listing_image_two: imageArray[1],
      listing_image_three: imageArray[2],
      listing_image_four: imageArray[3],
      listing_image_five: imageArray[4],
      listing_image_six: imageArray[5],
      listing_image_seven: imageArray[6],
      listing_image_eight: imageArray[7],
      listing_image_nine: imageArray[8],
      listing_utilities: utilities,
    };
    create_property_listing(PropertyListing);
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

      <Grid container p={4} px={10} mt={5} pb={20}>
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
        {/* Image upload carousel */}
        <DragImageUpload setImageArray={setImageArray}></DragImageUpload>
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
              InputLabelProps={{ shrink: true }}
              type="date"
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
                  sx={{ flexWrap: "wrap" }}
                >
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
                  sx={{ flexWrap: "wrap" }}
                >
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
                  sx={{ flexWrap: "wrap" }}
                >
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
            onChange={(e) => setListing_description(e.target.value)}
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

function DragImageUpload(props) {
  const { setImageArray } = props;
  const [images, setImages] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (images.length + acceptedFiles.length > 9) {
        setOpenSnackbar(true);
        return;
      }
      setImages((prevImages) =>
        prevImages.concat(
          acceptedFiles.map((file) =>
            Object.assign(file, { preview: URL.createObjectURL(file) })
          )
        )
      );
      setImageArray((prevImages) =>
        prevImages.concat(
          acceptedFiles.map((file) =>
            Object.assign(file, { preview: URL.createObjectURL(file) })
          )
        )
      );
    },
    [images]
  );

  const handleRemoveImage = (imageToRemove) => {
    setImages((prevImages) =>
      prevImages.filter((image) => image !== imageToRemove)
    );
    setImageArray((prevImages) =>
      prevImages.filter((image) => image !== imageToRemove)
    );
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <Box>
      <Box
        {...getRootProps()}
        style={{
          border: "2px dashed #E3E6EF",
          borderRadius: "30px",
        }}
        width={"30vw"}
        marginX={"30vw"}
        paddingY={"10vh"}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop images here</p>
        ) : (
          <Typography fontWeight={600} fontSize={16} textAlign={"center"}>
            Drag & Drop or choose photos to upload (Max 9 photos)
          </Typography>
        )}
      </Box>
      <Box display="flex" flexWrap="wrap" mt={2} paddingX={"10vw"}>
        {images.map((image) => (
          <Box key={image.name} onClick={() => handleRemoveImage(image)}>
            <label htmlFor={image.name}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="177px"
                height="100px"
                overflow="hidden"
                position="relative"
                marginX={"15px"}
              >
                <img
                  src={image.preview}
                  alt={image.name}
                  style={{
                    cursor: "pointer",
                    borderRadius: "10px",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </label>
          </Box>
        ))}
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="error"
          sx={{ width: "100%" }}
        >
          You can only upload a maximum of 9 images.
        </Alert>
      </Snackbar>
    </Box>
  );
}
export default connect(null, { create_property_listing })(RentalListingForm);
