import styled from 'styled-components';
import Link from 'next/link';

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
  @media (max-width: 750px) {
    height: 205px;
  }
`;
export const ArtistDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translate(0, 150px);
  z-index: 2;
  @media (max-width: 750px) {
    transform: translate(0, 136px);
  }
`;

export const ArtistImage = styled.div`
  width: 150px;
  height: 150px;
  background-color: #555;
  border-radius: 75px;
  border: 4px solid #ffffff;
  overflow: hidden;
`;
export const ArtistName = styled.div`
  padding-top: 24px;
  font-weight: 700;
  font-size: 2.5rem;
  @media (max-width: 750px) {
    font-size: 1.5rem;
  }
  text-align: center;
  background: linear-gradient(90deg, #000000 0%, #816cff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;
export const ArtistNav = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  width: 100%;
  padding: 0px 10px;
  border-bottom: 1px solid #2d2d2d;
`;
export const ArtistNavOption = styled(Link)`
  padding: 10px 0px;
  ${(props) =>
    props.option == props.selectedOption
      ? `
    font-weight: 700;
    font-size: 1rem;
    color: #000000;
    border-bottom: 2px solid #FF5656; `
      : `
  font-weight: 500;
  font-size: 1rem;
  color: #676767; 
`}
`;
export const ArtistNavContainer = styled.div`
  width: 100%;
  padding: 50px;
  @media (max-width: 750px) {
    padding: 50px 20px;
  }
`;
