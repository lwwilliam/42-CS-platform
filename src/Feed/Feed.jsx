import React from 'react';
import Navbar from '../Components/Navbar';
import { RightSideContainer } from '../Components/Navbar/NavbarElements';
import "react-slideshow-image/dist/styles.css";
import "./Feed.css";
import { InstagramEmbed } from 'react-social-media-embed';

function Feed() {
  const sample = require('./data.json');
  const edges = sample.edge_owner_to_timeline_media.edges;

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