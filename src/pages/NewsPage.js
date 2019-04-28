import React from 'react';
import styles from 'pages/News.module.scss';
import LoadMoreButton from 'components/LoadMoreButton';
import NewsList from 'components/NewsList';

const NewsPage = () => {
  return (
    <div className={styles.news}>
      <NewsList/>
      <LoadMoreButton/>
    </div>
  );
};

export default NewsPage;