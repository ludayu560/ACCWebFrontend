import { Routes, Route, BrowserRouter } from "react-router-dom";

import { ThemeProvider, createTheme } from "@mui/material/styles";

// login set up
import { Provider } from "react-redux";
import store from "./AuthComponents/store";
import Activate from "./AuthComponents/Activate";
import ResetPassword from "./AuthComponents/ResetPassword";
import ResetPasswordConfirm from "./AuthComponents/ResetPasswordConfirm";
import Layout from "./AuthComponents/Layout";

import MyAccount from "./components/pages/MyAccount";
import MyAccountBilling from "./components/pages/MyAccountBilling";
import MyAccountEvents from "./components/pages/MyAccountEvents";
import MyAccountHelp from "./components/pages/MyAccountHelp";
import MyAccountNotifications from "./components/pages/MyAccountNotifications";
import MyAccountSettings from "./components/pages/MyAccountSettings";
import SignupManager from "./components/pages/SignupManager";
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
import RentalListingForm from "./components/pages/RentalListingForm";
import CustomTextField from "./components/components/CustomTextField";
import ImageUpload from "./components/components/ImageUploadComponent";
import EventDetails from "./components/pages/EventDetails";
import BrowseEvents from "./components/pages/BrowseEvents";
import { connect } from "react-redux";
import { tenant, homeowner } from "./themes";
function App({account_type}) {
  const [theme, setTheme] = useState(tenant);
  if (account_type) {
    if (account_type === "tenant") {
      setTheme(tenant);
    } else if (account_type === "homeowner") {
      setTheme(homeowner);
    }
  }
  //  const THEME = createTheme({
  //   typography: {
  //     fontFamily: `"Open Sans", sans-serif`,
  //   },
  // });

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route exact path="/listingdetails" element={<ListingDetails />} />
              <Route exact path="/eventdetails" element={<EventDetails />} />
              <Route exact path="/account-help" element={<MyAccountHelp />} />
              <Route exact path="/account-mysubscriptions" element={<MyAccountMySubscriptions />} />
              <Route exact path="/account-billsummary" element={<MyAccountBillSummary />} />
              <Route exact path="/account-subscribe" element={<MyAccountSubscribe />} />
              <Route exact path="/account-billing" element={<MyAccountBilling />} />
              <Route exact path="/account-favourites" element={<MyAccountFavourites />} />
              <Route exact path="/account-settings" element={<MyAccountSettings />} />
              <Route exact path="/account-events" element={<MyAccountEvents />} />
              <Route exact path="/account-notifications" element={<MyAccountNotifications />} />
              <Route exact path="/account-profile" element={<MyAccountProfile />} />
              <Route exact path="/account" element={<MyAccount />} />
              <Route exact path="/howItWorks" element={<HowItWorks />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/dashboard" element={<Dashboard variant="propertyOwner" />} />
              <Route exact path="/RLF" element={<RentalListingForm />} />
              <Route exact path="/listings" element={<Listing />} />
              <Route exact path="/housemates" element={<Housemates />} />
              <Route exact path="/homeowners" element={<Homeowners />} />
              <Route exact path="/tenanthome" element={<TenantHome />} />
              <Route exact path="/events" element={<Events />} />
              <Route exact path="/browseevents" element={<BrowseEvents/>} />
              <Route exact path="/" element={<Landing />} />
              <Route exact path="/activate/:uid/:token" element={<Activate />} />
              <Route exact path="/reset-password" element={<ResetPassword />} />
              <Route exact path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm />} />

              <Route
                exact
                path="/dev"
                element={
                  <>
                    <ImageUpload></ImageUpload>
                    <CustomTextField></CustomTextField>
                  </>
                }
              />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}


const mapStateToProps = (state) => ({
  account_type: state.auth.account_type,
});


export default connect(mapStateToProps, { account_type })(App);
