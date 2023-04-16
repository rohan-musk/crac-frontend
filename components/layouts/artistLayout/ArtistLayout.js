import React from 'react';
import Image from 'next/image';
import {ArtistLayoutContainer,ArtistLayoutHeader,ArtistImage} from './ArtistLayout.styled'

const ArtistLayout = () => {
  return (
    <ArtistLayoutContainer>
      <ArtistLayoutHeader>
        <ArtistImage></ArtistImage>
        <Image src='/images/artist.png' layout='fill' objectFit='cover' />
      </ArtistLayoutHeader>
    </ArtistLayoutContainer>
  )
}

export default ArtistLayout
