import React from 'react';
import styles from './OrderSummary.scss';
import PropTypes from 'prop-types';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';
  
const OrderSummary = ({cost, options}) => (
  console.log('options', options),
  <h2 className={styles.component}>Total:<strong>
    {calculateTotal(formatPrice(cost),options )}
  </strong></h2>  
);

OrderSummary.propTypes = {
  options: PropTypes.object,
  cost: PropTypes.string,
};

export default OrderSummary;