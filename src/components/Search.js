import React from 'react';
import searchImg from 'assets/search.svg';
import styles from 'components/Search.module.scss';

const Search = () => {
  return (
    <div className={styles.search}>
      <label>
        <img src={searchImg} alt="search"/>
        <input placeholder="search"/>
      </label>
    </div>
  );
};

export default Search;