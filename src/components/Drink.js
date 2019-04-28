import React from 'react';
import styles from './Drink.module.scss';

const Drink = ({ setDrink, ...rest }) => {
  
  return (
    <li className={styles.drink}>
      <div className={styles.name}>{rest.name}</div>
      <div className={styles.info}>
        <div>price: ${rest.price}</div>
        <input value={rest.count} type="text" pattern="\d*" onChange={(e) => {
          setDrink({
            type: 'update',
            payload: {
              data: {
                count: Number.isNaN(+e.target.value) ? '' : +e.target.value
              },
            }
          });
        }}/>
      </div>
      <textarea className={styles.note} onChange={(e) => {
        setDrink({
          type: 'update',
          payload: {
            data: {
              note: e.target.value
            }
          }
        });
      }}/>
    </li>
  );
};

export default Drink;