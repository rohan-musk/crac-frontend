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
        <MemberHeading>CrAC Heads</MemberHeading>
        <MemberLayout>
          <Member>
            <MemberImage></MemberImage>
            <MemberName>ROHAN ANIL MUSK</MemberName>
            <MemberDesignation>Oasis Coord</MemberDesignation>
          </Member>
          <Member>
            <MemberImage></MemberImage>
            <MemberName>ROHAN MUSK</MemberName>
            <MemberDesignation>Oasis Joint Coord</MemberDesignation>
          </Member>
        </MemberLayout>
        <MemberHeading>Active CrAC Members</MemberHeading>
        <MemberLayout>
          <Member>
            <MemberImage></MemberImage>
            <MemberName>ROHAN ANIL MUSK</MemberName>
            <MemberDesignation>Oasis Coord</MemberDesignation>
          </Member>
          <Member>
            <MemberImage></MemberImage>
            <MemberName>ROHAN MUSK</MemberName>
            <MemberDesignation>Oasis Joint Coord</MemberDesignation>
          </Member>
          <Member>
            <MemberImage></MemberImage>
            <MemberName>ROHAN MUSK</MemberName>
            <MemberDesignation>Oasis Joint Coord</MemberDesignation>
          </Member>
        </MemberLayout>
        <MemberHeading>Ex CrAxters</MemberHeading>
        <MemberLayout>
          <Member>
            <MemberImage></MemberImage>
            <MemberName>ROHAN ANIL MUSK</MemberName>
            <MemberDesignation>Oasis Coord</MemberDesignation>
          </Member>
          <Member>
            <MemberImage></MemberImage>
            <MemberName>ROHAN MUSK</MemberName>
            <MemberDesignation>Oasis Joint Coord</MemberDesignation>
          </Member>
          <Member>
            <MemberImage></MemberImage>
            <MemberName>ROHAN MUSK</MemberName>
            <MemberDesignation>Oasis Joint Coord</MemberDesignation>
          </Member>
        </MemberLayout>
      </CraxtersBody>
    </CraxtersLayoutContainer>
  );
};

export default CraxtersLayout;
