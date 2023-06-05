import React from 'react';
import { BackgroundContainer, BackgroundBlobs } from './Background.styled';

const Background = ({ dimensions }) => {
  const containerHeight = dimensions.height;
  let numberOfBlobs = containerHeight / 800;
  let rows = [];
  for (let i = 1; i < numberOfBlobs; i++) {
    rows.push(<BackgroundBlobs componentNumber={i} key={i} />);
  }
  return (
    <BackgroundContainer style={{ height: containerHeight }}>
      {rows}
    </BackgroundContainer>
  );
};

export default Background;
