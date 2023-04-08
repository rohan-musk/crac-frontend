import React from 'react';
import Image from 'next/image';
import { FestLayoutContainer, FestLayoutHeader } from './FestLayout.styled';

const FestLayout = () => {
  return (
    <FestLayoutContainer>
      <FestLayoutHeader>
        <Image src='/images/oasisBanner.png' layout='fill' objectFit='cover' />
      </FestLayoutHeader>
    </FestLayoutContainer>
  );
};

export default FestLayout;
