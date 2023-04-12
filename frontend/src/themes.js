import React, { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { connect } from "react-redux";

const baseTheme = createTheme({
  typography: {
    fontFamily: `"Open Sans", sans-serif`,
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
  console.log(selectedTheme.palette.primary.main)

  useEffect(() => {
    setSelectedTheme(selectTheme(account_type));
  }, [account_type]);

  return <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>;
};

const mapStateToProps = (state) => ({
  account_type: state.auth.account_type,
});

export default connect(mapStateToProps)(ConnectedThemeProvider);
