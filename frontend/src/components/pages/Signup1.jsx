import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Stack from "@mui/system/Stack";
import React from "react";
import { Controller, useForm } from "react-hook-form";

import ArrowForwardIcon from "@mui/icons-material/ArrowForwardIos";
import { TextField } from "@mui/material";
import SignupAisha from "../components/SignupAishaLogo";
import SignupProgressionIcon from "../components/SignupProgressIcon";

function CustomTextField({ control, name, label, rules, error, helperText, ...rest }) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <TextField
          {...rest}
          label={label}
          error={error}
          helperText={helperText}
          sx={{
            width: "15vw",
            input: {
              color: "black",
            },
            "& label": { paddingLeft: (theme) => theme.spacing(2) },
            "& input": { paddingLeft: (theme) => theme.spacing(3.5) },
            "& fieldset": {
              paddingLeft: (theme) => theme.spacing(2.5),
              borderRadius: "30vmax",
              border: "4px solid #73737380",
            },
          }}
          inputProps={{
            ref,
            onBlur,
            onChange,
            value,
            sx: {
              "&:-webkit-autofill": {
                WebkitBoxShadow: "0 0 0 1000px white inset",
              },
            },
          }}
        />
      )}
    />
  );
}

function Page1({ setPage, returnHook }) {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data :", data);
    returnHook(data);
    setPage(2);
  };

  const validatePassword = (password) => {
    // Regex for at least 6 characters, one uppercase, one lowercase and one number
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    return (
      regex.test(password) ||
      "Password does not meet requirements"
    );
  };

  // const watchedValues = watch();
  // useEffect(() => {
  //   console.log("Current form values:", watchedValues);
  // }, [watchedValues]);
  return (
    <Grid container>
      <SignupAisha></SignupAisha>
      <Grid item xs={8}>
        <Stack
          alignItems={"left"}
          justifyContent={"center"}
          paddingLeft={"10vw"}
          paddingRight={"10vw"}
          paddingTop={"10vh"}
          maxWidth={"100%"}
        >
          <SignupProgressionIcon stage="1" />
          <Typography
            variant="h4"
            fontWeight={600}
            paddingTop={"5vh"}
            paddingBottom={"2vh"}
          >
            Sign-up
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container rowSpacing={"1vh"} columnSpacing={"1vw"}>
              <Grid item xs={6}>
                {/* First Name */}
                <CustomTextField
                  control={control}
                  name="firstName"
                  label="First Name"
                  rules={{ required: true }}
                />
              </Grid>
              <Grid item xs={6}>
                {/* Last Name */}
                <CustomTextField
                  control={control}
                  name="lastName"
                  label="Last Name"
                  rules={{ required: true }}
                />
              </Grid>
              <Grid item xs={6}>
                {/* Username */}
                <CustomTextField
                  control={control}
                  name="username"
                  label="Username"
                  rules={{ required: true }}
                />
              </Grid>
              <Grid item xs={6}>
                {/* Email Address */}
                <CustomTextField
                  control={control}
                  name="email"
                  label="Email Address"
                  type="email"
                  rules={{ required: true }}
                />
              </Grid>
              <Grid item xs={6}>
                {/* Password */}
                <CustomTextField
                  control={control}
                  name="password"
                  label="Password"
                  type="password"
                  error={errors.password}
                  helperText={errors.password && errors.password.message}
                  rules={{
                    required: "Password is required.",
                    validate: validatePassword,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                {/* Confirm Password */}
                <CustomTextField
                  control={control}
                  name="passwordConfirm"
                  label="Confirm Password"
                  type="password"
                  error={errors.passwordConfirm}
                  helperText={
                    errors.passwordConfirm && errors.passwordConfirm.message
                  }
                  rules={{
                    required: "Confirm Password is required.",
                    validate: {
                      passwordMatch: (value) =>
                        value === watch("password") ||
                        "Passwords do not match.",
                      passwordRequirements: validatePassword,
                    },
                  }}
                />
              </Grid>
            </Grid>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
              paddingTop={"5vh"}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    {...register("newsConsent")}
                    sx={{ "&.Mui-checked": { color: "#F83E7D" } }}
                  />
                }
                label={
                  <Typography variant="p" fontWeight={600}>
                    I agree to receive news and updates.
                  </Typography>
                }
              />
              <Grid item xs={3} marginY={4}>
                <Button
                  type="submit"
                  variant="contained"
                  style={{
                    padding: 20,
                    paddingLeft: 40,
                    paddingRight: 40,
                    borderRadius: "100vmax",
                    textTransform: "none",
                    background: "#F83E7D",
                    color: "white",
                  }}
                  endIcon={<ArrowForwardIcon />}
                  sx={{ backgroundColor: "primary.main" }}
                >
                  <Typography
                    variant="h5"
                    fontWeight={600}
                    sx={{ typography: { xs: "h6", sm: "h6", lg: "h5" } }}
                  >
                    Next
                  </Typography>
                </Button>
              </Grid>

              <Typography variant="h6" fontWeight={700}>
                Already a member? &nbsp;
                <Link
                  color={"#F83E7D"}
                  href="/login"
                  sx={{ textDecoration: "none", color: "#F83E7D" }}
                >
                  Login
                </Link>
              </Typography>
            </Grid>
          </form>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Page1;
