import React from "react";

import logo_42 from "../../assets/images/42_black_logo_full.png";
import logo_sunway_uni from "../../assets/images/Sunway_uni_logo_full.png";
import logo_susc from "../../assets/images/Sunway_SUSC_logo.jpg";
import logo_student_life from "../../assets/images/Sunway_student_life_logo_full.png";
import logo_scsc from "../../assets/images/Sunway_SCSC_logo.png"


function Footer({ className })
{
	return (
		<div className={`flex items-center justify-center ${className}`}>
			<div className="flex flex-col w-full md:w-full items-center">
				<hr className='flex w-[90%] md:w-[80%] h-[1px] mx-auto bg-black border-0 rounded my-3'/>
				<div className="flex flex-row w-[84%] md:w-[76%] items-center justify-between py-5">
					<div className="whitespace-nowrap flex font-poppins font-bold">An Initiative By</div>
					<div className="whitespace-nowrap flex font-poppins font-bold">© 2024</div>
				</div>
				<div className="flex flex-row w-[84%] md:w-[76%] items-center justify-between pb-10">
					<div className="flex flex-col md:flex-row items-start justify-between space-y-6 md:space-x-6">
						<img src={logo_42} className="h-10 md:h-14"/>
						<img src={logo_sunway_uni} className="h-10 md:h-14" />
						<img src={logo_susc} className="h-10 md:h-14 rounded"/>
						<img src={logo_scsc} className="h-10 md:h-14 rounded"/>
						<img src={logo_student_life} className="h-10 md:h-14"/>
					</div>
					<div className="flex flex-col lg:flex-row justify-center items-end space-y-6 md:space-y-0 md:space-x-6">
						<button className="whitespace-nowrap flex font-poppins font-bold">Your Clubs</button>
						<button className="whitespace-nowrap flex font-poppins font-bold">All Clubs</button>
						<button className="whitespace-nowrap flex font-poppins font-bold">FAQ</button>
						<button className="whitespace-nowrap flex font-poppins font-bold">Contact Us</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer;

