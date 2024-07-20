// Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Project Concern</h2>
      <nav>
        <ul>
          <li className="sidebar-item"><a href="/admin">Admin</a></li>
          <li className="sidebar-item"><a href="/customer">Customer</a></li>
          <li className="sidebar-item"><a href="/supplier">Supplier</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
  