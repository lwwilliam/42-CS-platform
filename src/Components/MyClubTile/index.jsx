import React from 'react';
import { useNavigate } from 'react-router-dom';

function MyClubTile({clubName, clubPosition})
{
	const nav = useNavigate()

	function redirect(clubname)
	{
		console.log(clubname)
		nav("/Clubhomepage?clubname=" + clubname)
	}

	return (
		<button className='flex h-2/16 w-full justify-between items-center bg-white font-poppins text-black p-4 rounded-3xl shadow-lg transform transition-all duration-200 hover:-translate-y-2'
						onClick={() => {redirect(clubName)}}>
			<div className="flex text-2xl pr-2 font-bold text-left">
				{clubName}
			</div>
			<div className="flex text-xl font-medium">
				{clubPosition}
			</div>
		</button>
	)
}

export default MyClubTile;