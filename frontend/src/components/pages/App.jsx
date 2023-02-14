import { BrowserRouter as Router, Routes, Route, Link, createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Home from "./Home";
import MyAccount from "./MyAccount";
import MyAccountBilling from "./MyAccountBilling";
import MyAccountEvents from "./MyAccountEvents";
import MyAccountHelp from "./MyAccountHelp";
import MyAccountNotifications from "./MyAccountNotifications";
import MyAccountSettings from "./MyAccountSettings";
import { Toolbar } from "@mui/material";
import SignupManager from "./SignupManager";
import Signup from "./Signup";
import Login from "./Login";
import MyAccountSubscribe from "./MyAccountSubscribe";
import MyAccountBillSummary from "./MyAccountBilling2";
import MyAccountMySubscriptions from "./MyAccountBilling3";
import MyAccountFavourites from "./MyAccountFavourites";
import MyAccountProfile from "./MyAccountProfile";
import Landing from "./Landing";
import Events from "./Events";
import TenantHome from "./TenantHome";
import Housemates from "./Housemates";
import Listing from "./Listing";
import Dashboard from "./Dashboard";
import Homeowners from "./Homeowners";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Toolbar sx={{ height: 168 }} />
        <Landing />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <Login></Login>
    )
  },
  {
    path: "/signup",
    element: (
      <SignupManager></SignupManager>
    )
  },
  {
    path: "/landing",
    element: (
      <>
        <Toolbar sx={{ height: 168 }} />
        <Landing />
      </>
    ),
  },
  {
    path: "/home",
    element: (
      <>
        <Toolbar sx={{ height: 168 }} />
        <Home />
      </>
    ),
  },
  {
    path: "/events",
    element: (
      <>
        <Toolbar sx={{ height: 114 }} />
        <Events />
      </>
    ),
  },
  {
    path: "/tenanthome",
    element: (
      <>
        <Toolbar sx={{ height: 114 }} />
        <TenantHome />
      </>
    ),
  },
  {
    path: "/homeowners",
    element: (
      <>
        <Toolbar sx={{ height: 114 }} />
        <Homeowners/>
      </>
    ),
  },
  {
    path: "/housemates",
    element: (
      <>
        <Toolbar sx={{ height: 114 }} />
        <Housemates />
      </>
    ),
  },
  {
    path: "/listing",
    element: (
      <>
        <Toolbar sx={{ height: 114 }} />
        <Listing />
      </>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <>
        <Toolbar sx={{ height: 114 }} />
        <Dashboard/>
      </>
    ),
  },
  {
    path: "/account-homeowner",
    element: (
      <>
        <Toolbar sx={{ height: 168 }} />
        <MyAccount name="Homeowner" />
      </>
    ),
  },
  {
    path: "/account-tenant",
    element: (
      <>
        <Toolbar sx={{ height: 168 }} />
        <MyAccount name="Tenant" />
      </>
    ),
  },
  {
    path: "/account-profile",
    element: (
      <>
        <Toolbar sx={{ height: 114 }} />
        <MyAccountProfile />
      </>
    ),
  },
  {
    path: "/account-notifications",
    element: (
      <>
        <Toolbar sx={{ height: 168 }} />
        <MyAccountNotifications />
      </>
    ),
  },
  {
    path: "/account-events",
    element: (
      <>
        <Toolbar sx={{ height: 168 }} />
        <MyAccountEvents />
      </>
    ),
  },
  {
    path: "/account-settings",
    element: (
      <>
        <Toolbar sx={{ height: 168 }} />
        <MyAccountSettings />
      </>
    ),
  },
  {
    path: "/account-favourites",
    element: (
      <>
        <Toolbar sx={{ height: 168 }} />
        <MyAccountFavourites />
      </>
    ),
  },
  {
    path: "/account-billing",
    element: (
      <>
        <Toolbar sx={{ height: 168 }} />
        <MyAccountBilling />
      </>
    ),
  },
  {
    path: "/account-subscribe",
    element: (
      <>
        <Toolbar sx={{ height: 168 }} />
        <MyAccountSubscribe />
      </>
    ),
  },
  {
    path: "/account-billsummary",
    element: (
      <>
        <Toolbar sx={{ height: 168 }} />
        <MyAccountBillSummary />
      </>
    ),
  },
  {
    path: "/account-mysubscriptions",
    element: (
      <>
        <Toolbar sx={{ height: 168 }} />
        <MyAccountMySubscriptions />
      </>
    ),
  },
  {
    path: "/account-help",
    element: (
      <>
        <Toolbar sx={{ height: 168 }} />
        <MyAccountHelp />
      </>
    ),
  },
]);

function App() {
  const THEME = createTheme({
    typography: {
      fontFamily: `"Open Sans", sans-serif`,
    },
  });
  
  return (
    <ThemeProvider theme={THEME}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
