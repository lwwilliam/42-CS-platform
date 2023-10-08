import React from "react";
import { LeftSideContainer, Nav, NavLink, NavMenu } from "./NavbarElements";
import ProfilePicture from "./Profilepic"; // Import the ProfilePicture component
import { UserProvider } from './UserContext'; // Import the UserProvider

ReactDOM.render(
  <React.StrictMode>
    <UserProvider> {/* Wrap your app with UserProvider */}
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

const Section = ({link}) => {
  console.log(link)
  return (
    <NavLink to="/ClubInfo" activeStyle>
      Clubs Info
    </NavLink>
  )
}

const Navbar = () => {

  return (
    <>
      <LeftSideContainer>
        <Nav>
          <NavMenu>
			<ProfilePicture />
            <NavLink to="/MyClubs" activeStyle>
              My Clubs
            </NavLink>
            <NavLink to="/Feed" activeStyle>
              Feed
            </NavLink>
            <NavLink to="/Alerts" activeStyle>
              Alerts
            </NavLink>
            <Section link={"https://google.com"}/>
          </NavMenu>
        </Nav>
      </LeftSideContainer>
    </>
  );
};

export default Navbar;
