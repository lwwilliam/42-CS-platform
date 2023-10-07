import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import { RightSideContainer } from '../Components/Navbar/NavbarElements';

function Feed() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Make an HTTP GET request to the API
    axios.get('http://localhost:5000/api/scrapedata')
      .then(response => {
        // Update the state with the response data
        setData(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    }, []);
    console.log(data)
    
  return (
    <div>
      <Navbar />
      <RightSideContainer>
        <h1>Your Feed</h1>
          <div>
            <h2>API Data:</h2>
            <h3>{data}</h3>
          </div>
      </RightSideContainer>
    </div>
  );
}

export default Feed;


