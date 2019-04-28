import React from 'react';
import styles from 'components/NewCard.module.scss';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function transformDate(date) {
  const matched = date.match(/\d+/g);
  const month = MONTHS[+matched[1]];
  return `${month} ${matched[2]}, ${matched[3]}:${matched[4]}`
}

const NewCard = ({ width, newObj }) => {
  return (
    <div className={styles.card} style={{width}}>
      <div className={styles.mobile_img}>
        <img src={newObj.urlToImage} alt={newObj.description}/>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.title}>{newObj.title}</div>
        <img src={newObj.urlToImage} alt={newObj.description}/>
        <div className={styles.content}>{newObj.content}</div>
        <div className={styles.date}>Updated: {transformDate(newObj.publishedAt)}</div>
      </div>
    </div>
  );
}

export default NewCard;