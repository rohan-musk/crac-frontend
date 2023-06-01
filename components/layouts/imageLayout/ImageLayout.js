import React from 'react';
import ImageCards from '@components/reusable/ImageCards/ImageCards';
import { ImageLayoutBody } from './ImageLayout.styled';

const ImageLayout = ({ fest }) => {
  return (
    <ImageLayoutBody fest={fest}>
      <ImageCards text='image1' />
      <ImageCards text='image2' />
      <ImageCards text='image3' />
      <ImageCards text='Team' main />
    </ImageLayoutBody>
  );
};

export default ImageLayout;
