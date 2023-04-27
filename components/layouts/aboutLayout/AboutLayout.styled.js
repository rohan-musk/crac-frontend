import styled from 'styled-components';
import Link from 'Next/Link';

export const AboutLayoutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 50px;
  @media (max-width: 750px) {
    padding: 0px 20px;
  }
`;
export const AboutText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;

  color: #000000;
`;
export const AboutLinks = styled.div`
  width: 100%;
  padding: 30px 0px;
  display: flex;
  flex-direction: row;
  gap: 50px;

  @media (max-width: 750px) {
    flex-direction: column;
    gap: 20px;
  }
`;
export const AboutLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
`;
