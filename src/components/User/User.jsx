import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get('http://localhost:3000/users');
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getUser();
  }, []);

  return (
    <div className='user'>
      {users.length > 0 && users.map((item, index) => <li key={index}>{item.name}</li>)}
    </div>
  );
};

export default User;
