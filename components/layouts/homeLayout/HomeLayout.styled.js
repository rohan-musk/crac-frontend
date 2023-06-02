import styled from 'styled-components';
import Link from 'next/link';

export const HomeHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #727272;
  align-items: center;
  @media (max-width: 750px) {
    padding: 15px;
  }
`;
export const HomeHeaderText = styled.div`
  font-weight: 500;
  font-size: 1.5em;
  color: #727272;
  @media (max-width: 750px) {
    font-size: 1em;
  }
`;
export const HomeHeaderButton = styled(Link)`
  font-weight: 500;
  font-size: 1.5em;
  background: #0f9d58;
  color: #fff;
  padding: 10px 50px;
  border-radius: 10px;
  @media (max-width: 750px) {
    font-size: 1em;
    padding: 10px 30px;
  }
`;
export const HomeText = styled.div`
  padding: 20px;
  font-style: normal;
  font-weight: 700;
  font-size: 6em;
  background: linear-gradient(90deg, #ff5656 0%, #816cff 98.19%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  @media (max-width: 1500px) {
    font-size: 4em;
  }
  @media (max-width: 750px) {
    font-size: 2.5em;
  }
`;
