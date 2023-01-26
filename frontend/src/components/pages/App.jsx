import './App.css';
import {BrowserRouter as Router, Routes, Route, Link, createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './Home'
import MyAccount from './MyAccount';
import MyAccountNotifications from './MyAccountNotifications';
import Login from './Login';
import NavBar from '../NavBar';
import Footer from '../Footer';
import { Toolbar } from '@mui/material';
import MyAccountEvents from './MyAccountEvents';
import MyAccountSettings from './MyAccountSettings';
import MyAccountBilling from './MyAccountBilling';
import MyAccountHelp from './MyAccountHelp';

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
      <Link to="/account-help">help</Link><br />
      <Link to="/login">Login</Link><br />
      <Footer></Footer>
    </>,
  },
  {
    path: "/home",
    element: 
    <>
      <Toolbar sx={{ height: 168}}/>
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
    path: "/account-help",
    element: 
    <>
    <Toolbar sx={{ height: 168}}/>
    <MyAccountHelp/>
    </>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}


export default App;
