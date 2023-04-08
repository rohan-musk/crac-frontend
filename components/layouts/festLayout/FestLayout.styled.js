import styled from 'styled-components';

export const FestLayoutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FestLayoutHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 4.5 / 1;
  position: relative;
`;
export const FestLayoutBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(auto-fill, 450px);
  gap: 50px;
  padding: 100px 125px;
  grid-auto-flow: row dense;
`;
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
