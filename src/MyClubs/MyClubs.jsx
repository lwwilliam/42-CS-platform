import React from 'react';
import Navbar from '../Components/Navbar';
import { RightSideContainer } from '../Components/Navbar/NavbarElements';

function MyClubs() {
  return (
    <div>
      <Navbar />
        <RightSideContainer>
          <h1>Clubs</h1>
        </RightSideContainer>
    </div>
  );
}

export default MyClubs;