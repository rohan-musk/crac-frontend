import React from 'react';
import ImageCards from '@components/reusable/ImageCards/ImageCards';
import { ImageLayoutBody } from './ImageLayout.styled';

const ImageLayout = ({ fest }) => {
  return (
    <ImageLayoutBody fest={fest}>
      <ImageCards text='Brother' />
      <ImageCards text='Mother' />
      <ImageCards text='Mother' />
      <ImageCards text='Team' main />
    </ImageLayoutBody>
  );
};

export default ImageLayout;
