import React, {useState, useEffect} from 'react';
import "./ClubInfo.css";
// import { ClubLink } from './ClubInfoLink';
import Navbar from '../Components/Navbar';
import Loading from '../Components/LoadingOverlay';
import { RightSideContainer } from '../Components/Navbar/NavbarElements';
import { Accordion } from 'flowbite-react';
import { AccordionPanel } from 'flowbite-react/lib/esm/components/Accordion/AccordionPanel';
import { AccordionTitle } from 'flowbite-react/lib/esm/components/Accordion/AccordionTitle';
import { AccordionContent } from 'flowbite-react/lib/esm/components/Accordion/AccordionContent';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { InstagramEmbed } from 'react-social-media-embed';
import EnquiryPopup from '../Components/EnquiryPopup';

const BACKEND_URL = process.env.REACT_APP_API_URL;

function ClubInfo() {
  const navigate = useNavigate();
  const [info, setInfo] = useState([]);
  const [shortcode, setShortcode] = useState([]);
  const [shortcode2, setShortcode2] = useState([]);
  const [openModal, setOpenModal] = React.useState(false);
  const [pic, setPic] = useState(false);
  const [email, setEmail] = useState(false);
  const [loading, setLoading] = useState(true)
  // const [phone, setPhone] = useState(false);
  // const [location, setLocation] = useState(false);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/test`)
    .then(response => {
      setInfo(response.data.message);
      // console.log(response.data.message);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    }
    );
  }, []);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
    axios.get(`${BACKEND_URL}/api/shortcode/all`)
    .then(response => {
      setShortcode(response.data.message);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    }
    );
  }, []);

  useEffect(() => {
    if (shortcode && shortcode.length > 0) {
      let shortcode2 = shortcode.slice(0, 10);
      setShortcode2(shortcode2);
    }
  }, [shortcode]);

  function redirSignUp(path) {
    navigate('/SignUp/' + path);
  };

  return (
    <div>
    {loading && <Loading/>}
    <div className='overflow-hidden'>
      <Navbar />
      <RightSideContainer>
        <div className='club-header'>Clubs</div>
        <div className='flex h-[4vw] bg-transparent'></div>
        <div className='h-auto w-[100%] flex'>

          <Accordion collapseAll className='w-[60%] border-[#2eb6d1] divide-[#2eb6d1]'>
            {Object.entries(info).map(([category, item], index) => (
              <AccordionPanel key={index}>
                <AccordionTitle className='bg-blue-950 text-white hover:bg-blue-900 hover:text-white focus:bg-blue-950 h-[9vh]'>
                  <div className='text-[2vw]'>{category}</div>
                </AccordionTitle>
                <AccordionContent className='bg-slate-700'>
                  <Accordion collapseAll className='w-[100%] border-[#2eb6d1] divide-[#2eb6d1]'>
                    {item.map((item, itemIndex) => (
                      <AccordionPanel key={itemIndex}>
                        <AccordionTitle className='bg-blue-950 text-white hover:bg-blue-900 hover:text-white focus:bg-blue-950'>
                          <div className='text-2xl'>{item.Name}</div>
                        </AccordionTitle>
                        <AccordionContent className='bg-slate-700 text-blue-300'>
                          <div className="text-2xl text-justify">{item.SocialMedia}</div>
                          <div className="place-items-center text-center p-2">
                            <button onClick={() => redirSignUp(item.Name)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 h-[5vh] w-[8vw] rounded-lg">
                              Sign up
                            </button>
                          </div>
                          <div className="place-items-center text-center">
                            <button onClick={() => {setOpenModal(true); setEmail(item.Email); setPic(item.Advisor)}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 h-[5vh] w-[8vw] rounded-lg">
                              Enquiry
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
          <div className='w-[40%] pl-4 overflow-auto h-[90vh]'>
            {shortcode2.map((edge) => (
              // bg color in className is for visualisation, !!REMOVE WHEN PLACING FEED!!
              <div className="bg-slate-500 justify-center flex">
                <InstagramEmbed url={`https://www.instagram.com/p/${edge}/`} width={800} />
              </div>
            ))}
          </div>
        </div>
        {openModal && (
            <div className='bg-opacity-[0.8] bg-gray-900 top-0 left-0 w-full h-full fixed flex justify-center items-center'>
              <EnquiryPopup email={email} advisor={pic} openModal={openModal} setOpenModal={setOpenModal}/>
            </div>
          )}
      </RightSideContainer>
    </div>
  </div>
  );
}

export default ClubInfo;
