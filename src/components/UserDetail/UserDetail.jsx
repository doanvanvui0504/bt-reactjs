import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UserDetail = () => {
  const [user, setUser] = useState({ id: 0, name: '', birthday: '' });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:3000/users/${id}`);
        setUser(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    getUser();
  }, [id]);

  const handleIdChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/users/${id}`, user);
      alert('Update user successfully!');
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='user-detail'>
      <h3>UserDetail</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <form>
          <label>Id</label>
          <input type='number' name='id' value={user.id} onChange={(e) => handleIdChange(e)} />
          <br />
          <label>Name</label>
          <input type='text' name='name' value={user.name} onChange={(e) => handleIdChange(e)} />
          <br />
          <label>Birthday</label>
          <input
            type='date'
            name='birthday'
            value={user.birthday}
            onChange={(e) => handleIdChange(e)}
          />
          <br />
          <button onClick={handleSubmit}>Submit</button>
        </form>
      )}
    </div>
  );
};

export default UserDetail;
