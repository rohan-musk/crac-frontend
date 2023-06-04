import styled from 'styled-components';
import Link from 'next/link';

export const UserEditHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px 20px;
  border-bottom: 1px solid #727272;
  align-items: center;
  @media (max-width: 1150px) {
    padding: 48px 20px;
    justify-content: flex-end;
    gap: 20px;
  }
`;
export const UserEditText = styled.div`
  font-weight: 500;
  font-size: 1.5em;
  color: #727272;
  @media (max-width: 750px) {
    font-size: 1em;
  }
`;
export const UserEditHeaderButton = styled(Link)`
  font-weight: 500;
  font-size: 1.5em;
  background: #db4437;
  color: #fff;
  padding: 10px 50px;
  border-radius: 10px;
  @media (max-width: 750px) {
    font-size: 1em;
    padding: 10px;
  }
`;
export const UserEditContainer = styled.div`
  width: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
export const AboutMeEditor = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 20px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1em;
  border-radius: 10px;
`;
