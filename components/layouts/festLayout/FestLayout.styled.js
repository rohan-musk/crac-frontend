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
  @media (max-width: 750px) {
    height: 205px;
  }
`;
