import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const LeftSideContainer = styled.div`
  position: fixed; /* Make the Navbar fixed */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 100vh;
  background: #494241;
  padding: 0.2rem calc((100vh - 1000px) / 2);
`;


export const Nav = styled.nav`
  height: 90px;
  display: flex;
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  margin-bottom: 20px;
  font-size: 1vw;
  cursor: pointer;
  &.active {
    color: black;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  flex-direction: column; /* Arrange links vertically */
  align-items: center; /* Center links horizontally */
  justify-content: center; /* Center links vertically */
  height: 100%; /* Fill the entire height of NavMenu */
`;

export const RightSideContainer = styled.div`
  margin-left: 25%; /* Adjust based on the width of the LeftSideContainer */
  padding: 20px; /* Add padding to create space between Navbar and content */
`;



  
  
  
  
  
  
  

  
  
  
  
  
  