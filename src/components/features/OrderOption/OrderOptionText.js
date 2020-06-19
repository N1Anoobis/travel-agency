import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

function OrderOptionText({currentValue, setOptionValue}) {
  return(
    <input className={styles.input} type='text' value={currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)} 
    /> 
  );
}

OrderOptionText.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;