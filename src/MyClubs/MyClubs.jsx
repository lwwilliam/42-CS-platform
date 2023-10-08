import React from 'react';
import Navbar from '../Components/Navbar';
import './MyClubs.css'
import { RightSideContainer } from '../Components/Navbar/NavbarElements';

function MyClubs() {
  return (
    <div>
      <Navbar />
        <RightSideContainer>
        <div className='club-header'>My Clubs</div>
        <div style={{marginTop: "4vw"}}>
          <h2>Member of Sunway Board Games club since 9 October 2023</h2>
        </div>
        </RightSideContainer>
    </div>
  );
}

export default MyClubs;