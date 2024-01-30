import React, {useState, useEffect} from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
// import campuslist from './campuslist.json';

const BACKEND_URL = process.env.REACT_APP_API_URL;

const LoginDropdown = (props) => {
  // const [isOpen, setIsOpen] = useState(false);
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

	let state = ""

  function handleclick(name) {
    if (name === "42 Kuala Lumpur") {
      console.log("kuala lumpur")
      handleLoginWith42()
    }
    else if (name === "Sunway University") {
      console.log("sunway")

			props.onLoginStateChange()
    }
  }

	return (
    <div className={`md:w-1/3 bg-white h-2/5 rounded-2xl w-10/12 flex items-center`}>
      <div className='flex-col flex items-center w-full'>
        <div className='text-center pb-2 text-4xl font-poppins font-bold'>
          Log In
        </div>
        <button onClick={() => handleclick("Sunway University")} className='w-[80%] bg-[#ACACAC] rounded-lg hover:bg-[#d6d6d6] my-2 h-[4.3rem]'>
          <div className='flex w-full cursor-pointer rounded-lg items-center'>
            <img src={require(`../../assets/images/Sunway_uni_logo.png`)} className='h-[50px] my-[-1rem] md:pl-6' alt="logo path"/>
            <h1 className="font-bold text-white w-full">Continue with Student ID</h1>
          </div>
        </button>
        <button onClick={() => handleclick("42 Kuala Lumpur")} className='w-[80%] bg-black rounded-lg hover:bg-[#1c1c1c] my-2 h-[4.3rem]'>
          <div className='flex w-full cursor-pointer rounded-lg items-center'>
            <img src={require(`../../assets/images/42_logo.png`)} className='h-[40px] my-[-1rem] md:pl-6 pl-2  ' alt="logo path"/>
            <h1 className="font-bold text-white w-full">Continue with Intra ID</h1>
          </div>
        </button>
      </div>
    </div>
	);
};

export default LoginDropdown;
