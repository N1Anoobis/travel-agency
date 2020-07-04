import React, { Component } from 'react';
import styles from './DaysToSummer.scss';
import moment from 'moment';

class DaysToSummer extends Component {

  constructor(props) {
    super(props);
  }

  getCountdownTime() {
    const currentYear = moment().year();
    let eventdate = moment(`${currentYear}-06-22`);
    const todaysdate = moment();

    if (todaysdate > (eventdate)) {
      eventdate = moment(`${currentYear + 1}-06-22`);
    }

    if (todaysdate <= moment(`${currentYear}-09-24`)
      &&
      todaysdate >= moment(`${currentYear}-06-21`)) {
      return null;
    } else {
      return eventdate.diff(todaysdate, 'days');
    }
  }

  render() {
    const daysNumber = this.getCountdownTime();
    return (
      <>
        {daysNumber ?
          <h3 className={styles.countDown}>{daysNumber}
            <span className={styles.count}>
              {daysNumber == 1 ? ' Day to summer' : ' Days to summer'}
            </span>
          </h3> : null}
      </>
    );
  }
}

export default DaysToSummer;