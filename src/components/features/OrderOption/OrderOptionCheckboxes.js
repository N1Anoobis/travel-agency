import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
// import Icon from '../../common/Icon/Icon';
import {formatPrice } from '../../../utils/formatPrice';

const newValueSet = (currentValue, id, checked) => {
  if(checked){
    return [
      ...currentValue,
      id,
    ];
  } else {
    return currentValue.filter(value => value != id);
  }
};

const OrderOptionCheckboxes = ({values, currentValue, setOptionValue}) => (
  console.log(values),
  console.log(currentValue),

  <div className={styles.checkboxes}>
   
    {values.map(value => (
      <label 
        // className={currentValue == value.id?styles.iconActive:styles.icon} onClick={() => setOptionValue(value.id)}
        key={value.id} >
         
        <input type='checkbox' value={value.id} onChange={event => setOptionValue(newValueSet(currentValue, value.id, event.currentTarget.checked))}/>

        {value.name} {formatPrice(value.price)}
       
      </label>
    ))}
  </div>
);

OrderOptionCheckboxes.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.any,
};

export default OrderOptionCheckboxes;