import React, { useState } from 'react'

import empty_heart_icon from "../../assets/icons/emptyHeart.svg"
import full_heart_icon from "../../assets/icons/fullHeart.svg"
import axios from 'axios'

const BACKEND_URL = process.env.REACT_APP_API_URL;

function AnnouncementCard(props)
{
	let title = props.title
	let content = props.announcement.Content
	let date_posted = props.announcement.Date

	const [like_count, setLikeCount] = useState(parseInt(props.announcement.Likes) || 0)
	const [like_icon, setLikeIcon] = useState(empty_heart_icon)
	const [liked_state, setLikedState] = useState(false)

	function likeApi() {
		axios.post(`${BACKEND_URL}/api/likeAnnouncement?ClubName=${props.clubname}&Title=${props.title}`)
		.catch(error => {
			console.error('Error fetching data:', error);
		});
	}

	function dislikeApi() {
		axios.post(`${BACKEND_URL}/api/dislikeAnnouncement?ClubName=${props.clubname}&Title=${props.title}`)
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
			<div className='flex flex-col h-2/16 w-full justify-between bg-white font-poppins text-black p-6 rounded-3xl shadow-lg'>
				<div className='font-poppins text-2xl font-bold'>{title}</div>
				<div className='font-poppins text-md font-small py-2'>{content}</div>
				<div className='flex justify-between items-center'>
					<div className='flex flex-row'>
						<img onClick={handleLiked} src={like_icon} className="active:animate-ping pr-2" alt='like'/>
						<div>{like_count.toString()}</div>
					</div>
					<div>{date_posted}</div>
				</div>
			</div>
		</>
	)
}

export default AnnouncementCard;