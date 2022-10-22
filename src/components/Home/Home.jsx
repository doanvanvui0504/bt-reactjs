import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Home = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <h4>User: {state && state.user ? state.user.email : 'Null'}</h4>
    </div>
  );
};

export default Home;
