import React from 'react';
import { NavLink } from 'react-router-dom';
import Contents from './Contents.jsx';

function Navbar() {
  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      {' | '}
      <NavLink to="/issues">Issues List</NavLink>
      {' | '}
      <NavLink to="/report">Report</NavLink>
    </nav>
  );
}

export default function Page() {
  return (
    <div>
      <Navbar />
      <Contents />
    </div>
  );
}