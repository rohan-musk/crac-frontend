import React from 'react';
import { EditContainerDiv, EditTag, EditOption } from './EditContainer.styled';

const EditContainer = ({ tag, pad, gap, children }) => {
  return (
    <EditContainerDiv>
      <EditTag pad={pad}>{tag}</EditTag>
      <EditOption gap={gap}>{children}</EditOption>
    </EditContainerDiv>
  );
};

export default EditContainer;
