import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import './Login.css';

const BACKEND_URL = process.env.REACT_APP_API_URL;

const Login = () => {
  const [authConfig, setAuthConfig] = useState({});
  // const [scrapedata, setScrapedata] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:5000/api/scrapedata')
  //     .then(response => {
  //       setScrapedata(response.data.message);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  //   }, []);
  // console.log(scrapedata)
  
  useEffect(() => {
    // Fetch the client ID and redirect URI from your backend
    fetch(`${BACKEND_URL}/api/auth/config`)
      .then((response) => response.json())
      .then((data) => setAuthConfig(data))
      .catch((error) => console.error('Error fetching auth config:', error));
  }, []);

  const handleLoginWith42 = () => {
    if (!authConfig.clientID || !authConfig.redirectURI) {
      console.error('Auth config not available');
      return;
    }

    const { clientID, redirectURI} = authConfig;
    const scopes = 'public'; // Specify the scopes you need

    // Construct the authorization URL
    const authURL = `https://api.intra.42.fr/oauth/authorize?client_id=${clientID}&redirect_uri=${redirectURI}&response_type=code&scope=${scopes}`;

    // Redirect the user to the 42 OAuth authorization URL
    window.location.href = authURL;
  };

  return (
    <div class="grid h-screen place-items-center outline">
      <button onClick={handleLoginWith42} class="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 border border-teal-600 rounded w-1/3 h-28" style={{ fontSize: '50px' }}>
        LOG IN TO 42
      </button>
    </div>
  );
};

export default Login;
