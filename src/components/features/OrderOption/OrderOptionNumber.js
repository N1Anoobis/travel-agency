import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

function OrderOptionNumber({currentValue, limits,setOptionValue,  price}) {
  console.log(typeof currentValue);
  return(
    <div className={styles.number}>
      <input className={styles.inputSmall} type='number' value={currentValue}
        onChange={event => setOptionValue(event.currentTarget.value)} min={limits.min} max={limits.max}
      /> {price}
      
    </div>
  );
}

OrderOptionNumber.propTypes = {
  limits: PropTypes.object,
  price: PropTypes.string,
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
};

export default OrderOptionNumber;