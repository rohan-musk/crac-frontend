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
  margin-bottom: 150px;
`;
export const ArtistDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translate(0, 150px);
  z-index: 2;
`;

export const ArtistImage = styled.div`
  width: 150px;
  height: 150px;
  background-color: #3510ff;
  border-radius: 75px;
  border: 4px solid #ffffff;
`;
export const ArtistName = styled.div`
  padding-top: 24px;
  font-weight: 700;
  font-size: 40px;
`;
