import styled from 'styled-components';

export const MainLayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const NavbarClick = styled.div`
  position: absolute;
  padding: 48px;
  z-index: 3;
  @media (min-width: 1150px) {
    display: none;
  }
  ${(props) => (props.showNavbar ? `display: none;` : ``)}
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.55));
`;

export const MainLayoutContent = styled.div`
  margin-left: 350px;
  width: calc(100% - 350px);
  @media (max-width: 1150px) {
    width: 100%;
    margin-left: 0px;
  }
`;
