import React from 'react';
import Navbar from '../Components/Navbar';
import { RightSideContainer } from '../Components/Navbar/NavbarElements';

function Alerts() {
  return (
    <div>
      <Navbar />
        <RightSideContainer>
        <h1>Alerts</h1>
        </RightSideContainer>
    </div>
  );
}

export default Alerts;