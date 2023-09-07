import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import CreateDestination from '../pages/create-destination/CreateDestination';
import RegistrationForm from '../pages/registration-form/RegistrationForm';
import Login from '../pages/login/login';
import EditDestination from '../pages/edit-destination/EditDestination';
import Logout from '../components/logout/Logout';
// import DestinationDetail from './pages/DestinationDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create-destination" element={<CreateDestination/>} />
        <Route path="/register" element={<RegistrationForm/>} />
        <Route path="/edit-destination/:id" element={<EditDestination/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Logout />} />

        
        {/*<Route path="/destination/:id" element={<DestinationDetail/>} /> */}
      
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
