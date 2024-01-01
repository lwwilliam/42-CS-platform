import React, { useState } from 'react'

import empty_heart_icon from "../../assets/icons/emptyHeart.svg"
import full_heart_icon from "../../assets/icons/fullHeart.svg"


function AnnouncementCard()
{
	let title = "Title"
	let content = "Content goes here..."
	let date_posted = "21 Dec"

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
			<div className='flex flex-col h-2/16 w-full justify-between bg-white font-poppins text-black p-6 rounded-3xl shadow-lg'>
				<div className='font-poppins text-2xl font-bold'>{title}</div>
				<div className='font-poppins text-md font-medium py-2'>{content}</div>
				<div className='flex justify-between items-center'>
					<div className='flex flex-row'>
						<img onClick={handleLiked} src={like_icon} className="active:animate-ping pr-2" />
						<div>{like_count.toString()}</div>
					</div>
					<div>{date_posted}</div>
				</div>
			</div>
		</>
	)
}

export default AnnouncementCard;