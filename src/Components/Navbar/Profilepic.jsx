import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_API_URL;

const UserProfile = () => {
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    // Make a GET request to get the profile picture URL
    axios.get(`${BACKEND_URL}/api/user/profilepic`) // Adjust the URL as needed
      .then(response => {
        // Handle successful response
        const picUrl = response.data; // Use response.data to get the URL

        // Set the profilePic state with the URL
        setProfilePic(picUrl);
      })
      .catch(error => {
        // Handle error
        console.error('Error fetching profile picture:', error);
      });
  }, []);

  if (profilePic === null) {
    return <div>Loading...</div>;
  }
  const imgStyle = {
    borderRadius: '50%', // Use border-radius property to make it round
    width: '150px', // Adjust the width as needed
    height: '150px', // Adjust the height as needed
  };

  return (
    <div>
      {/* <h1>User Profile Picture</h1> */}
      <img src={profilePic} alt="Profile" style={imgStyle}/> {/* Use profilePic as the src */}
    </div>
  );
};

export default UserProfile;


