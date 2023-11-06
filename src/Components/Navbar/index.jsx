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
            <NavLink to="/MyClubs" activeStyle>
              My Clubs
            </NavLink>
            <NavLink to="/Feed" activeStyle>
              Feed
            </NavLink>
            <NavLink to="/ClubInfo" activeStyle>
              Clubs Info
            </NavLink>
          </NavMenu>
        </Nav>
        <div class='absolute bottom-0 h-14 w-full items-center'>
          <button className='text-red-500 h-full w-full hover:text-red-100 items-center' onClick={() => Logout()}>
            <div class='flex items-center justify-center'>
              <div class='text-[1vw]'>Logout</div>
              <svg class="w-[1vw] h-[1vw] text-white-800 dark:text-white ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
              </svg>
            </div>
          </button>
        </div> 
      </LeftSideContainer>
    </>
  );
};

export default Navbar;
