import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from "axios";

import Layout from "../Components/layout";
// import Button from "../Components/Button";
import fb_logo from "../assets/icons/facebook.svg"
import insta_logo from "../assets/icons/instagram.svg"
import AnnouncementCard from "../Components/AnnouncementCard";
import EventCard from "../Components/EventCard";
import { useNavigate } from 'react-router-dom';

const BACKEND_URL = process.env.REACT_APP_API_URL;
const id = localStorage.getItem('id');

function ClubPage() {
  const [clubData, setClubData] = useState([]);
  const [facebook, setFacebook] = useState([]);
  const [instagram, setInstagram] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [events, setEvents] = useState([]);
  const [joinedEvents, setJoinedEvents] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const encodedName = queryParams.get('clubname');
  const decodedName = encodedName ? decodeURIComponent(encodedName) : null;

  let club_desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/getClubData/${decodedName}`)
    .then(response => {
      setClubData(response.data.message);
      splitSocialMedia(response.data.message.SocialMedia)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      }
      );
  }, [decodedName]);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/getAnnouncement?ClubName=${encodedName}`)
    .then(response => {
      setAnnouncements(response.data.message);
    })
      .catch(error => {
        console.error('Error fetching data:', error);
    });
  
    axios.get(`${BACKEND_URL}/api/getEvents?ClubName=${encodedName}`)
    .then(response => {
      setEvents(response.data.message);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });

    axios.get(`${BACKEND_URL}/api/user/getUserJoinedEvents?userID=${id}&ClubName=${encodedName}`)
    .then(response => {
      setJoinedEvents(response.data.events);

    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, [encodedName]);

  const splitSocialMedia = (socialMedia) => {
    const socialMediaParts = socialMedia.split('IG -');
    setFacebook(socialMediaParts[0].replace('FB -', ''));
    setInstagram(socialMediaParts[1]);
  };

  function joinclub() {
    navigate("/SignUp?clubname=" + clubData.Name);
  }

  function fb_redir(facebook) {
    console.log(facebook)
    window.open('http://facebook.com', '_blank');
  }

  function insta_redir(instagram) {
    let handle = instagram.replace(' ', '')
    window.open(`http://instagram.com/${handle}`, '_blank');
  }

  return (
  <>
    <Layout >
      <div className="w-full justify-center p-8">
        <div className="md:mx-20 lg:mx-40 md:my-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className='flex items-center py-5 text-3xl xl:text-5xl font-poppins font-bold md:whitespace-wrap'>{clubData.Name}</div>
            <div className="flex items-center">
              <button className="w-full md:w-[9rem] h-12 md:h-15 bg-lightmode-blue md:text-xl text-lg font-poppins font-semibold rounded-2xl shadow-lg trasnform hover:scale-110 transition-transform ease-out duration-200" onClick={joinclub}>Join</button>
            </div>
          </div>
          <div className="py-2 font-poppins font-small text-md md:text-1xl xl:text-2xl">{clubData.Description === "Nan" ? club_desc : clubData.Description }</div>
          <div className="py-2">
            <button className="py-2 flex items-center font-poppins font-medium text-sm md:text-lg md:text-1xl w-fit" onClick={() => fb_redir(facebook)}>
              <img src={fb_logo} alt="Facebook" className="pr-3 w-10 md:w-16"/>
              {facebook ? facebook : '-'}
            </button>
            <button className="py-2 flex items-center font-poppins font-medium text-sm md:text-lg md:text-1xl w-fit" onClick={() => insta_redir(instagram)}>
              <img src={insta_logo} alt="Instagram" className="pr-3 w-10 md:w-16"/>
              {instagram ? instagram : '-'}
            </button>
          </div>
          <div className='flex py-10 items-center text-2xl md:text-3xl font-poppins font-bold whitespace-nowrap'>Announcements</div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10 w-full'>
            {Object.entries(announcements).length > 0 ? (
              Object.entries(announcements).map(([title, announcement], index) => (
                <AnnouncementCard key={index} announcement={announcement} title={title} clubname={clubData.Name}/>
              ))
            ) : (
              <div className='font-poppins'>{clubData.Name} has not made an announcement.</div>
            )}
          </div>
          <div className='flex py-10 items-center text-2xl md:text-3xl font-poppins font-bold whitespace-nowrap'>Events</div>
          <div className='grid grid-cols-1 gap-x-20 gap-y-10 w-full'>
            {Object.entries(events).length > 0 ? (
              Object.entries(events).map(([title, event], index) => (
                <EventCard key={index} event={event} title={title} clubname={clubData.Name} join={joinedEvents ? joinedEvents.includes(title) : false}/>
              ))
            ) : (
              <div className='font-poppins'>{clubData.Name} has not made an event.</div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  </>
  )
}

export default ClubPage;