import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">My ablums</Link>
      </li>
      <li>
        <Link to="/search">Search</Link>
      </li>
    </ul>
  </nav>
);

export default Header;
