import React, { useState, useEffect } from 'react';
import EditContainer from '@components/displays/editContainer/EditContainer';
import LinksEditor from '@components/reusable/LinksEditor/LinksEditor';
import FileUploader from '@components/reusable/FileUploader/FileUploader';
import axios from 'axios';
import {
  UserEditHeader,
  UserEditText,
  UserEditHeaderButton,
  UserEditContainer,
  AboutMeEditor,
} from './UserEditLayout.styled';
import Tick from '@public/icons/Tick.svg';

const UserEditLayout = ({ data }) => {
  const [aboutColor, setAboutColor] = useState(0);
  const [aboutMessage, setAboutMessage] = useState(null);
  return (
    <div>
      <UserEditHeader>
        <UserEditText>Welcome {data?.data.userData.name}!</UserEditText>
        <UserEditHeaderButton href='/'>Sign Out</UserEditHeaderButton>
      </UserEditHeader>
      <UserEditContainer>
        <EditContainer tag='About Me' pad>
          <AboutMeEditor
            color={aboutColor}
            onChange={(event) => {
              setAboutColor(1);
              setAboutMessage(null);
              axios
                .patch(
                  `http://localhost:3001/artist/editArtistAbout/${data.data.userData.id}`,
                  {
                    aboutme: event.target.value,
                  },
                  {
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                  }
                )
                .then((response) => {
                  setAboutColor(2);
                  setAboutMessage(response.data.data.message);
                  console.log(aboutMessage);
                })
                .catch(() => {
                  setAboutColor(3);
                });
            }}
          />
          {aboutMessage ? (
            <p
              style={{
                color: 'green',
                display: 'flex',
              }}
            >
              <Tick fill='green' />
              {aboutMessage}
            </p>
          ) : null}
        </EditContainer>
        <EditContainer tag='Links' gap>
          <LinksEditor
            title='Instagram'
            link='@rohanmusk'
            data={data}
            apiRoute='http://localhost:3001/artist/editArtistInsta/'
            apiQuery='insta'
          />
          <LinksEditor
            title='Mail'
            link='rohanmuskawad1201@gmail.com'
            data={data}
            apiRoute='http://localhost:3001/artist/editArtistEmail/'
            apiQuery='mail'
          />
        </EditContainer>
        <EditContainer tag='Artworks' pad>
          <FileUploader />
        </EditContainer>
      </UserEditContainer>
    </div>
  );
};

export default UserEditLayout;
