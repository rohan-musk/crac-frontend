import styled from 'styled-components';
export const ArtistLayoutContainer = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ArtistLayoutHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
  aspect-ratio: 4.5 / 1;
  position: relative;
`;
export const ArtistImage = styled.div`
  width: 150px;
  height: 150px;
  background-color: #3510ff;
  border-radius: 75px;
  z-index:2;
  align-content:end;
  transform: translate(0,75px);
  border: 2px solid #FFFFFF;
`;