import styled from 'styled-components';

export const ImageLayoutBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(auto-fill, 450px);
  gap: 50px;
  padding: 0px 50px 50px 50px;
  grid-auto-flow: row dense;
  max-width: 1570px;
`;
