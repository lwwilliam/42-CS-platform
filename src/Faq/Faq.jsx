import React from 'react';
import "../Components/components.css";
import json from './faqs.json';
// import Loading from '../Components/LoadingOverlay';
import Layout from '../Components/layout';

function FAQ() {

  return (
    <Layout>
      <div className='mx-auto w-[80%] py-5'>
			<div className='font-poppins font-bold md:text-5xl text-4xl md:mb-auto mb-6'>Frequently Asked Questions</div>
        {json.map((edge) => (
          <div key={edge} className='px-7 py-2'>
            <div className='text-[1.2vw] font-bold '>{edge.Question}</div>
            <div className='text-[1vw] pl-4 '>{edge.Answer}</div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default FAQ;