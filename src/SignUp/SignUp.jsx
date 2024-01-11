import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_API_URL;

function SignUp(){
  const [clubForm, setClubForm] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const encodedName = queryParams.get('clubname');
  const decodedName = encodedName ? decodeURIComponent(encodedName) : null;

  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/get/${decodedName}`)
    .then(response => {
      setClubForm("https://docs.google.com/forms/d/e/1FAIpQLSe-SIacPNycDuFr_liQrWym-BVtSe1-Q1hLbDqY0L5f-jwfTw/viewform?usp=pp_url&embedded=true&entry.376365941=" + response.data.message.Name.replace("&", "%26").replace(" ", "+"));
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    }
    );
  }, [decodedName]);

  const handleFormSubmit = () => {
    navigate(-1);
  };

  return (
    <div className='flex'>
      <button className='border-2 h-10 w-10 rounded-full font-poppins text-2xl font-semibold absolute left-5 top-5' onClick={handleFormSubmit}> &lt; </button>
      <div className='h-[100vh] w-full'>
        { console.log("name", clubForm) }
        <iframe src={clubForm} title="Google Forms" frameborder="0" height="100%" width="100%">Loading…</iframe>
      </div>
    </div>
  )
}

export default SignUp;
