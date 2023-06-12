import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Instagram from '@public/icons/Instagram.svg';
import Mail from '@public/icons/Mail.svg';
import Call from '@public/icons/Call.svg';
import Close from '@public/icons/Close.svg';

import {
  NavbarContainer,
  NavbarTop,
  NavbarClose,
  NavbarTitle,
  MenuContainer,
  MenuOption,
  MenuFooter,
  FooterOption,
} from './Navbar.styled';

const Navbar = ({ showNavbar, closeNavbar }) => {
  const [page, setPage] = useState(0);
  const router = useRouter();
  useEffect(() => {
    router.pathname.includes('/apogee') ? setPage(1) : null;
    router.pathname.includes('/oasis') ? setPage(2) : null;
    router.pathname.includes('/bosm') ? setPage(3) : null;
    router.pathname.includes('/craxters') ? setPage(4) : null;
    router.pathname.includes('/archives') ? setPage(5) : null;
  }, [router.pathname]);

  const baseURL = 'http://localhost:3001/contactDetails';
  const [navData, setNavData] = useState(null);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setNavData(response.data);
    });
  }, []);

  return (
    <NavbarContainer showNavbar={showNavbar}>
      <NavbarTop>
        <Link href='/' onClick={() => setPage(0)}>
          <NavbarTitle>CrAC</NavbarTitle>
        </Link>
        <NavbarClose onClick={() => closeNavbar()}>
          <Close />
        </NavbarClose>
      </NavbarTop>

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
        <Link
          href={`https://www.instagram.com/` + navData?.data.contactData.insta}
        >
          <FooterOption>
            <Instagram fill='#fff' />@
            {navData && navData.data.contactData.insta}
          </FooterOption>
        </Link>

        <FooterOption>
          <Call fill='#fff' />
          {navData && navData.data.contactData.phone}
        </FooterOption>
        <Link href={`mailto:` + navData?.data.contactData.mail}>
          <FooterOption>
            <Mail fill='#fff' />
            {navData && navData.data.contactData.mail}
          </FooterOption>
        </Link>
      </MenuFooter>
    </NavbarContainer>
  );
};

export default Navbar;
