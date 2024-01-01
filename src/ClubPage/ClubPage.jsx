import React from "react";
import axios from "axios";

import Layout from "../Components/layout";
import Button from "../Components/Button";
import fb_logo from "../assets/icons/facebook.svg"
import insta_logo from "../assets/icons/instagram.svg"
import AnnouncementCard from "../Components/AnnouncementCard";

function ClubPage({ clubName }) {

  let club_name = "Sunway Music Society"
	let club_desc = "The society welcomes all Sunwayians who loves music and treats music more than just a simple interest for the day. Those who are passionate about music and also loves to share their interest with others who share the same love, you are in the right place!"
	let facebook = "Sunway Music Society"
	let instagram = "sunwaymusicsociety"

	const func = () => {

	}



  return (
    <>
      <Layout >
				<div className="w-full justify-center p-8">
					<div className="md:mx-40 md:my-6">
						<div className="flex flex-col md:flex-row justify-between">
							<div className='flex items-center py-5 text-3xl xl:text-5xl font-poppins font-bold md:whitespace-nowrap'>{club_name}</div>
							<div>
								<Button text="Join" />
							</div>
						</div>
						<div className="py-2 font-poppins font-medium text-md md:text-xl xl:text-2xl">{club_desc}</div>
						<div className="py-2">
							<div className="py-2 flex items-center font-poppins font-medium text-sm md:text-lg md:text-1xl">
								<img src={fb_logo} alt="Facebook" className="pr-3 w-10 md:w-16"/>
								{facebook}
							</div>
							<div className="py-2 flex items-center font-poppins font-medium text-sm md:text-lg md:text-1xl">
								<img src={insta_logo} alt="Instagram" className="pr-3 w-10 md:w-16"/>
								{instagram}
							</div>
						</div>
						<div className='flex py-10 items-center text-2xl md:text-3xl font-poppins font-bold whitespace-nowrap'>Announcements</div>
						<div className='grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10 w-full'>
							<AnnouncementCard />
						</div>
						<div className='flex py-10 items-center text-2xl md:text-3xl font-poppins font-bold whitespace-nowrap'>Events</div>
						<div className='grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10 w-full'>
							
						</div>
					</div>
				</div>
      </Layout>
    </>
  )
}

export default ClubPage;