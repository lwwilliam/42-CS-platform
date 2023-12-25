import React from 'react';
// import axios from 'axios';
import LoginDropdown from '../Components/LoginDropdown';

const Login = () => {
  const id = localStorage.getItem('id');

  if (id !== null) {
    window.location.href = '/MyClubs';
  }

  return (
    <>
      <div className="h-screen w-full flex items-center justify-center">
        <LoginDropdown />
      </div>
    </>
  );
};

export default Login;
