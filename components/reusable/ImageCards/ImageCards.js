import React from 'react';
import { FestImage, FestImageText } from './ImageCards.styled';

const ImageCards = ({ text, wide }) => {
  return (
    <FestImage wide={wide}>
      <FestImageText>{text}</FestImageText>
    </FestImage>
  );
};

export default ImageCards;
