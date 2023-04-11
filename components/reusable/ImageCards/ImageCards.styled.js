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
`;
export const FestImageText = styled.div`
  display: flex;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 41px;
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
