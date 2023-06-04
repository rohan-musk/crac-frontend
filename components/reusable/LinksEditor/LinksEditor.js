import React, { useState } from 'react';
import {
  LinkEditorContainer,
  LinkEditorTitle,
  LinkEditorLink,
  LinkEditorInput,
} from './LinksEditor.styled';

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
      <div
        onClick={() => {
          setEditOption(!editOption);
        }}
      >
        Edit
      </div>
    </LinkEditorContainer>
  );
};

export default LinksEditor;
