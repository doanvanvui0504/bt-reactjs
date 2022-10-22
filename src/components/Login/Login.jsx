import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const IUser = {
  email: 'admin@gmail.com',
  password: 'letmein',
};

const Login = () => {
  const [emailValue, setEmailValue] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  return (
    <div>
      <h3>Login</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const user = { email: emailValue, password };
          if (IUser.email === user.email && IUser.password === user.password) {
            navigate('/employee', { state: { user } });
          } else {
            alert('Đăng nhập thất bại, hãy thử lại!!!');
          }
        }}
      >
        <div style={{ marginBottom: 10 }}>
          <label style={{ display: 'block' }}>Email</label>
          <input
            type='email'
            placeholder='Enter your email'
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label style={{ display: 'block' }}>Password</label>
          <input
            type='password'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
