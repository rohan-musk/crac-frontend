import React, { useState } from 'react';
import {
  LinkEditorContainer,
  LinkEditorTitle,
  LinkEditorLink,
  LinkEditIcon,
  LinkEditorInput,
} from './LinksEditor.styled';
import axios from 'axios';
import Edit from '@public/icons/Edit.svg';
import Tick from '@public/icons/Tick.svg';

const LinksEditor = ({ title, link, data }) => {
  const [editOption, setEditOption] = useState(false);
  const [editValue, setEditValue] = useState(link);
  return (
    <LinkEditorContainer>
      <LinkEditorTitle>{title}</LinkEditorTitle>
      {editOption ? (
        <LinkEditorInput
          value={editValue}
          onChange={(e) => {
            setEditValue(e.target.value);
          }}
        />
      ) : (
        <LinkEditorLink>{editValue}</LinkEditorLink>
      )}
      <LinkEditIcon
        onClick={() => {
          setEditOption(!editOption);
        }}
      >
        {!editOption ? (
          <Edit />
        ) : (
          <Tick
            onClick={() => {
              axios
                .patch(
                  `http://localhost:3001/artist/editArtistInsta/${data.data.userData.id}`,
                  {
                    insta: editValue,
                  },
                  {
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                  }
                )
                .then((response) => {
                  console.log(response.data.data.message);
                });
            }}
          />
        )}
      </LinkEditIcon>
    </LinkEditorContainer>
  );
};

export default LinksEditor;
