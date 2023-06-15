import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

function Layout() {
  const divStyle = {
    background: '#f1f1f1',
    marginTop: '5em',
    height: '80vh',
    boxShadow: '0 4px 6px 1px rgba(0, 0, 0, 0.2)',
    position: 'relative',
  };
  return (
    <div style={divStyle}>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default Layout;
