import React, {useState, useEffect} from 'react';
// import { ClubLink } from './ClubInfoLink';
import Navbar from '../Components/Navbar';
import { RightSideContainer } from '../Components/Navbar/NavbarElements';
import { Accordion } from 'flowbite-react';
import { AccordionPanel } from 'flowbite-react/lib/esm/components/Accordion/AccordionPanel';
import { AccordionTitle } from 'flowbite-react/lib/esm/components/Accordion/AccordionTitle';
import { AccordionContent } from 'flowbite-react/lib/esm/components/Accordion/AccordionContent';
import { useNavigate } from 'react-router-dom';
import './ClubInfo.css';
import clubsData from './clubs.json';

console.log(clubsData);

function ClubInfo() {
  const [clubs, setClubs] = useState([]);
  const navigate = useNavigate();

  function redirSignUp(path) {
    navigate('/SignUp/' + path);
  };
  
  useEffect(() => {
    setClubs(clubsData.Clubs); // Use the imported JSON data directly
  }, []);

  console.log("Clubs:", clubs);
  return (
    <div>
      <Navbar />
      <RightSideContainer>
        <div className='club-header'>Clubs</div>
        <div style={{marginTop: "4vw"}}></div>
        <Accordion>
          {clubs.map((club, index) => (
            <AccordionPanel key={index}>
              <AccordionTitle>
                <div className="text-2xl">{club.Name}</div>
              </AccordionTitle>
              <AccordionContent>
                <div className="text-2xl text-justify bg-gray-500/20 ">{club.Description}</div>
                <div class="place-items-center text-center p-2">
                  <button onClick={() => redirSignUp(club.Name)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 h-10 w-28 rounded-full">
                    Sign up
                  </button>
                </div>
              </AccordionContent>
            </AccordionPanel>
          ))}
        </Accordion>
      </RightSideContainer>
    </div>
  );
}

export default ClubInfo;