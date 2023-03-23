import { ThemeProvider, createTheme } from "@mui/material/styles";

export const tenant = createTheme({
  palette: {
    primary: {
      main: "#F83E7D",
    },
    secondary: {
      main: "#000",
    },
  },
  typography: {
    fontFamily: `"Open Sans", sans-serif`,
  },
});

export const homeowner = createTheme({
  palette: {
    primary: {
      main: "#0045F1",
    },
    secondary: {
      main: "#000",
    },
  },
  typography: {
    fontFamily: `"Open Sans", sans-serif`,
  },
});

export const propertyowner = createTheme({
  palette: {
    primary: {
      main: "#113170",
    },
    secondary: {
      main: "#000",
    },
  },
  typography: {
    fontFamily: `"Open Sans", sans-serif`,
  },
});

export const others = createTheme({
  palette: {
    primary: {
      main: "#C5265C",
    },
    secondary: {
      main: "#000",
    },
  },
  typography: {
    fontFamily: `"Open Sans", sans-serif`,
  },
});