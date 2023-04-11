import styled from 'styled-components';

export const FestLayoutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FestLayoutHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 4.5 / 1;
  position: relative;
`;
export const FestLayoutBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(auto-fill, 450px);
  gap: 50px;
  padding: 100px 50px;
  grid-auto-flow: row dense;
  max-width: 1570px;
`;
