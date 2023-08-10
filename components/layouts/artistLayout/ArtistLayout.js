import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  ArtistLayoutContainer,
  ArtistLayoutHeader,
  ArtistImage,
  ArtistName,
  ArtistDetails,
  ArtistNav,
  ArtistNavOption,
  ArtistNavContainer,
} from './ArtistLayout.styled';
import { useRouter } from 'next/router';
import axios from 'axios';

const ArtistLayout = ({ children }) => {
  const [page, setPage] = useState(1);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    console.log(router.pathname);
    router.pathname.includes('/work') ? setPage(1) : null;
    router.pathname.includes('/about') ? setPage(2) : null;
  }, [router.pathname]);

  const [artist, setArtist] = useState({});

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3001/user/getUsers/${id}`)
        .then((response) => {
          setArtist(response.data.user[0]);
        });
    }
  }, [id]);
  return (
    <ArtistLayoutContainer>
      <ArtistLayoutHeader>
        <ArtistDetails>
          <ArtistImage>
            <Image
              loader={() => artist?.picture}
              src={artist?.picture}
              width={142}
              height={142}
              alt='Picture of the author'
              layout='fit'
              objectFit='cover'
            />
          </ArtistImage>
          <ArtistName>{artist?.name}</ArtistName>
        </ArtistDetails>
        <Image src='/images/artist.png' layout='fill' objectFit='cover' />
      </ArtistLayoutHeader>
      <ArtistNavContainer>
        <ArtistNav>
          <ArtistNavOption
            option='1'
            selectedOption={page}
            onClick={() => setPage(1)}
            href={'/craxters/' + id + '/work'}
          >
            Work
          </ArtistNavOption>
          <ArtistNavOption
            option='2'
            selectedOption={page}
            onClick={() => setPage(2)}
            href={'/craxters/' + id + '/about'}
          >
            About
          </ArtistNavOption>
        </ArtistNav>
      </ArtistNavContainer>
      {children}
    </ArtistLayoutContainer>
  );
};

export default ArtistLayout;
