import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import { RightSideContainer } from '../Components/Navbar/NavbarElements';
import "react-slideshow-image/dist/styles.css";
import "./Feed.css";
import { InstagramEmbed } from 'react-social-media-embed';

function Feed() {
  const [shortcode, setShortcode] = useState(null);
  const [loading, setLoading] = useState(true);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    // Check if data is stored in localStorage
    const storedData = localStorage.getItem('shortcode');
    if (storedData) {
      setShortcode(JSON.parse(storedData));
      setLoading(false);
    } else {
      // If data is not in localStorage, fetch it from the API
      fetch('http://localhost:5000/api/shortcode')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          if (data && data.edge_owner_to_timeline_media) {
            // Store data in state
            setShortcode(data);
            // Store data in localStorage for persistence
            localStorage.setItem('shortcode', JSON.stringify(data));
          } else {
            throw new Error('Data is empty or in an unexpected format');
          }
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    console.log(loading);
  }, []); // Empty dependency array ensures that this effect runs once after the initial render

  useEffect(() => {
    if (shortcode) {
      let edges = shortcode.edge_owner_to_timeline_media.edges;
      setEdges(edges.slice(0, 5));
    }
  }, [shortcode]); // This effect will run whenever 'shortcode' state changes
  
  return (
    <div>
      <Navbar />
      <RightSideContainer>
        <div className='feed-header'>Feed</div>
        <div style={{marginTop: "4vw"}}>
        {edges.map((edge) => (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <InstagramEmbed url={`https://www.instagram.com/p/${edge.node.shortcode}/`} width={800} />
          </div>
        ))}
      </div>
      </RightSideContainer>
    </div>
  );
}

export default Feed;

