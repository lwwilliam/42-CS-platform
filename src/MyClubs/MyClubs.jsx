import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import './MyClubs.css';
import { RightSideContainer } from '../Components/Navbar/NavbarElements';
import { Button, Card } from 'flowbite-react';

const BACKEND_URL = process.env.REACT_APP_API_URL;

function MyClubs() {
  const urlParam = new URLSearchParams(window.location.search);
  const key = urlParam.get('code');
  console.log(key);

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
        console.log('Code sent to backend successfully.');
      } else {
        console.error('Failed to send code to backend.');
      }
    } catch (error) {
      console.error('Error sending code:', error);
    }
  }

  postCode(key);

  const [path, setPath] = useState([]);

  useEffect(() => {
    let pathArr = window.location.href.split("/")
    setPath(pathArr[0])
  }, []);

  return (
    <div>
      <Navbar />
      <RightSideContainer>
        <div className='club-header'>My Clubs</div>
        <div className='flex h-[4vw] bg-transparent'></div>
        <div className="inline-flex">
          <Card className="max-w-md shadow-2xl shadow-indigo-800 border-indigo-800">
            <h4 className="text-3xl font-bold font-serif tracking-wide text-black ml-[0vw]">
                Placeholder Club
            </h4>
            <p className="text-lg font-semibold text-slate-700 ml-[0vw]">
                Placeholder Description that is very long like how long is this i guess it's just this long i wonder why, how long does this keep going for i wonder hey its still going is it overflowing i wonder ?
            </p>
            <Button gradientDuoTone="purpleToBlue" className="max-w-[10vw] ml-[4.9vw]" href={path + "ClubInfo"}>
              Placeholder
            </Button>
          </Card>
        </div>
        <div className='inline-flex w-[3vw] bg-transparent'></div>
        <div className="inline-flex">
          <Card className="max-w-md shadow-2xl shadow-indigo-800 border-indigo-800">
            <h4 className="text-3xl font-bold font-serif tracking-wide text-black ml-[0vw]">
                Placeholder Club
            </h4>
            <p className="text-lg font-semibold text-slate-700 ml-[0vw]">
                Placeholder Description that is very long like how long is this i guess it's just this long i wonder why, how long does this keep going for i wonder hey its still going is it overflowing i wonder ?
            </p>
            <Button gradientDuoTone="purpleToBlue" className="max-w-[10vw] ml-[4.9vw]" href="https://youtu.be/dQw4w9WgXcQ?si=3O4p5wwY8Xz19B0V" target="_blank">
              Placeholder
            </Button>
          </Card>
        </div>
      </RightSideContainer>
    </div>
  );
}

export default MyClubs;
