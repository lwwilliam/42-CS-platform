import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import './MyClubs.css';
import { RightSideContainer } from '../Components/Navbar/NavbarElements';
import { Button, Card } from 'flowbite-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_API_URL;

function MyClubs() {
  const urlParam = new URLSearchParams(window.location.search);
  const key_code = urlParam.get('code');

  useEffect(() => {
    localStorage.setItem('key', key_code);
  }, [key_code]);

  const key = localStorage.getItem('key');
  
  const [joinedClubsinfo, setJoinedClubsinfo] = useState({
    clubname: [],
    description: [],
    redir_link: []
  });

  useEffect(() => {
    // Define the postCode function inside the useEffect
    const postCode = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/postCode`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(key),
        });
        if (response.ok) {
          console.log('Code sent to the backend successfully.');
        } else {
          console.error('Failed to send code to the backend.');
        }
      } catch (error) {
        console.error('Error sending code:', error);
      }
    };

    postCode(key);
    
    // let pathArr = window.location.href.split("/");
    // setPath(pathArr[0]);

  }, [key]);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/joined_clubsinfo/yalee`)
      .then(response => {
        setJoinedClubsinfo(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });  
  }, []);

  console.log(joinedClubsinfo);

  return (
    <div>
      <Navbar />
      <RightSideContainer>
        <div className='club-header'>My Clubs</div>
        <div className='flex h-[4vw] bg-transparent'></div>
        <div className='flex flex-row flex-wrap'>
          {joinedClubsinfo.clubname.map((clubname, index) => (
            <div key={index} className='ml-10 mt-10'>
              <Card className="max-w-md shadow-2xl shadow-indigo-800 border-indigo-800 h-96">
                  <h4 className="text-2xl font-bold font-serif tracking-wide text-black ml-[0vw] text-center">
                    {clubname}
                  </h4>
                  <p className="text-lg font-semibold text-slate-700 ml-[0vw] h-52">
                    {joinedClubsinfo.description[index]}
                  </p>
                  <Button gradientDuoTone="purpleToBlue" className="w-1/3 bottom-0 mx-32" href={joinedClubsinfo.redir_link[index]} target="_blank">
                    Link
                  </Button>
              </Card>
            </div>
          ))}
        </div>
      </RightSideContainer>
    </div>
  );
}

export default MyClubs;