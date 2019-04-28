import React from 'react';
import Nav from 'components/Nav';
import styles from 'components/Header.module.scss';

const Header = () => {
  return (
    <div id={styles.header}>
      <div id={styles.logo}>Logo</div>
      <div className={styles.wrapper}><Nav/></div>
    </div>
  );
};

export default Header;