import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import { RightSideContainer } from '../Components/Navbar/NavbarElements';
import "react-slideshow-image/dist/styles.css";
import "./Feed.css";
import { InstagramEmbed } from 'react-social-media-embed';

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

    const [shortcode, setStrings] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Fetch the list of strings from the Flask backend
      fetch('http://localhost:5000/api/shortcode')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          // Set the list of strings in state
          setStrings(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    }, []);
    
  return (
    <div>
      <Navbar />
      <RightSideContainer>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
          <InstagramEmbed url="https://www.instagram.com/p/Ctp859gPSot/" width={800}/>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
          <InstagramEmbed url="https://www.instagram.com/p/CyBVtRAvymR/" width={800}/>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
          <InstagramEmbed url="https://www.instagram.com/p/Cx7diC1vZP_/" width={800}/>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
          <InstagramEmbed url="https://www.instagram.com/p/CsydDN7PbOG/" width={800}/>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
          <InstagramEmbed url="https://www.instagram.com/p/CsVXYe3pBiG/" width={800}/>
      </div>
      </RightSideContainer>
    </div>
  );
}

export default Feed;


