import React, { useEffect, useState } from "react";


function timeout(delay)
{
  return new Promise(res => setTimeout(res, delay))
}

function ImailSignUp({ className, toSignInFunction })
{

  let buttonStyleDefault = "bg-lightmode-blue transform transition-all duration-200 hover:scale-105 cursor-pointer"
  let buttonStyleCooldown = "bg-[#2589b8]"

  const [showPassword, setShowPassword] = useState(false) // state for password inputs

  const [buttonDisabled, setButtonDisabled] = useState(false) // state for verification code button
  const [codeButtonText, setCodeButtonText] = useState("Send Code") // state for verification code button text

  // state for verification code button css
  const [codeButtonStyle, setCodeButtonStyle] = useState(buttonStyleDefault)

  let buttonCooldown = 30

  function sendVerificationCode()
  {
    // send verification code here

    setButtonDisabled(true)
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

  },[buttonDisabled])

  return (
    <>
      <div className={`w-10/12 md:w-1/3 bg-white h-4/5 md:h-[60%] rounded-2xl relative items-center p-5 ${className}`}>
        <div className="flex-col flex items-center w-full">
          <div className="text-center py-7 text-4xl font-poppins font-bold">Sign Up</div>
          <div className="w-[80%] h-full">
            <div className="pb-5">
              <input className="w-full h-12 rounded-md bg-neutral-200 shadow-inner pl-5 font-poppins font-medium"
              placeholder="@imail.sunway.edu.my"/>
            </div>
            <div className="pb-5">
              <input className="w-full h-12 rounded-md bg-neutral-200 shadow-inner pl-5 font-poppins font-medium"
              placeholder="Password"
              type={showPassword ? "text" : "password"}/>
            </div>
            <div className="pb-5">
              <input className="w-full h-12 rounded-md bg-neutral-200 shadow-inner pl-5 font-poppins font-medium"
              placeholder="Confirm Password"
              type={showPassword ? "text" : "password"}/>
            </div>
            <div className="pb-5 flex flex-row">
              <input type="checkbox" className="form-checkbox rounded text-[#99DEFF]"
              value={showPassword}
              onChange={() => {setShowPassword((prev) => !prev)}}/>
              <label className="text-sm font-poppins font-medium pl-2">Show Password</label>
            </div>
            <div className="pb-5 flex flex-row justify-between">
              <input className="w-[50%] h-12 rounded-md bg-neutral-200 shadow-inner pl-5 font-poppins font-medium"
              placeholder="Verification Code"/>
              <button className={`w-[30%] h-12 rounded-3xl font-poppins font-medium text-wrap ${codeButtonStyle}`}
              onClick={sendVerificationCode}
							disabled={buttonDisabled}
              >{codeButtonText}</button>
            </div>
            <div className="pb-5 flex flex-row justify-center items-center">
              <button className="w-[50%] h-12 rounded-3xl bg-lightmode-blue font-poppins font-medium text-wrap transform transition-all duration-200 hover:scale-105 cursor-pointer">Create Account</button>
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