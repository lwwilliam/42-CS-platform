import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import "../Components/components.css";
import { RightSideContainer } from '../Components/Navbar/NavbarElements';
import json from './faqs.json';
import Loading from '../Components/LoadingOverlay';

function FAQ() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000) 
  }, []);

  return (
    <div>
      {loading && <Loading/>}
      <Navbar />
      <RightSideContainer>
      <div className='c-header'>FAQ</div>
      <div className='flex h-[4vw] bg-transparent'></div>
      <div className='mx-auto border-black border-2 rounded-xl bg-white bg-opacity-[0.15] w-[80%]'>
        {json.map((edge) => (
          <div key={edge} className='px-7 py-2'>
            <div className='text-[1.2vw] font-bold '>{edge.Question}</div>
            <div className='text-[1vw] pl-4 '>{edge.Answer}</div>
          </div>
        ))}
      </div>
      </RightSideContainer>
    </div>
  );
}

export default FAQ;