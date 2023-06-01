import styled from 'styled-components';

export const NavbarContainer = styled.div`
  padding: 48px 38px;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  height: 100vh;
  position: fixed;
  background: linear-gradient(
    180deg,
    #ffffff 0%,
    #ffffff 66.43%,
    #ffc5b8 77.89%,
    #c891ff 89.35%,
    #806cff 100%
  );
  @media (max-width: 1150px) {
    ${(props) => (props.showNavbar ? `` : `display: none;`)}
  }
  z-index: 3;
`;
export const NavbarTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const NavbarClose = styled.div`
  @media (min-width: 1150px) {
    display: none;
  }
`;

export const NavbarTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 3rem;
  color: #ff5656;
`;
export const MenuContainer = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const MenuOption = styled.div`
  width: 100%;
  height: 50px;
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  padding: 15px 17px;

  border-radius: 10px;

  ${(props) =>
    props.option == props.selectedOption
      ? `background: #000;
    color:#fff`
      : `color: #676767;
      background: #ffffff;
    `}
`;
export const MenuFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const FooterOption = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  color: #fff;
`;
