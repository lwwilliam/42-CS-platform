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
import axios from 'axios';

import { InstagramEmbed } from 'react-social-media-embed';

const shortcode = ["test1", "test2", "test3", "test4", "test5", "test6", "test7", "test8", "test9", "test10"];

function ClubInfo() {
  // const [clubs, setClubs] = useState([]);
  const navigate = useNavigate();
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/clubdata')
      .then(response => {
        setInfo(response.data.message[0].Category);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      }
    );
  }, []);
  
  function redirSignUp(path) {
    navigate('/SignUp/' + path);
  };
  
  return (
    <div className='overflow-hidden'>
      <Navbar />
      <RightSideContainer>
        <div className='club-header'>Clubs</div>
        <div style={{marginTop: "4vw"}}></div>
        <div className='flex'>
          <div className='overflow-hidden  w-[60%]'>
            <Accordion collapseAll className='border-[#2eb6d1] divide-[#2eb6d1]'>
              {/* change input here for club category names */}
              {/* clubs.map and parameter before index */}
              {info.map((category, index) => (
              <AccordionPanel key={index}>
                <AccordionTitle className="bg-blue-950 text-white hover:bg-blue-900 hover:text-white focus:bg-blue-950 h-[9vh]">
                  {/* change display to club category names */}
                  <div className="text-[2.2vw]">{category.Category_Name}</div>
                </AccordionTitle>
                <AccordionContent className='bg-slate-700'>
                  <Accordion collapseAll className='border-[#2eb6d1] divide-[#2eb6d1]'>
                    {category.Clubs.map((club, index) => (
                      <AccordionPanel key={index}>
                        <AccordionTitle className="bg-blue-950 text-white hover:bg-blue-900 hover:text-white focus:bg-blue-950">
                          <div className="text-2xl">{club.Name}</div>
                        </AccordionTitle>
                        <AccordionContent className='bg-slate-700 text-blue-300'>
                          <div className="text-2xl text-justify">{club.Description}</div>
                          <div class="place-items-center text-center p-2">
                            <button onClick={() => redirSignUp(club.Name)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 h-10 w-28 rounded-full">
                              Sign up
                            </button>
                          </div>
                        </AccordionContent>
                      </AccordionPanel>
                    ))}
                  </Accordion>
                </AccordionContent>
              </AccordionPanel>
              ))}
            </Accordion>
          </div>
          <div className='w-[40%] pl-4 overflow-auto h-[88vh]'>
            {shortcode.map((edge) => (
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                {/* test */}
                <InstagramEmbed url={`https://www.instagram.com/p/${edge}/`} width={800} />
              </div>
            ))}
          </div>
        </div>
      </RightSideContainer>
    </div>
  );
}

export default ClubInfo;
