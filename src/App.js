import React from 'react';
import './App.css';
import Login from './Login/Login';
import Feed from './Feed/Feed';
import MyClubs from './MyClubs/MyClubs';
import FAQ from './FAQ/FAQ';
// import Alerts from './Alerts/Alerts';
import ClubInfo from './ClubInfo/ClubInfo';
import SignUp from './SignUp/SignUp';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Feed' element={<Feed />} />
        <Route path='/MyClubs' element={<MyClubs />} />
        <Route path='/FAQ' element={<FAQ />} />
        <Route path='/ClubInfo' element={<ClubInfo />} />
        <Route path='/SignUp/*' element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
