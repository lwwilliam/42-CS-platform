import React from 'react';
import Navbar from './TopNavBar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar className="flex"/>
			<div className='flex-grow'>
      	{children}
			</div>
			<Footer className="flex inset-x-0 bottom-0"/>
    </div>
  );
};

export default Layout;