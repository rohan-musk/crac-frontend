import React from 'react';
import Link from 'next/link';
import Instagram from '@public/icons/Instagram.svg';
import Mail from '@public/icons/Mail.svg';
import Call from '@public/icons/Call.svg';

import {
  NavbarContainer,
  NavbarTitle,
  MenuContainer,
  MenuOption,
  MenuFooter,
  FooterOption,
} from './Navbar.styled';
const Navbar = () => {
  return (
    <NavbarContainer>
      <Link href='/'>
        <NavbarTitle>CrAC</NavbarTitle>
      </Link>

      <MenuContainer>
        <MenuOption>APOGEE 2023</MenuOption>
        <MenuOption>OASIS 2022</MenuOption>
        <MenuOption>BOSM 2022</MenuOption>
        <MenuOption>Individual Craxters</MenuOption>
        <MenuOption>Archives</MenuOption>
      </MenuContainer>

      <MenuFooter>
        <FooterOption>
          <Instagram />
          @crac_bitspilani
        </FooterOption>
        <FooterOption>
          <Call />
          +91 98925 00584
        </FooterOption>
        <FooterOption>
          <Mail />
          f20201798@bits.pilani-bits.ac.in
        </FooterOption>
      </MenuFooter>
    </NavbarContainer>
  );
};

export default Navbar;
