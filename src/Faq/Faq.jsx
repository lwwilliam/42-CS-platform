import React from 'react';
import "../Components/components.css";
import json from './faqs.json';
// import Loading from '../Components/LoadingOverlay';
import Layout from '../Components/layout';

function FAQ() {

  return (
    <Layout>
      <div className='mx-auto border-black border-2 rounded-xl bg-white bg-opacity-[0.15] w-[80%] mt-5'>
        {json.map((edge) => (
          <div key={edge} className='px-7 py-2'>
            <div className='text-[19px] font-bold '>{edge.Question}</div>
            <div className='text-[19px] pl-4 '>{edge.Answer}</div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default FAQ;