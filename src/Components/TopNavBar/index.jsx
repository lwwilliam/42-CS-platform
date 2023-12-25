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
      <div className='flex w-[76%] items-center justify-between'>
        <div className='text-4xl font-poppins font-bold'>Clubs & Societies</div>
        <div className='flex items-center'>
          <button className='md:px-10 lg:px-14 flex-col flex items-center' onClick={() => redir("/MyClubs")}>
            <img src={yourclubs} className='h-7 w-7' alt="home icon"/>
            <span>Your Clubs</span>
          </button>
          <button className='md:px-10 lg:px-14 flex-col flex items-center' onClick={() => redir("/ClubInfo")}>
            <img src={allclubs} className='h-6 w-6' alt="home icon"/>
            <span>All Clubs</span>
          </button>
          <button className='md:px-10 lg:px-14 flex-col flex items-center' onClick={() => redir("/Feed")}>
            <img src={home} className='h-7 w-7' alt="home icon"/>
            <span>Home</span>
          </button>
          <button className='md:px-10 lg:px-14 flex-col flex items-center' onClick={() => Logout()}>
            <img src={logout} className='h-7 w-7' alt="home icon"/>
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TopNavBar;