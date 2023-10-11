import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import './MyClubs.css';
import { RightSideContainer } from '../Components/Navbar/NavbarElements';
import bgs_logo from '../images/bgs_logo.png';

function MyClubs() {
  const [apiResponse, setApiResponse] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/ft');
      if (response.ok) {
        const data = await response.json();
        setApiResponse(data);
      } else {
        console.error('API request failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <RightSideContainer>
        <div className='club-header'>My Clubs</div>
        <div style={{ marginTop: '4vw', backgroundColor: 'cyan', textAlign: 'center', border: '5px solid black' }}>
          <h2>Member of Sunway Board Games club since 9 October 2023</h2>
          <div className='club'>
            <img src={bgs_logo} alt='bgs_logo' />
          </div>
        </div>
        <button onClick={fetchData}>Fetch Data</button>
        <div className='api-response'>
          {apiResponse && (
            <pre className='white-text'>{JSON.stringify(apiResponse, null, 2)}</pre>
          )}
        </div>
      </RightSideContainer>
    </div>
  );
}

export default MyClubs;
