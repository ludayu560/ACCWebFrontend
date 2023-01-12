import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './Home'
function App() {
  return (
    <Router>
      <Link to='homepage'><Home></Home></Link>
    </Router>
    
  );
}

export default App;
