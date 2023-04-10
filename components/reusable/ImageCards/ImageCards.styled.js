import styled from 'styled-components';

export const FestImage = styled.div`
  ${(props) => (props.wide ? `grid-column: span 2;` : `grid-column: span 1;`)}
  height:450px;
  width: 100%;
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
`;
