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
`;
export const NavbarTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 61px;
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
  font-size: 16px;
  padding: 15px 17px;
  background: #ffffff;
  border-radius: 10px;
  color: #676767;
`;
