import React, { useState, useEffect } from 'react';
import Layout from '../Components/layout';
import "../Components/components.css";
import axios from 'axios';
import MyClubTile from '../Components/MyClubTile';
import Button from '../Components/Button';
import SearchBar from '../Components/SearchBar';

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

  // handles the search bar 
  const [searchResults, setSearchResults] = useState(joinedClubsinfo.clubname)

  const handleSearchInputChange = (e) => {
    setSearchResults(joinedClubsinfo.clubname.filter((club) => {
		return club.toLowerCase().includes(e.target.value.toLowerCase())
	}));
  };

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
		<div className='w-full justify-center p-8'>
		<div className='md:mx-20'>
				<div className='flex flex-col md:flex-row justify-between'>
					<div className='my-2 text-5xl font-poppins font-bold whitespace-nowrap'>My Clubs</div>
					<div className='flex flex-col md:flex-row py-2'>
						<Button text="Filter" />
						<SearchBar onChange={handleSearchInputChange}/>
					</div>
				</div>
				<div className='flex py-8 items-center'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10 w-full'>
						{searchResults.map((clubname, index) => (
							<MyClubTile key={index} clubName={clubname.replaceAll('_', ' ')} clubPosition="Committee"/>
							))}
					</div>
				</div>
			</div>
		</div>
	</Layout>
  );
}

export default MyClubs;