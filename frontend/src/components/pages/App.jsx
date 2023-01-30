import './App.css';
import {BrowserRouter as Router, Routes, Route, Link, createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './Home'
import MyAccount from './MyAccount';
import { Toolbar } from '@mui/material';
import Signup from './Signup';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <>
      <Link to="/home">Home</Link><br />
      <Link to="/account-homeowner">Homeowner Account</Link><br />
      <Link to="/account-tenant">Tenant Account</Link><br />
      <Link to="/login">Login</Link><br />
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
