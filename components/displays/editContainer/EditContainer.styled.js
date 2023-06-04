import styled from 'styled-components';

export const EditContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;
export const EditTag = styled.div`
  width: 150px;
  font-weight: 500;
  font-size: 1em;
  ${(props) => (props.pad ? `padding: 20px 0;` : ``)}
  @media (max-width: 750px) {
    padding: 0px;
  }
`;
export const EditOption = styled.div`
  ${(props) =>
    props.gap ? `display:flex; flex-direction:column;gap: 15px 0;` : ``}
  width: 100%;
`;
