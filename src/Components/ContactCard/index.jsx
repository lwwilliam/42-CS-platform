import React from "react";

function ContactCard({ name, email }) {
  
  return (
    <div className='bg-white h-28 md:h-40 rounded-3xl shadow-lg flex items-center justify-center mb-10 md:mb-0 transform transition-all duration-200 hover:-translate-y-2 cursor-pointer'>
      <div className='w-11/12 font-poppins'>
        <div className="md:text-2xl lg:text-3xl text-xl py-3 font-medium">
					<div className="text-2xl font-poppins font-bold">{name}</div>
					<div className="font-poppins text-lg">{email}</div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;