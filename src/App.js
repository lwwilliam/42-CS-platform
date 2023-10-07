import React from 'react';
import './App.css';
import Login from './Login/Login';
import Feed from './Feed/Feed';
import MyClubs from './MyClubs/MyClubs';
import Alerts from './Alerts/Alerts';
import ClubInfo from './ClubInfo/ClubInfo';
import SignUp from './SignUp/SignUp';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  const url = window.location.href;
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Login} />
        <Route path='/Feed' Component={Feed} />
        <Route path='/MyClubs' Component={MyClubs} />
        <Route path='/Alerts' Component={Alerts} />
        <Route path='/ClubInfo' Component={ClubInfo} />
        {url.includes("SignUp") ? <Route path='*' Component={SignUp} /> : null}
      </Routes>
    </Router>
  );
}

export default App;
