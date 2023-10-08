import React from 'react';
import Navbar from '../Components/Navbar';
import { RightSideContainer } from '../Components/Navbar/NavbarElements';

function MyClubs() {
  return (
    <div>
      <Navbar />
        <RightSideContainer>
          <h1>Clubs</h1>
          <h2>Member of Sunway Board Games club since 9 October 2023</h2>
        </RightSideContainer>
    </div>
  );
}

export default MyClubs;