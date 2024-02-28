import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const BACKEND_URL = process.env.REACT_APP_API_URL;

function timeout(delay)
{
  return new Promise(res => setTimeout(res, delay))
}

function ImailSignUp({ className, toSignInFunction })
{
  const navigate = useNavigate();
  let buttonStyleDefault = "bg-lightmode-blue transform transition-all duration-200 hover:scale-105 cursor-pointer"
  let buttonStyleCooldown = "bg-[#2589b8]"

  const [showPassword, setShowPassword] = useState(false) // state for password inputs

  const [buttonDisabled, setButtonDisabled] = useState(false) // state for verification code button
  const [codeButtonText, setCodeButtonText] = useState("Send Code") // state for verification code button text

  // state for verification code button css
  const [codeButtonStyle, setCodeButtonStyle] = useState(buttonStyleDefault)

  let buttonCooldown = 30

  const [imail , setImail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [verificationCode, setVerificationCode] = useState("")
  const [createAccountDisabled, setcreateAccountDisabled] = useState(true);
  const [imailError, setImailError] = useState(false)
  const [verificationError, setVerificationError] = useState(false)

  function sendVerificationCode()
  {
    if (isValidEmail(imail) === false) {
      setImailError(true)
      return;
    } else{
      setImailError(false)
    }

    const data = { "imail": imail };
    fetch(`${BACKEND_URL}/api/imailVerification`, {
      method: 'POST', 
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), 
    })
    .then(response => response.json())
    // .then(data => console.log(data))
    .catch((error) => {
        console.error('Error:', error);
    });
      setButtonDisabled(true)
  }

  const isValidEmail = (email) => {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Check if email matches the regex and ends with "@imail.sunway.edu.my"
    return emailRegex.test(email) && email.endsWith('@imail.sunway.edu.my');
  };

  function createAccount()
  { 
    if (isValidEmail(imail) === false) {
      setImailError(true)
      return;      
    } else{
      setImailError(false)
    }
    
    const data = { "imail": imail, "password": password, "code": verificationCode };
    fetch(`${BACKEND_URL}/api/verifyCode`, {
      method: 'POST', 
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), 
    })
    .then(response => {
      if (!response.ok) {
        setVerificationError(true)
        throw new Error('Failed to verify code');
      }
      return response.json();
    })
    .then(data => {
      localStorage.setItem('id', data.objectid);
      navigate('/MyClubs');
    })
    .catch((error) => {
        console.error('Error:', error);
    });  
  }

  useEffect(() => { // handles button cooldown

    const cooldown = async () => {

			setCodeButtonStyle(buttonStyleCooldown)

      for (let i = buttonCooldown; i >= 0; i--)
      {
        setCodeButtonText(i + "s")
        await timeout(1000) // 1s
      }
			setCodeButtonText("Send Code")
			setButtonDisabled(false)
			setCodeButtonStyle(buttonStyleDefault)
    }
    
    if (buttonDisabled === true)
    {
      cooldown()
    }
  // eslint-disable-next-line
  },[buttonDisabled])

  useEffect(() => { // handles create account button
    if (imail !== "" && password !== "" && confirmPassword !== "" && verificationCode !== "") {
      setcreateAccountDisabled(false)
      setVerificationError(false)
    } else {
      setcreateAccountDisabled(true)
    }
  }, [imail, password, confirmPassword, verificationCode])

  return (
    <>
      <div className={`w-10/12 md:w-1/3 bg-white h-4/5 md:h-[60%] rounded-2xl relative items-center p-5 ${className}`}>
        <div className="flex-col flex items-center w-full">
          <div className="text-center py-7 text-4xl font-poppins font-bold">Sign Up</div>
          <div className="w-[80%] h-full">
            <div className="pb-5 relative">
              <input className="w-full h-12 rounded-md bg-neutral-200 shadow-inner pl-5 font-poppins font-medium"
              placeholder="@imail.sunway.edu.my" onChange={e => setImail(e.target.value)}/>
              <div className={`text-red-500 absolute bottom-[0.3px] ${imailError ? '' : 'hidden'}`}>Invalid imail</div>
            </div>
            <div className="pb-5 relative">
              <input className="w-full h-12 rounded-md bg-neutral-200 shadow-inner pl-5 font-poppins font-medium"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              onChange={e => setPassword(e.target.value)}/>
              {/* <div className={`text-red-500 absolute bottom-0.5`}>test</div> */}
            </div>
            <div className="pb-5 relative">
              <input className="w-full h-12 rounded-md bg-neutral-200 shadow-inner pl-5 font-poppins font-medium"
              placeholder="Confirm Password"
              type={showPassword ? "text" : "password"}
              onChange={e => setConfirmPassword(e.target.value)}
              />
              <div className={`text-red-500 absolute bottom-[0.3px] ${password === confirmPassword ? 'hidden' : ''}`}>Passwords do not match</div>
            </div>
            <div className="pb-5 flex flex-row">
              <input type="checkbox" className="form-checkbox rounded text-[#99DEFF]"
              value={showPassword}
              onChange={() => {setShowPassword((prev) => !prev)}}/>
              <label className="text-sm font-poppins font-medium pl-2">Show Password</label>
            </div>
            <div className="pb-5 flex flex-row justify-between relative">
              <input className="w-[50%] h-12 rounded-md bg-neutral-200 shadow-inner pl-5 font-poppins font-medium"
              placeholder="Verification Code"
              onChange={e => setVerificationCode(e.target.value)}
              />
              <button className={`w-[30%] h-12 rounded-3xl font-poppins font-medium text-wrap ${codeButtonStyle}`}
              onClick={sendVerificationCode}
							disabled={buttonDisabled}
              >{codeButtonText}</button>
              <div className={`text-red-500 absolute bottom-[0.3px] ${verificationError ? '' : 'hidden'}`}>Invalid code</div>
            </div>
            <div className="pb-5 flex flex-row justify-center items-center">
              <button className={`w-[50%] h-12 rounded-3xl bg-lightmode-blue font-poppins font-medium text-wrap transform transition-all duration-200 hover:scale-105 ${createAccountDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                disabled={createAccountDisabled}
                onClick={createAccount}
              >
                Create Account
              </button>
            </div>
            <div className="flex flex-row justify-center items-center">
              <label className="font-poppins font-medium text-sm flex pr-2">Already have an account?</label>
              <button className="font-poppins font-medium text-sm flex justify-center items-center hover:underline"
              onClick={toSignInFunction}>Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ImailSignUp;

// setShowPassword((prev) => !prev) reverses the boolean using an arrow function