import React from 'react';
import styles from './OrderSummary.scss';
import PropTypes from 'prop-types';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';
import moment from 'moment';

const OrderSummary = ({cost, options, days}) => (
  <>
  <h2 className={styles.component}>Total: <strong> $ {calculateTotal(formatPrice(cost),options )}
  </strong> 
  </h2>  
  {(options['start-date'] != '') ? `Your amazing adventure will end on ${moment(moment(moment(options['start-date']).format()).add(days, 'days').toDate().toString()).format('LL')}` :''}
  </>
);

OrderSummary.propTypes = {
  options: PropTypes.object,
  cost: PropTypes.string,
  days: PropTypes.number,
};

export default OrderSummary;