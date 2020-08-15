import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => (
  <nav className={styles.nav}>
    <ul>
      <li>
        <NavLink to="/" activeClassName={styles.active} exact={true}>
          My ablums
        </NavLink>
      </li>
      <li>
        <NavLink to="/search" activeClassName={styles.active}>
          Search
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Header;
