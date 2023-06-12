import jwt_decode from 'jwt-decode';
import React, { useEffect } from 'react';
import {
  LoginContainer,
  LoginButton,
  AdminOption,
  AdminButton,
} from './LoginLayout.styled';

const LoginLayout = () => {
  const handleCallbackResponse = (response) => {
    console.log(response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
  };

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      theme: 'outline',
      size: 'large',
    });

    google.accounts.id.prompt();
  }, []);

  return (
    <LoginContainer>
      <div id='signInDiv'></div>
      <AdminOption>
        Are you Admin?{' '}
        <AdminButton href={'/adminedit/' + 1}>Click Here</AdminButton>
      </AdminOption>
    </LoginContainer>
  );
};

export default LoginLayout;
