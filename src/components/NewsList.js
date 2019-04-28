import React, { useState, useCallback, useEffect, useRef } from 'react';
import {connect} from 'react-redux';
import styles from 'components/NewsList.module.scss';
import NewCard from 'components/NewCard';
import {getNews} from 'actions';

const NewsList = ({articles, getNews}) => {
  const [cardWidth, setCardWidth] = useState(undefined);
  const listRef = useRef(null);
  const measuredRef = useCallback(node => {
    if (node !== null) {
      listRef.current = node;
      const width = node.getBoundingClientRect().width;
      let cardWidth;
      if (window.innerWidth < 600) {
        cardWidth = undefined;
      } else {
        cardWidth = (width - 80) / 3;
      }
      setCardWidth(cardWidth);
    }
  }, []);
  useEffect(() => {
    if (!articles.length)
      getNews(1);
    const resizeFunc = () => {
      const width = listRef.current.getBoundingClientRect().width;
      let cardWidth;
      if (window.innerWidth < 600) {
        cardWidth = undefined;
      } else {
        cardWidth = (width - 80) / 3;
      }
      setCardWidth(cardWidth);
    };
    window.addEventListener('resize', resizeFunc);
    return () => window.removeEventListener('resize', resizeFunc);
  }, []); // eslint-disable-line
  
  return (
    <div className={styles.list} ref={measuredRef}>
      {
        articles.map((newObj, index) => <NewCard key={index} newObj={newObj} width={cardWidth}/>)
      }
    </div>
  );
}

const mapStateToProps = (state) => ({
  articles: state.news.articles,
});

export default connect(mapStateToProps, {getNews})(NewsList);