import React from 'react';
import ImageCards from '@components/reusable/ImageCards/ImageCards';
import { ImageLayoutBody } from './ImageLayout.styled';

const ImageLayout = () => {
  return (
    <ImageLayoutBody>
      <ImageCards text='Brother' />
      <ImageCards text='Mother' />
      <ImageCards text='Mother' />
      <ImageCards text='Team' main />
    </ImageLayoutBody>
  );
};

export default ImageLayout;
