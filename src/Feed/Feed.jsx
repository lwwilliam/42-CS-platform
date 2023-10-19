import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import { RightSideContainer } from '../Components/Navbar/NavbarElements';
import "react-slideshow-image/dist/styles.css";
import "./Feed.css";
import axios from 'axios';
import { InstagramEmbed } from 'react-social-media-embed';

function Feed() {
  const [shortcode, setShortcode] = useState([]);
  const [shortcode2, setShortcode2] = useState([]);

  useEffect(() => {
    axios.get('https://42xsunwayclub.vercel.app/api/shortcode/yalee')
      .then(response => {
        setShortcode(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      }
    );
  }
  , []);

  useEffect(() => {
    if (shortcode) {
      let shortcode2 = shortcode;
      setShortcode2(shortcode2.slice(0, 8));
    }
  }, [shortcode]);


  return (
    <div>
      <Navbar />
      <RightSideContainer>
        <div className='feed-header'>Feed</div>
        <div style={{marginTop: "4vw"}}>
        {shortcode2.map((edge) => (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <InstagramEmbed url={`https://www.instagram.com/p/${edge}/`} width={800} />
          </div>
        ))}
      </div>
      </RightSideContainer>
    </div>
  );
}

export default Feed;