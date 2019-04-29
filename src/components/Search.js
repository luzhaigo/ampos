import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import searchImg from 'assets/search.svg';
import styles from 'components/Search.module.scss';
import { queryNews, getNews } from 'actions';

const Search = ({ queryNews, getNews, location }) => {
  return (
    <div className={styles.search}>
      <label>
        <img src={searchImg} alt="search"/>
        <input placeholder="search" onKeyDown={(e) => {
          if (e.key === 'Enter' && location.pathname === '/news') {
            queryNews(e.target.value);
            getNews();
          }
        }}/>
      </label>
    </div>
  );
};


export default withRouter(connect(null, { queryNews, getNews })(Search));