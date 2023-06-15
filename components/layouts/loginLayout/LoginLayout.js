import jwt_decode from 'jwt-decode';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  LoginContainer,
  LoginButton,
  AdminOption,
  AdminButton,
} from './LoginLayout.styled';

const LoginLayout = () => {
  const baseURL = 'http://localhost:3001/auth/googleLogin';
  const [userData, setUserData] = useState(null);
  const handleCallbackResponse = async (response) => {
    console.log(response.credential);
    await axios
      .get(baseURL, {
        params: {
          tokenId: response.credential,
        },
      })
      .then((response) => {
        console.log(response.data);
      });
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
