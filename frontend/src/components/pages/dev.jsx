import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextareaAutosize,
  Button,
  Slider,
  Grid,
  Stack,
  Typography,
  Divider,
  Box,
  Container,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import ActionConfirmed from "../components/ActionConfirmed";
import SideNav from "../components/SideNav";
import ImageUpload from "../components/ImageUploadComponent";
import StyledButton from "../components/StyledButton";
import { Form } from "react-router-dom";

const personalityTraits =
  "Extroverted Outgoing Creative Private Quiet Introverted Open Analytical Laid-Back Adventurous".split(
    " "
  );
const interests =
  "Gardening Hiking Reading Puzzles Yoga Fitness Cooking Music Art Sports Cars Travel".split(
    " "
  );

function ImageGallery(props) {
  const { isAuthenticated, listingAccount } = props;

  // Trigger state for 'action confirmed' popup
  const [triggerConfirmed, setTriggerConfirmed] = useState(false);

  // States for profile and banner picture
  const [profile_picture, setProfilePicture] = useState(null);
  const [banner_picture, setBanner_picture] = useState(null);

  // react-hook-form state management
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => setTriggerConfirmed(true);

  return (
    <>
      <ActionConfirmed
        trigger={triggerConfirmed}
        onActionCompleted={() => setTriggerConfirmed(false)}
      />

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="30vw"
        margin="4vw"
      >
        <Typography
          variant="h2"
          padding="3vw"
          paddingBottom="3px"
          fontWeight={700}
        >
          My Account
        </Typography>
        <Divider
          variant="middle"
          sx={{
            width: "60%",
            border: "3px solid",
            borderColor: "primary.main",
            opacity: 100,
          }}
        />
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack direction="row">
          <Box width={"25vw"}>
            <SideNav />
            {/* Get Verified Button */}
            <Button
              variant="contained"
              sx={{
                width: "15vw",
                marginLeft: "5vw",
                height: "50px",
                marginTop: "30px",
                borderRadius: "15px",
              }}
            >
              Get Verified
            </Button>
          </Box>
          {/* Form component */}
          <Stack marginX="3vw">
            <ImageUpload
              width="73vw"
              height="30vh"
              wide={true}
              returnSelected={setBanner_picture}
            />
            <Box position={"relative"}>
              <Box position={"absolute"} right={"5vw"} bottom={"-100px"}>
                <ImageUpload
                  width="180px"
                  height="180px"
                  returnSelected={setProfilePicture}
                  borderRadius="100vmax"
                  border="4px solid white"
                />
              </Box>
            </Box>

            <Typography
              variant="h2"
              align="center"
              color={"primary.main"}
              fontWeight="bold"
              marginTop={"2vmin"}
              width={"75vw"}
            >
              tenant
            </Typography>
            <SectionHeader>Personal Details</SectionHeader>
            <Typography
              color="#737373FA"
              fontSize="24px"
              fontWeight="600"
              marginLeft="20px"
              marginTop="-40px"
            >
              *This information will not be visible on your public profile.
            </Typography>

            <Stack direction="row">
              <MyAccountTextfield
                type="text"
                placeholder="Name"
                {...register("Name", { required: true })}
              />
              <MyAccountTextfield
                type="text"
                placeholder="Username"
                {...register("Username", { required: true })}
              />
            </Stack>
            <Stack direction="row">
              <Box display="flex" flexDirection="column">
                <MyAccountTextfield
                  type="tel"
                  placeholder="Phone"
                  {...register("Phone", { required: true })}
                />
                <MyAccountTextfield
                  type="text"
                  placeholder="Location"
                  {...register("Location", { required: true })}
                />
                <MyAccountTextfield
                  type="text"
                  placeholder="Age Range "
                  {...register("Age Range ", {})}
                />
                <MyAccountTextfield
                  type="text"
                  placeholder="Occupation"
                  {...register("Occupation", { required: true })}
                />
              </Box>
              <Box marginTop="40px">
                <ImageUpload />
              </Box>
            </Stack>

            <SectionHeader>About Yourself</SectionHeader>
            <MyAccountMultilineField placeholder="Provide a brief description about yourself..." />
            <SectionHeader>Preferences</SectionHeader>
            <MyAccountMultilineField placeholder="Provide what you’re looking for in  a rental or a housemate." />
            <SectionHeader>Price Range Preference</SectionHeader>
            <Box width="60vw">
              <MyAccountSlider></MyAccountSlider>
            </Box>
            <Stack direction="row">
              <Box width="50%">
                <SectionHeader>Personality Traits</SectionHeader>
                <Box width="100%">
                  <MyAccountCheckBoxes options={personalityTraits} />
                </Box>
              </Box>
              <Box width="50%">
                <SectionHeader>Interests</SectionHeader>
                <Box width="100%">
                  <MyAccountCheckBoxes options={interests} />
                </Box>
              </Box>
            </Stack>
          </Stack>
        </Stack>
        {/* centered Box component */}
        <Box
          display="flex"
          justifyContent="center"
          marginTop="10vh"
          marginBottom="15vh"
        >
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: "15vw",
              height: "75px",
              borderRadius: "30px",
            }}
          >
            <Typography fontWeight={500} fontSize={24}>
              Save
            </Typography>
          </Button>
        </Box>
      </form>
    </>
  );
}

