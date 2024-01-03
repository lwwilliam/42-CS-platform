import React from 'react';
import yourclubs from '../../assets/icons/yourClubs.svg';
import allclubs from '../../assets/icons/allClubs.svg';
import home from '../../assets/icons/home.svg';
import logout from '../../assets/icons/logout.svg';
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
        <div className='flex items-center justify-center'>
          <button className='px-4 md:px-10 lg:px-14 flex-col flex items-center' onClick={() => redir("/MyClubs")}>
            <img src={yourclubs} className='h-12 w-12 sm:h-7 sm:w-7' alt="home icon"/>
            <span className='whitespace-nowrap hidden md:flex'>Your Clubs</span>
          </button>
          <button className='px-4 md:px-10 lg:px-14 flex-col flex items-center' onClick={() => redir("/ClubInfo")}>
            <img src={allclubs} className='h-11 w-11 sm:h-7 sm:w-7' alt="home icon"/>
            <span className='whitespace-nowrap hidden md:flex'>All Clubs</span>
          </button>
          <button className='px-4 md:px-10 lg:px-14 flex-col flex items-center' onClick={() => redir("/Feed")}>
            <img src={home} className='h-12 w-12 sm:h-7 sm:w-7' alt="home icon"/>
            <span className='whitespace-nowrap hidden md:flex'>Home</span>
          </button>
          <button className='px-4 md:px-10 lg:px-14 flex-col flex items-center' onClick={() => Logout()}>
            <img src={logout} className='h-12 w-12 sm:h-7 sm:w-7' alt="home icon"/>
            <span className='whitespace-nowrap hidden md:flex'>Logout</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TopNavBar;