import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const User = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

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

  const handleClick = () => {
    navigate('/user/add');
  };

  return (
    <div className='user'>
      <h3>Users</h3>
      {users.length > 0 &&
        users.map((item, index) => (
          <li key={index}>
            <Link to={`/user/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      <br />
      <button onClick={handleClick}>Create</button>
    </div>
  );
};

export default User;
