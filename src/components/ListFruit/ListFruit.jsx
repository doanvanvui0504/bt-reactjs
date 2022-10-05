import React from 'react';

const fruits = ['Apple', 'Banana', 'Orange', 'Apricot', 'Black rowan', 'Cranberry'];

const ListFruit = () => {
  return (
    <div>
      <h3>List of Fruits</h3>
      <ul>
        {fruits.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListFruit;
