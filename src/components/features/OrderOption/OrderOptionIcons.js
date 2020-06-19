import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import Icon from '../../common/Icon/Icon';
import {formatPrice } from '../../../utils/formatPrice';

const OrderOptionIcons = ({values, required, currentValue, setOptionValue}) => (

  <div >
    {required ? '' : (
      <div 
        className={styles.icon} onClick={() => setOptionValue('')}  >
        <Icon name={'times-circle'}  />
      </div>
    )}
    {values.map(value => (
      <div 
        className={value.id == currentValue ? `${styles.icon} ${styles.iconActive}` : styles.icon}
        // className={currentValue == value.id?styles.iconActive:styles.icon} 
        onClick={() => setOptionValue(value.id)}  key={value.id} >
  
        <Icon name={value.icon} className={styles.icon} />
        {value.name} {formatPrice(value.price)}
        
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.any,
  required: PropTypes.bool,
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.any,
};

export default OrderOptionIcons;