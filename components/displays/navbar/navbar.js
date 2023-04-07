import React from 'react';
import Link from 'next/link';
import {
  NavbarContainer,
  NavbarTitle,
  MenuContainer,
  MenuOption,
} from './Navbar.styled';
const Navbar = () => {
  return (
    <NavbarContainer>
      <Link href='/'>
        <NavbarTitle>CrAC</NavbarTitle>
      </Link>

      <MenuContainer>
        <MenuOption>APOGEE 2023</MenuOption>
        <MenuOption>OASIS 2023</MenuOption>
        <MenuOption>BOSM 2023</MenuOption>
        <MenuOption>Individual Craxters</MenuOption>
        <MenuOption>Archives</MenuOption>
      </MenuContainer>
    </NavbarContainer>
  );
};

export default Navbar;
