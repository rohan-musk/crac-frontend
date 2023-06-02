import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  margin-left: 350px;
  width: calc(100% - 350px);
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: -1;
  @media (max-width: 1150px) {
    width: 100%;
    margin-left: 0px;
  }
  overflow-y: hidden;
`;
export const BackgroundBlobs = styled.div`
  width: 800px;
  height: 800px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(129, 108, 255, 0.3) 0%,
    rgba(206, 151, 249, 0.3) 33.33%,
    rgba(245, 187, 199, 0.3) 66.67%,
    rgba(255, 255, 255, 0.3) 100%
  );
  ${(props) =>
    props.componentNumber % 2
      ? `align-self: flex-start;
      left: -400px;`
      : `align-self: flex-end;
      right: -400px;`}
  position: relative;
`;
