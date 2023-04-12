import styled from 'styled-components';

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
`;
export const CraxtersHeaderText = styled.div`
  font-weight: 700;
  font-size: 96px;
  line-height: 163px;
  text-align: center;
  z-index: 2;
  color: #ffffff;
`;
export const CraxtersBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px 100px;
`;
export const MemberHeading = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;

  color: #000000;
`;
export const MemberLayout = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-flow: wrap;
  padding: 20px 0px;
`;
export const Member = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 220px;
`;
export const MemberImage = styled.div`
  width: 150px;
  height: 150px;
  background-color: #3510ff;
  border-radius: 75px;
`;
export const MemberName = styled.div`
  font-weight: 500;
  font-size: 20px;
  padding: 12px 0px 0px 0px;

  text-align: center;

  color: #000000;
`;
export const MemberDesignation = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  padding: 5px 0px 20px 0px;

  color: #ff5656;
`;
