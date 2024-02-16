import React from 'react';  
import { useNavigate } from 'react-router-dom';

function HomeEventCard(props) {
  const startDate = new Date(props.event.startDate);
  const optionsDate = {
    day: 'numeric',
    month: 'short',
  };
  const optionsTime = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  };
  let formattedDate = startDate.toLocaleString('en-GB', optionsDate);
  let formattedTime = startDate.toLocaleString('en-GB', optionsTime);
  const nav = useNavigate()

  function handleClick(clubname) {
    nav("/Clubhomepage?clubname=" + clubname)
  }

  return (
    <div className="md:w-[480px] w-[250px] h-56 rounded-3xl bg-gradient-to-b from-[#0023C4] to-[#20B7FE] p-8 relative cursor-pointer" onClick={() => {handleClick(props.event.ClubName)}}>
      <h1 className="font-poppins text-2xl md:text-5xl text-white font-bold">{props.event.Title}</h1>
      <h2 className="font-poppins text-white font-bold py-4">{props.event.ClubName}</h2>
      <div className="font-poppins font-bold absolute right-7 bottom-7 text-center text-2xl">
        <div>{formattedDate}</div>
        <div>{formattedTime}</div>
      </div>
      <div className="font-poppins font-medium absolute bottom-7 md:flex flex-col gap-x-4 font-2xl">
        <div>{props.event.Likes ? props.event.Likes : 0} interested</div>
        <div>{props.event.Joined ? props.event.Joined : 0} attending</div>
      </div>
    </div>
  );
}

export default HomeEventCard;