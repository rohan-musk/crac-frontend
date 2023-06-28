import React from 'react';
import EditContainer from '@components/displays/editContainer/EditContainer';
import LinksEditor from '@components/reusable/LinksEditor/LinksEditor';
import FileUploader from '@components/reusable/FileUploader/FileUploader';
import {
  UserEditHeader,
  UserEditText,
  UserEditHeaderButton,
  UserEditContainer,
  AboutMeEditor,
} from './UserEditLayout.styled';

const UserEditLayout = ({ data }) => {
  return (
    <div>
      <UserEditHeader>
        <UserEditText>Welcome {data?.data.userData.name}!</UserEditText>
        <UserEditHeaderButton href='/'>Sign Out</UserEditHeaderButton>
      </UserEditHeader>
      <UserEditContainer>
        <EditContainer tag='About Me' pad>
          <AboutMeEditor />
        </EditContainer>
        <EditContainer tag='Links' gap>
          <LinksEditor title='Instagram' link='@rohanmusk' />
          <LinksEditor title='Mail' link='rohanmuskawad1201@gmail.com' />
        </EditContainer>
        <EditContainer tag='Artworks' pad>
          <FileUploader />
        </EditContainer>
      </UserEditContainer>
    </div>
  );
};

export default UserEditLayout;
