import React, { useState } from 'react';
import { FestImage, FestImageText } from './ImageCards.styled';

const ImageCards = ({ text, wide, main }) => {
  const [show, setShow] = useState(false);
  return (
    <FestImage
      wide={wide}
      main={main}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {show ? <FestImageText>{text}</FestImageText> : <></>}
    </FestImage>
  );
};

export default ImageCards;
