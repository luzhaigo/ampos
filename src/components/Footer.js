import React from 'react';
import { Link } from 'react-router-dom';
import styles from 'components/Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul>
        <li><Link className={styles.link} to="/news">News</Link></li>
        <li><Link className={styles.link} to="/regions">Regions</Link></li>
        <li><Link className={styles.link} to="/video">Video</Link></li>
        <li><Link className={styles.link} to="/tv">TV</Link></li>
      </ul>
      <div>Copy right © AMPOS</div>
    </div>
  );
};

export default Footer;