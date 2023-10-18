import React, {useState, useEffect} from 'react';
// import { ClubLink } from './ClubInfoLink';
import Navbar from '../Components/Navbar';
import { RightSideContainer } from '../Components/Navbar/NavbarElements';
import { Accordion, Button, Modal } from 'flowbite-react';
import { AccordionPanel } from 'flowbite-react/lib/esm/components/Accordion/AccordionPanel';
import { AccordionTitle } from 'flowbite-react/lib/esm/components/Accordion/AccordionTitle';
import { AccordionContent } from 'flowbite-react/lib/esm/components/Accordion/AccordionContent';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { InstagramEmbed } from 'react-social-media-embed';

function ClubInfo() {
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

  const [openModal, setOpenModal] = useState(undefined);
  const [shortcode, setShortcode] = useState([]);
  const [shortcode2, setShortcode2] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/shortcode/all')
      .then(response => {
        setShortcode(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      }
    );
  }
  , []);

  useEffect(() => {
    if (shortcode && shortcode.length > 0) {
      let shortcode2 = shortcode.slice(0, 7);
      setShortcode2(shortcode2);
    }
  }, [shortcode]);

  const [pic, setPic] = useState(false);
  const [email, setEmail] = useState(false);
  const [phone, setPhone] = useState(false);
  const [location, setLocation] = useState(false);

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
                            <button onClick={() => redirSignUp(club.Name)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 h-[5vh] w-[7vw] rounded-lg">
                              Sign up
                            </button>
                          </div>
                          <div className="ml-[20.9vw]">
                            <Button onClick={() => {setOpenModal('dismissable'); setEmail(club.Email); setPic(club.Person_in_charge); setLocation(club.Location); setPhone(club.Phone_number)}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold h-[5vh] w-[7vw]" color='bg-blue-700'>
                              Enquiry
                            </Button>
                            <Modal show={openModal === 'dismissable'} onClose={() => setOpenModal(undefined)} className="bg-opacity-[0.36]">
                              <Modal.Header className="font-mono border-slate-400 divide-x-[21.5vw] divide-transparent">
                                Contact Information
                              </Modal.Header>
                              <Modal.Body className="overflow-none">
                                <div>
                                  <p className="leading-loose text-base text-violet-950">
                                    Person In Charge: {pic}
                                  </p>
                                  <p className="leading-loose text-base text-violet-950"> 
                                    H/P Number: {phone}
                                  </p>
                                  <p className="leading-loose text-base text-violet-950">
                                    Email: {email}
                                  </p>
                                  <p className="leading-loose text-base text-violet-950">
                                    Location: {location}
                                  </p>
                                </div>
                              </Modal.Body>
                              <Modal.Footer className="border-slate-400">
                                <Button onClick={() => {navigator.clipboard.writeText(email)}}>Copy Email</Button>
                                <Button onClick={() => {navigator.clipboard.writeText(phone)}}>Copy Number</Button>
                              </Modal.Footer>
                            </Modal>
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
            {shortcode2.map((edge) => (
              // bg color in className is for visualisation, !!REMOVE WHEN PLACING FEED!!
              <div style={{ display: 'flex', justifyContent: 'center' }} className="bg-slate-500">
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
