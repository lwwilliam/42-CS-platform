import React, { useState, useEffect } from 'react'
import axios from 'axios'

import empty_heart_icon from "../../assets/icons/emptyHeart.svg"
import full_heart_icon from "../../assets/icons/fullHeart.svg"

const BACKEND_URL = process.env.REACT_APP_API_URL;

function EventCard(props)
{
	const startDate = new Date(props.event.startDate);
	const endDate = new Date(props.event.endDate);
	
	const options = {
		day: 'numeric',
		month: 'short',
		hour: 'numeric',
		minute: 'numeric',
		hour12: false,
	};
	
	let title =  props.title
	let desc = props.event.Description	// max 40 chars for short desc
	let start_time = startDate.toLocaleString('en-GB', options).replace(',', '');
	let end_time = endDate.toLocaleString('en-GB', options).replace(',', '');
	let event_details = props.event.Details
	
	const [like_count, setLikeCount] = useState(parseInt(props.event.Likes) || 0)
	const [like_icon, setLikeIcon] = useState(empty_heart_icon)
	const [liked_state, setLikedState] = useState(false)
	const [attendees, setAttendees] = useState(parseInt(props.event.Joined) || 0)
	const [join, setJoin] = useState(props.join)
	const id = localStorage.getItem('id');

	useEffect(() => {
		setJoin(props.join);
	  }, [props.join]);

	function likeApi() {
		axios.post(`${BACKEND_URL}/api/likeEvent?ClubName=${props.clubname}&Title=${props.title}`)
		.catch(error => {
			console.error('Error fetching data:', error);
		});
	}

	function dislikeApi() {
		axios.post(`${BACKEND_URL}/api/dislikeEvent?ClubName=${props.clubname}&Title=${props.title}`)
		.catch(error => {
			console.error('Error fetching data:', error);
		});
	}

	function joinEvent() {
		axios.post(`${BACKEND_URL}/api/addJoinedEvent?userID=${id}&ClubName=${props.clubname}&Title=${props.title}`)
		.then(response => {
			setAttendees(attendees + 1)
			setJoin(true)
		})
		.catch(error => {
			console.error('Error fetching data:', error);
		});
	}

	let handleLiked = () => {
		
		if (liked_state === false)
		{
			setLikeCount(like_count + 1)
			setLikeIcon(full_heart_icon)
			likeApi()
			setLikedState(true)
		}
		else
		{
			setLikeCount(like_count - 1)
			setLikeIcon(empty_heart_icon)
			dislikeApi()
			setLikedState(false)
		}
	}

	return (
		<>
			<div className='group flex flex-col h-full w-full justify-start bg-white font-poppins text-black p-6 rounded-3xl shadow-lg transition-height duration-500 ease-in-out'>
				<div className='flex flex-row justify-between items-center pb-1'>
					<div className='font-poppins text-2xl font-bold'>{title}</div>
					<button className={`w-28 h-10 ${join ? 'bg-[#2589b8] cursor-not-allowed' : 'bg-[#99DEFF] transition ease-linear hover:scale-110'} md:text-md text-sm font-poppins font-medium rounded-2xl shadow-lg`} onClick={() => joinEvent()} disabled={join}>
						{join ? "Joined" : "Join Event"}
					</button>
				</div>
				<div className='font-poppins text-md font-small py-2'>{desc}</div>
				<div className='flex justify-between items-center'>
					<div className='flex flex-row'>
						<img onClick={handleLiked} src={like_icon} className="active:animate-ping pr-2" alt='like'/>
						<div>{like_count.toString()}</div>
					</div>
					<div>{ (attendees ? attendees : 0) + " attending"}</div>
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
	)
}

export default EventCard;

/*

nice way to do hidden text w/ transition

<div className='bg-white group'>
	<div>Title</div>
	<div className='grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-grid-template-rows duration-500 ease-out'>
		<div className='overflow-hidden'>
			<div>content</div>
		</div>
	</div>
</div>

*/
