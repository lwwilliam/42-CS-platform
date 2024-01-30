import React from "react";

import sunway_logo from "../../assets/images/Sunway_uni_logo.png"
import { useNavigate } from "react-router-dom";

function ImailSignIn({ className, onClick })
{

	const nav = useNavigate()

	function redirect()
	{
		nav("")
	}

	return (
		<>
			<div className={`w-10/12 md:w-1/3 bg-white h=3/5 md:h-2/5 rounded-2xl  relative items-center p-5 ${className}`}>
			<button className='border-2 h-10 w-10 rounded-full font-poppins text-2xl font-semibold absolute left-6 top-6 transform transition-all duration-200 hover:scale-105 cursor-pointer' onClick={onClick}> &lt; </button>
				<div className='flex-col flex items-center w-full'>
					<img src={sunway_logo} className="h-16 m-5"/>
					<div className="w-[80%] h-full pb-5">
						<input className="w-full h-12 rounded-md bg-neutral-200 shadow-inner pl-5 font-poppins font-medium"
						placeholder="iMail"/>
					</div>
					<div className="w-[80%] h-full pb-5">
						<input className="w-full h-12 rounded-md bg-neutral-200 shadow-inner pl-5 font-poppins font-medium"
						placeholder="Password"
						type="password"/>
					</div>
					<div className="w-[25%] h-14 pb-3">
						<button className="w-full h-full rounded-3xl bg-lightmode-blue font-poppins font-medium transform transition-all duration-200 hover:scale-105 cursor-pointer">Sign In</button>
					</div>
					<div className="font-poppins font-medium text-sm" onClick={redirect} >No Account? Sign Up</div>
				</div>
			</div>
		</>
	)
}

export default ImailSignIn;