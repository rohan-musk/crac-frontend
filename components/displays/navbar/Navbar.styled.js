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
  background: #efefef;
  @media (max-width: 1150px) {
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
      ? `background: #FFC7C7;
    border: 2px solid #000000;
    color:#000`
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
`;
