import React from 'react';
import Navbar from './TopNavBar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar className="flex"/>
      {children}
    </div>
  );
};

export default Layout;