// import React, { useEffect, useState } from 'react';
import React from 'react';
// import axios from 'axios';

const UserProfile = () => {
  // const [profilePic, setProfilePic] = useState(null);

  // useEffect(() => {
  //   // Define the API endpoint URL
  //   const apiUrl = 'https://api.42school.org/v2/users/<>';

  //   // Make a GET request using Axios
  //   axios.get(apiUrl)
  //     .then(response => {
  //       // Handle successful response
  //       const data = response.data;
  //       // Extract profile picture URL from the API response
  //       const picUrl = data.image_url;
  //       setProfilePic(picUrl);
  //     })
  //     .catch(error => {
  //       // Handle error
  //       console.error('Error fetching data:', error);
  //     });
  // }, []); // Empty dependency array ensures the effect runs once after the initial render

  // if (!profilePic) {
  //   return <div>Loading...</div>;
  // }

  // Render the profile picture
  return (
    <div>
      <h1>User Profile Picture</h1>
      {/* <img src={profilePic} alt="Profile" /> */}
    </div>
  );
};

export default UserProfile;
