import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Loading from '../Components/LoadingOverlay';
import { RightSideContainer } from '../Components/Navbar/NavbarElements';
import "react-slideshow-image/dist/styles.css";
import "./Feed.css";
import axios from 'axios';
import { InstagramEmbed } from 'react-social-media-embed';

const BACKEND_URL = process.env.REACT_APP_API_URL;

function Feed() {
  const [shortcode, setShortcode] = useState([]);
  const [shortcode2, setShortcode2] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
    const id = localStorage.getItem('id');
    axios.get(`${BACKEND_URL}/api/shortcode/${id}`)
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
      setShortcode2(shortcode2.slice(0, 10));
    }
  }, [shortcode]);


  return (
    <div>
      {loading && <Loading/>}
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
