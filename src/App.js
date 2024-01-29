import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';

// import Feed from './Feed/Feed';
// import Alerts from './Alerts/Alerts';
import Login from './Login/Login';
import MyClubs from './MyClubs/MyClubs';
import FAQ from './Faq/Faq';
import ClubInfo from './AllClubs/AllClubs';
import SignUp from './SignUp/SignUp';
import ClubPage from './ClubPage/ClubPage';
import ContactUs from './ContactUs/ContactUs';


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
		<Route path='/ContactUs' element = {<ContactUs/>} />
      </Routes>
    </Router>
  );
}

export default App;
