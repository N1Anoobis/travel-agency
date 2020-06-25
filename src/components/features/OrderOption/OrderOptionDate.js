import React from 'react';
import DatePicker from 'react-datepicker';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
class OrderOptionDate extends React.Component {
  state = {
    startDate: new Date(),
  };
 
  render() {
    const {currentValue, setOptionValue} = this.props;
    return (
      <DatePicker 
        className={styles.input}
        onChange={date => setOptionValue(date)}
        value={currentValue}
        selected={currentValue}
        placeholderText={'Click to select a date'}
        dateFormat="dd/MM/yyyy"
        minDate={new Date()}
      />
    );
  }
}

OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.any,
};

export default OrderOptionDate;