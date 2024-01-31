import React from 'react';
import "../../Components/components.css";
import Layout from '../../Components/layout';
import HorizontalSlider from '../../Components/HorizontalSlider';

function Home() {
  return (
    <Layout>
      <div className='w-full flex flex-col justify-center items-center'>
        <div className='lg:flex w-[80%] py-16 items-center justify-between'>
          <div className='font-poppins font-bold md:text-5xl text-4xl'>Current Events</div>
        </div>
        <div className='w-[83%]'>
          <HorizontalSlider/>
        </div>
        <div className='lg:flex w-[80%] pt-24 pb-16 items-center justify-between'>
          <div className='font-poppins font-bold md:text-5xl text-4xl'>Joined Events</div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;