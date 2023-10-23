import React from 'react';
import { LeftSideContainer, Nav, NavLink, NavMenu } from "./NavbarElements";
import ProfilePicture from "./Profilepic"; // Import the ProfilePicture component

function Navbar() {

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
            {/* <NavLink to="/Alerts" activeStyle>
              Alerts
            </NavLink> */}
            <NavLink to="/ClubInfo" activeStyle>
              Clubs Info
            </NavLink>
          </NavMenu>
        </Nav>
      </LeftSideContainer>
    </>
  );
};

export default Navbar;
