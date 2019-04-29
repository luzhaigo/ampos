import React from 'react';
import {connect} from 'react-redux';
import styles from 'components/LoadMoreButton.module.scss';
import {getNews} from 'actions';


const LoadMoreButton = ({ getNews }) => {
  return <button className={styles.loadmore} onClick={() => {
    getNews();
  }}>Load More</button>;
}


export default connect(null, {getNews})(LoadMoreButton);