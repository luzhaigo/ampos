import React, { useState } from 'react';
import Nav from 'components/Nav';
import styles from 'components/Header.module.scss';
import menuImg from 'assets/menu.svg';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div id={styles.header}>
      <div id={styles.logo}>Logo</div>
      <div className={styles.title}>News</div>
      <button className={styles.menu} onClick={() => {
        setShowMenu(!showMenu);
      }}>
        <img src={menuImg} alt="menu"/>
      </button>
      <div className={styles.wrapper}><Nav/></div>
      <div className={styles.mobile}  style={{ 'display': showMenu ? 'flex' : 'none'}}><Nav/></div>
    </div>
  );
};

export default Header;