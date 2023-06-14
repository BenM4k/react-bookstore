import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const links = [
    {
      name: 'home',
      path: '/',
    },
    {
      name: 'categories',
      path: 'categories',
    },
  ];
  return (
    <nav style={{
      background: 'white',
      display: 'flex',
      alignItems: 'center',
      padding: '1.5em 5em',
      gap: '1.5em',
    }}
    >
      <h1 style={{
        color: '#0e62e5',
        fontSize: '1.8em',
      }}
      >
        Bee&apos;s Bookstore
      </h1>
      <ul style={{
        display: 'flex',
        gap: '1em',
      }}
      >
        {links.map((link) => (
          <li
            key={link.name}
            style={{
              textDecoration: 'none',
              listStyleType: 'none',
            }}
          >
            <NavLink
              to={link.path}
              style={{
                textDecoration: 'none',
                textTransform: 'uppercase',
                fontSize: '.9em',
              }}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
