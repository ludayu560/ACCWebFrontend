import {BrowserRouter as Router, Routes, Route, Link, createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './Home'
import MyAccount from './MyAccount';
import MyAccountBilling from './MyAccountBilling';
import MyAccountEvents from './MyAccountEvents';
import MyAccountHelp from './MyAccountHelp';
import MyAccountNotifications from './MyAccountNotifications';
import MyAccountSettings from './MyAccountSettings';
import { Toolbar } from '@mui/material';
import Signup from './Signup';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Login from './Login';
import MyAccountSubscribe from './MyAccountSubscribe';

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <>
      <Link to="/home">Home</Link><br />
      <Link to="/account-homeowner">Homeowner Account</Link><br />
      <Link to="/account-tenant">Tenant Account</Link><br />
      <Link to="/account-events">Events</Link><br />
      <Link to="/account-notifications">Notifications</Link><br />
      <Link to="/account-settings">settings</Link><br />
      <Link to="/account-billing">billing</Link><br />
      <Link to="/account-subscribe">subscribe</Link><br />
      <Link to="/account-help">help</Link><br />
      <Link to="/signup">Signup</Link><br />

    </>,
  },
  {
    path: "/home",
    element: 
    <>
      <Toolbar sx={{ height: 168 }}/>
      <Home />
    </>,
  },
  {
    path: "/account-homeowner",
    element: 
    <>
    <Toolbar sx={{ height: 168}}/>
    <MyAccount name='Homeowner'/>
    </>,
  },
  {
    path: "/account-tenant",
    element: 
    <>
    <Toolbar sx={{ height: 168}}/>
    <MyAccount name='Tenant'/>
    </>,
  },
  {
    path: "/account-notifications",
    element: 
    <>
    <Toolbar sx={{ height: 168}}/>
    <MyAccountNotifications/>
    </>,
  },
  {
    path: "/account-events",
    element: 
    <>
    <Toolbar sx={{ height: 168}}/>
    <MyAccountEvents/>
    </>,
  },
  {
    path: "/account-settings",
    element: 
    <>
    <Toolbar sx={{ height: 168}}/>
    <MyAccountSettings/>
    </>,
  },
  {
    path: "/account-billing",
    element: 
    <>
    <Toolbar sx={{ height: 168}}/>
    <MyAccountBilling/>
    </>,
  },
  {
    path: "/account-subscribe",
    element: 
    <>
    <Toolbar sx={{ height: 168}}/>
    <MyAccountSubscribe/>
    </>,
  },
  {
    path: "/account-help",
    element: 
    <>
    <Toolbar sx={{ height: 168}}/>
    <MyAccountHelp/>
    </>,
  },
  {
    path: "/signup",
    element: <Signup nav='1'/>,
  },
  {
    path: "/signup/2",
    element: <Signup nav='2'/>,
  },
  {
    path: "/signup/3",
    element: <Signup nav='3'/>,
  },
  {
    path: "/login",
    element: <Signup name='login'/>,
  },
]);

function App() {
  const THEME = createTheme({
    typography: {
     "fontFamily": `"Open Sans", sans-serif`,
    }
 });
  return (
    <ThemeProvider theme={THEME}>
        <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
