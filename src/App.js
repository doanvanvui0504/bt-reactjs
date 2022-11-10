import './App.css';
import User from './components/User/User';
import { Routes, Route } from 'react-router-dom';
import UserDetail from './components/UserDetail/UserDetail';
import UserAdd from './components/UserAdd/UserAdd';

function App() {
  return (
    <Routes>
      <Route path='/' element={<User></User>} />
      <Route path='/user/add' element={<UserAdd></UserAdd>} />
      <Route path='/user/:id' element={<UserDetail></UserDetail>} />
    </Routes>
  );
}

export default App;
