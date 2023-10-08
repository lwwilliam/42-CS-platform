import React from 'react';
import Navbar from '../Components/Navbar';
import './MyClubs.css'
import { RightSideContainer } from '../Components/Navbar/NavbarElements';
import bgs_logo from '../images/bgs_logo.png';

function MyClubs() {
  return (
    <div>
      <Navbar />
        <RightSideContainer>
        <div className='club-header'>My Clubs</div>
        <div style={{marginTop: "4vw", backgroundColor: 'cyan', textAlign:'center', border:'5px solid black'}}>
          <h2>Member of Sunway Board Games club since 9 October 2023</h2>
          <div className='club'>
            <img src={bgs_logo} alt="bgs_logo"  />
          </div>
        </div>
        </RightSideContainer>
    </div>
  );
}

export default MyClubs;