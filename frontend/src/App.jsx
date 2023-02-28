import { BrowserRouter as Router, Routes, Route, Link, createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// login set up
import { Provider } from "react-redux";
import store from "./AuthComponents/store";
import Activate from "./AuthComponents/Activate";
import ResetPassword from "./AuthComponents/ResetPassword";
import ResetPasswordConfirm from "./AuthComponents/ResetPasswordConfirm";
import Layout from "./AuthComponents/Layout";

import Home from "./components/pages/Home";
import MyAccount from "./components/pages/MyAccount";
import MyAccountBilling from "./components/pages/MyAccountBilling";
import MyAccountEvents from "./components/pages/MyAccountEvents";
import MyAccountHelp from "./components/pages/MyAccountHelp";
import MyAccountNotifications from "./components/pages/MyAccountNotifications";
import MyAccountSettings from "./components/pages/MyAccountSettings";
import { Toolbar } from "@mui/material";
import SignupManager from "./components/pages/SignupManager";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import MyAccountSubscribe from "./components/pages/MyAccountSubscribe";
import MyAccountBillSummary from "./components/pages/MyAccountBilling2";
import MyAccountMySubscriptions from "./components/pages/MyAccountBilling3";
import MyAccountFavourites from "./components/pages/MyAccountFavourites";
import MyAccountProfile from "./components/pages/MyAccountProfile";
import Landing from "./components/pages/Landing";
import Events from "./components/pages/Events";
import TenantHome from "./components/pages/TenantHome";
import Housemates from "./components/pages/Housemates";
import Listing from "./components/pages/Listing";
import Dashboard from "./components/pages/Dashboard";
import Homeowners from "./components/pages/Homeowners";
import ListingDetails from "./components/pages/ListingDetails";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import HowItWorks from "./components/pages/HowItWorks";

const router = createBrowserRouter([
  // authn
  {
    path: "/activate/:uid/:token",
    element: <Activate></Activate>,
  },
  {
    path: "/reset-password",
    element: <ResetPassword></ResetPassword>,
  },
  {
    path: "/password/reset/confirm/:uid/:token",
    element: <ResetPasswordConfirm></ResetPasswordConfirm>,
  },
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
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <SignupManager></SignupManager>,
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

  // Is this needed?
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
        <Homeowners />
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
        <Dashboard variant="propertyOwner" />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Toolbar sx={{ height: 114 }} />
        <About />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Toolbar sx={{ height: 114 }} />
        <Contact />
      </>
    ),
  },
  {
    path: "/howItWorks",
    element: (
      <>
        <Toolbar sx={{ height: 114 }} />
        <HowItWorks />
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
  {
    path: "/listingdetails",
    element: (
      <>
        <Toolbar sx={{ height: 168 }} />
        <ListingDetails></ListingDetails>
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
    <Provider store={store}>
      <ThemeProvider theme={THEME}>
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
