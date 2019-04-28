import React from 'react';
import styles from 'components/NewCard.module.scss';

const NewCard = ({ width, newObj }) => {
  return (
    <div className={styles.card} style={{width}}>
      <div className={styles.title}>{newObj.title}</div>
      <img src={newObj.urlToImage} alt={newObj.description}/>
      <div className={styles.content}>{newObj.content}</div>
      <div className={styles.date}>{newObj.publishedAt}</div>
    </div>
  );
}

export default NewCard;