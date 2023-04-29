import React, { useState } from 'react';
import Navbar from '@components/displays/navbar/Navbar';
import NavbarIcon from '@public/icons/Navbar.svg';

import {
  MainLayoutContainer,
  MainLayoutContent,
  NavbarClick,
} from './MainLayout.styled';

const MainLayout = ({ children }) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const closeNavbar = () => {
    setShowNavbar(false);
  };
  return (
    <MainLayoutContainer>
      <Navbar showNavbar={showNavbar} closeNavbar={closeNavbar} />
      <NavbarClick showNavbar={showNavbar}>
        <NavbarIcon onClick={() => setShowNavbar(true)} />
      </NavbarClick>
      <MainLayoutContent>{children}</MainLayoutContent>
    </MainLayoutContainer>
  );
};

export default MainLayout;
