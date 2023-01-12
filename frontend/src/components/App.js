import './App.css';
import {BrowserRouter as Router, Routes, Route, Link, createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from '../pages/Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
