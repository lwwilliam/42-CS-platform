import React from 'react'

function Button({text, onClick})
{
	return (
		<button className='bg-[#99DEFF] md:px-16 md:py-4 py-2 md:text-2xl text-xl font-poppins font-semibold rounded-2xl shadow-lg mr-10 md:mb-0 mb-3 md:w-auto w-full'
				onClick={onClick}>
			{text}
		</button>
	)
}

export default Button;