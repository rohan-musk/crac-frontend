import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
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
      console.log(users);
      setLoading(false);
    });
  }, []);

  const UserLoader = ({ count = 1 }) => {
    return Array.apply(null, Array(count)).map((i) => (
      <div
        style={{
          display: 'flex',
          gap: '10px',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        key={i}
      >
        <Skeleton
          width={100}
          height={100}
          circle
          inline
          style={{
            margin: '0px 20px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
        <Skeleton width={150} height={16} />
      </div>
    ));
  };

  return (
    <CraxtersLayoutContainer>
      <CraxtersLayoutHeader>
        <CraxtersHeaderText>Meet the Team</CraxtersHeaderText>
      </CraxtersLayoutHeader>
      <CraxtersBody>
        <MemberHeading>Heads</MemberHeading>
        <MemberLayout>
          {loading ? (
            <UserLoader count={5} />
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
            <UserLoader count={5} />
          ) : Array.isArray(allUsers.member) ? (
            allUsers.member.map((e) => {
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
                </Member>
              );
            })
          ) : null}
        </MemberLayout>
        <MemberHeading>Previous Members</MemberHeading>
        <MemberLayout>
          {loading ? (
            <UserLoader count={5} />
          ) : Array.isArray(allUsers.previousMember) ? (
            allUsers.previousMember.map((e) => {
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
