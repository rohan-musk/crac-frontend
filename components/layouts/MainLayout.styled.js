import styled from 'styled-components';

export const MainLayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const MainLayoutContent = styled.div`
  @media (max-width: 1150px) {
    margin-left: 0px;
  }
  margin-left: 350px;

  @media (max-width: 1150px) {
    width: 100%;
  }
  width: calc(100% - 350px);
`;
