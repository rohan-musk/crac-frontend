import React from 'react';
import Instagram from '@public/icons/Instagram.svg';
import Mail from '@public/icons/Mail.svg';
import {
  AboutLayoutContainer,
  AboutText,
  AboutLinks,
  AboutLink,
} from './AboutLayout.styled';

const AboutLayout = ({ artistData }) => {
  return (
    <AboutLayoutContainer>
      <AboutText>
        {/* I am a software developer from BITS Pilani who enjoys making artworks in
        his free time. I had the golden opportunity of being the Oasis
        Coordinator of CrAC in 2022. I am also the developer of this website.
        Wanna have a chat? Feel free to DM me on my Insta or mail me on my
        email. */}
        {artistData?.aboutMe}
      </AboutText>
      <AboutLinks>
        <AboutLink href='https://www.instagram.com/'>
          <Instagram />
          {artistData?.instaID}
        </AboutLink>
        <AboutLink href='https://www.instagram.com/crac_bitspilani/?hl=en'>
          <Mail />
          {artistData?.mail}
        </AboutLink>
      </AboutLinks>
    </AboutLayoutContainer>
  );
};

export default AboutLayout;
