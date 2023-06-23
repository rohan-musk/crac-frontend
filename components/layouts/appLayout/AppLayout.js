import axios from 'axios';
import React, { useState, useEffect } from 'react';
import instance from '@lib/utils/AxiosInstance';

const AppLayout = ({ children }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    instance.get('/auth/isloggedin').then((response) => {
      console.log(response.data);
    });
  }, []);
  return <div>{children}</div>;
};

export default AppLayout;
