import React, { useState } from 'react'

import empty_heart_icon from "../../assets/icons/emptyHeart.svg"
import full_heart_icon from "../../assets/icons/fullHeart.svg"
import Button from '../Button'

function EventCard()
{
	let title =  "New Event"
	let desc = "Event description goes here aaa aaa aaa " // max 40 chars for short desc
	let attendees = 25
	let start_time = "23 Dec 0800"
	let end_time = "25 Dec 1600"

	// event details support newline rendering
	let event_details = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

	const [like_count, setLikeCount] = useState(2)
	const [like_icon, setLikeIcon] = useState(empty_heart_icon)
	const [liked_state, setLikedState] = useState(false)

	let handleLiked = () => {
		
		if (liked_state === false)
		{
			setLikeCount(like_count + 1)
			setLikeIcon(full_heart_icon)
			setLikedState(true)
		}
		else
		{
			setLikeCount(like_count - 1)
			setLikeIcon(empty_heart_icon)
			setLikedState(false)
		}
	}

	return (
		<>
			<div className='group flex flex-col h-full w-full justify-start bg-white font-poppins text-black p-6 rounded-3xl shadow-lg transition-height duration-500 ease-in-out'>
				<div className='flex flex-row justify-between items-center pb-1'>
					<div className='font-poppins text-2xl font-bold'>{title}</div>
					<button className='w-28 h-10 bg-[#99DEFF] md:text-md text-sm font-poppins font-medium rounded-2xl shadow-lg transition ease-linear hover:scale-110'>Join Event</button>
				</div>
				<div className='font-poppins text-md font-small py-2'>{desc}</div>
				<div className='flex justify-between items-center'>
					<div className='flex flex-row'>
						<img onClick={handleLiked} src={like_icon} className="active:animate-ping pr-2" />
						<div>{like_count.toString()}</div>
					</div>
					<div>{attendees.toString() + " attending"}</div>
				</div>
				<div className='grid grid-rows-[0fr] group-hover:grid-rows-[1fr] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out'>
					<div className='overflow-hidden'>
						<hr className='flex w-full h-0.5 mx-auto bg-black border-0 rounded my-3'/>
						<div className='flex justify-between py-2'>
							<div className='font-bold'>Event Details</div>
							<div>{start_time + " - " + end_time}</div>
						</div>
						<div className='whitespace-pre-line'>{event_details}</div>
					</div>
				</div>
			</div>
		</>

		// <div className='bg-white group'>
		// 	<div>Title</div>
		// 	<div className='grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-grid-template-rows duration-500 ease-out'>
		// 		<div className='overflow-hidden'>
		// 			<div>content</div>
		// 		</div>
		// 	</div>
		// </div>
	)
}

export default EventCard;