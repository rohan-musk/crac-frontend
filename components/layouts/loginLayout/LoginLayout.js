import React from 'react';
import {
  LoginContainer,
  LoginButton,
  AdminOption,
  AdminButton,
} from './LoginLayout.styled';

const LoginLayout = () => {
  return (
    <LoginContainer>
      <LoginButton href={'/useredit/' + 1}>Google Login</LoginButton>
      <AdminOption>
        Are you Admin?{' '}
        <AdminButton href={'/adminedit/' + 1}>Click Here</AdminButton>
      </AdminOption>
    </LoginContainer>
  );
};

export default LoginLayout;
