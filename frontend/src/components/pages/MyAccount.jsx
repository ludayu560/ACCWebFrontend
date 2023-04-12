import React, { useState, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { connect } from "react-redux";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControlLabel from "@mui/material/FormControlLabel";

import ImageUpload from "../components/ImageUploadComponent";
import ActionConfirmed from "../components/ActionConfirmed";
import SideNav from "../components/SideNav";

const personalityTraits =
  "Extroverted Outgoing Creative Private Quiet Introverted Open Analytical Laid-Back Adventurous".split(
    " "
  );
const interests =
  "Gardening Hiking Reading Puzzles Yoga Fitness Cooking Music Art Sports Cars Travel".split(
    " "
  );
const ageRanges = ["<18", "18-25", "26-35", "46-55", "56-65", "65+"];

function MyAccount(props) {
  const { listingAccount } = props;

  // Trigger state for 'action confirmed' popup
  const [triggerConfirmed, setTriggerConfirmed] = useState(false);

  // get the account type from the redux store
  const [accountType, setAccountType] = useState("tenant");
  useEffect(() => {
    if (listingAccount) {
      setAccountType(listingAccount.account_type);
    }
  }, [listingAccount]);

  // react-hook-form state management
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm({
    // add default values for form fields from get request
    // TODO: add proper default values for checkboxes. default null right now.
    defaultValues: {
      About: listingAccount ? listingAccount.tell_us_about_yourself : "",
      Age: listingAccount ? listingAccount.age_range : undefined,
      Location: listingAccount ? listingAccount.location : "",
      Name: listingAccount ? listingAccount.name : "",
      Occupation: listingAccount ? listingAccount.occupation : "",
      Phone: listingAccount ? listingAccount.phone_number : "",
      Preferences: listingAccount ? listingAccount.preferences : "",
      Username: listingAccount ? listingAccount.username : "",
      "checkbox-interests-Art": false,
      "checkbox-interests-Cars": false,
      "checkbox-interests-Cooking": false,
      "checkbox-interests-Fitness": false,
      "checkbox-interests-Gardening": false,
      "checkbox-interests-Hiking": false,
      "checkbox-interests-Music": false,
      "checkbox-interests-Puzzles": false,
      "checkbox-interests-Reading": false,
      "checkbox-interests-Sports": false,
      "checkbox-interests-Travel": false,
      "checkbox-interests-Yoga": false,
      "checkbox-personality-Adventurous": false,
      "checkbox-personality-Analytical": false,
      "checkbox-personality-Creative": false,
      "checkbox-personality-Extroverted": false,
      "checkbox-personality-Introverted": false,
      "checkbox-personality-Laid-Back": false,
      "checkbox-personality-Open": false,
      "checkbox-personality-Outgoing": false,
      "checkbox-personality-Private": false,
      "checkbox-personality-Quiet": false,
      "image-banner": listingAccount ? listingAccount.banner_picture : null,
      "image-main": listingAccount ? listingAccount.display_picture_one : null,
      "image-profile": listingAccount ? listingAccount.profile_picture : null,
      // not yet implemented in backend
      priceRange: [600, 1500],
    },
  });

  const onSubmit = (data) => {
    // Append personality traits and interests
    const personalityTraits = [];
    const interests = [];
    for (const key in data) {
      if (key.slice(0, 8) === "checkbox" && data[key]) {
        if (key.slice(0, 18) === "checkbox-interests") {
          interests.push(key.slice(19));
        } else if (key.slice(0, 20) === "checkbox-personality") {
          personalityTraits.push(key.slice(21));
        }
      }
    }

    const formData = new FormData();
    // Commented out fields are not yet implemented in the backend
    formData.append("tell_us_about_yourself", data.About);
    formData.append("age_range", data.Age);
    formData.append("location", data.Location);
    // formData.append("name", data.Name);
    formData.append("occupation", data.Occupation);
    formData.append("phone_number", data.Phone);
    // formData.append("preferences", data.Preferences);
    formData.append("username", data.Username);
    formData.append("profile_picture", data["image-profile"]);
    formData.append("banner_picture", data["image-banner"]);
    formData.append("display_picture_one", data["image-main"]);
    formData.append("personality_traits", personalityTraits);
    formData.append("interests", interests);

    // console.log formData for debugging
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    setTriggerConfirmed(true);

    // call update_listing_account here
  };

  // debug console.log for watched values
  const watchedValues = watch();
  useEffect(() => {
    console.log("Current form values:", watchedValues);
  }, [watchedValues]);

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
            <Controller
              name="image-banner"
              control={control}
              defaultValue={null}
              render={({ field }) => (
                <ImageUpload
                  width="73vw"
                  height="30vh"
                  wide={true}
                  returnSelected={(e) => field.onChange(e)}
                />
              )}
            />
            <Box position={"relative"}>
              <Box position={"absolute"} right={"5vw"} bottom={"-100px"}>
                <Controller
                  name="image-profile"
                  control={control}
                  defaultValue={null}
                  render={({ field }) => (
                    <ImageUpload
                      width="180px"
                      height="180px"
                      returnSelected={(e) => field.onChange(e)}
                      borderRadius="100vmax"
                      border="4px solid white"
                    />
                  )}
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
              {accountType.charAt(0).toUpperCase() + accountType.slice(1)}
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
                error={errors.Name}
              />
              <MyAccountTextfield
                type="text"
                placeholder="Username"
                {...register("Username", { required: true })}
                rules={{ required: "Username is required" }}
                error={errors.Username}
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

                <MyAccountDropdown
                  placeholder="Age"
                  {...register("Age", { required: true })}
                  items={ageRanges}
                />

                <MyAccountTextfield
                  type="text"
                  placeholder="Occupation"
                  {...register("Occupation", { required: true })}
                />
              </Box>
              <Box marginTop="40px">
                <Controller
                  name="image-main"
                  control={control}
                  defaultValue={null}
                  render={({ field }) => (
                    <ImageUpload returnSelected={(e) => field.onChange(e)} />
                  )}
                />
              </Box>
            </Stack>
            {accountType !== "propertyowner" ? (
              <>
                <SectionHeader>About Yourself</SectionHeader>
                <MyAccountMultilineField
                  placeholder="Provide a brief description about yourself..."
                  {...register("About")}
                  error={errors.About}
                />
              </>
            ) : null}

            {accountType === "tenant" || accountType === "homeowner" ? (
              <>
                <SectionHeader>Preferences</SectionHeader>
                <MyAccountMultilineField
                  placeholder="Provide what you’re looking for in  a rental or a housemate."
                  {...register("Preferences")}
                  error={errors.Preferences}
                />
              </>
            ) : null}

            {accountType === "tenant" ? (
              <>
                <SectionHeader>Price Range Preference</SectionHeader>
                <Box width="60vw">
                  <MyAccountSlider
                    control={control}
                    name="priceRange"
                    rules={{ required: "Price range is required" }}
                  />
                </Box>
              </>
            ) : null}

            {accountType === "homeowner" || accountType === "tenant" ? (
              <>
                <Stack direction="row">
                  <Box width="50%">
                    <SectionHeader>Personality Traits</SectionHeader>
                    <Box width="100%">
                      <MyAccountCheckBoxes
                        MenuItems={personalityTraits}
                        control={control}
                        prefix="personality"
                      />
                    </Box>
                  </Box>
                  <Box width="50%">
                    <SectionHeader>Interests</SectionHeader>
                    <Box width="100%">
                      <MyAccountCheckBoxes
                        MenuItems={interests}
                        control={control}
                        prefix="interests"
                      />
                    </Box>
                  </Box>
                </Stack>
              </>
            ) : null}
          </Stack>
        </Stack>
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

const MyAccountTextfield = React.forwardRef((props, ref) => {
  return (
    <TextField
      label={props.placeholder.length < 20 ? props.placeholder : ""}
      inputRef={ref}
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
      InputLabelProps={{ shrink: true }}
      {...props}
    />
  );
});

function MyAccountDropdown(props) {
  const { value, onChange, children, placeholder, items } = props;
  return (
    <FormControl
      variant="outlined"
      sx={{
        marginY: "20px",
        marginRight: "100px",
        width: "25vw",
      }}
    >
      <InputLabel
        shrink={true}
        placeholder={placeholder}
        sx={{
          paddingLeft: (theme) => theme.spacing(2),
          paddingRight: (theme) => theme.spacing(2),
        }}
      >
        {placeholder}
      </InputLabel>
      <Box
        sx={{
          background: "#E3E7EF",
          borderRadius: "30vmax",
          width: "25vw",
        }}
      >
        <Select
          value={value}
          onChange={onChange}
          label={placeholder}
          sx={{
            "& .MuiOutlinedInput-input": {
              color: "black",
              paddingLeft: (theme) => theme.spacing(3.5),
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "& .MuiSelect-icon": {
              color: "primary.main",
            },
            paddingRight: 2,
            borderRadius: "30vmax",
            minWidth: "25vw",
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                background: "#E3E7EF",
                borderRadius: "20px",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
              },
            },
          }}
          {...props}
        >
          {items.map((child, index) => (
            <MenuItem
              key={index}
              value={child}
              sx={{
                "&:not(:last-child)": {
                  borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                },
                "&:hover": {
                  background: "rgba(0, 0, 0, 0.08)",
                },
              }}
            >
              {child}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </FormControl>
  );
}

const MyAccountMultilineField = React.forwardRef((props, ref) => {
  const { placeholder, ...rest } = props;
  return (
    <MyAccountTextfield
      ref={ref}
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
});

function MyAccountSlider({ control, name, rules }) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={[600, 1500]}
      render={({ field }) => (
        <Slider
          {...field}
          type="range"
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
      )}
    />
  );
}

function MyAccountCheckBoxes(props) {
  const { MenuItems, control, prefix } = props;
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
      {MenuItems.map((name, index) => {
        return (
          <Controller
            key={index}
            name={`checkbox-${prefix}-${name}`}
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <FormControlLabel
                item
                control={
                  <Checkbox
                    {...field}
                    icon={BpIcon}
                    checkedIcon={BpCheckedIcon}
                    // styling
                  />
                }
                label={
                  <Typography fontWeight={400} width="10vw" marginLeft={"5px"}>
                    {name}
                  </Typography>
                }
                sx={{ marginBottom: 2 }}
              />
            )}
          />
        );
      })}
    </Grid>
  );
}


const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  listingAccount: state.auth.listingAccount,
});

export default connect(mapStateToProps)(MyAccount);