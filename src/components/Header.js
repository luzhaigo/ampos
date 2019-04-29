import React, { useState, useMemo } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Nav from 'components/Nav';
import styles from 'components/Header.module.scss';
import menuImg from 'assets/menu.svg';

const titleMap = {
  news: 'News',
  regions: 'Regions',
  video: 'Video',
  tv: 'TV',
}

const Header = ({ location }) => {
  const [showMenu, setShowMenu] = useState(false);
  const title = useMemo(() => titleMap[location.pathname.slice(1)], [location.pathname]);

  return (
    <div id={styles.header}>
      <Link to="/news" id={styles.logo}>Logo</Link>
      <div className={styles.title}>{title}</div>
      <button className={styles.menu} onClick={() => {
        setShowMenu(!showMenu);
      }}>
        <img src={menuImg} alt="menu"/>
      </button>
      <div className={styles.wrapper}><Nav/></div>
      <div className={styles.mobile}  style={{ 'display': showMenu ? 'flex' : 'none'}} onClick={() => {
        setShowMenu(false);
      }}><Nav/></div>
    </div>
  );
};

export default withRouter(Header);