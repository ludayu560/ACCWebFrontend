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
import { update_listing_account } from "../../Redux/actions/listingAccount";

const personalityTraits =
  "Extroverted Outgoing Creative Private Quiet Introverted Open Analytical Laid-Back Adventurous".split(" ");
const interests = "Gardening Hiking Reading Puzzles Yoga Fitness Cooking Music Art Sports Cars Travel".split(" ");
const ageRanges = ["<18", "18-25", "26-35", "46-55", "56-65", "65+"];
const ageOptions = [
  { label: "<18", value: "<18" },
  { label: "18-25", value: "18-25" },
  { label: "26-35", value: "26-35" },
  { label: "46-55", value: "46-55" },
  { label: "56-65", value: "56-65" },
  { label: "65+", value: "65+" },
];

function MyAccount(props) {
  const { listingAccount, update_listing_account } = props;
  const [age, setAge] = useState(null);

  // State to track the loading status of the API call
  const [loading, setLoading] = useState(true);

  // Trigger state for 'action confirmed' popup
  const [triggerConfirmed, setTriggerConfirmed] = useState(false);

  // get the account type from the redux store
  const [accountType, setAccountType] = useState("tenant");
  useEffect(() => {
    if (listingAccount) {
      setAccountType(listingAccount.account_type);
    }

    const checkBoxData = {};
    // Iterate through all interests and set default values to false
    interests.forEach((interest) => {
      checkBoxData[`checkbox-interests-${interest}`] = false;
    });
    personalityTraits.forEach((trait) => {
      checkBoxData[`checkbox-personality-${trait}`] = false;
    });
    // Iterate through the array and set the value to true for existing interests
    if (listingAccount) {
      if (listingAccount.interests) {
        listingAccount.interests.forEach((item) => {
          checkBoxData[`checkbox-interests-${item.interest}`] = true;
        });
      }
      if (listingAccount.traits) {
        listingAccount.traits.forEach((item) => {
          checkBoxData[`checkbox-personality-${item.trait}`] = true;
        });
      }
    }

    // add default values for form fields from get request
    reset({
      About: listingAccount ? listingAccount.tell_us_about_yourself : "",
      Age: listingAccount ? listingAccount.age_range : "",
      Location: listingAccount ? listingAccount.location : "",
      Name: listingAccount ? listingAccount.first_name + " " + listingAccount.last_name : "",
      Occupation: listingAccount ? listingAccount.occupation : "",
      Phone: listingAccount ? listingAccount.phone_number : "",
      Preferences: listingAccount ? listingAccount.preferences : "",
      Username: listingAccount ? listingAccount.username : "",
      ...checkBoxData,
      "image-banner": listingAccount ? listingAccount.banner_picture : null,
      "image-main": listingAccount ? listingAccount.display_picture : null,
      "image-profile": listingAccount ? listingAccount.profile_picture : null,
      priceRange: [
        listingAccount ? listingAccount.price_range_min : 400,
        listingAccount ? listingAccount.price_range_max : 1200,
      ],
    });
    setAge(listingAccount ? listingAccount.age_range : "");

    setValue("Age", listingAccount ? listingAccount.age_range : "");
  }, [listingAccount]);

  // react-hook-form state management
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm({});

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

    listingAccount.tell_us_about_yourself = data.About;
    listingAccount.age_range = data.Age;
    listingAccount.Location = data.Location;
    listingAccount.Occupation = data.Occupation;
    listingAccount.Phone = data.Phone;
    listingAccount.preferences = data.Preferences;
    listingAccount.profile_picture = data["image-profile"];
    listingAccount.banner_picture = data["image-banner"];
    listingAccount.display_picture = data["image-main"];
    listingAccount.price_range_min = data.priceRange[0];
    listingAccount.price_range_max = data.priceRange[1];
    listingAccount.personalityTraits = personalityTraits;
    listingAccount.interests = interests;

    setTriggerConfirmed(true);

    // call update_listing_account here
    update_listing_account(listingAccount);
  };

  // debug console.log for watched values
  // const watchedValues = watch();
  // useEffect(() => {
  //   console.log("Current form values:", watchedValues);
  // }, [watchedValues]);

  return (
    <div>
      <ActionConfirmed trigger={triggerConfirmed} onActionCompleted={() => setTriggerConfirmed(false)} />

      <Box display="flex" flexDirection="column" alignItems="left" margin="4vw">
        <Typography variant="h2" padding="3vw" paddingBottom="3px" fontWeight='bold'>
          My Account
        </Typography>
        <Divider
          sx={{
            width: "15%",
            border: "3px solid",
            borderColor: "primary.main",
            opacity: 100,
            ml: "5vw"
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
              }}>
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
                  defaultLink={
                    listingAccount
                      ? listingAccount.banner_picture
                        ? `http://127.0.0.1:8000${listingAccount.banner_picture}`
                        : null
                      : null
                  }
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
                      defaultLink={
                        listingAccount
                          ? listingAccount.profile_picture
                            ? `http://127.0.0.1:8000${listingAccount.profile_picture}`
                            : null
                          : null
                      }
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
              width={"75vw"}>
              {accountType.charAt(0).toUpperCase() + accountType.slice(1)}
            </Typography>
            <SectionHeader>Personal Details</SectionHeader>
            <Typography color="#737373FA" fontSize="24px" fontWeight="600" marginLeft="20px" marginTop="-40px">
              *This information will not be visible on your public profile.
            </Typography>

            <Stack direction="row">
              <MyAccountTextfield
                type="text"
                placeholder="Name"
                {...register("Name")}
                error={errors.Name}
                disabled={true}
              />
              <MyAccountTextfield
                type="text"
                placeholder="Username"
                {...register("Username")}
                error={errors.Username}
                disabled={true}
              />
            </Stack>
            <Stack direction="row">
              <Box display="flex" flexDirection="column">
                <MyAccountTextfield type="tel" placeholder="Phone" {...register("Phone", { required: true })} />
                <MyAccountTextfield type="text" placeholder="Location" {...register("Location", { required: true })} />

                <MyAccountDropdown
                  name="Age"
                  placeholder="Age"
                  {...register("Age", { required: true })}
                  items={ageOptions}
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
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
                    <ImageUpload
                      defaultLink={
                        listingAccount
                          ? listingAccount.display_picture
                            ? `http://127.0.0.1:8000${listingAccount.display_picture}`
                            : null
                          : null
                      }
                      returnSelected={(e) => field.onChange(e)}
                    />
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
                      <MyAccountCheckBoxes MenuItems={personalityTraits} control={control} prefix="personality" />
                    </Box>
                  </Box>
                  <Box width="50%">
                    <SectionHeader>Interests</SectionHeader>
                    <Box width="100%">
                      <MyAccountCheckBoxes MenuItems={interests} control={control} prefix="interests" />
                    </Box>
                  </Box>
                </Stack>
              </>
            ) : null}
          </Stack>
        </Stack>
        <Box display="flex" justifyContent="center" marginTop="10vh" marginBottom="15vh">
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: "15vw",
              height: "75px",
              borderRadius: "30px",
            }}>
            <Typography fontWeight={500} fontSize={24}>
              Save
            </Typography>
          </Button>
        </Box>
      </form>
    </div>
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
      }}>
      <InputLabel
        shrink={true}
        placeholder={placeholder}
        sx={{
          paddingLeft: (theme) => theme.spacing(2),
          paddingRight: (theme) => theme.spacing(2),
        }}>
        {placeholder}
      </InputLabel>
      <Box
        sx={{
          background: "#E3E7EF",
          borderRadius: "30vmax",
          width: "25vw",
        }}>
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
          {...props}>
          {items.map((item) => (
            <MenuItem
              key={item.key}
              value={item.value}
              sx={{
                "&:not(:last-child)": {
                  borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                },
                "&:hover": {
                  background: "rgba(0, 0, 0, 0.08)",
                },
              }}>
              {item.value}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </FormControl>
  );
}

const MyAccountMultilineField = React.forwardRef((props, ref) => {
  const { placeholder, value, ...rest } = props;
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
        backgroundImage: "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))",
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
        backgroundImage: "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
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
                    checked={field.value}
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

export default connect(mapStateToProps, { update_listing_account })(MyAccount);
