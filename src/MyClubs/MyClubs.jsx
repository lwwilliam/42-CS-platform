import React, { useState, useEffect } from 'react';
import TopNavBar from '../Components/TopNavBar';
import Layout from '../Components/layout';
import "../Components/components.css";
import { RightSideContainer } from '../Components/Navbar/NavbarElements';
import { Button, Card } from 'flowbite-react';
import axios from 'axios';
import MyClubTile from '../Components/MyClubTile';

const BACKEND_URL = process.env.REACT_APP_API_URL;

function MyClubs() {
  const urlParam = new URLSearchParams(window.location.search);
  const key = urlParam.get('code');
  const [objid, setObjid] = useState('');
  const [loading, setLoading] = useState(true);
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
          const data = await response.json();
          setObjid(data.objectid);
          if (data.objectid) {
            localStorage.setItem('id', data.objectid);
            // Store the objectid in local storage
          }
        } else {
          console.error('Failed to send code to the backend.');
        }
      } catch (error) {
        console.error('Error sending code:', error);
      }
    };

    postCode();
  }, [key, objid]);

  const id = localStorage.getItem('id');

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
    axios.get(`${BACKEND_URL}/api/joined_clubsinfo/${id}`)
      .then(response => {
        setJoinedClubsinfo(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  return (
	<Layout>
		<div>
			<div className='ml-20 mt-10 mb-10'>
				<div className='text-6xl font-poppins font-bold'>My Clubs</div>
				{/* <Button />
				<SearchBar /> */}
			</div>
			<div className='ml-20 mt-10'>
				{joinedClubsinfo.clubname.map((clubname, index) => (
					<div key={index} className='flex flex-col items-center'>
						<div className='grid grid-cols-2 gap-y-10 gap-x-20 w-[80%]'>
							<MyClubTile clubName={clubname.replaceAll('_', ' ')} clubPosition="Committee"/>
						</div>
					</div>
					))
				}
			</div>
		</div>
	</Layout>
  );
}

export default MyClubs;