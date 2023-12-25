import React from 'react';

function MyClubTile({clubName, clubPosition, onClick})
{
	return (
		<div className="w-[700px] h-[70px] relative shadow-lg rounded-[1.25rem] transform transition-all duration-200 hover:-translate-y-2">
			<button className="w-[43.75rem] h-[4.375rem] left-0 top-0 absolute bg-white rounded-[1.25rem]" onClick={onClick}>
				<div className="left-[1.25rem] top-[1rem] absolute text-black text-3xl font-bold font-['Poppins']">
					{clubName}
				</div>
				<div className="left-[565px] top-[20px] absolute text-black text-xl font-medium font-['Poppins']">
					{clubPosition}
				</div>
			</button>
		</div>
	)
}

export default MyClubTile;