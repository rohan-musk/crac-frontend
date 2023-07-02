import React, { useState, useEffect } from 'react';
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
import axios from 'axios';

const CraxtersLayout = () => {
  const [allUsers, setAllUsers] = useState({
    head: [],
    member: [],
    previousMember: [],
  });
  useEffect(() => {
    axios.get('http://localhost:3001/user/getUsers').then((response) => {
      response.data.allUsers.forEach((element) => {
        if (element.crac_member == true) {
          if (element.role === '') {
            setAllUsers({ ...allUsers, member: allUsers.member.push(element) });
          } else if (element.role === 'ex') {
            setAllUsers({
              ...allUsers,
              previousMember: allUsers.previousMember.push(element),
            });
          } else {
            setAllUsers({ ...allUsers, head: allUsers.head.push(element) });
          }
        }
      });
    });
  }, []);

  useEffect(() => {
    console.log(allUsers);
  }, [allUsers]);

  return (
    <CraxtersLayoutContainer>
      <CraxtersLayoutHeader>
        <CraxtersHeaderText>Meet the Team</CraxtersHeaderText>
      </CraxtersLayoutHeader>
      <CraxtersBody>
        <MemberHeading>Heads</MemberHeading>
        <MemberLayout>
          {allUsers.head.map((e) => {
            return (
              <Member href={'/craxters/' + e.id + '/work'} key={e.id}>
                <MemberImage>
                  <Image
                    loader={() => e.picture}
                    src={e.picture}
                    width={150}
                    height={150}
                    alt='Picture of the author'
                    layout='fit'
                    objectFit='cover'
                  />
                </MemberImage>
                <MemberName>{e.name}</MemberName>
                <MemberDesignation>{e.role}</MemberDesignation>
              </Member>
            );
          })}
        </MemberLayout>
        <MemberHeading>Members</MemberHeading>
        <MemberLayout>
          {Array.isArray(allUsers.member)
            ? allUsers.member.map((e) => {
                return (
                  <Member href={'/craxters/' + e.id + '/work'}>
                    <MemberImage>
                      <Image
                        loader={() => e.picture}
                        src={e.picture}
                        width={150}
                        height={150}
                        alt='Picture of the author'
                        layout='fit'
                        objectFit='cover'
                      />
                    </MemberImage>
                    <MemberName>{e.name}</MemberName>
                  </Member>
                );
              })
            : null}
        </MemberLayout>
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
