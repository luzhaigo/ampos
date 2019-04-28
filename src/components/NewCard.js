import React, { useState, useEffect } from 'react';
import styles from 'components/NewCard.module.scss';
import errorImgSrc from 'assets/img_not_found.png';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function transformDate(date) {
  const matched = date.match(/\d+/g);
  const month = MONTHS[+matched[1]];
  return `${month} ${matched[2]}, ${matched[3]}:${matched[4]}`
}

const NewCard = ({ width, newObj }) => {
  const [imgSrc, setImgSrc] = useState(newObj.urlToImage || errorImgSrc);

  useEffect(() => {
    setImgSrc(newObj.urlToImage || errorImgSrc);
  }, [newObj.urlToImage]);

  return (
    <a className={styles.card} style={{width}} href={newObj.url}>
      <div className={styles.mobile_img}>
        <img src={imgSrc} alt={newObj.description} onError={() => {
          setImgSrc(errorImgSrc);
        }}/>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.title}>{newObj.title}</div>
        <img src={imgSrc} alt={newObj.description} onError={() => {
          setImgSrc(errorImgSrc);
        }}/>
        <div className={styles.content}>{newObj.content}</div>
        <div className={styles.date}>Updated: {transformDate(newObj.publishedAt)}</div>
      </div>
    </a>
  );
}

export default NewCard;