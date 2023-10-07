import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const LeftSideContainer = styled.div`
  display: flex;
  flex-direction: column; /* Arrange children vertically */
  align-items: center; /* Center children horizontally */
  justify-content: center; /* Center children vertically */
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
  font-size: 20px;
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


  
  
  
  
  
  
  

  
  
  
  
  
  