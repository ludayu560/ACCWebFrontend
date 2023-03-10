import {
  Container,
  Button,
  Grid,
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  MenuItem,
  Typography,
  Stack,
  Paper,
  TextField,
  ImageListItem,
  Divider,
  Slider,
} from "@mui/material";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import RectangleOne from "../../assets/Rectangle1.svg";
import AccountContent from "../../assets/AccountContent.svg";
import NavBar from "../components/NavBar";
import SideNav from "../components/SideNav";

import axios from "axios";
import StyledButton from "../components/StyledButton";

const api = axios.create({
  baseURL: `http://127.0.0.1:8000/ListingAccount/`,
});

const CustomSliderStyles = {
  // the entire range of possible values
  "& .MuiSlider-rail": {
    color: "#D9D9D9",
  },
  // the line between the two ends
  "& .MuiSlider-track": {
    color: "#F83E7D",
  },
  // the endpoints
  "& .MuiSlider-thumb": {
    color: "#F83E7D",
  },
  // the label displaying the current value
  "& .MuiSlider-valueLabel": {
    background: "transparent",
    color: "#000",
    padding: "0",
  },
};

function MyAccount(props) {
  const [ageRange, setAge] = useState([25, 40]);

  function colorTheme() {
    {
      /*listingAccount.account_type*/
    }
    switch (props.name) {
      case "tenant":
        return "#F83E7D";
      case "homeowner":
        return "#0045F1";
      case "propertyowner":
        return "#113170";
      default:
        return "#C5265C";
    }
  }

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
    "Extroverted Outgoing Creative Private Quiet Introverted Open Analytical Laid-Back Adventurous".split(" ");
  const interests = "Gardening Hiking Reading Puzzles Yoga Cooking Music Art Sports Cars".split(" ");

  const [field_1, setField_1] = useState("");
  const [field_2, setField_2] = useState("");
  const [field_3, setField_3] = useState("");
  const [field_4, setField_4] = useState("");
  const [field_5, setField_5] = useState("");
  const [field_6, setField_6] = useState("");
  const [field_7, setField_7] = useState("");

  const [traitsCheckedState, setTraitsCheckedState] = useState(new Array(personalityTraits.length).fill(false));
  const [interestsCheckedState, setInterestsCheckedState] = useState(new Array(interests.length).fill(false));

  const handleTraitOnChange = (position) => {
    const updatedCheckedState = traitsCheckedState.map((item, index) => (index === position ? !item : item));
    setTraitsCheckedState(updatedCheckedState);
  };
  const handleInterestOnChange = (position) => {
    const updatedCheckedState = interestsCheckedState.map((item, index) => (index === position ? !item : item));
    setInterestsCheckedState(updatedCheckedState);
  };

  const handleReset = () => {
    setField_1("");
    setField_2("");
    setField_3("");
    setField_4("");
    setField_5("");
    setField_6("");
    setField_7("");
    // setTraitsCheckedState(new Array(personalityTraits.length).fill(false))
    // setInterestsCheckedState(new Array(interests.length).fill(false))
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
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      date_of_birth: null,
      location: "",
      age_range: "",
      tell_us_about_yourself: "",
      personal_traits: [],
      interests: [],
    };
    accountFields = {
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
      profile_picture: "http://127.0.0.1:8000/media/profile_picture/43dfc696e92214af5868b2421604f4cd.jpg",
      banner_picture: "http://127.0.0.1:8000/media/banner_picture/43dfc696e92214af5868b2421604f4cd.jpg",
      display_picture_one: "http://127.0.0.1:8000/media/display_picture_one/43dfc696e92214af5868b2421604f4cd.jpg",
      display_picture_two: "http://127.0.0.1:8000/media/display_picture_two/43dfc696e92214af5868b2421604f4cd.jpg",
      display_picture_three: "http://127.0.0.1:8000/media/display_picture_three/43dfc696e92214af5868b2421604f4cd.jpg",
      display_picture_four: "http://127.0.0.1:8000/media/display_picture_four/43dfc696e92214af5868b2421604f4cd.jpg",
      personal_traits: [],
      interests: [],
      notifications: [],
      user_id: 3,
    };

    api.post("/", {
      params: { accountFields },
    });
    console.log("post", accountFields);
    handleReset();
  };

  const styleTextField = {
    background: "#E3E7EF",
    borderRadius: "25px",
  };
  const styleInput = {
    style: {
      color: "#737373FA",
      borderRadius: "25px",
      minWidth: "20vw",
    },
  };
  return (
    <>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Typography variant="h2" padding={"3vw"} fontWeight={700}>
            <b>My Account</b>
            <Divider variant="middle" sx={{ width: "15vw", border: "2px solid #F83E7D", opacity: 100 }} />
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <SideNav></SideNav>
        </Grid>
        <Grid item xs={9}>
          <Grid item xs={12}>
            <Box component="img" src={RectangleOne} />
          </Grid>
          <Grid item xs={11}>
            <Typography variant="h2" align="center" color={colorTheme()} fontWeight="bold" marginTop={"2vmin"}>
              {props.name}
            </Typography>
          </Grid>
          <Grid container xs={9} spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4" fontWeight={600} fontSize={40} marginTop={"2vmin"}>
                Personal Details
                <Divider
                  variant="left"
                  sx={{ width: "7vw", border: "2px solid", color: colorTheme(), opacity: 100, marginY: "2vmin" }}
                />
              </Typography>
              <Typography variant="h5" marginTop={"2vmin"}>
                *This information will not be visible on your public profile.
              </Typography>
            </Grid>

            <Grid container item spacing={4} xs={6}>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setField_1(e.target.value)}
                  required
                  value={field_1}
                  placeholder="Username"
                  style={styleTextField}
                  InputProps={styleInput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setField_2(e.target.value)}
                  required
                  value={field_2}
                  placeholder="Full Name"
                  style={styleTextField}
                  InputProps={styleInput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setField_3(e.target.value)}
                  required
                  value={field_3}
                  placeholder="Email"
                  style={styleTextField}
                  InputProps={styleInput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setField_4(e.target.value)}
                  required
                  value={field_4}
                  placeholder="Phone"
                  style={styleTextField}
                  InputProps={styleInput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setField_5(e.target.value)}
                  required
                  value={field_5}
                  placeholder="Location"
                  style={styleTextField}
                  InputProps={styleInput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setField_6(e.target.value)}
                  required
                  select
                  value={field_6}
                  placeholder="Age Range"
                  style={styleTextField}
                  InputProps={styleInput}>
                  {ranges.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>

            <Grid item xs={6} sx={{ minHeight: "40vh" }}>
              <img src={AccountContent} />
            </Grid>

            {/*About youself */}
            {props.name !== "propertyowner" && (
              <>
                <Grid container xs={12}>
                  <Typography variant="h4" fontWeight={600} fontSize={40} marginTop={"2vmin"}>
                    About Yourself
                    <Divider
                      variant="left"
                      sx={{
                        width: "7vw",
                        border: "2px solid",
                        color: colorTheme(),
                        opacity: 100,
                        marginY: "2vmin",
                      }}
                    />
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) => setField_7(e.target.value)}
                    required
                    value={field_7}
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
                    }}
                  />
                </Grid>
              </>
            )}
            {/*Preferences */}
            {((props.name === "tenant") || (props.name === "homeowner")) && (
              <>
                <Grid container xs={12}>
                  <Typography variant="h4" fontWeight={600} fontSize={40} marginTop={"2vmin"}>
                    Preferences
                    <Divider
                      variant="left"
                      sx={{
                        width: "7vw",
                        border: "2px solid",
                        color: colorTheme(),
                        opacity: 100,
                        marginY: "2vmin",
                      }}
                    />
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) => setField_7(e.target.value)}
                    required
                    value={field_7}
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
                    }}
                  />
                </Grid>
              </>
            )}

            {/*Price Range Slider*/}
            {props.name === "tenant" && (
              <Grid container xs={12}>
                <Typography variant="h4" fontWeight={600} fontSize={40} marginTop={"2vmin"}>
                  Price Range Preference
                  <Divider
                    variant="left"
                    sx={{ width: "7vw", border: "2px solid #F83E7D", opacity: 100, marginY: "2vmin" }}
                  />
                </Typography>
                <Container>
                  <Typography marginBottom={"3vh"} gutterBottom fontWeight={700}>
                    PLEASE REMAKE THIS SLIDER WITH PROPER STATE!
                  </Typography>
                  <Slider
                    value={ageRange}
                    onChange={(event, age) => {
                      setAge(age);
                    }}
                    valueLabelDisplay="on"
                    max={100}
                    min={16}
                    sx={CustomSliderStyles}
                  />
                </Container>
              </Grid>
            )}

            {/*Personality Traits and Interests */}
            {((props.name === "tenant") || (props.name === "homeowner"))  && (
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
                          color: colorTheme(),
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
                                  sx={{ "&.Mui-checked": { color: colorTheme() } }}
                                />
                              }
                              label={<Typography width="8vw">{name}</Typography>}
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
                          color: colorTheme(),
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
                              control={<Checkbox onChange={() => handleTraitOnChange(index)} />}
                              label={<Typography width="8vw">{name}</Typography>}
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
              <StyledButton variant="pinkBtn" text="Save" bgcolor={colorTheme()} width="246px"/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default MyAccount;
