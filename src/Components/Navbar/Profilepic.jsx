import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_API_URL;

const UserProfile = () => {
  const [profilePic, setProfilePic] = useState(null);

  const id = localStorage.getItem('id');
  useEffect(() => {
    // Make a GET request to get the profile picture URL
    axios.get(`${BACKEND_URL}/api/user/profilepic/${id}`) // Adjust the URL as needed
      .then(response => {
        // Handle successful response
        const picUrl = response.data['message']; // Use response.data to get the URL

        setProfilePic(picUrl);
      })
      .catch(error => {
        // Handle error
        console.error('Error fetching profile picture:', error);
      });
  }, [id]);

  if (profilePic === null) {
    return <div className='font-white'>Loading...</div>;
  }

  return (
    <div className='rounded-full w-[8vw] h-[8vw] bg-gray-300'>
      <img src={profilePic} alt="Profile" className='object-cover rounded-full w-full h-full'/>
    </div>
  );
};

export default UserProfile;


