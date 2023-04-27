import styled from 'styled-components';

export const FestImage = styled.div`
  ${(props) =>
    props.main
      ? `grid-column: span 3;`
      : props.wide
      ? `grid-column: span 2;`
      : `grid-column: span 1;`}
  height:450px;
  width: 100%;
  min-width: 300px;
  background-color: #3510ff;
  border-radius: 10px;
  @media (max-width: 1450px) {
    ${(props) =>
      props.main
        ? `grid-column: span 2;`
        : props.wide
        ? `grid-column: span 2;`
        : `grid-column: span 1;`}
  }
  @media (max-width: 750px) {
    ${(props) =>
      props.main
        ? `grid-column: span 1;`
        : props.wide
        ? `grid-column: span 1;`
        : `grid-column: span 1;`}
  }
`;
export const FestImageText = styled.div`
  display: flex;
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  align-items: flex-end;
  height: 100%;
  color: #ffffff;
  padding: 8px 10px;
  animation: fadeIn 0.4s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