// Renders section headers
function SectionHeader(props) {
  const { children } = props;
  return (
    <Typography fontWeight={600} fontSize={40} marginY={"50px"}>
      {children}
      <Divider
        variant="left"
        sx={{
          width: "15%",
          border: "2px solid",
          color: "primary.main",
          opacity: 100,
          marginY: "3px",
        }}
      />
    </Typography>
  );
}

function MyAccountTextfield(props) {
  return (
    <TextField
      sx={{
        marginY: "20px",
        marginRight: "100px",
        width: "25vw",
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
      inputProps={{
        sx: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 1000px #E3E7EF inset",
            borderRadius: "30vmax",
          },
        },
      }}
      InputProps={{
        disableUnderline: true,
        sx: {
          ".MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        },
      }}
      {...props}
    />
  );
}

function MyAccountMultilineField(props) {
  const { placeholder, ...rest } = props;
  return (
    <MyAccountTextfield
      multiline
      rows={4}
      required
      fullWidth="50vw"
      placeholder={placeholder ? placeholder : ""}
      style={{
        background: "#E3E7EF",
        borderRadius: "10px",
        width: "50vw",
      }}
      InputProps={{
        style: {
          color: "#737373FA",
          borderRadius: "10px",
          minWidth: "20vw",
          minHeight: "20vh",
          width: "50vw",
        },
        sx: {
          ".MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          width: "50vw",
        },
      }}
      {...rest}
    />
  );
}

function MyAccountSlider(props) {
  return (
    <Slider
      type="range"
      value={[600, 1500]}
      // onChange={handleChange}
      valueLabelDisplay="auto"
      min={400}
      max={5000}
      step={100}
      marks={[
        { value: 400, label: "$400" },
        { value: 5000, label: "$5000+" },
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
  );
}

function MyAccountCheckBoxes(props) {
  const { options } = props;
  // define checkbox Icons here so they can be reused
  const boxSize = 35;
  const boxRadius = 1;
  const BpIcon = (
    <Box
      sx={{
        borderRadius: boxRadius,
        width: boxSize,
        height: boxSize,
        boxShadow: "0 0 0 1px #EFE9E5",
        backgroundColor: "#E3E7EF",
        backgroundImage:
          "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))",
        ".Mui-focusVisible &": {
          outline: "2px auto #E3E7EF",
          outlineOffset: 2,
        },
        "input:hover ~ &": {
          backgroundColor: "#E3E7EF",
        },
        "input:disabled ~ &": {
          boxShadow: "none",
          background: "#959595",
        },
      }}
    />
  );
  const BpCheckedIcon = (
    <Box
      sx={{
        borderRadius: boxRadius,
        width: boxSize,
        height: boxSize,
        backgroundColor: "primary.main",
        backgroundImage:
          "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
        "&:before": {
          display: "block",
          width: boxSize,
          height: boxSize,
          backgroundImage:
            "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
            " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
            "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
          content: '""',
        },
        "input:hover ~ &": {
          backgroundColor: "primary.main",
        },
      }}
    />
  );

  return (
    <Grid container>
      {options.map((name, index) => {
        return (
          <FormControlLabel
            item
            control={
              <Checkbox
                icon={BpIcon}
                checkedIcon={BpCheckedIcon}
                sx={{
                  "&.Mui-checked": {
                    color: "primary.main",
                    "& .MuiSvgIcon-root": {
                      fill: "primary.main",
                      stroke: "none",
                    },
                  },
                  "& .MuiSvgIcon-root": {
                    fontSize: "40px",
                    fill: "#E3E7EF",
                    stroke: "none",
                  },
                }}
              />
            }
            label={
              <Typography fontWeight={400} width="10vw" marginLeft={"5px"}>
                {name}
              </Typography>
            }
            sx={{ marginBottom: 2 }}
          />
        );
      })}
    </Grid>
  );
}
export default ImageGallery;
