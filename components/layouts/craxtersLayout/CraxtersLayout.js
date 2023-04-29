import React from 'react';
import Image from 'next/image';
import {
  CraxtersLayoutContainer,
  CraxtersLayoutHeader,
  CraxtersHeaderText,
  CraxtersBody,
  MemberHeading,
  MemberLayout,
  Member,
  MemberImage,
  MemberName,
  MemberDesignation,
} from './CraxtersLayout.styled';

const CraxtersLayout = () => {
  return (
    <CraxtersLayoutContainer>
      <CraxtersLayoutHeader>
        <CraxtersHeaderText>Meet the Team</CraxtersHeaderText>
        <Image src='/images/craxters.png' layout='fill' objectFit='cover' />
      </CraxtersLayoutHeader>
      <CraxtersBody>
        <MemberHeading>Heads</MemberHeading>
        <MemberLayout>
          <Member href={'/craxters/' + 1 + '/work'}>
            <MemberImage></MemberImage>
            <MemberName>ROHAN ANIL MUSK</MemberName>
            <MemberDesignation>Oasis Coord</MemberDesignation>
          </Member>
          <Member href={'/craxters/' + 1 + '/work'}>
            <MemberImage></MemberImage>
            <MemberName>ROHAN ANIL MUSK</MemberName>
            <MemberDesignation>Oasis Coord</MemberDesignation>
          </Member>
          <Member href={'/craxters/' + 1 + '/work'}>
            <MemberImage></MemberImage>
            <MemberName>ROHAN ANIL MUSK</MemberName>
            <MemberDesignation>Oasis Coord</MemberDesignation>
          </Member>
        </MemberLayout>
        <MemberHeading>Members</MemberHeading>
        {/* <MemberLayout>
          <Member>
            <MemberImage></MemberImage>
            <MemberName>ROHAN ANIL MUSK</MemberName>
          </Member>
          <Member>
            <MemberImage></MemberImage>
            <MemberName>ROHAN MUSK</MemberName>
          </Member>
          <Member>
            <MemberImage></MemberImage>
            <MemberName>ROHAN MUSK</MemberName>
          </Member>
        </MemberLayout> */}
        <MemberHeading>Previous Members</MemberHeading>
        {/* <MemberLayout>
          <Member>
            <MemberImage></MemberImage>
            <MemberName>ROHAN ANIL MUSK</MemberName>
          </Member>
          <Member>
            <MemberImage></MemberImage>
            <MemberName>ROHAN MUSK</MemberName>
          </Member>
          <Member>
            <MemberImage></MemberImage>
            <MemberName>ROHAN MUSK</MemberName>
          </Member>
        </MemberLayout> */}
      </CraxtersBody>
    </CraxtersLayoutContainer>
  );
};

export default CraxtersLayout;
