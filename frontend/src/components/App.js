import './App.css';
import {BrowserRouter as Router, Routes, Route, Link, createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from '../pages/Home'
import MyAccount from '../pages/MyAccount';
import Login from '../pages/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <div>
      <Link to="/home">Home</Link><br />
      <Link to="/account-homeowner">Homeowner Account</Link><br />
      <Link to="/account-tenant">Tenant Account</Link><br />
      <Link to="/login">Login</Link><br />


    </div>,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/account-homeowner",
    element: <MyAccount name='homeowner'/>,
  },
  {
    path: "/account-tenant",
    element: <MyAccount name='tenant'/>,
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
