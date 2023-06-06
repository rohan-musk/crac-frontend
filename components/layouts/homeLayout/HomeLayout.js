import React from 'react';
import {
  HomeHeader,
  HomeHeaderText,
  HomeHeaderButton,
  HomeText,
} from './HomeLayout.styled';

const HomeLayout = () => {
  return (
    <div>
      <HomeHeader>
        <HomeHeaderText>Are you a craxter?</HomeHeaderText>
        <HomeHeaderButton href='/login'>Login</HomeHeaderButton>
      </HomeHeader>
      <HomeText>
        Welcome to
        <br /> Creative Activities Club <br /> Website
      </HomeText>
    </div>
  );
};

export default HomeLayout;
