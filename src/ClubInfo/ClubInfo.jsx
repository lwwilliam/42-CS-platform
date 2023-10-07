import React from 'react';
import { ClubLink } from './ClubInfoLink';
import Navbar from '../Components/Navbar';
import { RightSideContainer } from '../Components/Navbar/NavbarElements';
import './ClubInfo.css';

function ClubInfo() {
  return (
    <div>
      <Navbar />
        <RightSideContainer>
          <div className='club-info'>Clubs</div>
          <div className='empty'>a</div>
          <div className='empty'>a</div>
          <ClubLink to = "/placeholder">
            GDSC Sunway
          </ClubLink>
          <div className='content'>
            Google Developer Student Clubs are university based community groups for students interested in Google developer technologies.<br></br>
            Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome.<br></br>
            By joining a GDSC, students grow their knowledge in a peer-to-peer
            learning environment and build solutions for local businesses and their community.
          </div>
          <div className='empty'>a</div>
          <ClubLink to = "/placeholder">
            Sunway University Chinese Cultural Society
          </ClubLink>
          <div className='content'>
            Non-sports club at Sunway University that focuses on raising awareness of Chinese culture.<br></br>
            (1) Inherit the Chinese language and Chinese culture and extend to people of all nationalities.<br></br>
            (2) Encourage the students, whom are the pillars of society, to utilize their strengths and benefit the country and people.<br></br>
            (3) Enhance the members' ability of independent thinking and events organization.<br></br>
            (4) Provide a Chinese-language platform for students to unite and exchange ideas.<br></br>
            (5) Nurture a team of leaders, strengthen our society from various aspects.<br></br>
          </div>
          <div className='empty'>a</div>
          <ClubLink to = "/placeholder">
            Sun-U Anime Club
          </ClubLink>
          <div className='content'>
            The Sunway University Anime Club is a dynamic and diverse group of students who share an
            unbridled passion for all things anime and manga.<br></br>
            Our club is a lively hub where students from different
            backgrounds come together to celebrate the art, storytelling, and culture of Japan.
          </div>
          <div className='empty'>a</div>
          <ClubLink to = "/placeholder">
            Sunway Music Society
          </ClubLink>
          <div className='content'>
            The society welcomes all Sunwayians who loves music and treats music more than just
            a simple interest for the day.<br></br> Those who are passionate about music
            and also loves to share their interest with others who share
            the same love, you are in the right place!
          </div>
        </RightSideContainer>
    </div>
  );
}

export default ClubInfo;
