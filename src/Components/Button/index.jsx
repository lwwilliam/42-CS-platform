import React from 'react'

function Button({text, onClick})
{
	return (
		<div className={`w-48 h-16 rounded-[1.25rem] relative transform transition-all duration-200 hover:shadow-lg`}>
			<button className={`w-48 h-16 absolute bg-lightmode-blue rounded-[1.25rem]`}
					onClick={onClick}>
				<div className="text-center text-black text-[25px] font-medium font-['Poppins']">
					{text}
				</div>
			</button>
		</div>
	)
}

export default Button;