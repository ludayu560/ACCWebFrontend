import './App.css';
import {BrowserRouter as Router, Routes, Route, Link, createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './Home'
import MyAccount from './MyAccount';
import Login from './Login';
import NavBar from '../NavBar';
import Footer from '../Footer';
import { Toolbar } from '@mui/material';

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <>
      <Link to="/home">Home</Link><br />
      <Link to="/account-homeowner">Homeowner Account</Link><br />
      <Link to="/account-tenant">Tenant Account</Link><br />
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
