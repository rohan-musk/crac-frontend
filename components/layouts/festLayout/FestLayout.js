import React from 'react';
import Image from 'next/image';
import ImageLayout from '@components/layouts/imageLayout/ImageLayout';
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
      <ImageLayout fest />
    </FestLayoutContainer>
  );
};

export default FestLayout;
