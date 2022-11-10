import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      try {
        const res = await axios.get('http://localhost:3000/users');
        setUsers(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
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
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {users.map((item, index) => (
            <li key={index}>
              <Link to={`/user/${item.id}`}>{item.name}</Link>
            </li>
          ))}
          <br />
          <button onClick={handleClick}>Create</button>
        </div>
      )}
    </div>
  );
};

export default User;
