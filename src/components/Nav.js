import React from 'react';
import { Link } from 'react-router-dom';
import styles from 'components/Nav.module.scss';
import Search from 'components/Search';

const Nav = () => {
  return (
    <nav className={styles.wrapper}>
      <ul>
        <li><Link className={styles.link} to="/news">News</Link></li>
        <li><Link className={styles.link} to="/regions">Regions</Link></li>
        <li><Link className={styles.link} to="/video">Video</Link></li>
        <li><Link className={styles.link} to="/tv">TV</Link></li>
        <li className={styles.search}>
          <Search/>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
