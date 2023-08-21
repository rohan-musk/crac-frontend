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
  const [allUsers, setAllUsers] = useState({});
  const [loading, setLoading] = useState(true);

  let users = {
    head: [],
    member: [],
    previousMember: [],
  };

  useEffect(() => {
    axios.get('http://localhost:3001/user/getUsers').then((response) => {
      response.data.allUsers.forEach((element) => {
        if (element.crac_member == true) {
          if (element.role === '') {
            users = { ...users, member: [...users.member, element] };
          } else if (element.role === 'ex') {
            users = {
              ...users,
              previousMember: [...users.previousMember, element],
            };
          } else {
            users = { ...users, head: [...users.head, element] };
          }
        }
      });
      setAllUsers(users);
      setLoading(false);
    });
  }, []);

  return (
    <CraxtersLayoutContainer>
      <CraxtersLayoutHeader>
        <CraxtersHeaderText>Meet the Team</CraxtersHeaderText>
      </CraxtersLayoutHeader>
      <CraxtersBody>
        <MemberHeading>Heads</MemberHeading>
        <MemberLayout>
          {loading ? (
            <div>loading</div>
          ) : Array.isArray(allUsers.head) ? (
            allUsers.head.map((e) => {
              return (
                <Member href={'/craxters/' + e.id + '/work'} key={e.id}>
                  <MemberImage>
                    <Image
                      loader={() => e.picture}
                      src={e.picture}
                      width={100}
                      height={100}
                      alt='Picture of the author'
                      layout='fit'
                      objectFit='cover'
                    />
                  </MemberImage>
                  <MemberName>{e.name}</MemberName>
                  <MemberDesignation>{e.role}</MemberDesignation>
                </Member>
              );
            })
          ) : null}
        </MemberLayout>
        <MemberHeading>Members</MemberHeading>
        <MemberLayout>
          {loading ? (
            <div>loading</div>
          ) : Array.isArray(allUsers.previousMember) ? (
            allUsers.previousMember.map((e) => {
              return (
                <Member href={'/craxters/' + e.id + '/work'}>
                  <MemberImage>
                    <Image
                      loader={() => e.picture}
                      src={e.picture}
                      width={100}
                      height={100}
                      alt='Picture of the author'
                      layout='fit'
                      objectFit='cover'
                    />
                  </MemberImage>
                  <MemberName>{e.name}</MemberName>
                </Member>
              );
            })
          ) : null}
        </MemberLayout>
        <MemberHeading>Previous Members</MemberHeading>
        <MemberLayout>
          {loading ? (
            <div>loading</div>
          ) : Array.isArray(allUsers.member) ? (
            allUsers.member.map((e) => {
              return (
                <Member href={'/craxters/' + e.id + '/work'}>
                  <MemberImage>
                    <Image
                      loader={() => e.picture}
                      src={e.picture}
                      width={100}
                      height={100}
                      alt='Picture of the author'
                      layout='fit'
                      objectFit='cover'
                    />
                  </MemberImage>
                  <MemberName>{e.name}</MemberName>
                </Member>
              );
            })
          ) : null}
        </MemberLayout>
      </CraxtersBody>
    </CraxtersLayoutContainer>
  );
};

export default CraxtersLayout;
