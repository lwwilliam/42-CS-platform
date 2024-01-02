import React, { useState } from 'react'

import empty_heart_icon from "../../assets/icons/emptyHeart.svg"
import full_heart_icon from "../../assets/icons/fullHeart.svg"

function EventCard()
{
	let title =  "New Event"
	let desc = "Event description goes here"
	let attendees = 25
	let start_time = "23 Dec 0800"
	let end_time = "25 Dec 1600"
	let event_details = "More info: \n ... ... ..."

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
			<div className='group flex flex-col h-[150px] w-full justify-start bg-white font-poppins text-black p-6 rounded-3xl shadow-lg overflow-hidden transition-height duration-500 ease-in-out hover:h-[390px]'>
				<div className='font-poppins text-2xl font-bold'>{title}</div>
				<div className='font-poppins text-md font-medium py-2'>{desc}</div>
				<div className='flex justify-between items-center'>
					<div className='flex flex-row'>
						<img onClick={handleLiked} src={like_icon} className="active:animate-ping pr-2" />
						<div>{like_count.toString()}</div>
					</div>
					<div>{attendees.toString() + " attending"}</div>
				</div>
				<div className='opacity-0 group-hover:opacity-100 transition-opacity ease-linear'>
					<hr className='flex w-full h-0.5 mx-auto bg-black border-0 rounded my-2'/>
					<div className='flex justify-between py-2'>
						<div>Event Details</div>
						<div>{start_time + " - " + end_time}</div>
					</div>
					<div className='whitespace-pre-line'>{event_details}</div>
				</div>
			</div>
		</>
	)
}

export default EventCard;