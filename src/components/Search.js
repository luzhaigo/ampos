import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styles from 'components/Search.module.scss';
import { queryNews, getNews } from 'actions';

const Search = ({ queryNews, getNews, location }) => {
  return (
    <div className={styles.search}>
      <label>
        <img alt="" src=""/>
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