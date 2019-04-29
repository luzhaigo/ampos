import React from 'react';
import {connect} from 'react-redux';
import searchImg from 'assets/search.svg';
import styles from 'components/Search.module.scss';
import { queryNews, getNews } from 'actions';

const Search = ({ queryNews, getNews }) => {
  return (
    <div className={styles.search}>
      <label>
        <img src={searchImg} alt="search"/>
        <input placeholder="search" onKeyDown={(e) => {
          if (e.key === 'Enter') {
            queryNews(e.target.value);
            getNews();
          }
        }}/>
      </label>
    </div>
  );
};


export default connect(null, { queryNews, getNews })(Search);