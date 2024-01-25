import React from 'react';
import Navbar from '../Components/Navbar';
import "../Components/components.css";
import { RightSideContainer } from '../Components/Navbar/NavbarElements';

function Alerts() {
  return (
    <div>
      <Navbar />
        <RightSideContainer>
        <div className='c-header'>Alerts</div>
        <table width="80%" border="1" bgcolor="#aaaaaa" align='center' style={{marginTop: "6vw"}}>
          <tr style={{height: "50px"}}>
            <td width="25%">Club Meeting</td>
            <td>Meeting at Jeffery Cheah Hall at 3pm 20 October 2023.</td>
          </tr>
          <tr style={{height: "50px"}}>
            <td width="25%">Clube Fees</td>
            <td>Club fees due, please refer to person in charge for more info.</td>
          </tr>
        </table>
        </RightSideContainer>
    </div>
  );
}

export default Alerts;