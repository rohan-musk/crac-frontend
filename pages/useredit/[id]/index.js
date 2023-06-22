import React from 'react';
import UserEditLayout from '@components/layouts/userEditLayout/UserEditLayout';
import AppLayout from '@components/layouts/appLayout/AppLayout';

const index = () => {
  return (
    <div>
      <AppLayout>
        <UserEditLayout />
      </AppLayout>
    </div>
  );
};

export default index;
