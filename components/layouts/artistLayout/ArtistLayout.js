import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  ArtistLayoutContainer,
  ArtistLayoutHeader,
  ArtistImage,
  ArtistName,
  ArtistDetails,
  ArtistNav,
  ArtistNavOption,
  ArtistNavContainer,
} from './ArtistLayout.styled';
import { useRouter } from 'next/router';

const ArtistLayout = ({ children }) => {
  const [page, setPage] = useState(1);
  const router = useRouter();
  useEffect(() => {
    console.log(router.pathname);
    router.pathname.includes('/work') ? setPage(1) : null;
    router.pathname.includes('/about') ? setPage(2) : null;
  }, [router.pathname]);
  return (
    <ArtistLayoutContainer>
      <ArtistLayoutHeader>
        <ArtistDetails>
          <ArtistImage></ArtistImage>
          <ArtistName>ROHAN ANIL MUSKAWAD</ArtistName>
        </ArtistDetails>
        <Image src='/images/artist.png' layout='fill' objectFit='cover' />
      </ArtistLayoutHeader>
      <ArtistNavContainer>
        <ArtistNav>
          <ArtistNavOption
            option='1'
            selectedOption={page}
            onClick={() => setPage(1)}
            href={'/craxters/' + 1 + '/work'}
          >
            Work
          </ArtistNavOption>
          <ArtistNavOption
            option='2'
            selectedOption={page}
            onClick={() => setPage(2)}
            href={'/craxters/' + 1 + '/about'}
          >
            About
          </ArtistNavOption>
        </ArtistNav>
      </ArtistNavContainer>
      {children}
    </ArtistLayoutContainer>
  );
};

export default ArtistLayout;
