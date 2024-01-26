import React from 'react';
import './App.css';
import Login from './Login/Login';
// import Feed from './Feed/Feed';
import MyClubs from './MyClubs/MyClubs';
import FAQ from './Faq/Faq';
// import Alerts from './Alerts/Alerts';
import ClubInfo from './AllClubs/AllClubs';
import SignUp from './SignUp/SignUp';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ClubPage from './ClubPage/ClubPage';
import Home from './Home/Home';


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
      </Routes>
    </Router>
  );
}

export default App;
