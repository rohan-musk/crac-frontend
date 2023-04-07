import React from 'react';
import Navbar from '@components/displays/navbar/Navbar';
import {
  MainLayoutContainer,
  MainLayoutContent,
  MainLayoutHeader,
} from './MainLayout.styled';

const MainLayout = ({ children }) => {
  return (
    <MainLayoutContainer>
      <Navbar />
      <MainLayoutContent>
        <MainLayoutHeader>Hi Space Grotesk</MainLayoutHeader>
        {children}
      </MainLayoutContent>
    </MainLayoutContainer>
  );
};

export default MainLayout;
