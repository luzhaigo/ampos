import React, { useReducer } from 'react';
import { connect } from 'react-redux';
import Drink from 'components/Drink';
import { addOrderItems } from 'actions';
import styles from './DrinksMenu.module.scss';

const drinksMenu = [
  { name: 'drink#1', price: '25', count: 0},
  { name: 'drink#2', price: '30', count: 0},
  { name: 'drink#3', price: '35', count: 0},
  { name: 'drink#4', price: '40', count: 0},
  { name: 'drink#5', price: '45', count: 0},
  { name: 'drink#6', price: '50', count: 0},
  { name: 'drink#7', price: '55', count: 0},
  { name: 'drink#8', price: '60', count: 0},
  { name: 'drink#9', price: '65', count: 0},
  { name: 'drink#10', price: '70', count: 0},
  { name: 'drink#11', price: '25', count: 0},
  { name: 'drink#12', price: '30', count: 0},
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'update': {
      return state.map((_drink, _idx) => {
        if (_idx === action.payload.updateIndex) {
          return { ..._drink, ...action.payload.data };
        }
        return _drink;
      });
    }
    default:
      return state;
  }
}

const DrinksMenu = ({ closeModal, addOrderItems }) => {
  const [drinks, dispatch] = useReducer(reducer, drinksMenu);

  return (
    <div className={styles.drinks_menu} onClick={e => e.stopPropagation()}>
        <h3 className={styles.title}>Drink List:</h3>
          <ul className={styles.drinks_wrapper}>
            {
              drinks.map((drink, index) => <Drink key={index} {...drink} setDrink={(action) => {
                action.payload.updateIndex = index;
                dispatch(action);
              }}/>)
            }
          </ul>
          <div className={styles.panel}>
            <button className={styles.action} onClick={closeModal}>Cancel</button>
            <button className={styles.action} onClick={() => {
              addOrderItems(drinks.filter(drink => drink.count > 0));
              closeModal();
            }}>Add</button>
          </div>
      </div>
  );
};

export default connect(null, { addOrderItems })(DrinksMenu);