import styled from 'styled-components';

export const FileUploaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
export const FileUploaderEditor = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;
export const FileUploaderBox = styled.div`
  height: 300px;
  border: 1px dashed #696969;
  border-radius: 20px;
  @media (min-width: 750px) {
    flex: 1;
  }
`;
export const FileUploaderContent = styled.div`
  @media (min-width: 750px) {
    flex: 1;
  }
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const FileUploaderInput = styled.input`
  height: 36px;
  font-size: 1em;
  border-radius: 10px;
  border: 1px solid #696969;
  padding: 0 10px;
`;
export const FileUploaderDescription = styled.textarea`
  font-size: 1em;
  border-radius: 10px;
  border: 1px solid #696969;
  min-height: 100px;
  padding: 10px;
  flex: 1;
`;
export const FileUploaderSubmit = styled.button`
  height: 36px;
  border: none;
  background: #0f9d58;
  border-radius: 10px;
  color: #fff;
`;
export const AllFilesDisplay = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`;
export const FileDisplay = styled.div`
  width: 345px;
  height: 210px;
  background: #555;
  border-radius: 20px;
`;
