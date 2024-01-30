import React, { useState } from 'react';
// import axios from 'axios';

import LoginDropdown from '../Components/LoginDropdown';
import ImailSignIn from '../Components/ImailSignIn';

const Login = () => {
  const id = localStorage.getItem('id');

  if (id !== null) {
    window.location.href = '/MyClubs';
  }

	let [showState, setShowState] = useState(true)

  return (
    <>
      <div className="h-screen w-full flex items-center justify-center">
				{showState ? <LoginDropdown onLoginStateChange={() => setShowState(false)}/> : null}
				{showState ? null : <ImailSignIn onClick={() => setShowState(true)}/>}
      </div>
    </>
  );
};

export default Login;
