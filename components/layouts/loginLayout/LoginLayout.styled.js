import styled from 'styled-components';
import Link from 'next/link';

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const LoginButton = styled(Link)`
  font-weight: 500;
  font-size: 1.5em;
  background: #0f9d58;
  color: #fff;
  padding: 10px 50px;
  border-radius: 10px;
`;
export const AdminOption = styled.div`
  font-weight: 500;
  font-size: 1em;

  color: #727272;
`;
export const AdminTrigger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 0.75em;
  color: #db4437;
`;
export const AdminButton = styled(Link)`
  color: #816cff;
`;
