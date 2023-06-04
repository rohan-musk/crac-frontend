import React from 'react';
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
} from './FileUploader.styled';

const FileUploader = () => {
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
        <FileDisplay />
        <FileDisplay />
        <FileDisplay />
        <FileDisplay />
      </AllFilesDisplay>
    </FileUploaderContainer>
  );
};

export default FileUploader;
