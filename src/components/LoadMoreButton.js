import React from 'react';
import {connect} from 'react-redux';
import styles from 'components/LoadMoreButton.module.scss';
import {getNews} from 'actions';


const LoadMoreButton = ({page, getNews}) => {
  return <button className={styles.loadmore} onClick={() => {
    getNews(page);
  }}>Load More</button>;
}

const mapStatetoProps = state => ({page: state.news.page});

export default connect(mapStatetoProps, {getNews})(LoadMoreButton);