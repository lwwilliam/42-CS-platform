import React from 'react';
import Navbar from '../Components/Navbar';
import { RightSideContainer } from '../Components/Navbar/NavbarElements';

function Feed() {
  return (
    <div>
      <Navbar />
        <RightSideContainer>
          <h1>Your Feed</h1>
        </RightSideContainer>
    </div>
  );
}

export default Feed;