import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const redirFeed = () => {
    navigate('/ClubInfo');
  };

  return (
    <div class="grid h-screen place-items-center outline">
      <button onClick={redirFeed} class="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 border border-teal-600 rounded w-1/3 h-28" style={{ fontSize: '50px' }}>
        LOG IN TO 42  
      </button>
    </div>
  );
}

export default Login;
