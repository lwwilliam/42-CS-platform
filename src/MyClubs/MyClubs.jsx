import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import './MyClubs.css';
import { RightSideContainer } from '../Components/Navbar/NavbarElements';
// import bgs_logo from '../images/bgs_logo.png';
import { Button, Card } from 'flowbite-react';
// import { useNavigate } from 'react-router-dom';

function MyClubs() {
  // const [apiResponse, setApiResponse] = useState('');

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('http://localhost:5000/api/ft');
  //     if (response.ok) {
  //       const data = await response.json();
  //       setApiResponse(data);
  //     } else {
  //       console.error('API request failed');
  //     }
  //   } catch (error) {
  //     console.error('An error occurred:', error);
  //   }
  // };

  // const navigate = useNavigate();

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
        {/* <div style={{ marginTop: '4vw', backgroundColor: 'cyan', textAlign: 'center', border: '5px solid black' }}>
          <h2>Member of Sunway Board Games club since 9 October 2023</h2>
          <div className='club'>
            <img src={bgs_logo} alt='bgs_logo' />
          </div>
        </div> */}
        {/* <button onClick={fetchData}>Fetch Data</button>
        <div className='api-response'>
          {apiResponse && (
            <pre className='white-text'>{JSON.stringify(apiResponse, null, 2)}</pre>
          )}
        </div> */}

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
