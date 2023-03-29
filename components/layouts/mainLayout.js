import React from 'react';
import Navbar from '@components/displays/navbar/navbar';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
