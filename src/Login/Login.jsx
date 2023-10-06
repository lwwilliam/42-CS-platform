import React, { useState } from 'react';
import './Login.css';
import logo from '../images/42_logo.png';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
	navigate('/home');

  };

  return (
    <div className="Login">
      <h1><img src={logo} alt="42KL logo" /></h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          {/* <label>Email:</label> */}
          <input
            className="form-control"
            placeholder="Login or Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          {/* <label>Password:</label> */}
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
		<div className='button'>
		<button type="submit" className="btn">SIGN IN</button>
		</div>
      </form>
    </div>
  );
}

export default Login;