import React from 'react';
import { LeftSideContainer, Nav, NavLink, NavMenu } from "./NavbarElements";
import ProfilePicture from "./Profilepic"; // Import the ProfilePicture component

function Navbar() {

  function Logout() {
    localStorage.clear();
    window.location.href = '/';
  }

  return (
    <>
      <LeftSideContainer>
        <ProfilePicture />
        <div className='h-[5vh] bg-transparent'></div>
        <Nav>
          <NavMenu>
            <NavLink to="/MyClubs">
              My Clubs
            </NavLink>
            <NavLink to="/Feed">
              Feed
            </NavLink>
            <NavLink to="/ClubInfo">
              Clubs Info
            </NavLink>
          </NavMenu>
        </Nav>
        <div className='absolute bottom-0 h-14 w-full items-center'>
          <button className='text-red-500 h-full w-full hover:text-red-100 items-center' onClick={() => Logout()}>
            <div className='flex items-center justify-center'>
              <div className='text-[1vw]'>Logout</div>
              <svg className="w-[1vw] h-[1vw] text-white-800 dark:text-white ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
              </svg>
            </div>
          </button>
        </div> 
      </LeftSideContainer>
    </>
  );
};

export default Navbar;
