import React from 'react';
import 'rsuite/dist/rsuite.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import NavBar from './Components/NavBar/NavBar';

import AdminSB from './Components/SideBar/AdminSB';
import ItemTable from './Pages/ItemTable';


function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/item" element={<ItemTable/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/AdminSB" element={<AdminSB />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
