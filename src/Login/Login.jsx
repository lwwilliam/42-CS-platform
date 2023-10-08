import React, { useState } from 'react';
import './Login.css';
import logo from '../images/42_logo.png';
import { useNavigate } from 'react-router-dom';
// import { useUser } from '../props'; // Import the useUser hook

function Login() {
  // const { username, setUsername } = useUser(); // Access username and setUsername

  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  const handleEmailChange = (e) => {
    // setUsername(e.target.value); // Update username when the email input changes
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/Feed');
  };

  return (
    <div className="Login">
      <h1><img src={logo} alt="42KL logo" /></h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="Login or Email"
            // value={username} // Use the username value from context
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
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
