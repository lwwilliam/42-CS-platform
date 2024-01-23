import React from 'react';
import yourclubs from '../../assets/icons/yourClubs.svg';
import allclubs from '../../assets/icons/allClubs.svg';
// import home from '../../assets/icons/home.svg';
import logout from '../../assets/icons/logout.svg';
import faq from '../../assets/icons/faq.svg';
import { useNavigate } from 'react-router-dom';

const TopNavBar = ({ className }) => {
  const navigate = useNavigate();

  function redir(path) {
    navigate(path);
  };

  function Logout() {
    localStorage.clear();
    redir("/");
  }

  return(
    <div className={`border-b-2 border-black h-20 flex items-center justify-center ${className}`}>
      <div className='flex w-[84%] md:w-[76%] items-center justify-between'>
        <div className='text-1xl md:text-2xl lg:text-3xl font-poppins font-bold'>Clubs & Societies</div>
        <div className='flex items-center justify-center md:mt-2'>
          <button className='grid grid-rows-1 md:grid-rows-2 px-4 place-items-center' onClick={() => redir("/MyClubs")}>
            <img src={yourclubs} className='h-11 sm:h-7' alt="home icon"/>
            <span className='whitespace-nowrap hidden md:flex font-poppins'>Your Clubs</span>
          </button>
          <button className='grid grid-rows-1 md:grid-rows-2 px-4 place-items-center' onClick={() => redir("/AllClubs")}>
            <img src={allclubs} className='h-11 sm:h-7' alt="home icon"/>
            <span className='whitespace-nowrap hidden md:flex font-poppins'>All Clubs</span>
          </button>
          <button className='grid grid-rows-1 md:grid-rows-2 px-4 place-items-center' onClick={() => redir("/FAQ")}>
            <img src={faq} className='h-12 sm:h-8' alt="home icon"/>
            <span className='whitespace-nowrap hidden md:flex font-poppins'>FAQ</span>
          </button>
          <button className='grid grid-rows-1 md:grid-rows-2 px-4 place-items-center' onClick={() => Logout()}>
            <img src={logout} className='h-12 sm:h-7' alt="home icon"/>
            <span className='whitespace-nowrap hidden md:flex font-poppins'>Logout</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TopNavBar;