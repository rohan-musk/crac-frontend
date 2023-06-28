import axios from 'axios';
import React, { useEffect, useState } from 'react';
import instance from '@lib/utils/AxiosInstance';

const AppLayout = ({ children }) => {
  const [newChildren, setNewChildren] = useState(null);
  useEffect(() => {
    instance.get('/auth/isloggedin').then((response) => {
      console.log(response.data);
      setNewChildren(
        React.cloneElement(children, {
          data: response.data,
        })
      );
    });
  }, []);
  return <div>{newChildren}</div>;
};

export default AppLayout;
