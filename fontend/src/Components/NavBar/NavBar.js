import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'rsuite';
import './NavBar.css'

function NavBar() {
  return (
    <div>
    <body className='NavBar'>
        <Nav className='navbar'>
        <Nav.Item>
          <Link to="/home">Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/item">Products</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/login">Login</Link>
        </Nav.Item>
        <Nav.Item>
          {/* <Link to="/Service">Service</Link> */}
        </Nav.Item>
      </Nav> 
      </body>
    </div>
  );
}

export default NavBar;
