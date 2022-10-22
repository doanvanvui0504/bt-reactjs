import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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

const DetailEmployee = () => {
  const [employee, setEmployee] = useState({});

  const { id } = useParams();

  useEffect(() => {
    setEmployee(...employees.filter((item) => item.id === +id));
  }, [id]);

  return (
    <div>
      <h1>DetailEmployee</h1>
      {employee && (
        <div>
          <h4>Name: {employee.name}</h4>
          <h4>Age: {employee.age}</h4>
        </div>
      )}
    </div>
  );
};

export default DetailEmployee;
