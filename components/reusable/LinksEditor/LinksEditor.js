import React, { useState } from 'react';
import {
  LinkEditorContainer,
  LinkEditorTitle,
  LinkEditorLink,
  LinkEditIcon,
  LinkEditorInput,
} from './LinksEditor.styled';
import Edit from '@public/icons/Edit.svg';
import Tick from '@public/icons/Tick.svg';

const LinksEditor = ({ title, link }) => {
  const [editOption, setEditOption] = useState(false);
  return (
    <LinkEditorContainer>
      <LinkEditorTitle>{title}</LinkEditorTitle>
      {editOption ? (
        <LinkEditorInput value={link} />
      ) : (
        <LinkEditorLink>{link}</LinkEditorLink>
      )}
      <LinkEditIcon
        onClick={() => {
          setEditOption(!editOption);
        }}
      >
        {!editOption ? <Edit /> : <Tick />}
      </LinkEditIcon>
    </LinkEditorContainer>
  );
};

export default LinksEditor;
