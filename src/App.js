import './App.css';
import User from './components/User/User';
import { Routes, Route } from 'react-router-dom';
import UserDetail from './components/UserDetail/UserDetail';
import UserAdd from './components/UserAdd/UserAdd';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    // <Routes>
    //   <Route path='/' element={<User></User>} />
    //   <Route path='/user/add' element={<UserAdd></UserAdd>} />
    //   <Route path='/user/:id' element={<UserDetail></UserDetail>} />
    // </Routes>
    <TodoList></TodoList>
  );
}

export default App;
