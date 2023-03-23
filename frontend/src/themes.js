import { ThemeProvider, createTheme } from "@mui/material/styles";

export const tenant = createTheme({
  palette: {
    primary: {
      main: "#000",
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
      main: "#000",
    },
    secondary: {
      main: "#000",
    },
  },
  typography: {
    fontFamily: `"Open Sans", sans-serif`,
  },
});
