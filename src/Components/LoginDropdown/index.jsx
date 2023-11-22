import React, {useState, useEffect} from 'react';
import campuslist from './campuslist.json';

const BACKEND_URL = process.env.REACT_APP_API_URL;

const LoginDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [authConfig, setAuthConfig] = useState({});

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

  function handleclick(name) {
    if (name === "42 Kuala Lumpur") {
      console.log("kuala lumpur")
      handleLoginWith42()
    }
    else if (name === "Sunway University") {
      console.log("sunway")
    }
  }

	return (
		<div className='relative flex flex-col items-center w-1/3 rounded-lg'>
      <button onClick={() => setIsOpen((prev) => !prev)} className='bg-teal-600 text-white p-6 h-28 w-full flex items-center justify-between font-bold text-2xl rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-black'>
        Select Campus
        {!isOpen ? 
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
          </svg> : 
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"/>
          </svg>
          }
      </button>
      {isOpen && (
        <div className='bg-white absolute top-[120px] flex flex-col items-start rounded-lg p-2 w-full'>
          {campuslist.map((campus, index) => ( 
            <button onClick={() => handleclick(campus.Campus_Name)} className='w-full'>
              <div className='flex w-full justify-between p-4 hover:bg-blue-200 cursor-pointer rounded-lg border-l-transparent' key={index}>
                  <h3 className="font-bold ">{campus.Campus_Name}</h3>
                  <img src={require(`../../images/${campus.logo}`)} className='h-[25px]' alt="logo path"/>
              </div>
            </button>
          ))}
        </div>
      )}
		</div>
	);
};

export default LoginDropdown;
