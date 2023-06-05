import React, { useState } from 'react';
import {
  FileUploaderContainer,
  FileUploaderEditor,
  AllFilesDisplay,
  FileUploaderBox,
  FileUploaderContent,
  FileUploaderInput,
  FileUploaderDescription,
  FileUploaderSubmit,
  FileDisplay,
  FileDisplayIcon,
} from './FileUploader.styled';
import Edit from '@public/icons/Edit.svg';
import Trash from '@public/icons/Trash.svg';

const FileUploader = () => {
  const [showIcons, setShowIcons] = useState(false);
  return (
    <FileUploaderContainer>
      <FileUploaderEditor>
        <FileUploaderBox></FileUploaderBox>
        <FileUploaderContent>
          <FileUploaderInput placeholder='Title' />
          <FileUploaderInput placeholder='Medium' />
          <FileUploaderDescription placeholder='Description' />
          <FileUploaderSubmit>Submit</FileUploaderSubmit>
        </FileUploaderContent>
      </FileUploaderEditor>
      <AllFilesDisplay>
        <FileDisplay
          onMouseEnter={() => setShowIcons(true)}
          onMouseLeave={() => setShowIcons(false)}
        >
          {showIcons && (
            <>
              <FileDisplayIcon>
                <Edit fill='#fff' />
              </FileDisplayIcon>
              <FileDisplayIcon>
                <Trash fill='#FF5656' />
              </FileDisplayIcon>
            </>
          )}
        </FileDisplay>
      </AllFilesDisplay>
    </FileUploaderContainer>
  );
};

export default FileUploader;
