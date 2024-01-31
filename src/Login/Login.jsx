import React, { useState } from 'react';
// import axios from 'axios';

import LoginDropdown from '../Components/LoginDropdown';
import ImailSignIn from '../Components/ImailSignIn';
import ImailSignUp from '../Components/ImailSignUp';

const Login = () => {
  const id = localStorage.getItem('id');

  if (id !== null) {
    window.location.href = '/MyClubs';
  }

	let [showState, setShowState] = useState("login")

  return (
    <>
      <div className="h-screen w-full flex items-center justify-center">
				{showState === "login" ? <LoginDropdown onLoginStateChange={() => setShowState("signin")}/> : null}
				{showState === "signin" ? <ImailSignIn toBackFunction={() => setShowState("login")} toSignUpFunction={() => setShowState("signup")} /> : null}
				{showState === "signup" ? <ImailSignUp toSignInFunction={() => setShowState("signin")} /> : null}
      </div>
    </>
  );
};

export default Login;
