import React, { useEffect } from 'react';
import instance from '@lib/utils/AxiosInstance';
import Router, { useRouter } from 'next/router';
import {
  LoginContainer,
  AdminOption,
  AdminButton,
  AdminTrigger,
} from './LoginLayout.styled';
import Trigger from '@public/icons/Trigger.svg';

const LoginLayout = () => {
  const loginRouter = useRouter();
  const {
    query: { message },
  } = loginRouter;
  const handleCallbackResponse = async (response) => {
    // console.log(response.credential);
    await instance
      .get('/auth/googleLogin', {
        params: {
          tokenId: response.credential,
        },
      })
      .then((response) => {
        // console.log(
        //   response.data.userData?.id || response.data.user.userData?.id
        // );
        Router.push('/useredit');
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
      {message && (
        <AdminTrigger>
          <Trigger fill='#db4437' />
          {message}
        </AdminTrigger>
      )}
    </LoginContainer>
  );
};

export default LoginLayout;
