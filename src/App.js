import React from 'react';
import './App.css';
import Login from './Login/Login';
import Home from './Home/Home';
import About from './About/About';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Login} />
        <Route path='/home' Component={Home} />
        <Route path='/about' Component={About} />
      </Routes>
    </Router>
  );
}

export default App;