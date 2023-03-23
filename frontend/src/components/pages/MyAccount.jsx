import {
  Container,
  Grid,
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  MenuItem,
  Typography,
  TextField,
  Divider,
  Slider,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import SideNav from "../components/SideNav";

import axios from "axios";
import StyledButton from "../components/StyledButton";

import { connect } from "react-redux";
import ImageUpload from "../components/ImageUploadComponent";
import CustomTextField from "../components/CustomTextField";

const api = axios.create({
  baseURL: `http://127.0.0.1:8000/ListingAccount/`,
});

function MyAccount({ props, isAuthenticated, listingAccount }) {

  const ranges = [
    {
      value: "18 - 23",
      key: "18 - 23",
    },
    {
      value: "23 - 28",
      key: "23 - 28",
    },
    {
      value: "28 - 33",
      key: "28 - 33",
    },
    {
      value: "33 - 38",
      key: "33 - 38",
    },
  ];

  const personalityTraits =
    "Extroverted Outgoing Creative Private Quiet Introverted Open Analytical Laid-Back Adventurous".split(
      " "
    );
  const interests =
    "Gardening Hiking Reading Puzzles Yoga Cooking Music Art Sports Cars".split(
      " "
    );

  // the overall state for the whole form
  const [formdata, setFormData] = useState({
    first_name: "George",
    last_name: "Li",
    username: "George",
    email: "g257li@uwaterloo.ca",
    phone_number: "6476790885",
    date_of_birth: "2002-09-26",
    location: "Toronto",
    age_range: "19-21",
    tell_us_about_yourself: "ahhhh",
    // preferences: ""
    occupation: "Doctor",
    profile_picture:
      "http://127.0.0.1:8000/media/profile_picture/43dfc696e92214af5868b2421604f4cd.jpg",
    banner_picture:
      "http://127.0.0.1:8000/media/banner_picture/43dfc696e92214af5868b2421604f4cd.jpg",
    display_picture_one:
      "http://127.0.0.1:8000/media/display_picture_one/43dfc696e92214af5868b2421604f4cd.jpg",
    display_picture_two:
      "http://127.0.0.1:8000/media/display_picture_two/43dfc696e92214af5868b2421604f4cd.jpg",
    display_picture_three:
      "http://127.0.0.1:8000/media/display_picture_three/43dfc696e92214af5868b2421604f4cd.jpg",
    display_picture_four:
      "http://127.0.0.1:8000/media/display_picture_four/43dfc696e92214af5868b2421604f4cd.jpg",
    personal_traits: [],
    interests: [],
  });
  const [profile_picture, setProfilePicture] = useState(null);
  const [banner_picture, setBanner_picture] = useState(null);
  const [display_picture_one, setDisplay_picture_one] = useState(null);
  const [display_picture_two, setDisplay_picture_two] = useState(null);
  const [display_picture_three, setDisplay_picture_three] = useState(null);
  const [display_picture_four, setDisplay_picture_four] = useState(null);
  console.log({
    profile_picture,
    banner_picture,
    display_picture_one,
    display_picture_two,
    display_picture_three,
    display_picture_four,
  });

  const [traitsCheckedState, setTraitsCheckedState] = useState(
    new Array(personalityTraits.length).fill(false)
  );
  const [interestsCheckedState, setInterestsCheckedState] = useState(
    new Array(interests.length).fill(false)
  );

  const handleTraitOnChange = (position) => {
    const updatedCheckedState = traitsCheckedState.map((item, index) =>
      index === position ? !item : item
    );
    setTraitsCheckedState(updatedCheckedState);
  };

  const handleInterestOnChange = (position) => {
    const updatedCheckedState = interestsCheckedState.map((item, index) =>
      index === position ? !item : item
    );
    setInterestsCheckedState(updatedCheckedState);
  };

  const handleReset = () => {
    // setField_1("");
    // setField_2("");
    // setField_3("");
    // setField_4("");
    // setField_5("");
    // setField_6("");
    // setField_7("");
  };

  const handleSubmit = () => {
    const returnTraits = [];
    for (let i = 0; i <= personalityTraits.length; i++) {
      if (traitsCheckedState[i]) {
        returnTraits.push(personalityTraits[i]);
      }
    }
    const returnInterests = [];
    for (let i = 0; i <= interests.length; i++) {
      if (interestsCheckedState[i]) {
        returnInterests.push(interests[i]);
      }
    }
    // Submit here
    const accountFields = {
      id: 1,
      username: "George",
      account_type: "tenant",
      first_name: "George",
      last_name: "Li",
      email: "g257li@uwaterloo.ca",
      phone_number: "6476790885",
      date_of_birth: "2002-09-26",
      location: "Toronto",
      age_range: "19-21",
      tell_us_about_yourself: "ahhhh",
      profile_picture:
        "http://127.0.0.1:8000/media/profile_picture/43dfc696e92214af5868b2421604f4cd.jpg",
      banner_picture:
        "http://127.0.0.1:8000/media/banner_picture/43dfc696e92214af5868b2421604f4cd.jpg",
      display_picture_one:
        "http://127.0.0.1:8000/media/display_picture_one/43dfc696e92214af5868b2421604f4cd.jpg",
      display_picture_two:
        "http://127.0.0.1:8000/media/display_picture_two/43dfc696e92214af5868b2421604f4cd.jpg",
      display_picture_three:
        "http://127.0.0.1:8000/media/display_picture_three/43dfc696e92214af5868b2421604f4cd.jpg",
      display_picture_four:
        "http://127.0.0.1:8000/media/display_picture_four/43dfc696e92214af5868b2421604f4cd.jpg",
      personal_traits: [],
      interests: [],
      notifications: [],
      user_id: 3,
    };

    const id = 1;
    const formData = new FormData();
    formData.append("profile_picture", formdata.profile_picture);
    formData.append("banner_picture", formdata);
    formData.append("display_picture_one", formdata);
    formData.append("display_picture_two", formdata);
    formData.append("display_picture_three", formdata);
    formData.append("display_picture_four", formdata);
    formData.append("first_name", formdata.first_name);
    formData.append("last_name", formdata.last_name);
    formData.append("username", formdata.username);
    formData.append("email", formdata.email);
    formData.append("phone_number", formdata.phone_number);
    formData.append("date_of_birth", formdata.date_of_birth);
    formData.append("location", formdata.location);
    formData.append("age_range", formdata.age_range);
    formData.append("tell_us_about_yourself", formdata.tell_us_about_yourself);
    formData.append("occupation", formdata.occupation);
    formData.append("personal_traits", formdata.personal_traits);
    formData.append("interests", formdata.interests);

    axios
      .post("http://localhost:8000/ListingAccount/"+{id}+"/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
    handleReset();
  };

  const [value, setValue] = useState([400, 4000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return listingAccount === null ? (
    <div>loading</div>
  ) : (
    <>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Typography variant="h2" padding={"3vw"} fontWeight={700}>
            <b>My Account</b>
            <Divider
              variant="middle"
              sx={{ width: "15vw", border: "2px solid", color: 'primary.main', opacity: 100 }}
            />
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <SideNav></SideNav>
        </Grid>
        <Grid item xs={9}>
          <Grid item xs={12}>
            <ImageUpload
              width="60vw"
              height="30vh"
              wide={true}
              returnSelected={setBanner_picture}
              // defaultLink={}
            />
            <Box position={"relative"}>
              <Box position={"absolute"} left={"50vw"} bottom={"-5vh"}>
                <ImageUpload width="150px" returnSelected={setProfilePicture} />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={11}>
            <Typography
              variant="h2"
              align="center"
              color={"primary.main"}
              fontWeight="bold"
              marginTop={"2vmin"}
            >
              {listingAccount.account_type}
            </Typography>
          </Grid>

          <Grid container xs={9} spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                fontWeight={600}
                fontSize={40}
                marginTop={"2vmin"}
              >
                Personal Details
                <Divider
                  variant="left"
                  sx={{
                    width: "7vw",
                    border: "2px solid",
                    color: "primary.main",
                    opacity: 100,
                    marginY: "2vmin",
                  }}
                />
              </Typography>
              <Typography variant="h5" marginTop={"2vmin"}>
                *This information will not be visible on your public profile.
              </Typography>
            </Grid>

            <Grid container item spacing={4} xs={6}>
              <Grid item xs={12}>
                <CustomTextField
                  required
                  onChange={(e) =>
                    setFormData({ ...formdata, first_name: e.target.value })
                  }
                  label="First Name"
                  variant="myaccount"
                ></CustomTextField>
              </Grid>
              <Grid item xs={12}>
                <CustomTextField
                  required
                  onChange={(e) =>
                    setFormData({ ...formdata, last_name: e.target.value })
                  }
                  label="Last Name"
                  variant="myaccount"
                ></CustomTextField>
              </Grid>
              <Grid item xs={12}>
                <CustomTextField
                  required
                  onChange={(e) =>
                    setFormData({ ...formdata, username: e.target.value })
                  }
                  label="Username"
                  variant="myaccount"
                ></CustomTextField>
              </Grid>
              <Grid item xs={12}>
                <CustomTextField
                  required
                  onChange={(e) =>
                    setFormData({ ...formdata, email: e.target.value })
                  }
                  label="Email Address"
                  variant="myaccount"
                ></CustomTextField>
              </Grid>
              <Grid item xs={12}>
                <CustomTextField
                  required
                  onChange={(e) =>
                    setFormData({ ...formdata, phone_number: e.target.value })
                  }
                  label="Phone"
                  variant="myaccount"
                ></CustomTextField>
              </Grid>
              <Grid item xs={12}>
                <CustomTextField
                  required
                  onChange={(e) =>
                    setFormData({ ...formdata, location: e.target.value })
                  }
                  label="Location"
                  variant="myaccount"
                ></CustomTextField>
              </Grid>

              <Grid item xs={12}>
                <CustomTextField
                  sx={{
                    width: "20vw",
                    input: {
                      color: "black",
                      background: "#E3E7EF",
                      borderRadius: "30vmax",
                    },
                    "& label": { paddingLeft: (theme) => theme.spacing(2) },
                    "& input": {
                      paddingLeft: (theme) => theme.spacing(3.5),
                      border: "0px",
                    },
                    "& fieldset": {
                      paddingLeft: (theme) => theme.spacing(2.5),
                      borderRadius: "30vmax",
                    },
                  }}
                  onChange={(e) =>
                    setFormData({ ...formdata, age_range: e.target.value })
                  }
                  required
                  select
                  value={formdata.age_range}
                  label="Age Range"
                  style={{
                    background: "#E3E7EF",
                    borderRadius: "25px",
                  }}
                  InputProps={{
                    sx: {
                      ".MuiOutlinedInput-notchedOutline": {
                        border: "none",
                      },
                    },
                    style: {
                      color: "#737373FA",
                      borderRadius: "25px",
                      minWidth: "20vw",
                    },
                  }}
                >
                  {ranges.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </CustomTextField>
              </Grid>

              <Grid item xs={12}>
                <CustomTextField
                  required
                  onChange={(e) =>
                    setFormData({ ...formdata, occupation: e.target.value })
                  }
                  label="Occupation"
                  variant="myaccount"
                ></CustomTextField>
              </Grid>
            </Grid>

            <Grid item xs={6} sx={{ minHeight: "40vh" }}>
              <ImageUpload returnSelected={setDisplay_picture_one} />
              <Stack direction="row" spacing={1} marginTop="8px">
                <ImageUpload
                  width="150px"
                  returnSelected={setDisplay_picture_two}
                />
                <ImageUpload
                  width="150px"
                  returnSelected={setDisplay_picture_three}
                />
                <ImageUpload
                  width="150px"
                  returnSelected={setDisplay_picture_four}
                />
              </Stack>
            </Grid>

            {/*About youself */}
            {listingAccount.account_type !== "propertyowner" && (
              <>
                <Grid container xs={12}>
                  <Typography
                    variant="h4"
                    fontWeight={600}
                    fontSize={40}
                    marginTop={"2vmin"}
                  >
                    About Yourself
                    <Divider
                      variant="left"
                      sx={{
                        width: "7vw",
                        border: "2px solid",
                        color: "primary.main",
                        opacity: 100,
                        marginY: "2vmin",
                      }}
                    />
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) =>
                      setFormData({
                        ...formdata,
                        tell_us_about_yourself: e.target.value,
                      })
                    }
                    multiline
                    rows={4}
                    required
                    fullWidth="50vw"
                    placeholder="Provide a brief description about yourself..."
                    style={{
                      background: "#E3E7EF",
                      borderRadius: "10px",
                    }}
                    InputProps={{
                      style: {
                        color: "#737373FA",
                        borderRadius: "10px",
                        minWidth: "20vw",
                        minHeight: "20vh",
                      },
                      sx: {
                        ".MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                      },
                    }}
                  />
                </Grid>
              </>
            )}
            {/*Preferences */}
            {(listingAccount.account_type === "tenant" ||
              listingAccount.account_type === "homeowner") && (
              <>
                <Grid container xs={12}>
                  <Typography
                    variant="h4"
                    fontWeight={600}
                    fontSize={40}
                    marginTop={"2vmin"}
                  >
                    Preferences
                    <Divider
                      variant="left"
                      sx={{
                        width: "7vw",
                        border: "2px solid",
                        color: "primary.main",
                        opacity: 100,
                        marginY: "2vmin",
                      }}
                    />
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    // onChange={(e) => setField_7(e.target.value)}
                    multiline
                    rows={4}
                    required
                    fullWidth="50vw"
                    placeholder="Provide what you’re looking for in  a rental or a housemate."
                    style={{
                      background: "#E3E7EF",
                      borderRadius: "10px",
                    }}
                    InputProps={{
                      style: {
                        color: "#737373FA",
                        borderRadius: "10px",
                        minWidth: "20vw",
                        minHeight: "20vh",
                      },
                      sx: {
                        ".MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                      },
                    }}
                  />
                </Grid>
              </>
            )}

            {/*Price Range Slider*/}
            {listingAccount.account_type === "tenant" && (
              <Grid container xs={12}>
                <Typography
                  variant="h4"
                  fontWeight={600}
                  fontSize={40}
                  marginTop={"2vmin"}
                >
                  Price Range Preference
                  <Divider
                    variant="left"
                    sx={{
                      width: "7vw",
                      border: "2px solid",
                      color: "primary.main",
                      opacity: 100,
                      marginY: "2vmin",
                    }}
                  />
                </Typography>
                <Container>
                  <Slider
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    min={400}
                    max={5000}
                    step={100}
                    marks={[
                      { value: 400, label: "$400" },
                      { value: 5000, label: "$4000+" },
                    ]}
                    sx={{
                      // the entire range of possible values
                      "& .MuiSlider-rail": {
                        color: "#D9D9D9",
                      },
                      // the line between the two ends
                      "& .MuiSlider-track": {
                        color: "primary.main",
                      },
                      // the endpoints
                      "& .MuiSlider-thumb": {
                        color: "primary.main",
                      },
                      // the label displaying the current value
                      "& .MuiSlider-valueLabel": {
                        background: "transparent",
                        color: "#000",
                        padding: "0",
                      },
                    }}
                  />
                </Container>
              </Grid>
            )}

            {/*Personality Traits and Interests */}
            {(listingAccount.account_type === "tenant" ||
              listingAccount.account_type === "homeowner") && (
              <Grid container marginTop={"2vmin"} spacing={1}>
                <Grid item xs={6}>
                  <Grid container xs={12}>
                    <Typography variant="h4" fontWeight={600} fontSize={30}>
                      Personality Traits
                      <Divider
                        variant="left"
                        sx={{
                          width: "7vw",
                          border: "2px solid",
                          color: "primary.main",
                          opacity: 100,
                          marginY: "2vmin",
                        }}
                      />
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <FormGroup>
                      <Grid item container xs={12}>
                        {personalityTraits.map((name, index) => {
                          return (
                            <FormControlLabel
                              item
                              control={
                                <Checkbox
                                  onChange={() => handleTraitOnChange(index)}
                                  sx={{
                                    "&.Mui-checked": { color: "primary.main" },
                                  }}
                                />
                              }
                              label={
                                <Typography width="8vw">{name}</Typography>
                              }
                            />
                          );
                        })}
                      </Grid>
                    </FormGroup>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Grid container xs={12}>
                    <Typography variant="h4" fontWeight={600} fontSize={30}>
                      Interests
                      <Divider
                        variant="left"
                        sx={{
                          width: "7vw",
                          border: "2px solid",
                          color: "primary.main",
                          opacity: 100,
                          marginY: "2vmin",
                        }}
                      />
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <FormGroup>
                      <Grid item container xs={12}>
                        {interests.map((name, index) => {
                          return (
                            <FormControlLabel
                              item
                              control={
                                <Checkbox
                                  onChange={() => handleTraitOnChange(index)}
                                />
                              }
                              label={
                                <Typography width="8vw">{name}</Typography>
                              }
                            />
                          );
                        })}
                      </Grid>
                    </FormGroup>
                  </Grid>
                </Grid>
              </Grid>
            )}
            {/*Save button */}
            <Grid container xs={12} justifyContent="center" mt={10}>
              <StyledButton
                variant="pinkBtn"
                text="Save"
                bgcolor={"primary.main"}
                width="246px"
                onClick={handleSubmit()}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  listingAccount: state.auth.listingAccount,
});

export default connect(mapStateToProps)(MyAccount);
