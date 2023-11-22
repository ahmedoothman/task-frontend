import React, { useEffect, useState } from 'react';
// router
import { useNavigate } from 'react-router-dom';
// cookies
import Cookies from 'js-cookie';
interface RequireAuthProps {
  component: React.ComponentType<any>;
}

const RequireAuth: React.FC<RequireAuthProps> = ({ component: Component }) => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState<boolean>(
    Cookies.get('loggedIn') === 'true' ? true : false
  );
  useEffect(() => {
    if (!loggedIn) {
      console.log('not logged in');
      navigate('/');
    }
  }, [loggedIn]);
  return loggedIn ? <Component /> : null;
};

export default RequireAuth;
