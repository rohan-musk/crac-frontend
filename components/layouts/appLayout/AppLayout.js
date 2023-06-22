import axios from 'axios';
import React, { useState, useEffect } from 'react';

const AppLayout = ({ children }) => {
  const baseURL = 'http://localhost:3001/auth/isloggedin';
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data);
    });
  }, []);
  return <div>{children}</div>;
};

export default AppLayout;
