import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Employee from '../components/Employee/Employee';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import DetailEmployee from '../components/DetailEmployee/DetailEmployee';

const IRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/employee' element={<Employee />} />
        <Route path='/employee/:id' element={<DetailEmployee />} />
      </Routes>
    </BrowserRouter>
  );
};

export default IRoutes;
