import React from 'react';
import Image from 'next/image';
import {
  ArtistLayoutContainer,
  ArtistLayoutHeader,
  ArtistImage,
  ArtistName,
  ArtistDetails,
} from './ArtistLayout.styled';

const ArtistLayout = ({ children }) => {
  return (
    <ArtistLayoutContainer>
      <ArtistLayoutHeader>
        <ArtistDetails>
          <ArtistImage></ArtistImage>
          <ArtistName>ROHAN ANIL MUSKAWAD</ArtistName>
        </ArtistDetails>
        <Image src='/images/artist.png' layout='fill' objectFit='cover' />
      </ArtistLayoutHeader>
      {children}
    </ArtistLayoutContainer>
  );
};

export default ArtistLayout;
