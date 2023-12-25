import React, {useState, useEffect} from 'react';
// import { ClubLink } from './ClubInfoLink';
import Navbar from '../Components/Navbar';
import Loading from '../Components/LoadingOverlay';
import { RightSideContainer } from '../Components/Navbar/NavbarElements';
import "../Components/components.css";
import { Accordion } from 'flowbite-react';
import { AccordionPanel } from 'flowbite-react/lib/esm/components/Accordion/AccordionPanel';
import { AccordionTitle } from 'flowbite-react/lib/esm/components/Accordion/AccordionTitle';
import { AccordionContent } from 'flowbite-react/lib/esm/components/Accordion/AccordionContent';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { InstagramEmbed } from 'react-social-media-embed';
import EnquiryPopup from '../Components/EnquiryPopup';
import Layout from '../Components/layout';
import Card from '../Components/Cards';

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
      console.log(response.data.message);
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
    <Layout>
      <div className='w-full border-2 flex justify-center'>
        <div>
          <div className='w-full flex'>
            <div>All Clubs & Societies</div>
            {/* <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search" title="Type in a name"></input> */}
          </div>
          <div>
            {Object.entries(info).map(([category, item], index) => (
              <div key={index} className='flex flex-col items-center'>
                <div className='text-3xl font-poppins font-black py-8 w-[80%]'>{category}</div>
                <div className='grid grid-cols-2 gap-y-10 gap-x-20 w-[80%]'>
                  {item.map((club, clubindex) => (
                    // <div className='border-2 flex justify-center items-center'>
                    <Card club={club} key={clubindex}/>
                    // </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ClubInfo;
