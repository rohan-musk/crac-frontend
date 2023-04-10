import React from 'react';
import Image from 'next/image';
import ImageCards from '@components/reusable/ImageCards/ImageCards';
import {
  FestLayoutContainer,
  FestLayoutHeader,
  FestLayoutBody,
} from './FestLayout.styled';

const FestLayout = () => {
  return (
    <FestLayoutContainer>
      <FestLayoutHeader>
        <Image src='/images/oasisBanner.png' layout='fill' objectFit='cover' />
      </FestLayoutHeader>
      <FestLayoutBody>
        <ImageCards text='Brother' />
        <ImageCards text='Mother' wide />
      </FestLayoutBody>
    </FestLayoutContainer>
  );
};

export default FestLayout;
