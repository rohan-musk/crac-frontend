import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

const useComponentDimensions = () => {
  const elemRef = useRef();
  const [elementDimension, setElementDimensions] = useState({
    width: 0,
    height: 0,
  });
  const router = useRouter();

  useEffect(() => {
    if (elemRef.current) {
      setElementDimensions({
        width: elemRef.current.offsetWidth,
        height: elemRef.current.offsetHeight,
      });
    }
  }, [router.pathname]);

  return [elementDimension, elemRef];
};

export default useComponentDimensions;
