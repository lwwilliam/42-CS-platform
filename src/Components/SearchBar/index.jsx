import React from 'react'
import search from '../../assets/icons/search.svg';

function SearchBar({onChange})
{
	return (
		<div className='relative'>
			<input type="text" id="myInput" placeholder="Search" title="Type in a name" 
			className='bg-[#E3E1E1] text-black md:pl-10 md:pr-16 md:py-4 py-2 md:text-2xl text-xl font-poppins font-medium rounded-3xl shadow-lg w-full border-[#E3E1E1]'
			onChange={onChange}
			/>
			<img src={search} className='absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer md:w-10 w-6' alt="Search Icon"/>
		</div>
	)
}

export default SearchBar;