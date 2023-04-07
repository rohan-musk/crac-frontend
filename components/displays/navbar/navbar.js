import React, { useState } from 'react';
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
  const [page, setPage] = useState(0);

  return (
    <NavbarContainer>
      <Link href='/' onClick={() => setPage(0)}>
        <NavbarTitle>CrAC</NavbarTitle>
      </Link>

      <MenuContainer>
        <Link href='/apogee' onClick={() => setPage(1)}>
          <MenuOption option='1' selectedOption={page}>
            APOGEE 2023
          </MenuOption>
        </Link>
        <Link href='/oasis' onClick={() => setPage(2)}>
          <MenuOption option='2' selectedOption={page}>
            OASIS 2022
          </MenuOption>
        </Link>
        <Link href='/bosm' onClick={() => setPage(3)}>
          <MenuOption option='3' selectedOption={page}>
            BOSM 2022
          </MenuOption>
        </Link>
        <Link href='/craxters' onClick={() => setPage(4)}>
          <MenuOption option='4' selectedOption={page}>
            Individual Craxters
          </MenuOption>
        </Link>
        <Link href='/archives' onClick={() => setPage(5)}>
          <MenuOption option='5' selectedOption={page}>
            Archives
          </MenuOption>
        </Link>
      </MenuContainer>

      <MenuFooter>
        <Link href='https://www.instagram.com/crac_bitspilani/?hl=en'>
          <FooterOption>
            <Instagram />
            @crac_bitspilani
          </FooterOption>
        </Link>

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
