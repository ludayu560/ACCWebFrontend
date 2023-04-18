import React, { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { connect } from "react-redux";
import "@fontsource/montserrat";

const baseTheme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        h6: {
          color: "#113170", // Set color for h1 typography element
        },
      },
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
    color: "#fff",
    body1: {
      fontFamily: "Montserrat, sans-serif",
      // Use Montserrat for body text
    },
    body2: {
      fontFamily: "Montserrat, sans-serif", // Use Montserrat for body text
    },
  },
  box: {
    fontFamily: "Montserrat, sans-serif",
  },
});

const tenant = createTheme({
  ...baseTheme,
  palette: {
    primary: {
      main: "#F83E7D",
    },
    secondary: {
      main: "#000",
    },
  },
});

const homeowner = createTheme({
  ...baseTheme,
  palette: {
    primary: {
      main: "#0045F1",
    },
    secondary: {
      main: "#000",
    },
  },
});

const propertyowner = createTheme({
  ...baseTheme,
  palette: {
    primary: {
      main: "#113170",
    },
    secondary: {
      main: "#000",
    },
  },
});

const others = createTheme({
  ...baseTheme,
  palette: {
    primary: {
      main: "#C5265C",
    },
    secondary: {
      main: "#000",
    },
  },
});

const selectTheme = (account_type) => {
  switch (account_type) {
    case "tenant":
      return tenant;
    case "homeowner":
      return homeowner;
    case "propertyowner":
      return propertyowner;
    default:
      return others;
  }
};

const ConnectedThemeProvider = ({ children, account_type }) => {
  const [selectedTheme, setSelectedTheme] = useState(others);

  useEffect(() => {
    setSelectedTheme(selectTheme(account_type));
  }, [account_type]);

  return <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>;
};

const mapStateToProps = (state) => ({
  account_type: state.auth.account_type,
});

export default connect(mapStateToProps)(ConnectedThemeProvider);
