import React from 'react';
import Image from 'next/image';
import {
  FestLayoutContainer,
  FestLayoutHeader,
  FestLayoutBody,
  FestImage,
  FestImageText,
} from './FestLayout.styled';

const FestLayout = () => {
  return (
    <FestLayoutContainer>
      <FestLayoutHeader>
        <Image src='/images/oasisBanner.png' layout='fill' objectFit='cover' />
      </FestLayoutHeader>
      <FestLayoutBody>
        <FestImage>
          <FestImageText>Brother</FestImageText>
        </FestImage>
        <FestImage wide>
          <FestImageText>Mother</FestImageText>
        </FestImage>
      </FestLayoutBody>
    </FestLayoutContainer>
  );
};

export default FestLayout;
