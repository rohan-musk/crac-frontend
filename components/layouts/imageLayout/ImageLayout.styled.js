import styled from 'styled-components';

export const ImageLayoutBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(auto-fill, 450px);
  gap: 50px;
  ${(props) =>
    props.fest
      ? `
  padding: 100px 50px;`
      : `padding: 0px 50px 50px 50px;`}

  grid-auto-flow: row dense;
  max-width: 1570px;
  @media (max-width: 1450px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    ${(props) =>
      props.fest
        ? `
    padding: 100px 20px;`
        : `padding: 0px 20px 50px 20px;`}
  }
`;
