import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';

// import Feed from './Feed/Feed';
// import Alerts from './Alerts/Alerts';
import Login from './view/Login/Login';
import MyClubs from './view/MyClubs/MyClubs';
import FAQ from './view/Faq/Faq';
import ClubInfo from './view/AllClubs/AllClubs';
import SignUp from './view/SignUp/SignUp';
import ClubPage from './view/ClubPage/ClubPage';
import Home from './view/Home/Home';
import ContactUs from './view/ContactUs/ContactUs';


function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path='/Feed' element={<Feed />} /> */}
        <Route path='/' element={<Login />} />
        <Route path='/MyClubs' element={<MyClubs />} />
        <Route path='/FAQ' element={<FAQ />} />
        <Route path='/AllClubs' element={<ClubInfo />} />
        <Route path='/SignUp/*' element={<SignUp />} />
		    <Route path='/Clubhomepage' element={<ClubPage />} />
        <Route path="/Home" element={<Home />} />
      <Route path='/ContactUs' element = {<ContactUs/>} />
      </Routes>
    </Router>
  );
}

export default App;
