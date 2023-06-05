import React, { useState } from 'react';
import Navbar from '@components/displays/navbar/Navbar';
import Background from '@components/reusable/Background/Background';
import NavbarIcon from '@public/icons/Navbar.svg';
import useComponentDimensions from '@lib/hooks/useComponentDimensions';

import {
  MainLayoutContainer,
  MainLayoutContent,
  NavbarClick,
} from './MainLayout.styled';

const MainLayout = ({ children }) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [contententDimensions, contentRef] = useComponentDimensions();
  const closeNavbar = () => {
    setShowNavbar(false);
  };
  return (
    <MainLayoutContainer>
      <Navbar showNavbar={showNavbar} closeNavbar={closeNavbar} />
      <NavbarClick showNavbar={showNavbar}>
        <NavbarIcon onClick={() => setShowNavbar(true)} fill='#000' />
      </NavbarClick>
      <Background
        dimensions={contententDimensions}
        class='invisible-scrollbar'
      />
      <MainLayoutContent ref={contentRef}>{children}</MainLayoutContent>
    </MainLayoutContainer>
  );
};

export default MainLayout;
