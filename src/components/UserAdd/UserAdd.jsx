import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserAdd = () => {
  const [user, setUser] = useState({ id: '', name: '', birthday: '' });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axios.post('http://localhost:3000/users', { ...user });
      alert('Create user successfully!');
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='user-detail'>
      <h3>UserAdd</h3>
      <form>
        <label>Id</label>
        <input type='number' name='id' value={user.id} onChange={(e) => handleChange(e)} />
        <br />
        <label>Name</label>
        <input type='text' name='name' value={user.name} onChange={(e) => handleChange(e)} />
        <br />
        <label>Birthday</label>
        <input
          type='date'
          name='birthday'
          value={user.birthday}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default UserAdd;
