import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const employees = [
  {
    id: 1,
    name: 'Hoa',
    age: 20,
  },
  {
    id: 2,
    name: 'Khánh',
    age: 25,
  },
  {
    id: 3,
    name: 'Tú',
    age: 22,
  },
];

const Employee = () => {
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
      <h1>Employee Page</h1>
      <h4>User: {state && state.user ? state.user.email : 'Null'}</h4>
      <h2>List Employee</h2>
      <ul>
        {employees.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <Link to={`/employee/${item.id}`}>Xem</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Employee;
