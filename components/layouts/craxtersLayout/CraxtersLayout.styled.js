import styled from 'styled-components';
import Link from 'next/link';

export const CraxtersLayoutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CraxtersLayoutHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 4.5 / 1;
  position: relative;
  @media (max-width: 750px) {
    height: 205px;
  }

  background: linear-gradient(
    90.02deg,
    #8870ff 0.02%,
    #b960ff 36.23%,
    #e17fff 72.67%,
    #ffa692 99.98%
  );
  width: 100%;
  height: 100%;
`;
export const CraxtersHeaderText = styled.div`
  font-weight: 700;
  font-size: 6rem;
  text-align: center;
  z-index: 2;
  padding: 0px 30px;
  color: #ffffff;
  @media (max-width: 750px) {
    font-size: 3rem;
  }
  mix-blend-mode: overlay;
`;
export const CraxtersBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px 100px;
  @media (max-width: 750px) {
    padding: 50px 20px;
  }
`;
export const MemberHeading = styled.p`
  font-weight: 700;
  font-size: 2em;
  background: linear-gradient(90deg, #000000 0%, #816cff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;
export const MemberLayout = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-flow: wrap;
  padding: 20px 0px;
`;
export const Member = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 220px;
`;
export const MemberImage = styled.div`
  width: 150px;
  height: 150px;
  background-color: #555;
  border-radius: 75px;
`;
export const MemberName = styled.div`
  font-weight: 500;
  font-size: 1rem;
  padding: 12px 0px 0px 0px;

  text-align: center;

  color: #000000;
`;
export const MemberDesignation = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 0.75rem;
  text-align: center;
  padding: 5px 0px 20px 0px;

  color: #ff5656;
`;
