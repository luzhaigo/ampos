import React from 'react';
import loadingImg from 'assets/loading.svg';
import styles from 'components/Loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.loading}><img src={loadingImg} alt="loading..."/></div>
  );
};

export default Loading;